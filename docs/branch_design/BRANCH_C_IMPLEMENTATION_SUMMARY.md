# Branch C 三步改进实现总结

## 修改文件清单

1. `services/pathMatcher/branch1C.ts` - 更新 strict matcher 映射（合并假分支）
2. `services/types.ts` - 添加 `guilt_level` 字段到 `PlayerState`
3. `services/stateManager/updater.ts` - 添加 `guilt_level` 更新逻辑
4. `services/pathMatcher/branch1C_earned.ts` - 新建：earned choices 规则和检查函数
5. `services/llmService.ts` - 集成 earned choices 检查，更新 PlayerState 接口，使用 pathMatcher

## 关键 Diff

### 1. services/pathMatcher/branch1C.ts

**删除的重复映射**：
```diff
  // 第2层
  if (depth === 2) {
    if (lastChoice === '1c_1') return Scenes.SCENE_1C_GUILT;
-   if (lastChoice === '1c_1b') return Scenes.SCENE_1C_GUILT;
-   if (lastChoice === '1c_1c') return Scenes.SCENE_1C_GUILT;
  }

  // 第4层
  if (depth === 4) {
    if (lastChoice === '1c_2a') return Scenes.SCENE_1C_MEETING;
    if (lastChoice === '1c_2b') return Scenes.SCENE_1C_4A_GUILT_OBSERVE;
    if (lastChoice === '1c_3a') return Scenes.SCENE_1B_APOLOGY;
-   if (lastChoice === '1c_3b') return Scenes.SCENE_1C_4A_GUILT_OBSERVE;
-   if (lastChoice === '1c_4') return Scenes.SCENE_1C_MEETING;
-   if (lastChoice === '1c_5') return Scenes.SCENE_1C_4A_GUILT_OBSERVE;
    if (lastChoice === '1c_4c_a') return Scenes.SCENE_1C_4D_SEEK_FORGIVE;
    if (lastChoice === '1c_4c_b') return Scenes.SCENE_1C_4E_ACCEPTANCE;
    if (lastChoice === '1c_4c_c') return Scenes.SCENE_1C_4C_GUILT_DEEPEN;
    if (lastChoice === '1c_4d_a') return Scenes.SCENE_1C_5A_FIRST_MEETING;
    if (lastChoice === '1c_4d_b') return Scenes.SCENE_1C_5B_SLOW_APPROACH;
-   if (lastChoice === '1c_4e_a') return Scenes.SCENE_1C_5A_FIRST_MEETING;
-   if (lastChoice === '1c_4e_b') return Scenes.SCENE_1C_4C_GUILT_DEEPEN;
  }

  // 第5层
  if (depth === 5) {
    if (lastChoice === '1c_4c') return Scenes.SCENE_1C_5A_FIRST_MEETING;
    if (lastChoice === '1c_4d') return Scenes.SCENE_1C_4B_FIRST_MESSAGE;
    if (lastChoice === '1c_5a') return Scenes.SCENE_1C_6A_DEEP_TALK;
    if (lastChoice === '1c_5b') return Scenes.SCENE_1C_FRIENDSHIP;
    if (lastChoice === '1c_5b_a') return Scenes.SCENE_1C_5B_SLOW_APPROACH;
-   if (lastChoice === '1c_5b_b') return Scenes.SCENE_1C_5C_BARRIER;
    if (lastChoice === '1c_5c_a') return Scenes.SCENE_1C_5D_BREAKTHROUGH;
    if (lastChoice === '1c_5c_b') return Scenes.SCENE_1C_5C_BARRIER;
    if (lastChoice === '1c_5d_a') return Scenes.SCENE_1C_6A_DEEP_TALK;
    if (lastChoice === '1c_5d_b') return Scenes.SCENE_1C_FRIENDSHIP;
    if (lastChoice === '1c_4f_a') return Scenes.SCENE_1C_5E_GROWING_CLOSER;
-   if (lastChoice === '1c_5e_a') return Scenes.SCENE_1C_6A_DEEP_TALK;
-   if (lastChoice === '1c_5e_b') return Scenes.SCENE_1C_FRIENDSHIP;
  }

  // 第6层
  if (depth === 6) {
    if (lastChoice === '1c_6a') return Scenes.SCENE_1C_7A_RELATIONSHIP_GROW;
    if (lastChoice === '1c_6b') return Scenes.SCENE_1C_7A_RELATIONSHIP_GROW;
    if (lastChoice === '1c_6b_a') return Scenes.SCENE_1C_6B_TRUST_TEST;
-   if (lastChoice === '1c_6b_b') return Scenes.SCENE_1C_6C_UNDERSTANDING;
    if (lastChoice === '1c_6c_a') return Scenes.SCENE_1C_6D_DECISION;
    if (lastChoice === '1c_6c_b') return Scenes.SCENE_1C_6C_UNDERSTANDING;
-   if (lastChoice === '1c_6d_a') return Scenes.SCENE_1C_7A_RELATIONSHIP_GROW;
-   if (lastChoice === '1c_6d_b') return Scenes.SCENE_1C_7A_RELATIONSHIP_GROW;
    if (lastChoice === '1c_6e_a') return Scenes.SCENE_1C_6E_EMOTIONAL_BOND;
-   if (lastChoice === '1c_6e_b') return Scenes.SCENE_1C_7A_RELATIONSHIP_GROW;
  }

  // 第7层
  if (depth === 7) {
    if (lastChoice === '1c_7a') return Scenes.SCENE_1C_8A_FINAL_CHOICE;
    if (lastChoice === '1c_7b') return Scenes.SCENE_1C_8A_FINAL_CHOICE;
    if (lastChoice === '1c_7b_a') return Scenes.SCENE_1C_7B_CONFESSION_MOMENT;
    if (lastChoice === '1c_7b_b') return Scenes.SCENE_1C_7C_FRIENDSHIP_CONFIRM;
    if (lastChoice === '1c_7b_c') return Scenes.SCENE_1C_7D_DISTANCE_KEEP;
-   if (lastChoice === '1c_7c_a') return Scenes.SCENE_1C_8A_FINAL_CHOICE;
-   if (lastChoice === '1c_7c_b') return Scenes.SCENE_1C_7C_FRIENDSHIP_CONFIRM;
-   if (lastChoice === '1c_7d_a') return Scenes.SCENE_1C_8A_FINAL_CHOICE;
-   if (lastChoice === '1c_7d_b') return Scenes.SCENE_1C_7D_DISTANCE_KEEP;
-   if (lastChoice === '1c_7e_a') return Scenes.SCENE_1C_8A_FINAL_CHOICE;
    if (lastChoice === '1c_7e_b') return Scenes.SCENE_1C_7E_COMPLICATED_FEEL;
    if (lastChoice === '1c_7g_a') return Scenes.SCENE_1C_8G_REDEMPTION_PATH;
-   if (lastChoice === '1c_7g_b') return Scenes.SCENE_1C_8A_FINAL_CHOICE;
  }

  // 第8层
  if (depth === 8) {
    if (lastChoice === '1c_8a') return Scenes.SCENE_1C_9A_NEW_BEGINNING;
    if (lastChoice === '1c_8b') return Scenes.SCENE_1C_9B_FEAR_AGAIN;
    if (lastChoice === '1c_8c') return Scenes.SCENE_1C_9C_700_APOLOGY;
    if (lastChoice === '1c_8b_a') return Scenes.SCENE_1C_8B_FEAR_FACE;
    if (lastChoice === '1c_8b_b') return Scenes.SCENE_1C_8D_PAST_CONFESS;
    if (lastChoice === '1c_8d_a') return Scenes.SCENE_1C_8E_FUTURE_PLAN;
    if (lastChoice === '1c_8d_b') return Scenes.SCENE_1C_8F_FINAL_HESITATION;
    if (lastChoice === '1c_8e_a') return Scenes.SCENE_1C_9A_NEW_BEGINNING;
    if (lastChoice === '1c_8e_b') return Scenes.SCENE_1C_9B_FEAR_AGAIN;
-   if (lastChoice === '1c_8f_a') return Scenes.SCENE_1C_9A_NEW_BEGINNING;
    if (lastChoice === '1c_8f_b') return Scenes.SCENE_1C_9B_FEAR_AGAIN;
    if (lastChoice === '1c_8g_a') return Scenes.SCENE_1C_9K_NEW_BEGINNING;
-   if (lastChoice === '1c_8g_b') return Scenes.SCENE_1C_9B_FEAR_AGAIN;
  }

  // 第9层
  if (depth === 9) {
    if (lastChoice === '1c_9a') return Scenes.SCENE_1C_10A_RELATIONSHIP_DEEPEN;
    if (lastChoice === '1c_9b') return Scenes.SCENE_1C_10B_FRIENDSHIP_PATH;
    if (lastChoice === '1c_9c') return Scenes.SCENE_1C_10A_RELATIONSHIP_DEEPEN;
    if (lastChoice === '1c_9d') return Scenes.SCENE_1C_10B_FRIENDSHIP_PATH;
-   if (lastChoice === '1c_9e') return Scenes.SCENE_1C_10A_RELATIONSHIP_DEEPEN;
-   if (lastChoice === '1c_9f') return Scenes.SCENE_1C_10B_FRIENDSHIP_PATH;
    if (lastChoice === '1c_9d_a') return Scenes.SCENE_1C_9D_RELATIONSHIP_DECISION;
    if (lastChoice === '1c_9d_b') return Scenes.SCENE_1C_9E_FINAL_CHOICE;
    if (lastChoice === '1c_9e_a') return Scenes.SCENE_1C_9F_NEW_BEGINNING;
-   if (lastChoice === '1c_9e_b') return Scenes.SCENE_1C_9E_FINAL_CHOICE;
-   if (lastChoice === '1c_9f_a') return Scenes.SCENE_1C_10A_RELATIONSHIP_DEEPEN;
-   if (lastChoice === '1c_9f_b') return Scenes.SCENE_1C_10B_FRIENDSHIP_PATH;
    if (lastChoice === '1c_9k_a') return Scenes.SCENE_1C_10C_REDEMPTION_FINAL;
-   if (lastChoice === '1c_9k_b') return Scenes.SCENE_1C_10A_RELATIONSHIP_DEEPEN;
  }
```

