# Branch B 合并假分支方案

## 重复映射分析

### Depth 4

**组 1**: `1b_1aa`, `1b_1ab`, `1b_1ad` → `SCENE_1B_4A_DELETED_REGRET`
- **保留**: `1b_1aa`（第一个，作为主入口）
- **删除**: `1b_1ab`, `1b_1ad`
- **理由**: 三个选择都表示"删除后的后悔"，无差异后果，合并为单一入口。

**组 2**: `1b_1ac`, `1b_2ad`, `1b_3d` → `SCENE_2_REUNION`
- **保留**: `1b_1ac`（第一个，作为主入口）
- **删除**: `1b_2ad`, `1b_3d`
- **理由**: 三个选择都指向重逢场景，无差异后果，合并为单一入口。

### Depth 5

**组 3**: `1b_4c`, `1b_4d_a` → `SCENE_1B_5A_MEET_PLAN`
- **保留**: `1b_4c`（更简洁的ID）
- **删除**: `1b_4d_a`
- **理由**: 两个选择都表示"计划见面"，无差异后果。

**组 4**: `1b_4c_a`, `1b_4d_c` → `SCENE_1B_5C_DAILY_TALK`
- **保留**: `1b_4c_a`（更简洁的ID）
- **删除**: `1b_4d_c`
- **理由**: 两个选择都表示"日常聊天"，无差异后果。

**组 5**: `1b_4c_b`, `1b_4d_b` → `SCENE_1B_5E_DOUBT`
- **保留**: `1b_4c_b`（更简洁的ID）
- **删除**: `1b_4d_b`
- **理由**: 两个选择都表示"怀疑"，无差异后果。

**组 6**: `1b_5a`, `1b_5b` → `SCENE_1B_6A_COFFEE_CONVERSATION`
- **保留**: `1b_5a`（第一个）
- **删除**: `1b_5b`
- **理由**: 两个选择都表示"咖啡对话"，无差异后果。

### Depth 6

**组 7**: `1b_6a`, `1b_6b`, `1b_6e_a` → `SCENE_1B_7A_REGULAR_MEETINGS`
- **保留**: `1b_6a`（第一个，作为主入口）
- **删除**: `1b_6b`, `1b_6e_a`
- **理由**: 三个选择都表示"定期见面"，无差异后果，合并为单一入口。

**组 8**: `1b_5c_b`, `1b_5d_b`, `1b_5e_c` → `SCENE_1B_6C_CONFLICT`
- **保留**: `1b_5c_b`（第一个，作为主入口）
- **删除**: `1b_5d_b`, `1b_5e_c`
- **理由**: 三个选择都表示"冲突"，无差异后果，合并为单一入口。

**组 9**: `1b_5c_a`, `1b_5d_c` → `SCENE_1B_6B_DEEP_UNDERSTANDING`
- **保留**: `1b_5c_a`（更简洁的ID）
- **删除**: `1b_5d_c`
- **理由**: 两个选择都表示"深度理解"，无差异后果。

**组 10**: `1b_5c_c`, `1b_5e_a` → `SCENE_1B_6D_RECONCILIATION`
- **保留**: `1b_5c_c`（更简洁的ID）
- **删除**: `1b_5e_a`
- **理由**: 两个选择都表示"和解"，无差异后果。

**组 11**: `1b_5d_a`, `1b_5e_b`, `1b_5f_a` → `SCENE_1B_6A_COFFEE_CONVERSATION`
- **保留**: `1b_5d_a`（第一个，作为主入口）
- **删除**: `1b_5e_b`, `1b_5f_a`
- **理由**: 三个选择都表示"咖啡对话"，无差异后果，合并为单一入口。

**组 12**: `1b_4c_a`, `1b_4d_c` → `SCENE_1B_5C_DAILY_TALK`
- **保留**: `1b_4c_a`（已在组 4 中保留）
- **删除**: `1b_4d_c`（已在组 4 中删除）
- **理由**: 与组 4 重复，已处理。

**组 13**: `1b_4c_b`, `1b_4d_b` → `SCENE_1B_5E_DOUBT`
- **保留**: `1b_4c_b`（已在组 5 中保留）
- **删除**: `1b_4d_b`（已在组 5 中删除）
- **理由**: 与组 5 重复，已处理。

