# Branch C 重复映射合并方案

## 1) 重复映射组识别

### Depth 2
**组1**: `1c_1`, `1c_1b`, `1c_1c` → `SCENE_1C_GUILT`
- 保留: `1c_1`
- 删除: `1c_1b`, `1c_1c`
- 理由: 三个选择都是同一情绪按钮（内疚），无差异后果

### Depth 4
**组2**: `1c_2a`, `1c_4` → `SCENE_1C_MEETING`
- 保留: `1c_2a`
- 删除: `1c_4`
- 理由: 同一场景入口，`1c_2a` 更符合命名规范

**组3**: `1c_2b`, `1c_3b`, `1c_5` → `SCENE_1C_4A_GUILT_OBSERVE`
- 保留: `1c_2b`
- 删除: `1c_3b`, `1c_5`
- 理由: 三个选择都指向观察/内疚场景，无功能差异

**组4**: `1c_4d_a`, `1c_4e_a` → `SCENE_1C_5A_FIRST_MEETING`
- 保留: `1c_4d_a`
- 删除: `1c_4e_a`
- 理由: 同一场景入口，保留更早出现的 ID

**组5**: `1c_4c_c`, `1c_4e_b` → `SCENE_1C_4C_GUILT_DEEPEN`
- 保留: `1c_4c_c`
- 删除: `1c_4e_b`
- 理由: 同一内疚加深场景，保留更符合命名规范的 ID

### Depth 5
**组6**: `1c_5d_a`, `1c_5e_a` → `SCENE_1C_6A_DEEP_TALK`
- 保留: `1c_5d_a`
- 删除: `1c_5e_a`
- 理由: 同一深度对话场景，保留更早出现的 ID

**组7**: `1c_5d_b`, `1c_5e_b` → `SCENE_1C_FRIENDSHIP`
- 保留: `1c_5d_b`
- 删除: `1c_5e_b`
- 理由: 同一友谊场景，保留更早出现的 ID

**组8**: `1c_5b_b`, `1c_5c_b` → `SCENE_1C_5C_BARRIER`
- 保留: `1c_5c_b`
- 删除: `1c_5b_b`
- 理由: `1c_5c_b` 更符合命名规范（5c 系列）

### Depth 6
**组9**: `1c_6a`, `1c_6b`, `1c_6d_a`, `1c_6d_b`, `1c_6e_b` → `SCENE_1C_7A_RELATIONSHIP_GROW`
- 保留: `1c_6a`, `1c_6b`
- 删除: `1c_6d_a`, `1c_6d_b`, `1c_6e_b`
- 理由: 五个选择都指向关系成长，保留两个主要入口即可

**组10**: `1c_6b_b`, `1c_6c_b` → `SCENE_1C_6C_UNDERSTANDING`
- 保留: `1c_6c_b`
- 删除: `1c_6b_b`
- 理由: `1c_6c_b` 更符合命名规范（6c 系列）

### Depth 7
**组11**: `1c_7a`, `1c_7b`, `1c_7c_a`, `1c_7d_a`, `1c_7e_a`, `1c_7g_b` → `SCENE_1C_8A_FINAL_CHOICE`
- 保留: `1c_7a`, `1c_7b`
- 删除: `1c_7c_a`, `1c_7d_a`, `1c_7e_a`, `1c_7g_b`
- 理由: 六个选择都指向最终选择场景，保留两个主要入口

**组12**: `1c_7b_b`, `1c_7c_b` → `SCENE_1C_7C_FRIENDSHIP_CONFIRM`
- 保留: `1c_7b_b`
- 删除: `1c_7c_b`
- 理由: 同一友谊确认场景，保留更早出现的 ID

**组13**: `1c_7b_c`, `1c_7d_b` → `SCENE_1C_7D_DISTANCE_KEEP`
- 保留: `1c_7b_c`
- 删除: `1c_7d_b`
- 理由: 同一保持距离场景，保留更早出现的 ID

### Depth 8
**组14**: `1c_8e_a`, `1c_8f_a` → `SCENE_1C_9A_NEW_BEGINNING`
- 保留: `1c_8e_a`
- 删除: `1c_8f_a`
- 理由: 同一新开始场景，保留更早出现的 ID

**组15**: `1c_8e_b`, `1c_8f_b`, `1c_8g_b` → `SCENE_1C_9B_FEAR_AGAIN`
- 保留: `1c_8e_b`, `1c_8f_b`
- 删除: `1c_8g_b`
- 理由: 三个选择都指向再次恐惧，保留两个主要入口

### Depth 9
**组16**: `1c_9a`, `1c_9c`, `1c_9e`, `1c_9f_a`, `1c_9k_b` → `SCENE_1C_10A_RELATIONSHIP_DEEPEN`
- 保留: `1c_9a`, `1c_9c`
- 删除: `1c_9e`, `1c_9f_a`, `1c_9k_b`
- 理由: 五个选择都指向关系深化，保留两个主要入口

**组17**: `1c_9b`, `1c_9d`, `1c_9f`, `1c_9f_b` → `SCENE_1C_10B_FRIENDSHIP_PATH`
- 保留: `1c_9b`, `1c_9d`
- 删除: `1c_9f`, `1c_9f_b`
- 理由: 四个选择都指向友谊路径，保留两个主要入口