**为什么**：按照 BRANCH_C_MERGE_DUPLICATES.md 合并假分支，删除 18 个重复映射，保留 48 个唯一映射。

### 2. services/types.ts

```diff
export interface PlayerState {
  // ... existing fields ...
  intimacy: number;
+ guilt_level?: number;     // 内疚程度 (0-3)，仅用于 Branch C
}
```

**为什么**：添加 `guilt_level` 字段用于 Branch C 的内疚系统。

### 3. services/stateManager/updater.ts

**新增函数**：
```typescript
function applyGuiltLevelChange(state: PlayerState, choiceId: string): void {
  if (state.guilt_level === undefined) {
    state.guilt_level = 0;
  }
  switch (choiceId) {
    case '1c_1': case '1c_3': case '1c_2b': case '1c_4c_b': case '1c_4c_c':
    case '1c_5c_b': case '1c_7b_c':
      state.guilt_level = Math.min(3, state.guilt_level + 1);
      break;
    case '1c_2': case '1c_3a': case '1c_4c_a': case '1c_4d_a': case '1c_5c_a':
      state.guilt_level = Math.max(0, state.guilt_level - 1);
      break;
    case '1c_7b_a':
      state.guilt_level = 1;
      break;
    case '1c_7g_a':
      state.guilt_level = 0;
      break;
  }
}
```

