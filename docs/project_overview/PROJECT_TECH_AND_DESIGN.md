# 项目技术与设计说明

> **面向对象**: 未来维护者 / 合作者 / 半年后的自己  
> **目标**: 解释"这个项目是怎么运作的，以及哪些地方不能乱动"  
> **风格**: 工程说明 + 设计原则

---

## 1. 项目概览

### 1.1 项目定位

**类型**: 交互式视觉小说游戏（Interactive Visual Novel）

**核心体验目标**:
- 沉浸式叙事体验：通过多分支剧情系统，让玩家在"700元交易"的情感故事中做出选择
- 情感反馈：通过状态变量（courage_level、trust_level、guilt_level）影响叙事呈现和选择可用性
- 视觉沉浸：新海诚风格背景图、打字机效果、流畅动画
- 桌面宠物互动：流萤（FireflyPet）作为陪伴元素，增强沉浸感

### 1.2 技术栈简述

- **前端框架**: React 18.2.0 + TypeScript 5.2.2
- **构建工具**: Vite 5.2.0
- **样式方案**: Tailwind CSS 3.4.3 (CDN)
- **字体**: Noto Serif SC (中文) + Inter (英文)
- **部署**: Vercel / Surge.sh

### 1.3 核心架构

```
App.tsx (根组件)
├── StartScreen (启动画面)
├── GameUI (游戏主界面)
│   ├── 背景图片层
│   ├── 对话框层
│   └── 选择按钮层
├── FireflyPet (流萤桌宠)
└── Ending Overlay (结局覆盖层)
```

---

## 2. UI 系统设计

### 2.1 核心组件职责

#### GameUI (`components/GameUI.tsx`)
- **职责**: 渲染游戏主界面，包括背景、对话、选择按钮、亲密度显示
- **关键功能**:
  - 动态背景图片生成（基于 `scene.backgroundDescription`）
  - 打字机效果文本显示（`TypingText` 组件）
  - 选择按钮的触控优化（最小 44px 高度，safe-area 适配）
  - 亲密度实时显示（右上角浮层）

#### StartScreen (`components/StartScreen.tsx`)
- **职责**: 游戏启动画面，展示标题和介绍文字
- **关键功能**: 开始按钮交互，加载状态处理

#### Ending Overlay (`App.tsx`)
- **职责**: 游戏结局展示，包含结局类型、文本、操作按钮
- **关键功能**: 平滑过渡动画（`duration-[650ms]`）

### 2.2 视觉原则

#### 可读性优先
- **文本宽度控制**: 对话文本 `max-w-4xl`，叙述文本 `max-w-3xl`，确保最佳阅读宽度
- **字号响应式**: 小屏 `text-lg`，中屏 `text-xl`，大屏 `text-2xl lg:text-3xl`
- **行高优化**: `leading-[1.7] sm:leading-[1.8] md:leading-[2.0]`，提升阅读舒适度
- **对比度**: 文本颜色 `text-gray-50`，背景 `bg-gray-900/90`，确保清晰可读

#### 沉浸感营造
- **背景模糊**: 对话框使用 `backdrop-blur-xl`（避免过度模糊）
- **层次感**: 通过阴影、边框、透明度营造视觉深度
- **渐变覆盖**: `bg-gradient-to-t from-black via-black/95 to-transparent` 确保文字可读

#### 动效克制
- **过渡时长**: 统一使用 250-300ms，避免过长或过短
- **按钮反馈**: `active:scale-[0.99] active:translate-y-[1px]`，轻微按下反馈
- **出现动画**: 选择按钮 `translate-y-4`，自然流畅

### 2.3 Z-index 与层级规则

**层级体系**（从高到低）:
```
999999: FireflyPet 容器 + 右键菜单（最高层，确保始终可见）
  ↓
z-50: StartScreen / 结局覆盖层
  ↓
z-30: 亲密度显示
  ↓
z-20: 选择按钮
  ↓
z-10: 对话框
  ↓
无 z-index: 背景图片
```

