# 剧情树重构路线图

## 目标
- 提升剧情树结构合理性
- 提升节点衔接合理性
- 提升可玩性与多周目价值

## 可回滚策略(全程适用)
- 新增 choice id 使用后缀(`_v2`, `_alt`)并保留旧 id, 旧路径不删除。
- 在 pathMatcher 中增加开关(如 `useStoryV2`)控制新路径启用, 回滚只需关闭开关。
- 新场景只在开关开启时被路由, 关闭开关即回到原路径。
- 所有新增状态标记写入 `state.specialEvents`, 便于集中回滚清理。

## 优先调整的 20 个节点(收益高/风险低)
| 优先级 | 节点 | 收益点 | 回滚方式 |
| --- | --- | --- | --- |
| 1 | SCENE_0_PROLOGUE | 修复 p1/p2/p3 未映射; 明确分支入口 | 关闭 `useStoryV2` + 保留旧默认跳转 |
| 2 | SCENE_1B_MESSAGE | 核心分支爆炸点, 影响 1B 全链路 | 开关控制 + 保留原 choice id |
| 3 | SCENE_1C_HESITATE | 1C 分支入口, 可补充动机差异 | 开关控制 |
| 4 | SCENE_1A_LIFE | 1A 早期分歧, 易加入“选择回响” | 只加文案即可回滚 |
| 5 | SCENE_2_REUNION | 共享分支爆炸点, 影响 2/3 层 | 只加文案或分支锁 |
| 6 | SCENE_3_LUNCH | 共享分支爆炸点, 影响 3 层 | 只加文案或分支锁 |
| 7 | SCENE_1A_4C_DAILY_LIFE | 重复内容源头之一 | 可拆分为分支专属事件 |
| 8 | SCENE_1A_5A_CAFETERIA_TALK | 与 5C/First_Meet 内容重复 | 保留原文, 新增差异段 |
| 9 | SCENE_1A_5C_FIRST_CONTACT | 重复内容节点 | 同上 |
| 10 | SCENE_1A_5D_MISSED_CHANCE | 与 5B_AVOID_AGAIN 类似 | 同上 |
| 11 | SCENE_1A_6B_ELEVATOR_CONTINUE | 观察 -> 被发现过快 | 插入过渡场景, 可回滚 |
| 12 | SCENE_1A_7B_STALKING_DISCOVERED | 负面事件转折 | 加入前置伏笔 |
| 13 | SCENE_1A_7A_RELATIONSHIP_GROW | choice id 重复导致歧义 | 重命名 choice id, 保留旧映射 |
| 14 | SCENE_1B_APOLOGY | 跳转到 SCENE_2_REUNION 不连贯 | 增加过渡层 |
| 15 | SCENE_1B_CHAT | 爆炸点, 易扩展多周目差异 | 只加差异段 |
| 16 | SCENE_1B_4C_HESITATION | 爆炸点 | 只加差异段 |
| 17 | SCENE_1B_8A_RELATIONSHIP_DEFINE | 临近结局的爆炸点 | 状态阈值锁 |
| 18 | SCENE_1C_4C_GUILT_DEEPEN | 爆炸点 | 只加差异段 |
| 19 | SCENE_1C_4A_GUILT_OBSERVE | 与 1C_STALKING 接近 | 插入独特事件 |
| 20 | SCENE_1C_8A_FINAL_CHOICE | 临近结局的爆炸点 | 阈值锁 + 结局差异化 |

## 分步路线图(每步可回滚)
1. 补齐映射与去歧义
   - 处理 `p1/p2/p3`, `4_*`~`9_*`, `1a/1b/1c_10*` 等缺失映射。
   - 重命名重复 choice id(如 `1a_7a` -> `1a_7a_v2`), 保留旧 id 兼容旧存档。
   - 回滚: 关闭 `useStoryV2`, 保留旧映射表。
2. 爆炸点“选择回响”
   - 在 SCENE_2_REUNION/SCENE_3_LUNCH/SCENE_1B_MESSAGE 等节点后, 为每个分支加 1-2 句因果回响。
   - 回滚: 删除新增段落(不改结构)。
3. 收束点“差异化摘要”
   - 在 SCENE_1A_8A_CONFESSION / SCENE_1C_8A_FINAL_CHOICE 等收束点, 增加对过往选择的摘要句。
   - 回滚: 删除摘要句。
4. 处理重复内容
   - 对 SCENE_1A_5A/5C/5D 等加入分支专属事件, 避免完全复用。
   - 回滚: 仅删除新增段落, 保留原文。
5. 延迟后果与锁定节点
   - 为 p1/p2/p3 与早期选择设置延迟后果, 在 7-9 层触发。
   - 为关键节点加阈值锁(亲密度/勇气/诚实), 没达标进入替代节点。
   - 回滚: 关闭阈值判断或保留旧路径为默认。
6. 多周目机制
   - 隐藏线索 + 解锁支线/结局; 只在二周目开启。
   - 回滚: 关闭多周目开关, 不影响一周目。

## 可玩性增强建议(对应层/分支文件)
- 阈值分段反馈
  - 位置: SCENE_2_REUNION, SCENE_3_LUNCH, SCENE_1A_8A_CONFESSION, SCENE_1B_8A_RELATIONSHIP_DEFINE, SCENE_1C_8A_FINAL_CHOICE
  - 文件: services/scenes/shared.ts, services/scenes/branch1A.ts, services/scenes/branch1B.ts, services/scenes/branch1C.ts, components/GameUI.tsx, services/stateManager/updater.ts
- 延迟后果
  - 位置: 1-3 层选择在 6-9 层回响
  - 文件: services/stateManager/updater.ts + services/pathMatcher/* + services/scenes/branch1A_additional.ts, branch1B_additional.ts, branch1C_additional.ts
- 隐藏线索
  - 位置: SCENE_1B_CHAT, SCENE_1C_STALKING, SCENE_1A_ELEVATOR_TALK
  - 文件: services/scenes/branch1B.ts, services/scenes/branch1C.ts, services/scenes/branch1A.ts, services/pathMatcher/ending.ts
- 分支专属事件
  - 位置: 4-6 层(当前重复段密集)
  - 文件: services/scenes/branch1A_layer4_6_additional.ts, services/scenes/branch1B_additional.ts, services/scenes/branch1C_additional.ts, services/scenes/enhanced_scenes.ts
- 锁定节点
  - 位置: SCENE_1B_9A_FIRST_DATE, SCENE_1C_9C_700_APOLOGY, SCENE_1A_9I_MUTUAL_UNDERSTANDING 等高价值收束节点
  - 文件: services/pathMatcher/branch1A.ts, services/pathMatcher/branch1B.ts, services/pathMatcher/branch1C.ts, services/stateManager/updater.ts