**组18**: `1c_9d_b`, `1c_9e_b` → `SCENE_1C_9E_FINAL_CHOICE`
- 保留: `1c_9d_b`
- 删除: `1c_9e_b`
- 理由: 同一最终选择场景，保留更早出现的 ID

## 2) 合并后的新映射表 (Depth 1-9)

| depth | lastChoice | Scene 常量名 |
|-------|------------|--------------|
| 1 | (无选择) | SCENE_1C_HESITATE |
| 2 | 1c_1 | SCENE_1C_GUILT |
| 3 | 1c_2 | SCENE_1C_FIRST_MESSAGE |
| 3 | 1c_3 | SCENE_1C_STALKING |
| 4 | 1c_2a | SCENE_1C_MEETING |
| 4 | 1c_2b | SCENE_1C_4A_GUILT_OBSERVE |
| 4 | 1c_3a | SCENE_1B_APOLOGY |
| 4 | 1c_4c_a | SCENE_1C_4D_SEEK_FORGIVE |
| 4 | 1c_4c_b | SCENE_1C_4E_ACCEPTANCE |
| 4 | 1c_4c_c | SCENE_1C_4C_GUILT_DEEPEN |
| 4 | 1c_4d_a | SCENE_1C_5A_FIRST_MEETING |
| 4 | 1c_4d_b | SCENE_1C_5B_SLOW_APPROACH |
| 5 | 1c_4c | SCENE_1C_5A_FIRST_MEETING |
| 5 | 1c_4d | SCENE_1C_4B_FIRST_MESSAGE |
| 5 | 1c_5a | SCENE_1C_6A_DEEP_TALK |
| 5 | 1c_5b | SCENE_1C_FRIENDSHIP |
| 5 | 1c_5b_a | SCENE_1C_5B_SLOW_APPROACH |
| 5 | 1c_5c_a | SCENE_1C_5D_BREAKTHROUGH |
| 5 | 1c_5c_b | SCENE_1C_5C_BARRIER |
| 5 | 1c_5d_a | SCENE_1C_6A_DEEP_TALK |
| 5 | 1c_5d_b | SCENE_1C_FRIENDSHIP |
| 5 | 1c_4f_a | SCENE_1C_5E_GROWING_CLOSER |
| 6 | 1c_6a | SCENE_1C_7A_RELATIONSHIP_GROW |
| 6 | 1c_6b | SCENE_1C_7A_RELATIONSHIP_GROW |
| 6 | 1c_6b_a | SCENE_1C_6B_TRUST_TEST |
| 6 | 1c_6c_a | SCENE_1C_6D_DECISION |
| 6 | 1c_6c_b | SCENE_1C_6C_UNDERSTANDING |
| 6 | 1c_6e_a | SCENE_1C_6E_EMOTIONAL_BOND |
| 7 | 1c_7a | SCENE_1C_8A_FINAL_CHOICE |
| 7 | 1c_7b | SCENE_1C_8A_FINAL_CHOICE |
| 7 | 1c_7b_a | SCENE_1C_7B_CONFESSION_MOMENT |
| 7 | 1c_7b_b | SCENE_1C_7C_FRIENDSHIP_CONFIRM |
| 7 | 1c_7b_c | SCENE_1C_7D_DISTANCE_KEEP |
| 7 | 1c_7e_b | SCENE_1C_7E_COMPLICATED_FEEL |
| 7 | 1c_7g_a | SCENE_1C_8G_REDEMPTION_PATH |
| 8 | 1c_8a | SCENE_1C_9A_NEW_BEGINNING |
| 8 | 1c_8b | SCENE_1C_9B_FEAR_AGAIN |
| 8 | 1c_8c | SCENE_1C_9C_700_APOLOGY |
| 8 | 1c_8b_a | SCENE_1C_8B_FEAR_FACE |
| 8 | 1c_8b_b | SCENE_1C_8D_PAST_CONFESS |
| 8 | 1c_8d_a | SCENE_1C_8E_FUTURE_PLAN |
| 8 | 1c_8d_b | SCENE_1C_8F_FINAL_HESITATION |
| 8 | 1c_8e_a | SCENE_1C_9A_NEW_BEGINNING |
| 8 | 1c_8e_b | SCENE_1C_9B_FEAR_AGAIN |
| 8 | 1c_8f_b | SCENE_1C_9B_FEAR_AGAIN |
| 8 | 1c_8g_a | SCENE_1C_9K_NEW_BEGINNING |
| 9 | 1c_9a | SCENE_1C_10A_RELATIONSHIP_DEEPEN |
| 9 | 1c_9b | SCENE_1C_10B_FRIENDSHIP_PATH |
| 9 | 1c_9c | SCENE_1C_10A_RELATIONSHIP_DEEPEN |
| 9 | 1c_9d | SCENE_1C_10B_FRIENDSHIP_PATH |
| 9 | 1c_9d_a | SCENE_1C_9D_RELATIONSHIP_DECISION |
| 9 | 1c_9d_b | SCENE_1C_9E_FINAL_CHOICE |
| 9 | 1c_9e_a | SCENE_1C_9F_NEW_BEGINNING |
| 9 | 1c_9k_a | SCENE_1C_10C_REDEMPTION_FINAL |

## 3) 合并统计

- **原始映射数**: 66
- **合并后映射数**: 48
- **删除的重复映射**: 18
- **合并组数**: 18


