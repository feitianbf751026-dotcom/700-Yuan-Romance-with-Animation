# 商业化上线前技术审计报告

> **审计时间**: 2024-12-21  
> **审计范围**: 法务/合规/版权、安全/隐私、运维/可用性、工程质量/发布门槛  
> **审计类型**: 静态代码审查（0 diff，仅报告）

---

## 1. 一句话结论

**结论**: **YES with conditions**（有条件通过）

**说明**: 项目核心功能完整，安全风险可控，但存在**3个阻塞项**（隐私合规、生产环境调试代码、TypeScript严格性）和**5个警告项**（第三方服务依赖、许可证确认、测试缺失等），需在发布前完成修复。

---

## 2. 上线就绪度评分

**总分**: **6.5/10**

### 分项评分
- **法务/合规/版权**: 7/10（依赖库许可证清晰，但第三方服务商业使用需确认）
- **安全/隐私**: 6/10（无硬编码密钥，但有隐私合规风险）
- **运维/可用性**: 8/10（断网降级完善，静态托管友好）
- **工程质量/发布门槛**: 5/10（缺少测试、TypeScript严格性不足、生产环境调试代码）

---

## 3. 阻塞项（Blockers）

### 🔴 B1: 第三方背景服务隐私合规风险（Critical）

**问题**: 项目将用户剧情内容（`backgroundDescription`）发送到第三方服务 `image.pollinations.ai`，存在隐私合规风险。

**位置**: 
- `components/GameUI.tsx:98` - 动态生成背景描述并发送
- `components/StartScreen.tsx:15` - 硬编码背景URL

**风险**: 
- **GDPR/CCPA合规**: 未告知用户数据会发送到第三方
- **隐私政策缺失**: 无明确说明背景描述会发送到第三方服务
- **数据泄露**: 第三方服务可能记录/分析用户剧情内容

**必须做什么**:
1. **立即**: 在用户协议/隐私政策中明确说明"背景描述会发送到第三方服务 `image.pollinations.ai`"
2. **立即**: 在应用启动时显示隐私提示（可选：用户同意后继续）
3. **建议**: 检查 `pollinations.ai` 的服务条款，确认商业使用是否允许，是否有数据保留政策

**建议完成顺序**: P0（发布前必须完成）

---

### 🔴 B2: 生产环境存在调试代码，影响性能与隐私（Critical）

**问题**: 生产环境存在大量 `console.log/warn/error` 输出，可能影响性能并泄露内部状态。

**位置**: 
- `components/FireflyPet.tsx`: 24处（68, 71, 73, 173, 194, 196, 215, 227, 251, 256, 270, 282, 343, 347, 354, 360, 369, 415, 431, 497, 539, 598, 611, 624）
- `App.tsx`: 2处（33, 64）
- `services/pathMatcher/utils.ts`: 2处（26, 44）

**风险**: 
- **性能**: console输出在部分浏览器中可能影响性能（特别是移动端）
- **隐私**: 调试信息可能泄露游戏状态、用户选择路径等敏感信息
- **专业度**: 生产环境不应有调试代码

**必须做什么**:
1. **立即**: 使用环境变量控制console输出：`if (import.meta.env.DEV) { console.log(...) }`
2. **或**: 使用构建工具移除生产环境console（如 `vite-plugin-remove-console`）
3. **验证**: 构建后检查 `dist/` 目录，确认无console输出

**建议完成顺序**: P0（发布前必须完成）

---

### 🔴 B3: TypeScript严格性不足，存在类型安全风险（Major）

**问题**: `tsconfig.json` 中 `strict: false`，且 `noImplicitAny: false`，存在类型安全风险。

**位置**: `tsconfig.json:14-15`

**风险**: 
- **类型安全**: 可能隐藏潜在的类型错误
- **维护性**: 代码重构时容易引入bug
- **代码质量**: 不符合TypeScript最佳实践