**设计原则**:
- 流萤始终在最上层（`z-index: 999999`），不受其他元素影响
- 游戏 UI 层级固定，不随意修改 z-index 值
- 禁止新增比 `z-50` 更大的 z-index（除非是流萤相关）

### 2.4 移动端触控原则

#### 触控可点性
- **最小高度**: 所有按钮 `min-h-[44px]`，符合 iOS/Android 触控标准
- **内边距**: 小屏 `px-6 py-4`，大屏 `px-10 py-5`，确保点击区域充足
- **间距**: 选项之间 `gap-5`（小屏），`gap-4`（大屏），避免误触

#### 安全区适配
- **底部安全区**: `pb-[env(safe-area-inset-bottom,0px)]`，适配 iOS 手势条
- **对话框底部**: `pb-[calc(2.5rem+env(safe-area-inset-bottom,0px))]`，确保不被遮挡

#### 误触规避
- **按钮位置**: 避免放在屏幕右下角极限位置，为流萤留出活动空间
- **响应式布局**: 小屏使用 `flex-col`，大屏使用 `flex-row`，确保按钮可点

---

## 3. 桌宠系统（流萤 FireflyPet）

### 3.1 实现方式

**技术实现**:
- **组件**: React 函数组件 (`components/FireflyPet.tsx`)
- **定位**: `position: fixed`，脱离文档流
- **z-index**: `999999`（最高层级）
- **初始位置**: 窗口右侧中部 (`x: windowWidth - 250, y: windowHeight / 2 - 100`)
- **动画**: `setInterval` 定时器 + 状态管理 (`currentFrame`)

**图片资源**:
- 路径: `/firefly/` 目录下的 PNG 序列帧
- 动作类型: `standby`, `left`, `right`, `eat`, `sleep`, `love`, `mention`
- 预加载: 使用 `imageCacheRef` 缓存所有动作帧

### 3.2 事件模型

#### 鼠标事件
- **`onMouseDown`**:
  - 左键点击头部区域 (`clickY < rect.height / 4`) → 触发 `love` 动作
  - 左键点击其他区域 → 触发拖拽 (`mention` 动作)
- **`onContextMenu`**: 右键点击 → 显示上下文菜单（行走/喂食/睡觉）
- **`onClick`**: 阻止事件冒泡 (`e.stopPropagation()`)

#### 全局事件
- **`mousemove`**: 拖拽时更新位置
- **`mouseup`**: 拖拽结束时释放
- **`resize`**: 窗口大小改变时重新初始化位置
- **`click`** / **`contextmenu`**: 关闭右键菜单（点击外部时）

#### 内部定时器
- **动画定时器** (`animationTimerRef`): 控制帧序列播放
- **移动定时器** (`moveTimerRef`): 控制行走移动
- **属性衰减定时器**: 每 10 秒更新 `satiety` / `stamina` / `mood`

### 3.3 绝对红线（禁止修改）

以下代码和样式**绝对禁止修改**:

1. **`components/FireflyPet.tsx`** 的任何代码
   - 任何修改都可能影响流萤的行为、动画、交互

2. **z-index 值**
   - 流萤: `z-index: 999999`（必须保持最高）
   - 禁止新增比 `z-50` 更大的 z-index（除非是流萤相关）

3. **position 定位**
   - 流萤: `position: fixed`（必须保持）
   - 禁止修改 `App.tsx` 主容器的 `overflow: hidden`

4. **事件监听**
   - 禁止删除或修改 `window.addEventListener('resize', ...)`
   - 禁止修改 `onMouseDown`、`onContextMenu`、`onClick` 的逻辑

5. **渲染顺序**
   - 流萤必须在 `GameUI` 之后渲染（确保 DOM 顺序）
   - 禁止改变流萤与 `GameUI` 的渲染顺序

### 3.4 常见风险

