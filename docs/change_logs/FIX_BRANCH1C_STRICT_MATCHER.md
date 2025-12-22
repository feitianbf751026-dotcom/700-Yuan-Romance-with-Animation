# Branch1C 严格匹配函数修复说明

## 1️⃣ 当前修改的文件、函数、分支名称

- **文件路径**: `services/pathMatcher/branch1C.ts`
- **修改的函数**: `match1CBranchStrict(path: string[], depth: number): SceneData | null`
- **分支名称**: Branch 1C（1C 分支树匹配）

## 2️⃣ 修改的背景问题

**问题描述**: `match1CBranchStrict` 函数使用了 `hasToken(tokens, ...)` 在整个路径历史中搜索选择 ID，这会导致**误匹配**问题。

**具体场景**:
- 当路径历史中包含多个选择 ID 时，`hasToken` 会在整个历史中查找，而不是只检查最后一次选择
- 例如：如果路径是 `['1c_1', '1c_2', '1c_1b']`，在 depth=2 时，`hasToken(tokens, '1c_1')` 会返回 `true`（因为历史中存在 '1c_1'），但此时 `lastChoice` 实际上是 '1c_1b'
- 这会导致路由决策基于错误的选择，可能将玩家路由到错误的场景

**Bug 类型**: 路由逻辑错误 / 误匹配

## 3️⃣ 参考的实现

**参考文件**: `services/pathMatcher/branch1A.ts`

**参考函数**: `match1ABranchStrict(path: string[], depth: number): SceneData | null`

**为什么参考它**:
- `branch1A.ts` 已经完成了相同的修复，从 `hasToken` 改为 `lastChoice` 精确匹配
- 两个分支的匹配逻辑结构相同，都是基于 depth 和 choice ID 进行路由
- 参考已验证的实现可以确保修复的一致性和正确性

## 4️⃣ 修改前的行为

**修改前的代码逻辑**:
```typescript
export function match1CBranchStrict(path: string[], depth: number): SceneData | null {
  const tokens = tokenizePath(path.map(normalizeChoiceId));
  
  if (depth === 2) {
    if (hasToken(tokens, '1c_1')) return Scenes.SCENE_1C_GUILT;
    // ...
  }
}
```

**出错情况示例**:
1. **路径**: `['1c_1', '1c_2', '1c_1b']`，`depth = 2`
   - `hasToken(tokens, '1c_1')` 返回 `true`（因为历史中存在 '1c_1'）
   - 实际 `lastChoice` 是 '1c_1b'，应该匹配 `SCENE_1C_GUILT`（因为 '1c_1b' 也映射到该场景）
   - 虽然结果可能正确，但逻辑是错误的

2. **路径**: `['1c_1', '1c_2', '1c_3']`，`depth = 2`
   - `hasToken(tokens, '1c_1')` 返回 `true`
   - 但 `lastChoice` 是 '1c_3'，应该匹配 `SCENE_1C_STALKING`
   - **错误**: 会路由到 `SCENE_1C_GUILT` 而不是正确的场景

3. **路径**: `['1c_1b', '1c_2', '1c_1']`，`depth = 2`
   - `hasToken(tokens, '1c_1b')` 返回 `true`（历史中存在）
   - 但 `lastChoice` 是 '1c_1'，应该匹配 `SCENE_1C_GUILT`
   - 虽然结果可能正确，但匹配逻辑不准确

**核心问题**: 匹配逻辑基于**整个路径历史**而非**最后一次选择**，导致路由决策不准确。

## 5️⃣ 修改后的行为

**修改后的代码逻辑**:
```typescript
export function match1CBranchStrict(path: string[], depth: number): SceneData | null {
  const normalizedPath = path.map(normalizeChoiceId);
  const lastChoice = normalizedPath[normalizedPath.length - 1];
  
  if (depth === 2) {
    if (lastChoice === '1c_1') return Scenes.SCENE_1C_GUILT;
    // ...
  }
}
```

