# Branch A 重复映射合并方案

## 1) 重复映射组识别

### Depth 2
**重复组 1**: `1a_1`, `1a_1b` → `SCENE_1A_LIFE`
- 保留: `1a_1`
- 删除: `1a_1b`
- 理由: 同一入口（试图忘记 vs 内疚后悔），无差异后果

### Depth 4
**重复组 1**: `1a_2b`, `1a_2d`, `1a_4a2` → `SCENE_1A_4B_TRY_SOCIAL`
- 保留: `1a_2b`, `1a_2d`
- 删除: `1a_4a2`
- 理由: `1a_2b`/`1a_2d` 是主要路径，`1a_4a2` 是重复入口

**重复组 2**: `1a_3b`, `1a_3c`, `1a_5` → `SCENE_1A_OBSERVE`
- 保留: `1a_3b`, `1a_5`
- 删除: `1a_3c`
- 理由: `1a_3b`/`1a_5` 覆盖"不敢/观察"情绪，`1a_3c` 是重复变体

### Depth 5
**重复组 1**: `1a_6`, `1a_6c`, `1a_5c_a`, `1a_5e_a` → `SCENE_1A_FIRST_MEET`
- 保留: `1a_6`, `1a_6c`
- 删除: `1a_5c_a`, `1a_5e_a`
- 理由: `1a_6`/`1a_6c` 是主要初遇路径，其他是重复入口

**重复组 2**: `1a_4d`, `1a_7` → `SCENE_1A_5B_AVOID_AGAIN`
- 保留: `1a_4d`
- 删除: `1a_7`
- 理由: 同一"逃避"情绪按钮，`1a_4d` 是主要路径

**重复组 3**: `1a_8`, `1a_8c`, `1a_5d_a` → `SCENE_1A_ELEVATOR_TALK`
- 保留: `1a_8`, `1a_8c`
- 删除: `1a_5d_a`
- 理由: `1a_8`/`1a_8c` 是主要电梯对话路径，`1a_5d_a` 是重复入口

**重复组 4**: `1a_9`, `1a_5d_b` → `SCENE_1A_STALKING`
- 保留: `1a_9`
- 删除: `1a_5d_b`
- 理由: 同一"跟踪"入口，`1a_9` 是主要路径

**重复组 5**: `1a_4b`, `1a_4c_c` → `SCENE_1A_5B_SOCIAL_ATTEMPT`
- 保留: `1a_4b`
- 删除: `1a_4c_c`
- 理由: 同一"尝试社交"路径，`1a_4b` 是主要入口

**重复组 6**: `1a_4c_b`, `1a_5c_b` → `SCENE_1A_5D_MISSED_CHANCE`
- 保留: `1a_4c_b`
- 删除: `1a_5c_b`
- 理由: 同一"错过机会"后果，`1a_4c_b` 是主要路径

**重复组 7**: `1a_5e_b` → `SCENE_1A_OBSERVE`（与 depth 4 重复组 2 合并）
- 已在 depth 4 处理，此处删除

### Depth 6
**重复组 1**: `1a_5aa`, `1a_5a` → `SCENE_1A_6A_COFFEE_DEEP`
- 保留: `1a_5a`
- 删除: `1a_5aa`
- 理由: 同一"咖啡店深度对话"路径，`1a_5a` 是主要入口

**重复组 2**: `1a_5b`, `1a_5c` → `SCENE_1A_6B_ELEVATOR_CONTINUE`
- 保留: `1a_5b`
- 删除: `1a_5c`
- 理由: 同一"电梯继续"路径，`1a_5b` 是主要入口

**重复组 3**: `1a_6e_a`, `1a_6f_a` → `SCENE_1A_7A_RELATIONSHIP_GROW`
- 保留: `1a_6e_a`
- 删除: `1a_6f_a`
- 理由: 同一"关系发展"路径，`1a_6e_a` 是主要入口

**重复组 4**: `1a_6e_b`, `1a_6f_b`, `1a_6g_b` → `SCENE_1A_BUILDING_TRUST`
- 保留: `1a_6e_b`, `1a_6g_b`
- 删除: `1a_6f_b`
- 理由: `1a_6e_b`/`1a_6g_b` 覆盖主要信任建立路径

