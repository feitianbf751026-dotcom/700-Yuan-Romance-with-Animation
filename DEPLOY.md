# 部署指南

本指南将帮助你将项目部署到 GitHub 和 Vercel。

## 📋 前置要求

- Git 已安装
- GitHub 账号
- Vercel 账号（可使用 GitHub 账号登录）

## 🚀 部署步骤

### 1. 准备 Git 仓库

#### 初始化 Git（如果还没有）

```bash
git init
```

#### 添加所有文件

```bash
git add .
```

#### 提交更改

```bash
git commit -m "Initial commit: 七百元视觉小说游戏"
```

### 2. 创建 GitHub 仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角 **+** → **New repository**
3. 填写仓库信息：
   - **Repository name**: `700-yuan-romance`（或你喜欢的名字）
   - **Description**: `交互式视觉小说游戏 - 七百元`
   - **Visibility**: 选择 Public 或 Private
   - **不要**勾选 "Initialize this repository with a README"（因为我们已经有了）
4. 点击 **Create repository**

### 3. 推送代码到 GitHub

GitHub 会显示推送命令，类似这样：

```bash
git remote add origin https://github.com/你的用户名/700-yuan-romance.git
git branch -M main
git push -u origin main
```

**注意**：将 `你的用户名` 替换为你的 GitHub 用户名。

### 4. 部署到 Vercel

#### 方法一：通过 Vercel 网站（推荐）

1. 访问 [Vercel](https://vercel.com)
2. 使用 GitHub 账号登录
3. 点击 **Add New Project**
4. 选择你刚创建的 GitHub 仓库
5. 配置项目：
   - **Framework Preset**: Vite（应该自动检测）
   - **Root Directory**: `./`（默认）
   - **Build Command**: `npm run build`（默认）
   - **Output Directory**: `dist`（默认）
   - **Install Command**: `npm install`（默认）
6. 点击 **Deploy**

#### 方法二：通过 Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 在项目目录下运行
vercel

# 按照提示操作
```

### 5. 等待部署完成

- Vercel 会自动构建和部署你的项目
- 通常需要 1-3 分钟
- 部署完成后会显示一个 URL，例如：`https://700-yuan-romance.vercel.app`

### 6. 自定义域名（可选）

1. 在 Vercel 项目设置中
2. 进入 **Settings** → **Domains**
3. 添加你的自定义域名

## 🔧 配置说明

### vercel.json

项目已包含 `vercel.json` 配置文件，包含以下设置：

- **构建命令**: `npm run build`
- **输出目录**: `dist`
- **路由重写**: 所有路由指向 `index.html`（支持 SPA）

### 环境变量

当前项目不需要环境变量。如果将来需要，可以在 Vercel 项目设置中添加。

## 📝 后续更新

每次推送到 GitHub 的 `main` 分支，Vercel 会自动重新部署：

```bash
git add .
git commit -m "更新说明"
git push
```

## ❓ 常见问题

### 构建失败

1. 检查 `package.json` 中的依赖是否正确
2. 查看 Vercel 构建日志中的错误信息
3. 确保 `vercel.json` 配置正确

### 页面空白

1. 检查路由配置（`vercel.json` 中的 `rewrites`）
2. 确保 `dist/index.html` 存在
3. 检查浏览器控制台错误

### 样式丢失

1. 确保 Tailwind CSS 正确配置
2. 检查 `index.html` 中的 Tailwind CDN 链接

## 🎉 完成！

部署完成后，你的游戏就可以通过 Vercel 提供的 URL 访问了！

---

**提示**：Vercel 的免费套餐已经足够运行这个项目，包括：
- 无限部署
- 自动 HTTPS
- 全球 CDN
- 自动构建和部署

