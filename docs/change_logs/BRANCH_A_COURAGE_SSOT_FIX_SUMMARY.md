# Branch A courage_level SSOT 修复总结

## 修改文件清单

1. **`services/llmService.ts`** - 删除 Branch A 选择中对 `courage` 的直接写入，统一在 `nextTurn` 中调用 `applyCourageLevelChange`
2. **`services/stateManager/updater.ts`** - 删除 Branch A 选择中对 `courage` 的直接写入，添加 Branch A choice alias 支持（虽然当前未被使用，但为保持一致性）

## 关键 Diff

### 1. 统一 courage_level 更新位置（SSOT）

**文件**: `services/llmService.ts`

**改动**:
- 在 `nextTurn` 中，在 `updateState` 之后统一调用 `applyCourageLevelChange`（只针对 Branch A）
- 删除所有 Branch A 选择中对 `this.state.courage` 的直接修改
- 保留 `courage` 字段（用于非 Branch A 分支和计算 `confessionValue`）

**设计目的**: 确保 `courage_level` 只有一个真源（SSOT），避免双算问题。

**关键代码片段**:
```typescript
// services/llmService.ts - nextTurn 方法
async nextTurn(history: any[], choiceId: string): Promise<SceneData> {
  // Branch A: 应用 choice alias（合并后的重定向）
  if (isBranchAChoice(choiceId)) {
    choiceId = normalizeAndAlias1AChoice(choiceId);
  }

  // 检查 earned choices（Branch A）
  if (isBranchAChoice(choiceId)) {
    const checkResult = checkEarnedChoiceRequires1A(choiceId, this.state as any);
    if (!checkResult.allowed && checkResult.fallback) {
      choiceId = checkResult.fallback;
    }
  }

  // 记录选择路径
  this.state.path.push(choiceId);
  this.state.depth++;

  // 根据选择更新状态
  this.updateState(choiceId);

  // Branch A: 更新 courage_level（SSOT - 必须在 alias 和 earned-choice fallback 之后）
  if (isBranchAChoice(choiceId)) {
    applyCourageLevelChange(this.state, choiceId);
  }

  // 根据路径决定下一个场景（树状匹配）
  return this.getNextSceneByPath();
}
```

### 2. 删除 Branch A 选择中对 `courage` 的直接写入

**文件**: `services/llmService.ts` - `updateState` 方法

**改动**:
- 删除所有 `1a_*` 选择中对 `this.state.courage` 的修改（如 `this.state.courage -= 1`, `this.state.courage += 2` 等）
- 删除所有 `1a_*` 选择中对 `applyCourageLevelChange` 的调用（已移至 `nextTurn` 统一处理）
- 保留其他状态更新（如 `affection`, `honesty`, `specialEvents` 等）

**设计目的**: 避免双算问题，确保 `courage_level` 只在一个地方更新。

**关键代码片段**:
```typescript
// services/llmService.ts - updateState 方法（Branch A 部分）
// 1A分支后续选择（已合并的 choiceId 会在 nextTurn 中被 alias 归一化）
// 注意：courage_level 的更新已移至 nextTurn 中统一处理（SSOT），这里不再直接修改
if (choiceId === "1a_1") {
  // 试图彻底忘记 - 降低好感度（courage_level 在 nextTurn 中更新）
  this.state.affection -= 2;
  // 删除了: this.state.courage -= 1;
  // 删除了: applyCourageLevelChange(this.state, choiceId);
} else if (choiceId === "1a_1c") {
  // 决定改变（courage_level 在 nextTurn 中更新）
  this.state.specialEvents.push('1a_try_change');
  // 删除了: this.state.courage += 2;
  // 删除了: applyCourageLevelChange(this.state, choiceId);
}
// ... 其他 1A 选择类似处理
```

## 删除的"直接写勇气"旧逻辑