**必须做什么**:
1. **立即**: 启用 `strict: true` 和 `noImplicitAny: true`
2. **修复**: 修复所有类型错误（预计需要处理 `any` 类型使用）
3. **验证**: 运行 `tsc --noEmit` 确认无类型错误

**建议完成顺序**: P0（发布前必须完成，或至少启用 `noImplicitAny: true`）

---

## 4. 非阻塞项（Warnings）

### 🟠 W1: 第三方背景服务商业使用许可需确认（Major）

**问题**: 使用 `image.pollinations.ai` 生成背景图，需确认商业使用是否允许。

**位置**: 
- `components/GameUI.tsx:98`
- `components/StartScreen.tsx:15`

**风险**: 
- **法律风险**: 如服务条款禁止商业使用，可能面临法律风险
- **服务稳定性**: 第三方服务可能随时变更政策或停止服务

**建议做什么**:
1. **检查**: 查阅 `pollinations.ai` 的服务条款，确认商业使用许可
2. **备案**: 如允许商业使用，在项目文档中记录许可条款
3. **备选方案**: 准备本地静态背景图作为备选方案

**优先级**: P1（发布前建议完成）

---

### 🟠 W2: 缺少测试脚本，无法验证构建质量（Major）

**问题**: `package.json` 中无 `test` 或 `lint` 脚本，无法自动化验证代码质量。

**位置**: `package.json:6-9`

**风险**: 
- **质量保证**: 无法自动化检测代码问题
- **回归风险**: 修改代码后无法快速验证是否引入bug

**建议做什么**:
1. **添加**: `"lint": "eslint . --ext .ts,.tsx"` 和 `"typecheck": "tsc --noEmit"`
2. **CI/CD**: 在CI/CD流程中运行lint和typecheck
3. **可选**: 添加单元测试（如使用Vitest）

**优先级**: P2（发布后建议添加）

---

### 🟡 W3: Google Fonts商业使用需确认（Minor）

**问题**: 使用 Google Fonts（Noto Serif SC, Inter），需确认商业使用许可。

**位置**: `index.html:8`

**风险**: 
- **法律风险**: 如字体许可禁止商业使用，可能面临法律风险（但Google Fonts通常允许商业使用）

**建议做什么**:
1. **确认**: 查阅 Google Fonts 许可条款（通常为 SIL Open Font License，允许商业使用）
2. **备案**: 在项目文档中记录字体许可信息

**优先级**: P2（发布前建议确认）

---

### 🟡 W4: StartScreen背景请求无缓存，每次启动都请求第三方（Minor）

**问题**: `StartScreen.tsx` 每次启动都会请求第三方背景，即使URL固定，也应缓存结果。

**位置**: `components/StartScreen.tsx:15-16`

**风险**: 
- **性能**: 重复请求浪费带宽
- **隐私**: 每次启动都向第三方发送请求

**建议做什么**:
1. **添加**: 使用 `sessionStorage` 缓存固定URL的背景图
2. **或**: 复用 `GameUI.tsx` 的缓存机制

**优先级**: P2（发布后建议优化）

---

### 🟡 W5: 缺少错误边界（Error Boundary），可能导致白屏（Minor）

**问题**: 无 React Error Boundary，组件错误可能导致整个应用白屏。

**位置**: 全局（`App.tsx`）

**风险**: 
- **可用性**: 单个组件错误可能导致整个应用崩溃
- **用户体验**: 用户看到白屏而非错误提示

**建议做什么**:
1. **添加**: 在 `App.tsx` 中添加 Error Boundary 组件
2. **降级**: 错误时显示友好的错误提示，而非白屏

**优先级**: P2（发布后建议添加）

---

## 5. 发布清单（Release Checklist）

### 法务/合规/版权
- [ ] **B1**: 在用户协议/隐私政策中明确说明背景描述会发送到第三方服务
- [ ] **B1**: 在应用启动时显示隐私提示（可选：用户同意后继续）
- [ ] **W1**: 确认 `pollinations.ai` 商业使用许可，并在文档中记录
- [ ] **W3**: 确认 Google Fonts 商业使用许可（通常允许，但需确认）
- [ ] 检查所有依赖库许可证（已完成：均为MIT/Apache-2.0/ISC，无GPL传染性风险）