#### Overflow 冲突
- **风险**: 如果修改 `body` 或主容器的 `overflow: hidden`，可能影响流萤的 `fixed` 定位计算
- **规避**: 保持 `overflow: hidden` 不变，只优化内容区自身 padding/margin

#### Pointer-events 冲突
- **风险**: 如果其他元素设置了 `pointer-events: none`，可能影响流萤的交互
- **规避**: 流萤使用 `pointer-events: auto`，确保可交互

#### 层级冲突
- **风险**: 如果其他元素设置了过高的 z-index，可能遮挡流萤
- **规避**: 保持 z-index 层级体系，不随意提升其他元素的层级

---

## 4. 剧情系统架构

### 4.1 剧情树整体结构

**结构概述**:
- **深度**: 10 层（depth 0-10）
- **分支**: 3 个主要分支（1A、1B、1C）
- **入口**: 序章选择 `p1` / `p2` / `p3` 决定分支

**分支主题**:
- **Branch A (1A)**: 勇气与时机 - 主角因勇气不足而错过机会，从"不敢上前"到"跟踪被发现"再到"坦白"
- **Branch B (1B)**: 信任与建立 - 从发消息道歉开始，通过聊天和见面逐渐建立信任，经历冲突和坦白
- **Branch C (1C)**: 内疚与救赎 - 主角对700块钱和逃避行为的内疚程度，影响后续对话和选择的呈现

### 4.2 Strict Matcher 的作用与稳定性保障

**核心机制**:
- **文件位置**: `services/pathMatcher/branch1A.ts`, `branch1B.ts`, `branch1C.ts`
- **匹配方式**: 使用 `lastChoice` 精确匹配（`lastChoice === 'xxx'`），而非历史路径搜索
- **稳定性保障**:
  - 使用 `normalizeChoiceId()` 统一 choice ID 格式
  - 使用 `matchWithFallbackV2()` 实现 strict → legacy 降级
  - 缺失 ID 时警告但不静默失败

**关键代码模式**:
```typescript
export function match1ABranchStrict(path: string[], depth: number): SceneData | null {
  const normalizedPath = path.map(normalizeChoiceId);
  const lastChoice = normalizedPath[normalizedPath.length - 1];
  
  // 使用 lastChoice 精确匹配，而非 hasToken 历史搜索
  if (depth === 2) {
    if (lastChoice === '1a_1') return Scenes.SCENE_1A_LIFE;
    if (lastChoice === '1a_1c') return Scenes.SCENE_1A_TRY_CHANGE;
  }
  // ...
}
```

### 4.3 状态变量体系

#### Branch A: courage_level (0..3)
- **含义**: 行动勇气/主动性
- **更新函数**: `applyCourageLevelChange(state, choiceId)` (`services/stateManager/courage.ts`)
- **触发点**: 如 `1a_1` (-1), `1a_1c` (+1), `1a_3a` (+1), `1a_3b` (-1) 等
- **影响**: 影响叙事呈现（0-1 vs 2-3），影响 earned choices 可用性

#### Branch B: trust_level (0..3)
- **含义**: 关系信任/接受度
- **更新函数**: `applyTrustLevelChange(state, choiceId)` (`services/stateManager/trust.ts`)
- **触发点**: 如 `1b_1` (-1), `1b_3` (+2), `1b_4c_a` (+2) 等
- **影响**: 影响叙事呈现，影响 earned choices 可用性

#### Branch C: guilt_level (0..3)
- **含义**: 主角对700块钱和逃避行为的内疚程度
- **更新函数**: `applyGuiltLevelChange(state, choiceId)` (`services/stateManager/guilt.ts`)
- **触发点**: 如 `1c_1` (+1), `1c_2` (-1), `1c_3` (+1) 等
- **影响**: 影响叙事呈现，影响 earned choices 可用性

### 4.4 SSOT 原则（单一数据源）

**核心原则**: 每个状态变量的更新**只能在一个地方发生**