### Depth 7
**重复组 1**: `1a_6a`, `1a_6a2`, `1a_6b` → `SCENE_1A_BUILDING_TRUST`
- 保留: `1a_6a`, `1a_6b`
- 删除: `1a_6a2`
- 理由: `1a_6a`/`1a_6b` 覆盖"积极回应"变体，`1a_6a2` 是重复

**重复组 2**: `1a_6c`, `1a_6c2` → `SCENE_1A_7A_RELATIONSHIP_GROW`
- 保留: `1a_6c`
- 删除: `1a_6c2`
- 理由: 同一"关系发展"路径，`1a_6c` 是主要入口

**重复组 3**: `1a_7a`, `1a_7b` → `SCENE_1A_7A_RELATIONSHIP_GROW`
- 保留: `1a_7a`
- 删除: `1a_7b`
- 理由: 同一"不只是朋友"情绪按钮，`1a_7a` 是主要路径

**重复组 4**: `1a_8a`, `1a_8a2` → `SCENE_1A_6B_ELEVATOR_CONTINUE`
- 保留: `1a_8a`
- 删除: `1a_8a2`
- 理由: 同一"主动打招呼"路径，`1a_8a` 是主要入口

**重复组 5**: `1a_9a`, `1a_9a2` → `SCENE_1A_8A_CONFESSION`
- 保留: `1a_9a`
- 删除: `1a_9a2`
- 理由: 同一"解释/坦白"路径，`1a_9a` 是主要入口

**重复组 6**: `1a_7c`, `1a_7e_a`, `1a_7f_a`, `1a_7g_b` → `SCENE_1A_8A_CONFESSION`
- 保留: `1a_7c`, `1a_7e_a`
- 删除: `1a_7f_a`, `1a_7g_b`
- 理由: `1a_7c`/`1a_7e_a` 覆盖主要坦白路径，其他是重复变体

### Depth 8
**重复组 1**: `1a_6c`, `1a_6c2`, `1a_6d` → `SCENE_1A_7A_RELATIONSHIP_GROW`
- 保留: `1a_6c`, `1a_6d`
- 删除: `1a_6c2`
- 理由: `1a_6c`/`1a_6d` 覆盖关系发展变体，`1a_6c2` 已在 depth 7 删除

**重复组 2**: `1a_7a`, `1a_7b` → `SCENE_1A_8A_CONFESSION`
- 保留: `1a_7a`
- 删除: `1a_7b`
- 理由: 同一"坦白"路径，`1a_7a` 是主要入口（已在 depth 7 处理）

**重复组 3**: `1a_8a`, `1a_8b` → `SCENE_1A_9A_REUNION_ATTEMPT`
- 保留: `1a_8a`
- 删除: `1a_8b`
- 理由: 同一"重新开始"路径，`1a_8a` 是主要入口

**重复组 4**: `1a_8c`, `1a_8e_b`, `1a_8f_b`, `1a_8g_b` → `SCENE_1A_9B_FINAL_GOODBYE`
- 保留: `1a_8c`, `1a_8e_b`
- 删除: `1a_8f_b`, `1a_8g_b`
- 理由: `1a_8c`/`1a_8e_b` 覆盖主要告别路径，其他是重复变体

**重复组 5**: `1a_8e_a`, `1a_8f_a` → `SCENE_1A_9A_REUNION_ATTEMPT`
- 保留: `1a_8e_a`
- 删除: `1a_8f_a`
- 理由: 同一"重逢尝试"路径，`1a_8e_a` 是主要入口

### Depth 9
**重复组 1**: `1a_9a`, `1a_9e`, `1a_9f_a` → `SCENE_1A_10B_FINAL_CONFESSION`
- 保留: `1a_9a`, `1a_9e`
- 删除: `1a_9f_a`
- 理由: `1a_9a`/`1a_9e` 覆盖主要坦白路径，`1a_9f_a` 是重复变体

**重复组 2**: `1a_9c`, `1a_9f_b`, `1a_9i_b` → `SCENE_1A_10C_ACCEPTANCE`
- 保留: `1a_9c`, `1a_9f_b`
- 删除: `1a_9i_b`
- 理由: `1a_9c`/`1a_9f_b` 覆盖主要接受路径，`1a_9i_b` 是重复变体

