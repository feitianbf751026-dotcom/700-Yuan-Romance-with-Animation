# 700元视觉小说游戏 - 工作日志

## 项目概述

这是一个基于 React + TypeScript 开发的交互式视觉小说游戏，讲述一个关于"700元交易"的复杂情感故事。项目集成了桌面宠物系统（流萤角色），实现了完整的动画播放、交互功能和状态管理。

## 技术栈

### 前端框架
- **React 18.2.0** - 用于构建用户界面
- **TypeScript 5.2.2** - 提供类型安全和更好的开发体验
- **Vite 5.2.0** - 现代化的构建工具，提供快速的开发服务器和优化的生产构建

### 样式方案
- **Tailwind CSS 3.4.3** - 实用优先的 CSS 框架，通过 CDN 引入
- **PostCSS 8.4.38** - CSS 后处理器
- **Autoprefixer 10.4.19** - 自动添加浏览器前缀

### 部署平台
- **Surge.sh** - 静态网站托管服务，用于生产环境部署

## 项目结构

```
react-ts-kousbaty/
├── components/           # React 组件
│   ├── FireflyPet.tsx  # 流萤桌面宠物组件
│   ├── GameUI.tsx      # 游戏主界面组件
│   ├── StartScreen.tsx # 开始界面组件
│   └── TypingText.tsx  # 打字机效果文本组件
├── services/            # 业务逻辑服务
│   └── llmService.ts   # 游戏逻辑、场景定义、状态管理
├── types.ts            # TypeScript 类型定义
├── App.tsx             # 主应用组件
├── index.tsx           # 应用入口
├── vite.config.ts      # Vite 配置文件
├── tsconfig.json       # TypeScript 配置
└── public/             # 静态资源
    └── firefly/        # 流萤角色动画资源
        ├── Standby/    # 待机动画帧
        ├── left/       # 向左行走动画帧
        ├── right/      # 向右行走动画帧
        ├── eat/        # 喂食动画帧
        ├── sleep/      # 睡觉动画帧
        ├── Love/       # 爱心动作动画帧
        └── mention/    # 提起动作动画帧
```

## 核心功能实现

### 1. 视觉小说系统

#### 场景管理
- **多分支剧情系统**：支持最多 10 层的分支选择
- **路径匹配算法**：通过 `matchSceneByPath` 函数根据玩家选择路径匹配对应场景
- **状态追踪**：记录玩家的好感度、勇气值、诚实度、亲密度等属性

#### 亲密度计算算法
实现了复杂的亲密度计算系统，考虑以下因素：
- **协同效应**：多个正面选择会相互增强
- **收益递减**：连续相同类型的选择效果递减
- **情感平衡**：不同类型的选择需要平衡
- **关系类型交互**：根据当前关系类型调整计算权重

```typescript
// 亲密度计算核心逻辑
calculateIntimacy() {
  // 1. 基础亲密度计算
  // 2. 协同效应加成
  // 3. 收益递减处理
  // 4. 情感平衡调整
  // 5. 关系类型权重应用
}
```

#### 场景数据结构
```typescript
interface SceneData {
  narrative: string;           // 叙述文本
  dialogue?: string;           // 对话文本
  speaker?: string;            // 说话者
  choices: Choice[];           // 选择项数组
  backgroundDescription?: string; // 背景描述（用于生成背景图）
  endingType?: 'good' | 'bad' | 'neutral'; // 结局类型
}
```

### 2. 流萤桌面宠物系统

#### 动画系统
- **帧动画播放**：使用 `setInterval` 实现逐帧播放
- **动作配置**：每个动作包含帧数组、循环标志、持续时间
- **状态管理**：使用 React Hooks 管理当前动作、当前帧、位置等状态

#### 图片预加载机制
为了解决切换动作时的闪烁问题，实现了完整的图片预加载系统：

```typescript
// 1. 组件挂载时预加载所有图片
useEffect(() => {
  const preloadAllImages = async () => {
    // 分批加载所有动作的所有帧
    // 使用 Image 对象预加载并缓存
  };
}, []);

// 2. 图片缓存管理
const imageCacheRef = useRef<Map<string, HTMLImageElement>>(new Map());

// 3. 透明度控制
style={{
  opacity: imageCacheRef.current.has(currentImage) ? 1 : 0.3,
  transition: 'opacity 0.1s ease-in-out',
}
```

#### 交互功能

**左键点击**：
- **头部区域**（顶部 1/4）：触发爱心动作（love）
- **其他区域**：触发提起动作（mention）并开始拖拽

**右键点击**：
- 显示上下文菜单，包含三个选项：
  - **行走**：持续行走，碰到屏幕边缘自动反向，再次点击停止
  - **喂食**：持续喂食动画，再次点击停止
  - **睡觉**：持续睡觉动画，再次点击停止

**拖拽功能**：
- 使用全局鼠标事件监听器实现平滑拖拽
- 限制在屏幕范围内移动
- 拖拽时显示提起动画

#### 行走逻辑实现
```typescript
const handleWalk = useCallback(() => {
  // 1. 如果正在行走，则停止
  if (isMoving && walkingDirection) {
    setIsMoving(false);
    setWalkingDirection(null);
    setCurrentAction('standby');
    return;
  }
  
  // 2. 开始行走
  setIsMoving(true);
  const direction = Math.random() > 0.5 ? 'left' : 'right';
  setWalkingDirection(direction);
  setCurrentAction(direction);
  
  // 3. 持续移动，碰到边缘反向
  moveTimerRef.current = setInterval(() => {
    // 更新位置
    // 检查边缘碰撞
    // 反向行走方向
  }, 50);
}, [isMoving, walkingDirection]);
```

