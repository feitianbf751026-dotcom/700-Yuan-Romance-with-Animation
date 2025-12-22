# 页面结构与流萤（桌宠）影响范围报告

> **生成时间**: 2024年
> **目标**: 为 UI/视觉优化提供安全边界，不进行任何修改

---

## 1. 页面整体结构概览

### 主布局结构
- **应用类型**: React 单页应用 (SPA)
- **主容器**: `App.tsx` 中的 `<div className="relative w-screen h-screen bg-slate-900 text-white overflow-hidden font-sans">`
- **主要组件层级**:
  1. `StartScreen` (启动画面，`z-50`)
  2. `GameUI` (游戏主界面)
  3. `FireflyPet` (流萤桌宠，最后渲染，确保在最上层)
  4. 结局覆盖层 (`z-50`)

### UI 技术栈
- **框架**: React + TypeScript
- **样式**: Tailwind CSS (CDN)
- **字体**: Noto Serif SC (中文) + Inter (英文)
- **布局方式**: 绝对定位 (`absolute` / `fixed`) + Flexbox

### 关键 CSS 规则
- 全局 `body`: `overflow: hidden` (禁止滚动)
- 主容器: `relative w-screen h-screen overflow-hidden`
- 背景: `bg-slate-900` (深色背景)

---

## 2. 流萤（桌宠）组件专项报告

### 2.1 实现方式
- **技术**: React 函数组件 (`FireflyPet.tsx`)
- **渲染方式**: DOM 元素 (`<div>` + `<img>`)
- **图片资源**: `/firefly/` 目录下的 PNG 序列帧
- **动画方式**: `setInterval` 定时器 + 状态管理 (`currentFrame`)

### 2.2 层级与定位
- **父容器**: 直接挂载在 `App.tsx` 中，与 `GameUI` 同级
- **定位方式**: `position: fixed`
- **初始位置**: 窗口右侧中部 (`x: windowWidth - 250, y: windowHeight / 2 - 100`)
- **z-index**: `999999` (最高层级，确保始终在最上层)
- **脱离文档流**: 是 (`fixed` 定位)

### 2.3 Z-index 规则与覆盖关系
```
最高层 (999999): FireflyPet 容器 + 右键菜单
  ↓
中层 (z-50): StartScreen / 结局覆盖层
  ↓
游戏层 (z-30): 亲密度显示
  ↓
交互层 (z-20): 选择按钮
  ↓
内容层 (z-10): 对话框
  ↓
背景层 (无 z-index): 背景图片
```

### 2.4 事件监听
流萤组件监听以下事件：

#### 鼠标事件
- **`onMouseDown`**: 
  - 左键点击头部区域 (`clickY < rect.height / 4`) → 触发 `love` 动作
  - 左键点击其他区域 → 触发拖拽 (`mention` 动作)
- **`onContextMenu`**: 右键点击 → 显示上下文菜单（行走/喂食/睡觉）
- **`onClick`**: 阻止事件冒泡 (`e.stopPropagation()`)

#### 全局事件（通过 `useEffect` 注册）
- **`mousemove`**: 拖拽时更新位置
- **`mouseup`**: 拖拽结束时释放
- **`resize`**: 窗口大小改变时重新初始化位置
- **`click`** / **`contextmenu`**: 关闭右键菜单（点击外部时）

#### 内部定时器
- **动画定时器** (`animationTimerRef`): 控制帧序列播放
- **移动定时器** (`moveTimerRef`): 控制行走移动
- **属性衰减定时器**: 每 10 秒更新 `satiety` / `stamina` / `mood`

### 2.5 依赖关系
- **窗口尺寸**: 依赖 `window.innerWidth` / `window.innerHeight` 进行位置计算
- **图片预加载**: 使用 `imageCacheRef` 缓存所有动作帧图片
- **状态管理**: 使用 React Hooks (`useState`, `useEffect`, `useRef`, `useCallback`)

### 2.6 关键样式属性
```css
position: fixed
z-index: 999999
pointer-events: auto
cursor: grabbing (拖拽时) / default (正常)
transform: scale(1.05) (拖拽时) / scale(1) (正常)
transition: transform 0.2s ease (非拖拽时)
```

---

## 3. UI 改动风险评估

### ❌ 绝对不应修改的区域（会破坏流萤）

1. **`components/FireflyPet.tsx`**
   - 任何修改都可能影响流萤的行为、动画、交互
   - 特别是 `z-index: 999999`、`position: fixed`、事件处理逻辑

2. **`App.tsx` 中流萤的挂载位置**
   - 流萤必须在 `GameUI` 之后渲染（确保 DOM 顺序）
   - 不能改变流萤与 `GameUI` 的渲染顺序