### 删除的代码（Branch A 选择）
1. **`this.state.courage -= 1`** (1a_1, 1a_2, 1a_3b, 1a_5, 1a_6b, 1a_9) - 共 7 处
2. **`this.state.courage += 1`** (1a_3, 1a_8) - 共 2 处
3. **`this.state.courage += 2`** (1a_1c, 1a_2b, 1a_6, 1a_6a, 1a_7c, 1a_8a, 1a_9a) - 共 7 处
4. **`this.state.courage += 3`** (1a_3a, 1a_4, 1a_6c, 1a_7a) - 共 4 处
5. **`this.state.courage -= 2`** (1a_2a, 1a_9) - 共 2 处
6. **`this.state.courage -= 3`** (1a_7d, 1a_9b) - 共 2 处
7. **`applyCourageLevelChange(this.state, choiceId)`** - 共 20 处（已移至 `nextTurn` 统一处理）

**总计**: 删除 24 处对 `courage` 的直接写入，删除 20 处 `applyCourageLevelChange` 调用（移至 `nextTurn`）

### 为什么不会影响其他分支

1. **Branch B/C 不受影响**:
   - `applyCourageLevelChange` 只在 `isBranchAChoice(choiceId)` 为 true 时调用
   - Branch B/C 的选择（如 `1b_*`, `1c_*`）不会触发 `applyCourageLevelChange`
   - Branch B/C 的选择仍然正常更新 `courage` 字段（用于计算 `confessionValue` 等）

2. **`courage` 字段保留**:
   - `courage` 字段仍然保留在 `PlayerState` 中
   - 用于非 Branch A 分支的状态更新
   - 用于计算 `confessionValue`（所有分支）

3. **`courage_level` 只用于 Branch A**:
   - `courage_level` 只在 Branch A 选择时更新
   - 其他分支不会修改 `courage_level`

## 调用顺序验证

**正确顺序**:
1. 应用 choice alias（`normalizeAndAlias1AChoice`）
2. 检查 earned choices（`checkEarnedChoiceRequires1A`），可能重定向到 fallback
3. 记录选择路径（`push path`, `depth++`）
4. 更新状态（`updateState`）- 不包含 `courage_level` 更新
5. **更新 courage_level（`applyCourageLevelChange`）- SSOT**
6. 决定下一个场景（`getNextSceneByPath`）

**关键点**: `applyCourageLevelChange` 在 alias 和 earned-choice fallback 之后调用，确保使用的是最终的 `choiceId`。

## 回归测试清单

### 1. 不会双算：同一 choice 只会改变一次 courage_level
- **测试路径**: `p1` → `1a_1` → `1a_2` → `1a_3b`
- **预期**: 
  - `courage_level` 只通过 `applyCourageLevelChange` 更新一次（每次选择）
  - 不会出现"先改 courage，再改 courage_level"的双算
- **验证点**: 
  - `courage_level` 值正确（-1, -1, -1，最终为 0）
  - `courage` 字段不再被修改（Branch A 选择）

### 2. fallback 场景下：只按 fallback choice 计算 courage_level
- **测试路径**: `p1` → `1a_1` → `1a_2` → `1a_3b` → `1a_5` → `1a_7a`（尝试选择，但勇气不足）
- **预期**: 
  - `1a_7a` 需要 `courage_level >= 2`，条件不满足
  - 自动重定向到 `1a_7b`（fallback）
  - `courage_level` 只按 `1a_7b` 计算（不按 `1a_7a` 计算）
- **验证点**: 
  - `courage_level` < 2
  - `choiceId` 被重定向到 `1a_7b`
  - `applyCourageLevelChange` 使用 `1a_7b` 作为参数（不是 `1a_7a`）

### 3. alias choice 下：按 alias 后 choice 计算 courage_level
- **测试路径**: `p1` → `1a_1b`（已合并的 choiceId，alias 到 `1a_1`）
- **预期**: 
  - `1a_1b` 被 alias 到 `1a_1`
  - `courage_level` 只按 `1a_1` 计算（不按 `1a_1b` 计算）
- **验证点**: 
  - `choiceId` 被 alias 到 `1a_1`
  - `applyCourageLevelChange` 使用 `1a_1` 作为参数（不是 `1a_1b`）