### 3. 打字机效果

实现了逐字显示文本的打字机效果，提升阅读体验：

```typescript
const TypingText: React.FC<TypingTextProps> = ({ text, speed = 30, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
        if (onComplete) onComplete();
      }
    }, speed);
    
    return () => clearInterval(timer);
  }, [text, speed, onComplete]);
  
  return <span>{displayedText}</span>;
};
```

### 4. 动态背景生成

使用 Pollinations.ai API 根据场景描述动态生成背景图片：

```typescript
const stylePrompt = 'Makoto Shinkai style, anime masterpiece, 8k, highly detailed, emotional lighting, cinematic';
const encoded = encodeURIComponent(`${scene.backgroundDescription}, ${stylePrompt}`);
const bgImage = `https://image.pollinations.ai/prompt/${encoded}?width=1920&height=1080&nologo=true&seed=${Math.floor(Math.random() * 1000)}`;
```

## 关键技术实现细节

### 1. 状态管理

使用 React Hooks 进行状态管理：
- `useState`：管理组件状态（位置、动作、帧数等）
- `useEffect`：处理副作用（动画播放、事件监听、图片预加载）
- `useCallback`：优化函数引用，避免不必要的重渲染
- `useRef`：存储定时器引用和图片缓存

### 2. 事件处理

**全局事件监听**：
- 拖拽功能使用 `window.addEventListener` 监听全局鼠标事件
- 确保即使鼠标移出组件也能继续拖拽

**事件阻止传播**：
- 使用 `e.preventDefault()` 和 `e.stopPropagation()` 防止事件冒泡
- 确保流萤组件的交互不被游戏界面拦截

**右键菜单实现**：
- 使用 React 状态管理菜单显示位置
- 点击外部区域自动关闭菜单

### 3. 性能优化

**图片预加载**：
- 组件挂载时预加载所有图片，避免运行时加载延迟
- 使用 Map 缓存已加载的图片，避免重复加载

**动画优化**：
- 使用 `requestAnimationFrame` 的替代方案（setInterval）
- 及时清理定时器，避免内存泄漏

**渲染优化**：
- 使用 `key` 属性强制图片重新渲染
- 使用条件渲染减少不必要的 DOM 节点

### 4. 部署配置

**Vite 配置**：
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/', // 使用绝对路径，确保 public 目录资源正确加载
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
```

**Surge 部署**：
- 构建输出目录：`dist`
- 部署命令：`surge dist 700-yuan-romance.surge.sh`
- 支持 SPA 路由：通过 `_redirects` 文件配置

## 开发过程中的问题与解决方案

### 问题1：动画在部署后不播放

**原因**：
- 事件被其他元素拦截
- z-index 层级不够高
- 图片路径问题

**解决方案**：
- 提高 FireflyPet 组件的 z-index 到 999999
- 添加 `pointerEvents: 'auto'` 确保事件能正确触发
- 修改 `vite.config.ts` 中的 `base` 配置为 `'/'`

### 问题2：切换动作时图片闪烁

**原因**：
- 新动作的图片尚未加载完成
- 图片切换时出现短暂空白

**解决方案**：
- 实现图片预加载机制，在组件挂载时预加载所有图片
- 使用图片缓存 Map 存储已加载的图片
- 添加透明度过渡效果，未加载完成时显示半透明

### 问题3：行走动画变成平移

**原因**：
- 动画帧切换逻辑有问题
- 定时器没有正确启动

**解决方案**：
- 修复动画播放逻辑，确保定时器正确启动
- 添加调试日志追踪动画状态
- 优化帧切换算法

### 问题4：持续动作无法停止

**原因**：
- 动作切换逻辑只检查 `standby` 状态
- 没有处理正在执行的动作

**解决方案**：
- 修改动作切换逻辑，支持从当前动作切换到新动作
- 对于持续动作（喂食、睡觉），第二次点击时停止并返回待机

## 项目特色

1. **完整的剧情系统**：10 层分支剧情，多个结局
2. **智能亲密度算法**：考虑多种因素的复杂计算系统
3. **流畅的动画系统**：帧动画播放，支持循环和非循环动作
4. **丰富的交互功能**：点击、拖拽、右键菜单等多种交互方式
5. **图片预加载优化**：解决切换动作时的闪烁问题
6. **响应式设计**：适配不同屏幕尺寸

## 未来改进方向

1. **Live2D 集成**：集成 Live2D 模型，实现更生动的角色表现
2. **音效系统**：添加背景音乐和音效
3. **存档系统**：实现游戏进度保存和读取
4. **成就系统**：添加成就收集功能
5. **多语言支持**：支持多语言切换
6. **移动端适配**：优化移动端体验

## 开发时间线

- **初期开发**：搭建项目结构，实现基础视觉小说功能
- **剧情扩展**：添加 9-10 层场景，完善分支剧情
- **流萤集成**：集成桌面宠物系统，实现动画播放
- **交互优化**：实现拖拽、点击、右键菜单等功能
- **性能优化**：实现图片预加载，解决闪烁问题
- **部署上线**：配置部署流程，上线到 Surge.sh

## 总结

本项目成功实现了一个功能完整的交互式视觉小说游戏，集成了桌面宠物系统。通过 React + TypeScript 构建了可维护的代码结构，使用 Vite 实现了快速的开发体验，通过图片预加载等技术优化了用户体验。项目展示了现代前端开发的最佳实践，包括状态管理、事件处理、性能优化等方面。

---

**项目地址**：https://700-yuan-romance.surge.sh  
**GitHub 仓库**：https://github.com/feitianbf751026-dotcom/700-Yuan-Romance-with-Animation.git