**实现方式**:
- **Branch A**: 所有 `courage_level` 更新都在 `applyCourageLevelChange()` 中
- **Branch B**: 所有 `trust_level` 更新都在 `applyTrustLevelChange()` 中
- **Branch C**: 所有 `guilt_level` 更新都在 `applyGuiltLevelChange()` 中

**调用位置** (`services/llmService.ts`):
```typescript
// 在 nextTurn 方法中，按以下顺序执行：
// 1. Choice ID alias 归一化
// 2. Earned choice 检查（如果不满足，fallback）
// 3. 状态变量更新（applyCourageLevelChange / applyTrustLevelChange / applyGuiltLevelChange）
// 4. Path / depth 更新
```

**禁止行为**:
- 禁止在 `updateState` 或其他地方直接修改 `state.courage_level`、`state.trust_level`、`state.guilt_level`
- 禁止在多个地方同时更新同一个状态变量

### 4.5 Earned Choices 与 Fallback 的执行顺序

**Earned Choices 机制**:
- **文件位置**: `services/pathMatcher/branch1A_earned.ts`, `branch1B_earned.ts`, `branch1C_earned.ts`
- **规则定义**: 每个 earned choice 包含 `requires` 条件（状态变量门槛 + 历史包含）
- **检查函数**: `checkEarnedChoiceRequires(choiceId, state)`

**执行顺序**（必须严格遵守）:
```
1. Choice ID alias 归一化
   ↓
2. Earned choice 检查
   - 如果满足条件 → 继续
   - 如果不满足 → 自动 fallback 到指定 choice
   ↓
3. 状态变量更新（基于最终 choice ID）
   ↓
4. Path / depth 更新
```

**Fallback 机制**:
- 如果 earned choice 条件不满足，自动重定向到 fallback choice
- Fallback choice 也会触发状态变量更新（基于 fallback 后的 choice ID）

### 4.6 Narrative Variants：状态 → 叙事差异层

**实现位置**: `services/narrativeVariants.ts`

**核心机制**:
- **映射表**: `NARRATIVE_VARIANTS` 包含 24 个场景的 low/high 版本 narrative
- **判断逻辑**: 根据状态变量值（0-1 vs 2-3）返回对应的 narrative 变体
- **应用位置**: 在 `llmService.ts` 的 `getNextSceneByPath` 中，返回场景前应用变体

**关键代码**:
```typescript
export function getNarrativeVariant(scene: SceneData, state: PlayerState): string {
  // 确定场景 ID
  let sceneId: string | null = null;
  if (scene === Scenes.SCENE_1A_OBSERVE) sceneId = 'SCENE_1A_OBSERVE';
  // ...
  
  // 确定使用哪个状态变量
  let level: number;
  if (sceneId.startsWith('SCENE_1A_')) {
    level = state.courage_level;
  } else if (sceneId.startsWith('SCENE_1B_')) {
    level = state.trust_level;
  } else if (sceneId.startsWith('SCENE_1C_')) {
    level = state.guilt_level;
  }
  
  // 根据 level 返回 low (0-1) 或 high (2-3) 版本
  const variant = NARRATIVE_VARIANTS[sceneId];
  return level >= 2 ? variant.high : variant.low;
}
```

**设计原则**:
- 只修改 narrative 文本，不改变场景结构、选择、路由
- 变体文本基于原始 narrative，添加 1-3 句情感强化
- 未配置变体的场景返回原始 narrative

---

## 5. 文档与资产结构说明

### 5.1 DOCUMENT_INDEX.md 的用途

**文件位置**: `docs/DOCUMENT_INDEX.md`

**用途**:
- 记录所有 .md 文件的分类、摘要、推荐动作
- 提供文档维护的参考依据
- 标注文件的最终状态（KEPT / ARCHIVED / MOVED_TO_TRASH）

