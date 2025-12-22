# 文档资产索引清单

> **扫描时间**: 2024年
> **扫描范围**: 
> - `D:\react-ts-kousbaty\` (根目录)
> - `D:\react-ts-kousbaty\docs\` (docs 目录)

---

## 分类索引清单

### [README] 项目入口说明

| 相对路径 | 文件名 | 摘要 | 推荐动作 | 最终状态 |
|---------|--------|------|---------|---------|
| `README.md` | README.md | 项目主 README，包含游戏特色、技术栈和部署说明 | KEEP | KEPT |

---

### [DESIGN] 设计说明 / 叙事系统 / 架构规范

| 相对路径 | 文件名 | 摘要 | 推荐动作 | 最终状态 |
|---------|--------|------|---------|---------|
| `docs/HANDOFF_ROUTE_STABILITY.md` | HANDOFF_ROUTE_STABILITY.md | Route Stability 交接文档，包含实现清单和检查项 | KEEP | KEPT |
| `docs/story_refactor_plan.md` | story_refactor_plan.md | 剧情树重构路线图，包含目标、策略和可回滚方案 | KEEP | KEPT |
| `FIREFLY_ACTION_DESIGN.md` | FIREFLY_ACTION_DESIGN.md | 流萤动作系统设计文档，基于层级与亲密度 | KEEP | KEPT |
| `STORY_MINDMAP.md` | STORY_MINDMAP.md | 700元视觉小说详细剧情思维导图，包含完整剧情树结构 | KEEP | KEPT |
| `docs/BRANCH_A_EARNED_CHOICES.md` | BRANCH_A_EARNED_CHOICES.md | Branch A 的 earned choices 规则设计，包含 requires 条件和 fallback 路径 | KEEP | KEPT |
| `docs/BRANCH_A_STATE_VARIABLE_DESIGN.md` | BRANCH_A_STATE_VARIABLE_DESIGN.md | Branch A 的 courage_level 状态变量设计，包含触发点和呈现差异点 | KEEP | KEPT |
| `docs/BRANCH_B_EARNED_CHOICES.md` | BRANCH_B_EARNED_CHOICES.md | Branch B 的 earned choices 规则设计，包含 trust_level 门槛和历史条件 | KEEP | KEPT |
| `docs/BRANCH_B_STATE_VARIABLE_DESIGN.md` | BRANCH_B_STATE_VARIABLE_DESIGN.md | Branch B 的 trust_level 状态变量设计，包含触发点和呈现差异点 | KEEP | KEPT |
| `docs/BRANCH_C_EARNED_CHOICES.md` | BRANCH_C_EARNED_CHOICES.md | Branch C 的 earned choices 规则设计，基于 guilt_level 条件 | KEEP | KEPT |
| `docs/BRANCH_C_GUILT_LEVEL_DESIGN.md` | BRANCH_C_GUILT_LEVEL_DESIGN.md | Branch C 的 guilt_level 设计规则，包含定义、触发点和呈现差异 | KEEP | KEPT |

---

### [IMPLEMENTATION] 实现总结 / 改造记录 / 修复总结

| 相对路径 | 文件名 | 摘要 | 推荐动作 | 最终状态 |
|---------|--------|------|---------|---------|
| `docs/BRANCH_A_IMPLEMENTATION_SUMMARY.md` | BRANCH_A_IMPLEMENTATION_SUMMARY.md | Branch A 结构优化与可玩性改造实现总结，包含完整改动 | KEEP | KEPT |
| `docs/BRANCH_A_COURAGE_SSOT_FIX_SUMMARY.md` | BRANCH_A_COURAGE_SSOT_FIX_SUMMARY.md | Branch A courage_level SSOT 修复总结，统一更新位置 | KEEP | KEPT |
| `docs/ARCHIVE/BRANCH_A_COURAGE_SSOT_FIX.md` | BRANCH_A_COURAGE_SSOT_FIX.md | Branch A courage_level SSOT 修复说明，列出所有写入点 | ARCHIVE | ARCHIVED |
| `docs/BRANCH_B_IMPLEMENTATION_SUMMARY.md` | BRANCH_B_IMPLEMENTATION_SUMMARY.md | Branch B 结构优化与可玩性改造实现总结，包含完整改动 | KEEP | KEPT |
| `docs/BRANCH_C_IMPLEMENTATION_SUMMARY.md` | BRANCH_C_IMPLEMENTATION_SUMMARY.md | Branch C 三步改进实现总结，包含合并、guilt_level、earned choices | KEEP | KEPT |
| `docs/BRANCH_C_CODE_CLEANUP.md` | BRANCH_C_CODE_CLEANUP.md | Branch C 代码清理与加固总结，包含推荐方案和小优化 | KEEP | KEPT |
| `docs/FIX_BRANCH1C_STRICT_MATCHER.md` | FIX_BRANCH1C_STRICT_MATCHER.md | Branch1C 严格匹配函数修复说明，从 hasToken 改为 lastChoice 精确匹配 | KEEP | KEPT |
| `docs/NARRATIVE_VARIANTS_IMPLEMENTATION.md` | NARRATIVE_VARIANTS_IMPLEMENTATION.md | 场景呈现差异层实现总结，根据状态变量返回不同 narrative | KEEP | KEPT |
| `docs/UI_SECONDARY_REFINEMENT.md` | UI_SECONDARY_REFINEMENT.md | UI 界面二次精修报告，提升视觉稳定性和高级感 | KEEP | KEPT |

---

### [ANALYSIS] 扫描导出 / 映射表 / 数据统计

| 相对路径 | 文件名 | 摘要 | 推荐动作 | 最终状态 |
|---------|--------|------|---------|---------|
| `docs/ARCHIVE/BRANCH_A_STRICT_MATCHER_EXPORT.md` | BRANCH_A_STRICT_MATCHER_EXPORT.md | Branch A Strict Matcher 映射导出，包含 depth 1-9 的完整映射表 | ARCHIVE | ARCHIVED |
| `docs/ARCHIVE/BRANCH_A_MERGE_DUPLICATES.md` | BRANCH_A_MERGE_DUPLICATES.md | Branch A 重复映射合并方案，识别并合并假分支 | ARCHIVE | ARCHIVED |
| `docs/ARCHIVE/BRANCH_B_STRICT_MATCHER_EXPORT.md` | BRANCH_B_STRICT_MATCHER_EXPORT.md | Branch B Strict Matcher 映射导出，包含 depth 1-9 的完整映射表 | ARCHIVE | ARCHIVED |
| `docs/ARCHIVE/BRANCH_B_MERGE_DUPLICATES.md` | BRANCH_B_MERGE_DUPLICATES.md | Branch B 重复映射合并方案，识别并合并假分支 | ARCHIVE | ARCHIVED |
| `docs/ARCHIVE/BRANCH_C_STRICT_MATCHER_EXPORT.md` | BRANCH_C_STRICT_MATCHER_EXPORT.md | Branch C Strict Matcher 映射导出，包含 depth 1-9 的完整映射表和场景证据 | ARCHIVE | ARCHIVED |
| `docs/BRANCH_C_MERGE_DUPLICATES.md` | BRANCH_C_MERGE_DUPLICATES.md | Branch C 重复映射合并方案，识别并合并假分支 | ARCHIVE | KEPT（存在引用风险） |
| `docs/TRASH/STRICT_MATCHER_MAPPINGS_DEPTH1_5.md` | STRICT_MATCHER_MAPPINGS_DEPTH1_5.md | Strict Matcher Choice → Scene 映射表，覆盖 A/B/C 三个分支 depth 1-5（已被各分支完整导出替代） | DELETE_CANDIDATE | MOVED_TO_TRASH |
| `docs/ARCHIVE/story_audit.md` | story_audit.md | 剧情树审计报告，包含扫描范围和统计概览 | ARCHIVE | ARCHIVED |
| `FINAL_CHECK_SUMMARY.md` | FINAL_CHECK_SUMMARY.md | 节点结构与剧情全面检查最终总结，采用多角度 AI 检查方法 | ARCHIVE | KEPT（存在引用风险） |
| `docs/UI_FIREFLY_IMPACT_REPORT.md` | UI_FIREFLY_IMPACT_REPORT.md | 页面结构与流萤影响范围报告，为 UI/视觉优化提供安全边界 | KEEP | KEPT |

---

### [LOG] 工作日志 / 决策日志

| 相对路径 | 文件名 | 摘要 | 推荐动作 | 最终状态 |
|---------|--------|------|---------|---------|
| `WORK_LOG.md` | WORK_LOG.md | 700元视觉小说游戏完整工作日志，包含项目概述和开发记录 | KEEP | KEPT |

---

### [TEMP] 中间产物 / 重复内容 / 可被替代

*（当前无此类文件）*

---

### [UNKNOWN] 无法判断

*（当前无此类文件）*

---

### [PROMPT] Cursor/LLM 提示词与工作流

*（当前无此类文件）*

---

## 统计汇总

| 分类 | 数量 | 说明 |
|------|------|------|
| **README** | 1 | 项目入口说明 |
| **DESIGN** | 10 | 设计说明 / 叙事系统 / 架构规范 |
| **IMPLEMENTATION** | 9 | 实现总结 / 改造记录 / 修复总结 |
| **ANALYSIS** | 10 | 扫描导出 / 映射表 / 数据统计 |
| **LOG** | 1 | 工作日志 / 决策日志 |
| **TEMP** | 0 | 中间产物 / 重复内容 / 可被替代 |
| **UNKNOWN** | 0 | 无法判断 |
| **PROMPT** | 0 | Cursor/LLM 提示词与工作流 |
| **总计** | **31** | 所有 .md 文件 |

---

## 推荐动作统计

| 推荐动作 | 数量 | 说明 |
|---------|------|------|
| **KEEP** | 21 | 保留，重要文档 |
| **ARCHIVE** | 9 | 归档，阶段性报告和扫描导出 |
| **DELETE_CANDIDATE** | 1 | 删除候选，重复内容或已被替代（在 ANALYSIS 分类中） |

---

## 最终状态统计

| 最终状态 | 数量 | 说明 |
|---------|------|------|
| **KEPT** | 23 | 保持原位的文件（包括因引用风险保持的 2 个文件） |
| **ARCHIVED** | 7 | 已移动到 `docs/ARCHIVE/` 的文件 |
| **MOVED_TO_TRASH** | 1 | 已移动到 `docs/TRASH/` 的文件 |

---

## 备注

1. **清理完成**: 已根据推荐动作完成文件整理，详见 `docs/CLEANUP_CHANGELOG.md`。

2. **引用风险**: 以下文件因被其他文档引用，保持 KEPT 状态：
   - `FINAL_CHECK_SUMMARY.md` - 被 `STORY_MINDMAP.md` 和 `WORK_LOG.md` 引用
   - `docs/BRANCH_C_MERGE_DUPLICATES.md` - 被 `docs/BRANCH_C_IMPLEMENTATION_SUMMARY.md` 引用

3. **文档维护**: 建议定期更新此索引，特别是在新增或删除文档后。

---

**索引生成完成**

