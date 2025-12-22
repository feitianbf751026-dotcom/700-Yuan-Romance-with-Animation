# Branch C Earned Choices 规则

## 1) Requires 规则表（基于 guilt_level）

| lastChoice | requires 条件 | 不满足时的替代路径 |
|------------|---------------|-------------------|
| 1c_5c_a | guilt_level >= 2 | fallback 到 `1c_5c_b` → SCENE_1C_5C_BARRIER |
| 1c_5c_b | guilt_level <= 1 | fallback 到 `1c_5c_a` → SCENE_1C_5D_BREAKTHROUGH |
| 1c_6b_a | guilt_level >= 2 | fallback 到 `1c_6b` → SCENE_1C_7A_RELATIONSHIP_GROW |
| 1c_6c_b | guilt_level >= 2 | fallback 到 `1c_6c_a` → SCENE_1C_6D_DECISION |
| 1c_6e_a | guilt_level <= 1 | fallback 到 `1c_6e_b` → SCENE_1C_7A_RELATIONSHIP_GROW |
| 1c_7b_a | guilt_level >= 2 | fallback 到 `1c_7b_b` → SCENE_1C_7C_FRIENDSHIP_CONFIRM |
| 1c_7g_a | guilt_level >= 2 且 历史包含 `1c_7b_a` | fallback 到 `1c_7g_b` → SCENE_1C_8A_FINAL_CHOICE |
| 1c_8b_b | guilt_level >= 2 | fallback 到 `1c_8b_a` → SCENE_1C_8B_FEAR_FACE |
| 1c_8d_a | guilt_level <= 1 | fallback 到 `1c_8d_b` → SCENE_1C_8F_FINAL_HESITATION |
| 1c_8g_a | guilt_level >= 2 且 历史包含 `1c_7g_a` | fallback 到 `1c_8g_b` → SCENE_1C_9B_FEAR_AGAIN |
| 1c_9k_a | guilt_level <= 1 且 历史包含 `1c_8g_a` | fallback 到 `1c_9k_b` → SCENE_1C_10A_RELATIONSHIP_DEEPEN |

## 2) 神选项风险点

| lastChoice | 为什么是神选项 | 应该加什么门槛 |
|------------|---------------|----------------|
| 1c_7g_a | 救赎路径需要先经历坦白和深度内疚，低 guilt_level 不应该直接解锁 | requires guilt_level >= 2 且历史包含 `1c_7b_a`（已坦白） |
| 1c_9k_a | 救赎最终结局需要完整走完救赎路径，不应该从其他路径直接到达 | requires guilt_level <= 1 且历史包含 `1c_8g_a`（已走救赎路径） |
| 1c_5c_a | 突破障碍需要足够的内疚作为动机，低 guilt_level 时障碍应该不存在 | requires guilt_level >= 2（高内疚才能触发突破场景） |