**分类体系**:
- **README**: 项目入口说明
- **DESIGN**: 设计说明 / 叙事系统 / 架构规范
- **IMPLEMENTATION**: 实现总结 / 改造记录 / 修复总结
- **ANALYSIS**: 扫描导出 / 映射表 / 数据统计
- **LOG**: 工作日志 / 决策日志
- **TEMP**: 中间产物 / 重复内容 / 可被替代
- **UNKNOWN**: 无法判断

### 5.2 ARCHIVE / TRASH 的使用规范

**ARCHIVE 目录** (`docs/ARCHIVE/`):
- **用途**: 存放阶段性报告和扫描导出文档
- **内容**: 如 `BRANCH_A_STRICT_MATCHER_EXPORT.md`、`BRANCH_A_MERGE_DUPLICATES.md` 等
- **原则**: 保留作为历史参考，但不作为主要设计依据

**TRASH 目录** (`docs/TRASH/`):
- **用途**: 存放删除候选文档（暂不删除，可恢复）
- **内容**: 如 `STRICT_MATCHER_MAPPINGS_DEPTH1_5.md`（已被完整导出替代）
- **原则**: 确认无引用后可考虑删除

### 5.3 新增文档时的归类建议

**设计文档** → `docs/` 根目录，分类为 DESIGN
- 如新的状态变量设计、新的分支设计等

**实现总结** → `docs/` 根目录，分类为 IMPLEMENTATION
- 如新的功能实现总结、修复总结等

**扫描导出** → 直接放入 `docs/ARCHIVE/`，分类为 ANALYSIS
- 如新的映射表导出、数据统计等

**工作日志** → 根目录，分类为 LOG
- 如 `WORK_LOG.md` 的更新

---

## 6. 回归检查清单（可复制执行）

### 6.1 UI 系统检查

#### 桌面端
- [ ] 对话文本不贴边，阅读舒适（`max-w-4xl`，`px-4 sm:px-5`）
- [ ] 选择按钮 hover/active 反馈明显但不夸张（`active:scale-[0.99]`）
- [ ] 按钮间距合理，不会误触（`gap-4` 或 `gap-5`）
- [ ] 亲密度显示清晰可见（右上角，`z-30`）

#### 移动端
- [ ] 所有按钮最小高度 >= 44px（`min-h-[44px]`）
- [ ] 按钮内边距充足（小屏 `px-6 py-4`）
- [ ] 底部安全区生效（`pb-[env(safe-area-inset-bottom,0px)]`）
- [ ] 对话文字在小屏不贴边（`p-5 sm:p-6`）

### 6.2 流萤系统检查

- [ ] 流萤可正常拖拽（点击非头部区域）
- [ ] 流萤可正常点击（点击头部区域触发 `love` 动作）
- [ ] 流萤右键菜单正常显示（行走/喂食/睡觉）
- [ ] 流萤不被其他元素遮挡（`z-index: 999999`）
- [ ] 流萤不遮挡关键按钮（按钮区域有足够底部 padding）
- [ ] 窗口 resize 时流萤位置正常更新

### 6.3 剧情系统检查

#### 分支路由
- [ ] Branch A 选择正确路由到对应场景
- [ ] Branch B 选择正确路由到对应场景
- [ ] Branch C 选择正确路由到对应场景
- [ ] Fallback 机制正常（earned choice 不满足时自动 fallback）

#### 状态变量一致性
- [ ] `courage_level` 只在 `applyCourageLevelChange()` 中更新
- [ ] `trust_level` 只在 `applyTrustLevelChange()` 中更新
- [ ] `guilt_level` 只在 `applyGuiltLevelChange()` 中更新
- [ ] 状态变量值始终在 0-3 范围内（clamp 生效）

#### Narrative Variants
- [ ] 状态变量 0-1 时显示 low 版本 narrative
- [ ] 状态变量 2-3 时显示 high 版本 narrative
- [ ] 未配置变体的场景返回原始 narrative

---

## 7. 后续扩展建议（克制）

### 7.1 何时可以加新分支 / 新状态变量

