# Branch A courage_level SSOT 修复

## 1) 所有勇气相关字段写入点清单

### courage_level 写入点（SSOT - 正确）
- `services/stateManager/courage.ts:80` - `state.courage_level = Math.max(0, state.courage_level - 1);`
- `services/stateManager/courage.ts:93` - `state.courage_level = Math.min(3, state.courage_level + 1);`

### courage 写入点（需要修复 - Branch A 双算问题）

#### services/llmService.ts（Branch A 选择）
- Line 2500: `this.state.courage -= 1;` (1a_1) - 同时调用了 applyCourageLevelChange
- Line 2504: `this.state.courage += 2;` (1a_1c) - 同时调用了 applyCourageLevelChange
- Line 2508: `this.state.courage -= 1;` (1a_2) - 同时调用了 applyCourageLevelChange
- Line 2513: `this.state.courage += 1;` (1a_3) - 未调用 applyCourageLevelChange
- Line 2516: `this.state.courage -= 2;` (1a_2a) - 未调用 applyCourageLevelChange
- Line 2519: `this.state.courage += 2;` (1a_2b) - 同时调用了 applyCourageLevelChange
- Line 2523: `this.state.courage += 3;` (1a_3a) - 同时调用了 applyCourageLevelChange
- Line 2528: `this.state.courage -= 1;` (1a_3b) - 同时调用了 applyCourageLevelChange
- Line 2531: `this.state.courage += 3;` (1a_4) - 同时调用了 applyCourageLevelChange
- Line 2536: `this.state.courage -= 1;` (1a_5) - 同时调用了 applyCourageLevelChange
- Line 2540: `this.state.courage += 2;` (1a_6) - 同时调用了 applyCourageLevelChange
- Line 2546: `this.state.courage += 2;` (1a_6a) - 同时调用了 applyCourageLevelChange
- Line 2551: `this.state.courage -= 1;` (1a_6b) - 同时调用了 applyCourageLevelChange
- Line 2555: `this.state.courage += 3;` (1a_6c) - 未调用 applyCourageLevelChange
- Line 2562: `this.state.courage += 3;` (1a_7a) - 未调用 applyCourageLevelChange
- Line 2568: `this.state.courage += 2;` (1a_7c) - 同时调用了 applyCourageLevelChange
- Line 2573: `this.state.courage -= 3;` (1a_7d) - 同时调用了 applyCourageLevelChange
- Line 2577: `this.state.courage += 1;` (1a_8) - 同时调用了 applyCourageLevelChange
- Line 2583: `this.state.courage += 2;` (1a_8a) - 同时调用了 applyCourageLevelChange
- Line 2594: `this.state.courage -= 2;` (1a_9) - 同时调用了 applyCourageLevelChange
- Line 2599: `this.state.courage += 2;` (1a_9a) - 同时调用了 applyCourageLevelChange
- Line 2604: `this.state.courage -= 3;` (1a_9b) - 同时调用了 applyCourageLevelChange

#### services/stateManager/updater.ts（Branch A 选择）
- 大量对 `state.courage` 的写入，但该文件似乎未被使用（需要确认）

### courage 写入点（保留 - 非 Branch A）
- `services/llmService.ts` - Branch B/C 选择（保留，因为 courage_level 只用于 Branch A）
- `services/stateManager/updater.ts` - 可能用于其他分支（需要确认是否使用）

### courage 读取点（保留）
- `services/llmService.ts:2313` - `const confessionValue = (courage + honesty) / 2;`
- `services/stateManager/calculator.ts:40` - `const confessionValue = (courage + honesty) / 2;`

## 2) 修复方案

### 步骤 1: 删除 Branch A 选择中对 `courage` 的直接写入
- 删除所有 `1a_*` 选择中对 `this.state.courage` 的修改
- 保留 `applyCourageLevelChange` 调用（这是 SSOT）

### 步骤 2: 确保调用顺序正确
- 当前顺序：alias → earned-choice fallback → push path → updateState → applyCourageLevelChange
- 需要：在 updateState 之后，单独调用 applyCourageLevelChange（只针对 Branch A）

### 步骤 3: 保留 `courage` 字段
- `courage` 字段需要保留，因为：
  1. 用于计算 `confessionValue`（所有分支）
  2. 用于 Branch B/C 的状态更新（非 Branch A）