**组 14**: `1b_4e_a`, `1b_5f_b` → `SCENE_1B_5F_EMOTIONAL_TURMOIL`
- **保留**: `1b_4e_a`（更简洁的ID）
- **删除**: `1b_5f_b`
- **理由**: 两个选择都表示"情感波动"，无差异后果。

**组 15**: `2_1aa`, `2_2aa`, `2_3aa`, `3_1aa`, `3_3aa` → `SCENE_1B_9A_FIRST_DATE`
- **保留**: `2_1aa`（第一个，作为主入口）
- **删除**: `2_2aa`, `2_3aa`, `3_1aa`, `3_3aa`
- **理由**: 五个选择都表示"第一次约会"，无差异后果，合并为单一入口。

**组 16**: `2_1ab`, `2_2ab`, `3_1ab`, `3_3ab` → `SCENE_1B_9B_FEAR_CONFRONTATION`
- **保留**: `2_1ab`（第一个，作为主入口）
- **删除**: `2_2ab`, `3_1ab`, `3_3ab`
- **理由**: 四个选择都表示"恐惧面对"，无差异后果，合并为单一入口。

**组 17**: `2_2ba`, `3_1ba`, `3_2aa`, `3_3ba` → `SCENE_1B_9C_FULL_CONFESSION`
- **保留**: `2_2ba`（第一个，作为主入口）
- **删除**: `3_1ba`, `3_2aa`, `3_3ba`
- **理由**: 四个选择都表示"完全坦白"，无差异后果，合并为单一入口。

**组 18**: `2_1bb`, `2_2bb`, `3_1bb`, `3_2ab` → `SCENE_2_3B_FINAL_ESCAPE`
- **保留**: `2_1bb`（第一个，作为主入口）
- **删除**: `2_2bb`, `3_1bb`, `3_2ab`
- **理由**: 四个选择都表示"最终逃跑"，无差异后果，合并为单一入口。

### Depth 7

**组 19**: `1b_7a`, `1b_7b`, `1b_7g_b`, `1b_7h`, `1b_7j` → `SCENE_1B_8A_RELATIONSHIP_DEFINE`
- **保留**: `1b_7a`（第一个，作为主入口）
- **删除**: `1b_7b`, `1b_7g_b`, `1b_7h`, `1b_7j`
- **理由**: 五个选择都表示"定义关系"，无差异后果，合并为单一入口。

**组 20**: `1b_7e`, `1b_7i` → `SCENE_1B_7D_DISTANCE_KEEP`
- **保留**: `1b_7e`（第一个）
- **删除**: `1b_7i`
- **理由**: 两个选择都表示"保持距离"，无差异后果。

**组 21**: `1b_7f`, `1b_7k` → `SCENE_1B_7E_COMPLICATED_FEEL`
- **保留**: `1b_7f`（第一个）
- **删除**: `1b_7k`
- **理由**: 两个选择都表示"复杂情感"，无差异后果。

### Depth 8

**组 22**: `1b_8a`, `1b_8g_b`, `1b_8h`, `1b_8j` → `SCENE_1B_9A_FIRST_DATE`
- **保留**: `1b_8a`（第一个，作为主入口）
- **删除**: `1b_8g_b`, `1b_8h`, `1b_8j`
- **理由**: 四个选择都表示"第一次约会"，无差异后果，合并为单一入口。

**组 23**: `1b_8b`, `1b_8i`, `1b_8k` → `SCENE_1B_9B_FEAR_CONFRONTATION`
- **保留**: `1b_8b`（第一个，作为主入口）
- **删除**: `1b_8i`, `1b_8k`
- **理由**: 三个选择都表示"恐惧面对"，无差异后果，合并为单一入口。

### Depth 9

**组 24**: `1b_9a`, `1b_9b`, `1b_9c`, `1b_9e`, `1b_9k_b`, `1b_9k` → `SCENE_1B_10A_RELATIONSHIP_GROWTH`
- **保留**: `1b_9a`（第一个，作为主入口）
- **删除**: `1b_9b`, `1b_9c`, `1b_9e`, `1b_9k_b`, `1b_9k`
- **理由**: 六个选择都表示"关系成长"，无差异后果，合并为单一入口。