**可以加新分支的情况**:
- 剧情树结构需要新的主题分支（如新的序章选择）
- 新分支有明确的主题和状态变量需求
- 新分支不影响现有 A/B/C 分支的逻辑

**可以加新状态变量的情况**:
- 新分支需要独立的状态变量（如新分支的 `resolve_level`）
- 新状态变量有明确的触发点和呈现差异点
- 新状态变量遵循 SSOT 原则（单一写入点）

### 7.2 何时不该加

**不该加新分支的情况**:
- 只是想在现有分支中增加更多场景（应扩展现有分支）
- 新分支与现有分支主题重复（应合并到现有分支）

**不该加新状态变量的情况**:
- 现有状态变量已能满足需求（避免过度设计）
- 新状态变量与现有变量功能重叠（应复用现有变量）
- 新状态变量没有明确的触发点和呈现差异点

### 7.3 UI 扩展的安全方向（不碰流萤）

**安全扩展方向**:
- **视觉优化**: 调整颜色、字体、间距、阴影（不影响流萤）
- **布局优化**: 调整 padding、gap、max-width（不影响流萤）
- **动效优化**: 调整过渡时长、缓动函数（不影响流萤）
- **响应式优化**: 调整断点、小屏布局（不影响流萤）

**禁止扩展方向**:
- 修改 `components/FireflyPet.tsx` 的任何代码
- 修改流萤的 z-index、position、事件监听
- 修改 `body` 或主容器的 `overflow` 规则
- 新增比 `z-50` 更大的 z-index（除非是流萤相关）

---

## 附录：参考文档清单

本说明文档参考了以下文档：

### DESIGN 分类
- `docs/HANDOFF_ROUTE_STABILITY.md` - Route Stability 交接文档
- `docs/story_refactor_plan.md` - 剧情树重构路线图
- `FIREFLY_ACTION_DESIGN.md` - 流萤动作系统设计文档
- `STORY_MINDMAP.md` - 700元视觉小说详细剧情思维导图
- `docs/BRANCH_A_EARNED_CHOICES.md` - Branch A 的 earned choices 规则设计
- `docs/BRANCH_A_STATE_VARIABLE_DESIGN.md` - Branch A 的 courage_level 状态变量设计
- `docs/BRANCH_B_EARNED_CHOICES.md` - Branch B 的 earned choices 规则设计
- `docs/BRANCH_B_STATE_VARIABLE_DESIGN.md` - Branch B 的 trust_level 状态变量设计
- `docs/BRANCH_C_EARNED_CHOICES.md` - Branch C 的 earned choices 规则设计
- `docs/BRANCH_C_GUILT_LEVEL_DESIGN.md` - Branch C 的 guilt_level 设计规则

### IMPLEMENTATION 分类
- `docs/BRANCH_A_IMPLEMENTATION_SUMMARY.md` - Branch A 结构优化与可玩性改造实现总结
- `docs/BRANCH_A_COURAGE_SSOT_FIX_SUMMARY.md` - Branch A courage_level SSOT 修复总结
- `docs/BRANCH_B_IMPLEMENTATION_SUMMARY.md` - Branch B 结构优化与可玩性改造实现总结
- `docs/BRANCH_C_IMPLEMENTATION_SUMMARY.md` - Branch C 三步改进实现总结
- `docs/BRANCH_C_CODE_CLEANUP.md` - Branch C 代码清理与加固总结
- `docs/FIX_BRANCH1C_STRICT_MATCHER.md` - Branch1C 严格匹配函数修复说明
- `docs/NARRATIVE_VARIANTS_IMPLEMENTATION.md` - 场景呈现差异层实现总结
- `docs/UI_SECONDARY_REFINEMENT.md` - UI 界面二次精修报告

### ANALYSIS 分类
- `docs/UI_FIREFLY_IMPACT_REPORT.md` - 页面结构与流萤影响范围报告

### LOG 分类
- `WORK_LOG.md` - 700元视觉小说游戏完整工作日志

---

**文档生成完成**