### 4. Branch B 不受影响
- **测试路径**: `p2` → `1b_1` → `1b_2` → `1b_3`
- **预期**: 
  - `courage_level` 保持为 0（不更新）
  - `courage` 字段正常更新（用于计算 `confessionValue` 等）
- **验证点**: 
  - `courage_level` = 0（不变）
  - `courage` 字段正常更新
  - 无 `applyCourageLevelChange` 调用

### 5. Branch C 不受影响
- **测试路径**: `p3` → `1c_1` → `1c_2` → `1c_3`
- **预期**: 
  - `courage_level` 保持为 0（不更新）
  - `guilt_level` 正常更新（Branch C 的状态变量）
  - `courage` 字段正常更新（用于计算 `confessionValue` 等）
- **验证点**: 
  - `courage_level` = 0（不变）
  - `guilt_level` 正常更新
  - `courage` 字段正常更新
  - 无 `applyCourageLevelChange` 调用

### 6. 调用顺序正确：alias → fallback → courage_level 更新
- **测试路径**: `p1` → `1a_1b`（alias 到 `1a_1`）→ `1a_2` → `1a_3b` → `1a_5` → `1a_7a`（fallback 到 `1a_7b`）
- **预期**: 
  - `1a_1b` 先被 alias 到 `1a_1`，然后 `courage_level` 按 `1a_1` 更新
  - `1a_7a` 先被 fallback 到 `1a_7b`，然后 `courage_level` 按 `1a_7b` 更新
- **验证点**: 
  - alias 在 `applyCourageLevelChange` 之前完成
  - fallback 在 `applyCourageLevelChange` 之前完成
  - `applyCourageLevelChange` 使用最终的 `choiceId`

### 3. 修复 updater.ts 中的 Branch A 选择（保持一致性）

**文件**: `services/stateManager/updater.ts`

**改动**:
- 添加 Branch A choice alias 支持（`normalizeAndAlias1AChoice`）
- 删除所有 `1a_*` 选择中对 `state.courage` 的修改
- 添加注释说明 `courage_level` 应在调用后单独处理

**设计目的**: 虽然 `updater.ts` 当前未被 `llmService.ts` 使用，但为保持代码一致性，也修复了其中的 Branch A 选择。

**关键代码片段**:
```typescript
// services/stateManager/updater.ts
export function updatePlayerState(state: PlayerState, choiceId: string): void {
  let normalizedId = normalizeChoiceId(choiceId);
  
  // Branch A: 应用 choice alias（合并后的重定向）
  if (isBranchAChoice(normalizedId)) {
    normalizedId = normalizeAndAlias1AChoice(normalizedId);
  }
  
  // 1A分支后续选择
  // 注意：courage_level 的更新应在调用此函数后单独处理（SSOT），这里不再直接修改 courage
  if (normalizedId === "1a_1") {
    state.affection -= 2;
    // 删除了: state.courage -= 1;
  }
  // ... 其他 1A 选择类似处理
}
```

## 统计

- **修改文件数**: 2
- **删除的 `courage` 写入（llmService.ts）**: 24 处（Branch A 选择）
- **删除的 `courage` 写入（updater.ts）**: 24 处（Branch A 选择，保持一致性）
- **删除的 `applyCourageLevelChange` 调用**: 20 处（移至 `nextTurn` 统一处理）
- **新增的 `applyCourageLevelChange` 调用**: 1 处（在 `nextTurn` 中统一处理）

## 设计目的总结

1. **SSOT（Single Source of Truth）**: `courage_level` 的所有更新都通过 `applyCourageLevelChange` 完成，避免双算问题
2. **调用顺序正确**: 在 alias 和 earned-choice fallback 之后调用，确保使用最终的 `choiceId`
3. **不影响其他分支**: Branch B/C 不受影响，`courage` 字段保留用于其他用途

## 关键 Diff 详细说明

### 1. services/llmService.ts - nextTurn 方法