**组 25**: `1b_9d`, `1b_9f`, `1b_9l` → `SCENE_1B_10B_FRIENDSHIP_CHOICE`
- **保留**: `1b_9d`（第一个，作为主入口）
- **删除**: `1b_9f`, `1b_9l`
- **理由**: 三个选择都表示"友谊选择"，无差异后果，合并为单一入口。

**组 26**: `1b_9h`, `1b_9j` → `SCENE_1B_9E_FINAL_CHOICE`
- **保留**: `1b_9h`（第一个）
- **删除**: `1b_9j`
- **理由**: 两个选择都表示"最终选择"，无差异后果。

## 合并后的新映射表（Depth 1-9）

| depth | lastChoice | Scene 常量名 |
|-------|-----------|-------------|
| 1 | (any) | SCENE_1B_MESSAGE |
| 2 | 1b_1 | SCENE_1B_DELETED |
| 2 | 1b_2 | SCENE_1B_CHAT |
| 2 | 1b_3 | SCENE_1B_COFFEE |
| 3 | 1b_1a | SCENE_1B_APOLOGY |
| 3 | 1b_1b | SCENE_1B_REGRET |
| 3 | 1b_2a | SCENE_1B_PLAN_MEET |
| 3 | 1b_2b | SCENE_1B_DEEP_CHAT |
| 3 | 1b_2ae | SCENE_1B_4C_HESITATION |
| 3 | 1b_3a | SCENE_1B_COFFEE_TALK |
| 3 | 1b_3b | SCENE_2_REUNION |
| 4 | 1b_1aa | SCENE_1B_4A_DELETED_REGRET |
| 4 | 1b_1ac | SCENE_2_REUNION |
| 4 | 1b_2aa | SCENE_1B_5A_MEET_PLAN |
| 4 | 1b_2ab | SCENE_1B_4B_CHAT_DEEPEN |
| 4 | 1b_2ac | SCENE_1B_6A_COFFEE_CONVERSATION |
| 4 | 1b_2ae | SCENE_1B_4C_HESITATION |
| 4 | 1b_2af | SCENE_1B_4D_TRUST_BUILD |
| 4 | 1b_3c | SCENE_1B_REGULAR_MEET |
| 4 | 2_1 | SCENE_2_1_AWKWARD |
| 4 | 2_2 | SCENE_2_2_RECOGNITION |
| 4 | 2_3 | SCENE_2_3_ESCAPE |
| 4 | 3_1 | SCENE_3_1_LUNCH_TALK |
| 4 | 3_2 | SCENE_3_2_REJECTION |
| 4 | 3_3 | SCENE_3_3_APOLOGY |
| 5 | 1b_4a | SCENE_1B_APOLOGY |
| 5 | 1b_4b | SCENE_1B_4A_DELETED_REGRET |
| 5 | 1b_4c | SCENE_1B_5A_MEET_PLAN |
| 5 | 1b_4d | SCENE_1B_4B_CHAT_DEEPEN |
| 5 | 1b_4c_a | SCENE_1B_5C_DAILY_TALK |
| 5 | 1b_4c_b | SCENE_1B_5E_DOUBT |
| 5 | 1b_4c_c | SCENE_1B_5D_SHARED_MOMENT |
| 5 | 1b_5a | SCENE_1B_6A_COFFEE_CONVERSATION |
| 5 | 2_1a | SCENE_2_1A_CONFESSION |
| 5 | 2_1b | SCENE_2_1B_CONTINUE_ESCAPE |
| 5 | 2_2a | SCENE_2_2A_COFFEE_INVITATION |
| 5 | 2_2b | SCENE_2_2B_HESITATE |
| 5 | 2_3a | SCENE_2_3A_TURN_BACK |
| 5 | 2_3b | SCENE_2_3B_FINAL_ESCAPE |
| 5 | 3_1a | SCENE_3_1A_AGREE |
| 5 | 3_1b | SCENE_3_1B_HESITATE |
| 5 | 3_2a | SCENE_3_2A_REGRET |
| 5 | 3_2b | SCENE_3_2B_FINAL_ESCAPE |
| 5 | 3_3a | SCENE_3_3A_NEW_START |
| 5 | 3_3b | SCENE_3_3B_FEAR |
| 6 | 1b_6a | SCENE_1B_7A_REGULAR_MEETINGS |
| 6 | 1b_6e_b | SCENE_1B_7C_FRIENDSHIP_CONFIRM |
| 6 | 1b_5c_a | SCENE_1B_6B_DEEP_UNDERSTANDING |
| 6 | 1b_5c_b | SCENE_1B_6C_CONFLICT |
| 6 | 1b_5c_c | SCENE_1B_6D_RECONCILIATION |
| 6 | 1b_5d_a | SCENE_1B_6A_COFFEE_CONVERSATION |
| 6 | 1b_4e_a | SCENE_1B_5F_EMOTIONAL_TURMOIL |
| 6 | 1b_4e_b | SCENE_1B_4B_CHAT_DEEPEN |
| 6 | 1b_4c_a | SCENE_1B_5C_DAILY_TALK |
| 6 | 1b_4c_b | SCENE_1B_5E_DOUBT |
| 6 | 1b_4c_c | SCENE_1B_5D_SHARED_MOMENT |
| 6 | 1b_4d_a | SCENE_1B_5A_MEET_PLAN |
| 6 | 2_1aa | SCENE_1B_9A_FIRST_DATE |
| 6 | 2_1ab | SCENE_1B_9B_FEAR_CONFRONTATION |
| 6 | 2_1ba | SCENE_2_3A_TURN_BACK |
| 6 | 2_1bb | SCENE_2_3B_FINAL_ESCAPE |
| 6 | 2_3ab | SCENE_2_2B_HESITATE |
| 6 | 2_3ba | SCENE_1A_10C_ACCEPTANCE |
| 6 | 2_3bb | SCENE_1A_10D_FINAL_SEARCH |
| 6 | 3_2ba | SCENE_1A_10C_ACCEPTANCE |
| 6 | 3_2bb | SCENE_1A_10D_FINAL_SEARCH |
| 6 | 3_3bb | SCENE_1B_10B_FRIENDSHIP_CHOICE |
| 7 | 1b_7a | SCENE_1B_8A_RELATIONSHIP_DEFINE |
| 7 | 1b_7c | SCENE_1B_7B_CONFESSION_MOMENT |
| 7 | 1b_7d | SCENE_1B_7C_FRIENDSHIP_CONFIRM |
| 7 | 1b_7e | SCENE_1B_7D_DISTANCE_KEEP |
| 7 | 1b_7f | SCENE_1B_7E_COMPLICATED_FEEL |
| 7 | 1b_7g_a | SCENE_1B_8G_PROMISE_MADE |
| 8 | 1b_8a | SCENE_1B_9A_FIRST_DATE |
| 8 | 1b_8b | SCENE_1B_9B_FEAR_CONFRONTATION |
| 8 | 1b_8c | SCENE_1B_9C_FULL_CONFESSION |
| 8 | 1b_8d | SCENE_1B_8B_FEAR_FACE |
| 8 | 1b_8e | SCENE_1B_8C_PAST_CONFESS |
| 8 | 1b_8f | SCENE_1B_8D_FUTURE_PLAN |
| 8 | 1b_8g_a | SCENE_1B_9K_FUTURE_VISION |
| 9 | 1b_9a | SCENE_1B_10A_RELATIONSHIP_GROWTH |
| 9 | 1b_9d | SCENE_1B_10B_FRIENDSHIP_CHOICE |
| 9 | 1b_9k_a | SCENE_1B_10C_RELATIONSHIP_FINAL |
| 9 | 1b_9g | SCENE_1B_9D_RELATIONSHIP_DECISION |
| 9 | 1b_9h | SCENE_1B_9E_FINAL_CHOICE |
| 9 | 1b_9i | SCENE_1B_9F_NEW_BEGINNING |

### 统计
- **原始 choice 总数**: 108
- **合并后 choice 总数**: 69
- **删除 choice 数**: 39
- **scene 总数**: 45（不变）

