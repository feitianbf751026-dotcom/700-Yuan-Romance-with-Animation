# Branch C 代码清理与加固总结

## 修改文件清单

1. `services/stateManager/guilt.ts` - 删除 undefined 防御代码，优化分支判断
2. `services/pathMatcher/branch1C_earned.ts` - 删除 undefined 防御代码
3. `services/stateManager/updater.ts` - 补充缺失的 guilt_level 更新调用

## 关键 Diff

### 1. services/stateManager/guilt.ts

**删除 undefined 防御代码**：
```diff
export function applyGuiltLevelChange(state: PlayerState, choiceId: string): void {
- // 确保 guilt_level 已初始化（防御性检查，但类型已保证非 optional）
- if (state.guilt_level === undefined) {
-   state.guilt_level = 0;
- }
-
  // 根据 BRANCH_C_GUILT_LEVEL_DESIGN.md 的规则更新
  // 注意：guilt_level 类型已保证非 optional，无需 undefined 检查
  switch (choiceId) {
```

**优化分支判断（更稳健）**：
```diff
export function isBranchCState(state: PlayerState): boolean {
- // 方案：使用 choiceId 前缀判断（更稳健，不依赖 path[0]）
- // 如果 path 为空或第一个选择不是 p3，但后续有 1c_ 选择，也认为是 Branch C
- if (state.path.length > 0 && state.path[0] === 'p3') {
-   return true;
- }
  // 检查 path 中是否有任何 1c_ 选择（更稳健，不依赖 path[0] 固定为 p3）
  return state.path.some(id => id.startsWith('1c_'));
}
```

**为什么**：
- A1) `guilt_level` 类型已改为非 optional，所有初始化路径都设置了默认值 0，无需防御代码
- B1) 使用 `path.some(id => id.startsWith('1c_'))` 判断更稳健，不依赖 `path[0] === 'p3'` 这种脆弱结构

### 2. services/pathMatcher/branch1C_earned.ts

**删除 undefined 防御代码**：
```diff
  // 检查 guilt_level（类型已保证非 optional）
  if (guiltLevel) {
-   const guilt = state.guilt_level ?? 0;
+   const guilt = state.guilt_level;
```

**为什么**：
- A1) `guilt_level` 类型已保证非 optional，无需 `?? 0` 防御代码

### 3. services/stateManager/updater.ts

**补充缺失的 guilt_level 更新调用**：
```diff
  // 1C分支第4-9层新增选择的状态更新
  if (normalizedId === "1c_4c_a") {
    state.courage += 2;
    state.honesty += 2;
    state.affection += 1;
+   applyGuiltLevelChange(state, normalizedId);
  } else if (normalizedId === "1c_4c_b") {
    state.courage -= 1;
    state.affection -= 1;
+   applyGuiltLevelChange(state, normalizedId);
  } else if (normalizedId === "1c_4c_c") {
    state.courage += 1;
    state.affection += 1;
+   applyGuiltLevelChange(state, normalizedId);
  } else if (normalizedId === "1c_4d_a") {
    state.courage += 2;
    state.affection += 2;
+   applyGuiltLevelChange(state, normalizedId);
  }
```

**为什么**：
- 确保所有需要更新 guilt_level 的 1C 选择都调用了统一的 `applyGuiltLevelChange` 函数（B3 代码去重）

## 已完成的加固点（无需修改）

### A1) guilt_level 设为非 optional
- ✅ `services/types.ts` 中 `guilt_level: number`（非 optional）
- ✅ `services/llmService.ts` 中 `startNewGame()` 初始化时设置 `guilt_level: 0`
- ✅ 所有防御代码已删除

### A2) choice alias 显式重定向
- ✅ `services/stateManager/guilt.ts` 中定义了 `BRANCH_C_CHOICE_ALIASES` 和 `normalizeAndAlias1CChoice`
- ✅ `services/llmService.ts` 的 `nextTurn` 中应用 alias
- ✅ `services/stateManager/updater.ts` 中应用 alias
- ✅ `services/pathMatcher/branch1C.ts` 的 `match1CBranchStrict` 中应用 alias
- ✅ `services/pathMatcher/branch1C_earned.ts` 的 `checkEarnedChoiceRequires` 中应用 alias