**关键逻辑变化点**:
1. **从历史搜索改为精确匹配**: 
   - 修改前: `hasToken(tokens, 'xxx')` - 在整个路径历史 Set 中查找
   - 修改后: `lastChoice === 'xxx'` - 只检查最后一个选择 ID

2. **提取 lastChoice 的逻辑**:
   - 先对路径进行 `normalizeChoiceId` 规范化
   - 然后取数组最后一个元素作为 `lastChoice`
   - 确保匹配基于**当前步骤的选择**而非历史选择

3. **匹配精度提升**:
   - 每个 depth 层的路由决策现在**只依赖该层的选择**
   - 避免了历史选择对当前路由的干扰

**示例场景（修改后）**:
- **路径**: `['1c_1', '1c_2', '1c_1b']`，`depth = 2`
  - `lastChoice = '1c_1b'`
  - 匹配 `lastChoice === '1c_1b'` → 返回 `SCENE_1C_GUILT` ✅ 正确

- **路径**: `['1c_1', '1c_2', '1c_3']`，`depth = 2`
  - `lastChoice = '1c_3'`
  - 匹配 `lastChoice === '1c_3'` → 返回 `SCENE_1C_STALKING` ✅ 正确

## 6️⃣ 核心判断条件 / 匹配策略变化

**匹配策略发生了根本性变化**:

| 维度 | 修改前 | 修改后 |
|------|--------|--------|
| **匹配方式** | Token-based 历史搜索 | LastChoice 精确匹配 |
| **匹配范围** | 整个路径历史（Set 查找） | 仅最后一次选择（字符串相等） |
| **匹配函数** | `hasToken(tokens, 'xxx')` | `lastChoice === 'xxx'` |
| **数据来源** | `tokenizePath()` 生成的 Set | `normalizedPath[length - 1]` |
| **匹配精度** | 低（可能误匹配） | 高（精确匹配） |

**核心变化**:
- ✅ **从 "历史中存在" 改为 "当前选择是"**
- ✅ **从 Set 成员查找改为字符串精确相等**
- ✅ **从多值匹配改为单值匹配**

**影响范围**:
- 所有 depth 层（2-9层）的匹配逻辑都改为 `lastChoice === 'xxx'` 形式
- 共修改了 **60+ 处**匹配条件

## 7️⃣ Import / 工具函数变化

### 删除的 Import
```typescript
// 修改前：
import { getDefaultNextScene, matchWithFallbackV2, normalizeChoiceId, hasToken, tokenizePath } from "./utils";

// 修改后：
import { getDefaultNextScene, matchWithFallbackV2, normalizeChoiceId } from "./utils";
```

**删除的函数**:
- `hasToken` - 不再需要，因为不再使用 Set 查找
- `tokenizePath` - 不再需要，因为不再生成 tokens Set

**保留的函数**:
- `normalizeChoiceId` - 仍然需要，用于规范化选择 ID
- `matchWithFallbackV2` - 仍然需要，用于 strict/legacy 回退机制
- `getDefaultNextScene` - 仍然需要，用于 legacy 函数的默认场景

**为什么删除**:
- `hasToken` 和 `tokenizePath` 是 token-based 匹配的核心工具
- 改为 lastChoice 精确匹配后，不再需要这些工具
- 删除未使用的 import 可以：
  - 减少代码复杂度
  - 避免潜在的误用
  - 提高代码可读性
  - 符合 TypeScript 最佳实践（避免 unused imports）

## 8️⃣ 影响的调用方和路径匹配结果

### 调用方
**直接调用方**:
- `match1CBranch(path: string[], depth: number)` - 通过 `matchWithFallbackV2` 调用 `match1CBranchStrict`

**间接调用方**:
- 所有通过 `match1CBranch` 进行 1C 分支路由的代码
- 游戏流程中进入 1C 分支的所有路径

### 路径匹配结果变化