**在相关选择处理中调用**：
```diff
  if (normalizedId === "1c_1") {
    state.affection -= 2;
    state.courage -= 1;
+   applyGuiltLevelChange(state, normalizedId);
  }
  // ... 其他 1C 分支选择也添加调用
```

**为什么**：按照 BRANCH_C_GUILT_LEVEL_DESIGN.md 实现 14 个触发点的 guilt_level 更新逻辑。

### 4. services/pathMatcher/branch1C_earned.ts（新建）

**完整文件内容**：
- `BRANCH_C_EARNED_RULES` 数组：11 条 requires 规则
- `checkEarnedChoiceRequires` 函数：检查 choice 是否满足条件，返回 `{ allowed, fallback }`

**为什么**：集中管理 earned choices 规则，便于维护和扩展。

### 5. services/llmService.ts

**更新 PlayerState 接口**：
```diff
interface PlayerState {
  // ... existing fields ...
  intimacy: number;
+ guilt_level?: number;
}
```

**初始化时设置默认值**：
```diff
  async startNewGame(): Promise<SceneData> {
    this.state = {
      // ... existing fields ...
      intimacy: 0,
+     guilt_level: 0
    };
  }
```

**新增 applyGuiltLevelChange 方法**：
```typescript
private applyGuiltLevelChange(choiceId: string): void {
  if (this.state.path[0] !== 'p3') return; // 仅 Branch C
  if (this.state.guilt_level === undefined) {
    this.state.guilt_level = 0;
  }
  // ... switch 语句处理 14 个触发点
}
```