### 安全/隐私
- [ ] **B2**: 移除或条件化所有生产环境console输出
- [ ] **B2**: 构建后验证 `dist/` 目录无console输出
- [ ] 确认无硬编码密钥/Token（已完成：无硬编码密钥）
- [ ] 确认无XSS风险（已完成：React自动转义，无 `dangerouslySetInnerHTML`）
- [ ] 确认外部请求有超时和降级（已完成：`GameUI.tsx` 有超时和fallback）

### 运维/可用性
- [ ] 确认断网时有降级方案（已完成：渐变fallback）
- [ ] 确认可在静态托管运行（已完成：Vite构建，无后端依赖）
- [ ] 确认构建产物可复现（已完成：`npm run build` 可复现）
- [ ] 测试在不同网络环境下的表现（慢速网络、断网、第三方服务异常）

### 工程质量/发布门槛
- [ ] **B3**: 启用 TypeScript `strict: true` 和 `noImplicitAny: true`
- [ ] **B3**: 修复所有类型错误，运行 `tsc --noEmit` 确认无错误
- [ ] **W2**: 添加 `lint` 和 `typecheck` 脚本（可选，但建议）
- [ ] **W4**: 优化 StartScreen 背景缓存（可选，但建议）
- [ ] **W5**: 添加 Error Boundary（可选，但建议）
- [ ] 确认构建产物大小合理（检查 `dist/` 目录）
- [ ] 确认构建产物无敏感信息泄露（检查 `dist/` 目录）

### 功能验证
- [ ] 测试所有分支路径（Branch A/B/C）正常工作
- [ ] 测试状态变量更新（courage_level, trust_level, guilt_level）正常
- [ ] 测试 earned choices 机制正常（fallback 生效）
- [ ] 测试流萤组件交互正常（拖拽、点击、右键菜单）
- [ ] 测试移动端触控体验（按钮可点、safe-area生效）
- [ ] 测试背景图加载（正常、超时、失败场景）

### 文档
- [ ] 更新 README，说明第三方服务依赖
- [ ] 添加隐私政策/用户协议（如适用）
- [ ] 添加许可证文件（如适用）
- [ ] 添加部署说明（Surge/Vercel）

---

## 6. 附录：详细检查结果

### 6.1 法务/合规/版权检查

#### ✅ 依赖库许可证
- **React**: MIT
- **React-DOM**: MIT
- **Vite**: MIT
- **TypeScript**: Apache-2.0
- **Tailwind CSS**: MIT
- **所有依赖**: 均为 MIT/Apache-2.0/ISC，**无GPL传染性风险**

#### ⚠️ 第三方服务
- **pollinations.ai**: 背景图生成服务
  - **使用位置**: `components/GameUI.tsx:98`, `components/StartScreen.tsx:15`
  - **风险**: 商业使用许可需确认，隐私合规需处理
  - **建议**: 检查服务条款，添加隐私提示

#### ⚠️ 字体
- **Google Fonts** (Noto Serif SC, Inter)
  - **使用位置**: `index.html:8`
  - **风险**: 通常允许商业使用（SIL Open Font License），但需确认
  - **建议**: 查阅许可条款，在文档中记录

### 6.2 安全/隐私检查

#### ✅ 密钥/Token
- **检查结果**: 无硬编码密钥/Token/API Key
- **证据**: 全项目搜索 `API|KEY|TOKEN|SECRET|PASSWORD|AUTH`，无匹配结果（除函数名）

#### ✅ XSS/注入风险
- **检查结果**: 无XSS风险
- **证据**: 
  - 无 `dangerouslySetInnerHTML` 使用
  - 无 `innerHTML` 直接赋值
  - React自动转义用户输入
  - 无 `eval()` 或 `Function()` 使用