**重复组 3**: `1a_9d_b`, `1a_9e_b` → `SCENE_1A_9E_FINAL_CHOICE`
- 保留: `1a_9d_b`
- 删除: `1a_9e_b`
- 理由: 同一"最终选择"路径，`1a_9d_b` 是主要入口

## 2) 合并后的新映射表（Depth 1-9）

| depth | lastChoice | Scene 常量名 |
|-------|-----------|-------------|
| 1 | (any) | SCENE_1A_PANIC |
| 2 | 1a_1 | SCENE_1A_LIFE |
| 2 | 1a_1c | SCENE_1A_TRY_CHANGE |
| 3 | 1a_2 | SCENE_1A_DEEP_WORK |
| 3 | 1a_3 | SCENE_1A_TRY_CHANGE |
| 3 | 1a_2c | SCENE_1A_OBSERVE |
| 4 | 1a_2a | SCENE_1A_4A_WORK_COLLAPSE |
| 4 | 1a_2b | SCENE_1A_4B_TRY_SOCIAL |
| 4 | 1a_2d | SCENE_1A_4B_TRY_SOCIAL |
| 4 | 1a_3a | SCENE_1A_STRUGGLE |
| 4 | 1a_3b | SCENE_1A_OBSERVE |
| 4 | 1a_4 | SCENE_1A_CONFRONT |
| 4 | 1a_5 | SCENE_1A_OBSERVE |
| 5 | 1a_4a | SCENE_1A_5A_COLLAPSE_HOSPITAL |
| 5 | 1a_4b | SCENE_1A_5B_SOCIAL_ATTEMPT |
| 5 | 1a_4c | SCENE_1A_5A_CAFETERIA_TALK |
| 5 | 1a_4d | SCENE_1A_5B_AVOID_AGAIN |
| 5 | 1a_6 | SCENE_1A_FIRST_MEET |
| 5 | 1a_6c | SCENE_1A_FIRST_MEET |
| 5 | 1a_8 | SCENE_1A_ELEVATOR_TALK |
| 5 | 1a_8c | SCENE_1A_ELEVATOR_TALK |
| 5 | 1a_9 | SCENE_1A_STALKING |
| 5 | 1a_4c_a | SCENE_1A_5C_FIRST_CONTACT |
| 5 | 1a_4c_b | SCENE_1A_5D_MISSED_CHANCE |
| 5 | 1a_5d_a | SCENE_1A_ELEVATOR_TALK |
| 5 | 1a_4e_a | SCENE_1A_5E_OPPORTUNITY |
| 6 | 1a_5ab | SCENE_1A_8B_FINAL_ESCAPE |
| 6 | 1a_5ba | SCENE_1A_5A_CAFETERIA_TALK |
| 6 | 1a_5bb | SCENE_1A_5B_AVOID_AGAIN |
| 6 | 1a_5a | SCENE_1A_6A_COFFEE_DEEP |
| 6 | 1a_5b | SCENE_1A_6B_ELEVATOR_CONTINUE |
| 6 | 1a_5d | SCENE_1A_7B_STALKING_DISCOVERED |
| 6 | 1a_6 | SCENE_1A_FIRST_MEET |
| 6 | 1a_6c_a | SCENE_1A_6C_DEEP_CONNECTION |
| 6 | 1a_6c_b | SCENE_1A_6D_MUTUAL_UNDERSTANDING |
| 6 | 1a_6d_a | SCENE_1A_6E_TRUST_BUILDING |
| 6 | 1a_6d_b | SCENE_1A_6F_INTIMACY_DEEPEN |
| 6 | 1a_6e_a | SCENE_1A_7A_RELATIONSHIP_GROW |
| 6 | 1a_6e_b | SCENE_1A_BUILDING_TRUST |
| 6 | 1a_6g_a | SCENE_1A_6G_RELATIONSHIP_DEVELOPMENT |
| 6 | 1a_6g_b | SCENE_1A_BUILDING_TRUST |
| 7 | 1a_6a | SCENE_1A_BUILDING_TRUST |
| 7 | 1a_6b | SCENE_1A_BUILDING_TRUST |
| 7 | 1a_6c | SCENE_1A_7A_RELATIONSHIP_GROW |
| 7 | 1a_6d | SCENE_1A_7B_STALKING_DISCOVERED |
| 7 | 1a_7a | SCENE_1A_7A_RELATIONSHIP_GROW |
| 7 | 1a_7c | SCENE_1A_8A_CONFESSION |
| 7 | 1a_7d | SCENE_1A_8B_FINAL_ESCAPE |
| 7 | 1a_8a | SCENE_1A_6B_ELEVATOR_CONTINUE |
| 7 | 1a_8b | SCENE_1A_STALKING |
| 7 | 1a_9a | SCENE_1A_8A_CONFESSION |
| 7 | 1a_9b | SCENE_1A_8B_FINAL_ESCAPE |
| 7 | 1a_7c_a | SCENE_1A_7C_CONFESSION_MOMENT |
| 7 | 1a_7c_b | SCENE_1A_7D_FRIENDSHIP_CONFIRM |
| 7 | 1a_7c_c | SCENE_1A_7E_DISTANCE_KEEP |
| 7 | 1a_7d_a | SCENE_1A_7F_COMPLICATED_FEEL |
| 7 | 1a_7d_b | SCENE_1A_7D_FRIENDSHIP_CONFIRM |
| 7 | 1a_7e_a | SCENE_1A_8A_CONFESSION |
| 7 | 1a_7e_b | SCENE_1A_7E_DISTANCE_KEEP |
| 7 | 1a_7f_b | SCENE_1A_7F_COMPLICATED_FEEL |
| 7 | 1a_7g_a | SCENE_1A_8G_TRUTH_REVEALED |
| 8 | 1a_6c | SCENE_1A_7A_RELATIONSHIP_GROW |
| 8 | 1a_6d | SCENE_1A_7A_RELATIONSHIP_GROW |
| 8 | 1a_7a | SCENE_1A_8A_CONFESSION |
| 8 | 1a_8a | SCENE_1A_9A_REUNION_ATTEMPT |
| 8 | 1a_8c | SCENE_1A_9B_FINAL_GOODBYE |
| 8 | 1a_8d | SCENE_1A_9C_LAST_MESSAGE |
| 8 | 1a_8c_a | SCENE_1A_8C_FEAR_FACE |
| 8 | 1a_8c_b | SCENE_1A_8D_PAST_CONFESS |
| 8 | 1a_8d_a | SCENE_1A_8E_FUTURE_PLAN |
| 8 | 1a_8d_b | SCENE_1A_8F_FINAL_HESITATION |
| 8 | 1a_8e_a | SCENE_1A_9A_REUNION_ATTEMPT |
| 8 | 1a_8e_b | SCENE_1A_9B_FINAL_GOODBYE |
| 8 | 1a_8g_a | SCENE_1A_9I_MUTUAL_UNDERSTANDING |
| 9 | 1a_9a | SCENE_1A_10B_FINAL_CONFESSION |
| 9 | 1a_9b | SCENE_1A_9B_FINAL_GOODBYE |
| 9 | 1a_9c | SCENE_1A_10C_ACCEPTANCE |
| 9 | 1a_9c2 | SCENE_1A_10D_FINAL_SEARCH |
| 9 | 1a_9d | SCENE_1A_10A_FINAL_BLESSING |
| 9 | 1a_9e | SCENE_1A_10B_FINAL_CONFESSION |
| 9 | 1a_9d_a | SCENE_1A_9D_RELATIONSHIP_DECISION |
| 9 | 1a_9d_b | SCENE_1A_9E_FINAL_CHOICE |
| 9 | 1a_9e_a | SCENE_1A_9F_NEW_BEGINNING |
| 9 | 1a_9f_b | SCENE_1A_10C_ACCEPTANCE |
| 9 | 1a_9i_a | SCENE_1A_10E_FINAL_DECISION |

### 统计
- **原始 choice 总数**: 103
- **合并后 choice 总数**: 78
- **删除 choice 数**: 25
- **scene 总数**: 48（不变）