**在相关 1C 选择处理中调用**：
```diff
  if (choiceId === "1c_1") {
    this.state.affection -= 2;
    this.state.courage -= 1;
+   this.applyGuiltLevelChange(choiceId);
  }
  // ... 其他 1C 选择也添加调用
```

**集成 earned choices 检查**：
```diff
  async nextTurn(history: any[], choiceId: string): Promise<SceneData> {
    await new Promise(resolve => setTimeout(resolve, 800));

+   // 检查 earned choices（仅 Branch C）
+   if (this.state.path[0] === 'p3') {
+     const checkResult = checkEarnedChoiceRequires(choiceId, this.state as any);
+     if (!checkResult.allowed && checkResult.fallback) {
+       choiceId = checkResult.fallback;
+     }
+   }

    this.state.path.push(choiceId);
    // ...
  }
```

**使用 pathMatcher**：
```diff
    if (path[0] === 'p3') {
-     return this.match1CBranch(path, depth);
+     return match1CBranch(path, depth);
    }
```

**为什么**：
- 在 `nextTurn` 中检查 earned choices，不满足时自动重定向到 fallback
- 使用统一的 pathMatcher 而不是 llmService 内部的旧逻辑
- llmService 有自己的 updateState 方法，需要同步更新 guilt_level

## 回归测试清单

### 测试路径 1：低 guilt_level 路径
- **路径**: p3 → 1c_1 → 1c_2 → 1c_2a → ...
- **预期**: guilt_level 保持较低（0-1），earned choices 如 `1c_5c_a` 应被重定向到 `1c_5c_b`

### 测试路径 2：高 guilt_level 路径
- **路径**: p3 → 1c_1 → 1c_3 → 1c_2b → 1c_4c_c → ...
- **预期**: guilt_level 累积到 2-3，earned choices 如 `1c_7b_a` 应允许，`1c_6e_a` 应被重定向

### 测试路径 3：突破场景 requires
- **路径**: p3 → ... → depth=5，选择 `1c_5c_a`（guilt_level < 2）
- **预期**: 自动重定向到 `1c_5c_b` → SCENE_1C_5C_BARRIER

### 测试路径 4：突破场景 requires（满足条件）
- **路径**: p3 → 1c_1 → 1c_3 → 1c_2b → ...（guilt_level >= 2），选择 `1c_5c_a`
- **预期**: 允许选择 → SCENE_1C_5D_BREAKTHROUGH

### 测试路径 5：坦白场景 requires
- **路径**: p3 → ... → depth=7，选择 `1c_7b_a`（guilt_level < 2）
- **预期**: 自动重定向到 `1c_7b_b` → SCENE_1C_7C_FRIENDSHIP_CONFIRM

### 测试路径 6：救赎路径 requires（历史检查）
- **路径**: p3 → ... → depth=7，选择 `1c_7g_a`（guilt_level >= 2 但未选择过 `1c_7b_a`）
- **预期**: 自动重定向到 `1c_7g_b` → SCENE_1C_8A_FINAL_CHOICE

### 测试路径 7：救赎路径完整流程
- **路径**: p3 → ... → `1c_7b_a`（guilt_level >= 2）→ `1c_7g_a`（guilt_level >= 2 且历史包含 `1c_7b_a`）→ `1c_8g_a` → `1c_9k_a`
- **预期**: 所有 earned choices 允许，最终到达 SCENE_1C_10C_REDEMPTION_FINAL

### 测试路径 8：合并假分支验证
- **路径**: p3 → 1c_1b（已合并）或 1c_1c（已合并）
- **预期**: 应 fallback 到 legacy，或直接使用 `1c_1` 的映射

### 测试路径 9：guilt_level 变化验证
- **路径**: p3 → 1c_1（+1）→ 1c_2（-1）→ 1c_4c_a（-1）→ 1c_7b_a（设为 1）→ 1c_7g_a（设为 0）
- **预期**: guilt_level 变化符合设计文档：0 → 1 → 0 → 0 → 1 → 0

### 测试路径 10：fallback 场景验证
- **路径**: p3 → ... → depth=8，选择 `1c_8d_a`（guilt_level > 1）
- **预期**: 自动重定向到 `1c_8d_b` → SCENE_1C_8F_FINAL_HESITATION