#### ✅ 外部请求超时/降级
- **检查结果**: 有超时和降级机制
- **证据**: 
  - `components/GameUI.tsx:7` - `BG_REQUEST_TIMEOUT_MS = 2500`
  - `components/GameUI.tsx:42-61` - `loadImageWithTimeout` 函数
  - `components/GameUI.tsx:6` - `BG_FALLBACK` 渐变背景
  - `components/StartScreen.tsx:10-11` - `fallbackBackground` 渐变背景

#### ⚠️ 数据存储
- **检查结果**: 无 localStorage/sessionStorage/IndexedDB 使用
- **证据**: 游戏状态仅存在内存中（React state），刷新页面后丢失
- **风险**: 无隐私泄露风险，但用户体验可能受影响（无法保存进度）

### 6.3 运维/可用性检查

#### ✅ 断网/服务不可用降级
- **检查结果**: 有降级方案
- **证据**: 
  - 背景请求失败时使用渐变fallback
  - 超时机制（2500ms）确保不会长时间等待

#### ✅ 静态托管友好
- **检查结果**: 可在静态托管运行
- **证据**: 
  - 无后端依赖
  - Vite构建，输出到 `dist/` 目录
  - `vercel.json` 配置SPA路由

#### ✅ 构建产物可复现
- **检查结果**: 构建可复现
- **证据**: 
  - `package.json` 有明确的依赖版本
  - `package-lock.json` 锁定依赖版本
  - `npm run build` 命令可复现构建

### 6.4 工程质量/发布门槛检查

#### ❌ TypeScript严格性
- **检查结果**: `strict: false`, `noImplicitAny: false`
- **位置**: `tsconfig.json:14-15`
- **风险**: 类型安全不足，可能隐藏潜在错误

#### ❌ 测试脚本
- **检查结果**: 无 `test` 或 `lint` 脚本
- **位置**: `package.json:6-9`
- **风险**: 无法自动化验证代码质量

#### ❌ 生产环境调试代码
- **检查结果**: 存在大量console输出
- **位置**: 
  - `components/FireflyPet.tsx`: 24处
  - `App.tsx`: 2处
  - `services/pathMatcher/utils.ts`: 2处
- **风险**: 性能影响、隐私泄露、专业度问题

#### ⚠️ any类型使用
- **检查结果**: 存在 `any` 类型使用
- **位置**: `services/llmService.ts:2437, 2452` - `nextTurn(history: any[], ...)`
- **风险**: 类型安全不足，但影响范围有限

---

## 7. 风险评估总结

### 高风险项（必须修复）
1. **B1**: 第三方背景服务隐私合规风险
2. **B2**: 生产环境调试代码
3. **B3**: TypeScript严格性不足

### 中风险项（建议修复）
1. **W1**: 第三方背景服务商业使用许可需确认
2. **W2**: 缺少测试脚本

### 低风险项（可选优化）
1. **W3**: Google Fonts商业使用需确认（通常允许）
2. **W4**: StartScreen背景缓存优化
3. **W5**: 缺少Error Boundary

---

## 8. 发布建议

### 立即修复（发布前必须）
1. **B1**: 添加隐私提示，明确说明背景描述会发送到第三方
2. **B2**: 移除或条件化所有生产环境console输出
3. **B3**: 启用TypeScript `strict: true` 或至少 `noImplicitAny: true`

### 建议修复（发布前建议）
1. **W1**: 确认 `pollinations.ai` 商业使用许可
2. **W3**: 确认 Google Fonts 商业使用许可

### 发布后优化（可选）
1. **W2**: 添加测试脚本
2. **W4**: 优化 StartScreen 背景缓存
3. **W5**: 添加 Error Boundary

---

**审计完成时间**: 2024-12-21  
**审计员**: 商业化上线前技术审计员 + 合规/安全/运维检查员  
**下次审计建议**: 完成所有阻塞项后再次审计