3. **全局 CSS 中的 `overflow: hidden`**
   - `index.html` 中 `body { overflow: hidden; }`
   - 如果改为 `overflow: auto`，可能影响流萤的固定定位

4. **窗口事件监听**
   - `window.addEventListener('resize', ...)` 用于流萤位置初始化
   - 不能移除或修改这个监听器

### ⚠️ 修改需谨慎的区域（可能影响流萤）

1. **`App.tsx` 主容器样式**
   - `relative w-screen h-screen overflow-hidden`
   - 如果改为 `overflow: auto`，可能影响流萤的 `fixed` 定位计算

2. **`components/GameUI.tsx` 的 z-index 层级**
   - 当前选择按钮 `z-20`，对话框 `z-10`
   - 如果提升这些层级，可能遮挡流萤（虽然流萤是 `999999`，理论上不会）

3. **全局字体或颜色**
   - 修改 `index.html` 中的全局样式可能影响右键菜单的显示

4. **窗口尺寸相关的计算**
   - 如果修改了页面布局（如添加侧边栏），可能影响流萤的初始位置计算

### ✅ UI 安全可优化区域（与流萤无耦合）

1. **`components/GameUI.tsx`**
   - 背景图片样式（`bg-cover`, `bg-center`, `filter`）
   - 对话框样式（`bg-gray-900/85`, `backdrop-blur-xl`）
   - 选择按钮样式（`bg-black/60`, `hover:bg-black/80`）
   - 亲密度显示样式（`bg-black/70`, `backdrop-blur-md`）

2. **`components/StartScreen.tsx`**
   - 启动画面的所有样式和布局

3. **`index.html` 中的全局样式**
   - 字体定义（`.font-serif-sc`）
   - 动画定义（`.fade-enter`）
   - 背景色和文字颜色（不影响流萤）

4. **布局优化方向**
   - 间距调整（`gap`, `padding`, `margin`）
   - 字体大小和行高
   - 颜色和对比度
   - 动画时长和缓动函数（不涉及流萤的动画）

---

## 4. UI 优化切入点（只列方向，不给代码）

### 4.1 布局优化
- **间距**: 调整选择按钮之间的 `gap`，对话框的内边距
- **对齐**: 对话框的左右对齐，选择按钮的居中方式
- **密度**: 调整文字行高，增加或减少空白区域

### 4.2 字体与可读性
- **字体大小**: 对话文字 (`text-xl md:text-2xl`)、选择按钮文字 (`text-lg`)
- **字重**: 标题、对话、按钮的 `font-weight`
- **字间距**: `tracking-widest` / `tracking-wider` 的调整
- **行高**: `leading-relaxed` 的数值调整

### 4.3 颜色与对比度
- **背景**: `bg-slate-900` → 可调整为其他深色
- **文字**: `text-white` / `text-gray-100` → 可调整对比度
- **边框**: `border-white/20` → 可调整透明度和颜色
- **渐变**: `bg-gradient-to-b from-black/20` → 可调整渐变方向和透明度

### 4.4 动效与反馈（不涉及流萤）
- **选择按钮**: `hover:scale-[1.01]` → 可调整缩放比例
- **对话显示**: `TypingText` 的打字速度 (`speed={30}`)
- **背景动画**: `animate-[subtle-zoom_30s_infinite_alternate]` → 可调整时长
- **过渡效果**: `transition-all duration-300` → 可调整时长和缓动函数

### 4.5 响应式优化
- **断点**: `md:` / `lg:` 断点的使用
- **移动端**: 在小屏幕上的布局调整（不影响流萤的固定定位）

---

## 5. 总结

### 流萤组件的关键特性
1. **最高层级**: `z-index: 999999`，确保始终在最上层
2. **固定定位**: `position: fixed`，不受页面滚动影响
3. **事件隔离**: 使用 `e.stopPropagation()` 防止事件冒泡
4. **独立渲染**: 与 `GameUI` 同级，不依赖游戏状态

### 安全优化建议
- ✅ 可以优化 `GameUI` 的所有视觉样式
- ✅ 可以调整全局字体、颜色、间距
- ✅ 可以修改背景图片的滤镜和动画
- ❌ 不要修改 `FireflyPet.tsx` 的任何代码
- ❌ 不要改变流萤的挂载位置和渲染顺序
- ❌ 不要修改全局 `overflow: hidden` 规则

### 注意事项
- 流萤使用 `position: fixed`，理论上不受页面布局影响
- 但如果修改了窗口尺寸计算逻辑，可能影响流萤的初始位置
- 建议在修改任何全局样式前，先测试流萤的交互是否正常

---

**报告结束**