```diff
  async nextTurn(history: any[], choiceId: string): Promise<SceneData> {
    // Branch A: 应用 choice alias（合并后的重定向）
    if (isBranchAChoice(choiceId)) {
      choiceId = normalizeAndAlias1AChoice(choiceId);
    }

    // 检查 earned choices（Branch A）
    if (isBranchAChoice(choiceId)) {
      const checkResult = checkEarnedChoiceRequires1A(choiceId, this.state as any);
      if (!checkResult.allowed && checkResult.fallback) {
        choiceId = checkResult.fallback;
      }
    }

    // 记录选择路径
    this.state.path.push(choiceId);
    this.state.depth++;

    // 根据选择更新状态
    this.updateState(choiceId);

+   // Branch A: 更新 courage_level（SSOT - 必须在 alias 和 earned-choice fallback 之后）
+   if (isBranchAChoice(choiceId)) {
+     applyCourageLevelChange(this.state, choiceId);
+   }

    // 根据路径决定下一个场景（树状匹配）
    return this.getNextSceneByPath();
  }
```

**说明**: 在 `updateState` 之后统一调用 `applyCourageLevelChange`，确保使用最终的 `choiceId`（经过 alias 和 fallback 处理）。

### 2. services/llmService.ts - updateState 方法（Branch A 部分）

```diff
  // 1A分支后续选择（已合并的 choiceId 会在 nextTurn 中被 alias 归一化）
+ // 注意：courage_level 的更新已移至 nextTurn 中统一处理（SSOT），这里不再直接修改
  if (choiceId === "1a_1") {
-   // 试图彻底忘记 - 降低好感度和勇气
    this.state.affection -= 2;
-   this.state.courage -= 1;
-   applyCourageLevelChange(this.state, choiceId);
+   // 删除了: this.state.courage -= 1;
+   // 删除了: applyCourageLevelChange(this.state, choiceId);
  } else if (choiceId === "1a_1c") {
-   // 决定改变 - 增加勇气
-   this.state.courage += 2;
    this.state.specialEvents.push('1a_try_change');
+   // 删除了: this.state.courage += 2;
+   // 删除了: applyCourageLevelChange(this.state, choiceId);
  } else if (choiceId === "1a_2") {
-   this.state.courage -= 1;
    this.state.affection -= 1;
    this.state.specialEvents.push('1a_deep_work');
-   applyCourageLevelChange(this.state, choiceId);
+   // 删除了: this.state.courage -= 1;
+   // 删除了: applyCourageLevelChange(this.state, choiceId);
  }
  // ... 其他 1A 选择类似处理（共 24 处删除）
```

**说明**: 删除所有 Branch A 选择中对 `courage` 的直接写入和 `applyCourageLevelChange` 调用，统一在 `nextTurn` 中处理。

### 3. services/stateManager/updater.ts - updatePlayerState 方法

```diff
 export function updatePlayerState(state: PlayerState, choiceId: string): void {
   let normalizedId = normalizeChoiceId(choiceId);
   
+  // Branch A: 应用 choice alias（合并后的重定向）
+  if (isBranchAChoice(normalizedId)) {
+    normalizedId = normalizeAndAlias1AChoice(normalizedId);
+  }
+  
   // Branch C: 应用 choice alias（合并后的重定向）
   if (isBranchCChoice(normalizedId)) {
     normalizedId = normalizeAndAlias1CChoice(normalizedId);
   }

   // 1A分支后续选择
+  // 注意：courage_level 的更新应在调用此函数后单独处理（SSOT），这里不再直接修改 courage
   if (normalizedId === "1a_1") {
-   // 试图彻底忘记 - 降低好感度和勇气
    state.affection -= 2;
-   state.courage -= 1;
+   // 删除了: state.courage -= 1;
   }
  // ... 其他 1A 选择类似处理（共 24 处删除）
```

**说明**: 虽然 `updater.ts` 当前未被使用，但为保持代码一致性，也删除了所有 Branch A 选择中对 `courage` 的直接写入，并添加了 Branch A choice alias 支持。