**修改前的问题场景**:
```
路径: ['1c_1', '1c_2', '1c_3']
depth = 2 时:
  - hasToken(tokens, '1c_1') = true (历史中存在)
  - 错误路由到 SCENE_1C_GUILT
  - 正确应该是: lastChoice = '1c_3' → SCENE_1C_STALKING
```

**修改后的正确行为**:
```
路径: ['1c_1', '1c_2', '1c_3']
depth = 2 时:
  - lastChoice = '1c_3'
  - lastChoice === '1c_3' → 正确路由到 SCENE_1C_STALKING ✅
```

**影响范围**:
- ✅ **修复了所有基于历史误匹配的路由错误**
- ✅ **确保每个 depth 层的路由决策只基于该层的选择**
- ✅ **提高了路由的准确性和可预测性**

**潜在影响**:
- 如果之前有代码依赖"历史中存在某个选择"的行为，现在会失效
- 但这是**预期的修复**，因为之前的行为是错误的

## 9️⃣ 潜在的边界情况和测试点

### 边界情况

1. **空路径或单元素路径**
   - 场景: `path = []` 或 `path = ['1c_1']`
   - 风险: `normalizedPath[normalizedPath.length - 1]` 可能为 `undefined`
   - 当前处理: 如果 `lastChoice` 为 `undefined`，所有 `lastChoice === 'xxx'` 都会返回 `false`，最终返回 `null`，由 legacy 函数处理
   - **建议测试**: 验证空路径和单元素路径的行为

2. **深度不匹配**
   - 场景: `depth = 2` 但路径只有 1 个元素
   - 风险: `lastChoice` 可能不是 depth=2 的选择
   - 当前处理: 如果 `lastChoice` 不匹配任何条件，返回 `null`，由 legacy 处理
   - **建议测试**: 验证 depth 与路径长度不匹配的情况

3. **未规范化的选择 ID**
   - 场景: 路径中包含 `'1c_1_v2'` 这样的后缀 ID
   - 风险: 如果 `normalizeChoiceId` 没有正确处理，可能导致匹配失败
   - 当前处理: 使用 `normalizeChoiceId` 规范化，应该能处理 `_v2` 后缀
   - **建议测试**: 验证带 `_v2` 后缀的选择 ID 能否正确匹配

4. **深度 > 10 的情况**
   - 场景: `depth = 11` 或更大
   - 当前处理: 直接返回 `null`，由 legacy 处理
   - **建议测试**: 验证超深度路径的处理

5. **未定义的选择 ID**
   - 场景: `lastChoice` 是 `'unknown_choice'`，不在任何匹配条件中
   - 当前处理: 返回 `null`，fallback 到 legacy
   - **建议测试**: 验证未知选择 ID 的 fallback 行为

### 需要补充的测试点

1. **单元测试**:
   - ✅ 测试每个 depth 层的正确匹配
   - ✅ 测试历史选择不影响当前匹配
   - ✅ 测试边界情况（空路径、单元素路径）
   - ✅ 测试未定义选择 ID 的 fallback

2. **集成测试**:
   - ✅ 测试完整的 1C 分支路径（从 depth=1 到 depth=10）
   - ✅ 测试 strict 匹配失败时的 legacy fallback
   - ✅ 测试与 `matchWithFallbackV2` 的集成

3. **回归测试**:
   - ✅ 对比修改前后的路由结果，确保修复了误匹配问题
   - ✅ 验证所有已知的 1C 分支路径都能正确路由

## 🔟 一句话总结

**这次改动本质上修复了什么问题**:

> 修复了 `match1CBranchStrict` 函数基于整个路径历史进行匹配导致的误路由问题，改为只基于最后一次选择进行精确匹配，确保每个 depth 层的路由决策只依赖该层的选择，提高了路由的准确性和可预测性。

---

## 修改时间
2024年（当前日期）

## 相关文件
- `services/pathMatcher/branch1C.ts` - 修改的文件
- `services/pathMatcher/branch1A.ts` - 参考的实现
- `services/pathMatcher/utils.ts` - 工具函数定义



