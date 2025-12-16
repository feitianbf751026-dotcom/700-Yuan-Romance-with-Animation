# 七百元 - 交互式视觉小说游戏

一个基于 React + TypeScript 开发的交互式视觉小说游戏，讲述一个关于"700元交易"的复杂情感故事。

## 🎮 游戏特色

- **多分支剧情系统**：序章3种选择，影响后续剧情走向
- **5种不同结局**：真爱、挚友、遗憾、救赎、陌路
- **状态追踪系统**：好感度、勇气值、诚实度影响结局
- **精美视觉效果**：新海诚风格背景图，打字机效果，流畅动画
- **沉浸式体验**：电影级光影效果，响应式设计

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 `http://localhost:5173` 查看游戏

### 构建生产版本

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

## 📁 项目结构

```
react-ts-kousbaty/
├── App.tsx                 # 主应用组件
├── index.tsx               # React入口
├── types.ts                # TypeScript类型定义
├── components/             # UI组件
│   ├── StartScreen.tsx    # 开始界面
│   ├── GameUI.tsx          # 游戏主界面
│   └── TypingText.tsx      # 打字机效果组件
└── services/
    └── llmService.ts       # 游戏逻辑服务（状态机+场景数据）
```

## 🎯 游戏机制

### 分支系统

- **序章**：3种选择方式（直接逃跑/发消息道歉/犹豫后离开）
- **第一章**：根据序章选择进入不同分支（1A/1B/1C）
- **后续章节**：根据玩家选择累积状态值
- **结局判定**：根据好感度、诚实度、勇气值等属性决定结局

### 结局类型

1. **💝 真爱结局**：高好感 + 高诚实 + 坦白过
2. **🤝 挚友结局**：中好感 + 友谊分支
3. **💔 遗憾结局**：默认结局
4. **✨ 救赎结局**：中好感 + 高诚实
5. **😐 陌路结局**：低好感或冷漠分支

## 🛠️ 技术栈

- **React 18** - UI框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具
- **Tailwind CSS** - 样式框架
- **Pollinations.ai** - 背景图生成

## 📦 部署

### Vercel 部署

1. 将项目推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 自动部署完成

详细部署说明请查看 [DEPLOY.md](./DEPLOY.md)

## 📝 开发说明

### 添加新场景

在 `services/llmService.ts` 中：
1. 定义新的 `SceneData` 常量
2. 在 `getNextScene()` 中添加场景切换逻辑
3. 在 `updateState()` 中添加状态更新逻辑

### 修改结局

在 `getEnding()` 方法中调整判定条件，或添加新的结局场景。

## 📄 许可证

MIT License

## 🙏 致谢

- 背景图生成：[Pollinations.ai](https://pollinations.ai)
- 字体：[Google Fonts](https://fonts.google.com)

---

**注意**：这是一个交互式视觉小说游戏，包含成人主题内容，请谨慎游玩。