### B1) earned choices 检查的分支判断更稳健
- ✅ 使用 `isBranchCChoice(choiceId)`（基于 `choiceId.startsWith('1c_')`）
- ✅ `isBranchCState` 使用 `path.some(id => id.startsWith('1c_'))`（不依赖 `path[0] === 'p3'`）

### B2) guilt_level 断言/校验
- ✅ `services/stateManager/guilt.ts` 中已有 `assertGuiltLevel` 函数
- ✅ `applyGuiltLevelChange` 中调用 `assertGuiltLevel(state.guilt_level, choiceId)`

### B3) 代码去重
- ✅ 所有 guilt 规则集中在 `services/stateManager/guilt.ts` 的 `applyGuiltLevelChange`
- ✅ `services/llmService.ts` 和 `services/stateManager/updater.ts` 都调用同一个函数

## 回归测试要点

### 1. 旧 choiceId alias 验证
- **测试**: 使用已合并的 choiceId（如 `1c_1b`, `1c_1c`, `1c_4`, `1c_3b` 等）
- **预期**: 应被 alias 到对应的新 id（如 `1c_1b` → `1c_1`），并进入预期剧情
- **验证点**: 检查 `normalizeAndAlias1CChoice` 是否正确映射

### 2. earned choice 触发/不触发
- **测试路径**: 
  - `1c_5c_a`（guilt_level < 2）应被重定向到 `1c_5c_b`
  - `1c_5c_a`（guilt_level >= 2）应允许选择
- **预期**: earned choice 检查正确工作，fallback 生效
- **验证点**: `checkEarnedChoiceRequires` 返回正确的 `allowed` 和 `fallback`

### 3. guilt_level 更新与 clamp
- **测试路径**: 
  - `1c_1`（+1）→ `1c_2`（-1）→ `1c_4c_a`（-1）→ `1c_7b_a`（设为 1）→ `1c_7g_a`（设为 0）
- **预期**: guilt_level 变化符合设计文档，值始终在 0..3 范围内
- **验证点**: 
  - `applyGuiltLevelChange` 正确更新值
  - `assertGuiltLevel` 在值超出范围时抛出错误

### 4. 分支判断不依赖 path[0]
- **测试**: 
  - path 为空但后续选择 `1c_1` 时，`isBranchCState` 应返回 true
  - path[0] 不是 'p3' 但 path 中有 `1c_` 选择时，应正确识别为 Branch C
- **预期**: 使用 `path.some(id => id.startsWith('1c_'))` 判断，不依赖 `path[0] === 'p3'`
- **验证点**: `isBranchCState` 和 `isBranchCChoice` 正确工作

### 5. guilt_level 非 optional 验证
- **测试**: 所有 PlayerState 创建路径（`startNewGame`, 状态恢复等）
- **预期**: 所有初始化都设置 `guilt_level: 0`，无 undefined 情况
- **验证点**: TypeScript 编译通过，运行时无 undefined 错误

### 6. 代码去重验证
- **测试**: 修改 `services/stateManager/guilt.ts` 中的 guilt 规则
- **预期**: `llmService.ts` 和 `updater.ts` 都使用更新后的规则（无需两处修改）
- **验证点**: 两个文件都调用 `applyGuiltLevelChange`，规则集中管理

## 风险缓解

1. **类型安全**: `guilt_level` 非 optional 确保编译时检查，避免运行时 undefined 错误
2. **稳定性**: choice alias 确保旧存档/旧按钮 id 稳定进入预期剧情，不产生"有时 strict 有时 legacy"的幽灵行为
3. **可维护性**: 代码去重后，guilt 规则只需在一处维护，降低漏改风险
4. **健壮性**: 分支判断不依赖 `path[0] === 'p3'`，更稳健，适应未来可能的路径结构变化


