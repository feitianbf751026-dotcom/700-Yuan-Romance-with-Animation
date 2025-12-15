# 《700元浪漫》- 完整可视化剧情树状图

## 📊 剧情结构概览

- **总层数**：10层（深度0-10）
- **主要分支**：3条（1A/1B/1C）
- **总场景数**：68+ 个场景
- **选择总数**：150+ 个选择
- **结局数量**：5个不同结局

---

## 🌳 完整可视化剧情树

### 第0层：序章
```
                    SCENE_0_PROLOGUE
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
       p1                 p2                 p3
        │                  │                  │
   [直接逃跑]        [发消息道歉]        [犹豫后离开]
        │                  │                  │
        ▼                  ▼                  ▼
```

### 分支1A完整树状图（简化版）
```
第0层: SCENE_0_PROLOGUE
   │
   ├─ p1 → [直接转身逃跑]
   │
第1层: SCENE_1A_PANIC
   │
   ├─ 1a_1 → [继续]
   │
第2层: SCENE_1A_LIFE
   │
   ├─ 1a_2 → SCENE_1A_DEEP_WORK
   │   │
   │   ├─ 1a_2a → SCENE_1A_4A_WORK_COLLAPSE
   │   │   │
   │   │   ├─ 1a_4a → SCENE_1A_5A_COLLAPSE_HOSPITAL
   │   │   │   │
   │   │   │   ├─ 1a_5aa → SCENE_1A_6A_COFFEE_DEEP → ... → 第10层 → 结局
   │   │   │   │
   │   │   │   └─ 1a_5ab → SCENE_1A_8B_FINAL_ESCAPE → ... → 结局
   │   │   │
   │   │   └─ 1a_4b → SCENE_1A_5B_SOCIAL_ATTEMPT → ... → 第10层 → 结局
   │   │
   │   └─ 1a_2b → SCENE_1A_4B_TRY_SOCIAL → ... → 第10层 → 结局
   │
   └─ 1a_3 → SCENE_1A_TRY_CHANGE
       │
       ├─ 1a_3a → SCENE_1A_STRUGGLE
       │   │
       │   ├─ 1a_4 → SCENE_1A_CONFRONT
       │   │   │
       │   │   ├─ 1a_6 → SCENE_1A_FIRST_MEET
       │   │   │   │
       │   │   │   ├─ 1a_6a → SCENE_1A_BUILDING_TRUST → ... → 第10层 → 结局
       │   │   │   │
       │   │   │   └─ 1a_6b → SCENE_1A_BUILDING_TRUST → ... → 第10层 → 结局
       │   │   │
       │   │   └─ 1a_7 → SCENE_1A_5B_AVOID_AGAIN → ... → 第10层 → 结局
       │   │
       │   └─ 1a_5 → SCENE_1A_OBSERVE → ... → 第10层 → 结局
       │
       └─ 1a_3b → SCENE_1A_OBSERVE → ... → 第10层 → 结局
```

### 分支1B完整树状图（简化版）
```
第0层: SCENE_0_PROLOGUE
   │
   ├─ p2 → [给她发消息："对不起，我来不了"]
   │
第1层: SCENE_1B_MESSAGE
   │
   ├─ 1b_1 → SCENE_1B_DELETED → ... → 第10层 → 结局
   │
   ├─ 1b_2 → SCENE_1B_CHAT → ... → 第10层 → 结局
   │
   └─ 1b_3 → SCENE_1B_COFFEE → ... → 第10层 → 结局
```

### 分支1C完整树状图（简化版）
```
第0层: SCENE_0_PROLOGUE
   │
   ├─ p3 → [站在门口纠结很久，最终还是走了]
   │
第1层: SCENE_1C_HESITATE
   │
   ├─ 1c_1 → [继续]
   │
第2层: SCENE_1C_GUILT
   │
   ├─ 1c_2 → SCENE_1C_FIRST_MESSAGE → ... → 第10层 → 结局
   │
   └─ 1c_3 → SCENE_1C_STALKING → ... → 第10层 → 结局
```

**注意**：完整的详细树状图请查看 **STORY_TREE_VISUAL.md** 文件，其中包含：
- 完整的ASCII艺术树状图（从第0层到第10层）
- 每个分支的所有路径和选择
- 所有选择ID和场景的详细对应关系
- 清晰的层级结构和分支逻辑

---

## 📋 场景编号规范

### 编号规则
- **第0层**：`SCENE_0_PROLOGUE`
- **第1层**：`SCENE_1A_PANIC`, `SCENE_1B_MESSAGE`, `SCENE_1C_HESITATE`
- **第2层**：`SCENE_1A_LIFE`, `SCENE_1B_DELETED/CHAT/COFFEE`, `SCENE_1C_GUILT`
- **第3层**：`SCENE_1A_DEEP_WORK/TRY_CHANGE`, `SCENE_1B_APOLOGY/REGRET/PLAN_MEET/DEEP_CHAT/COFFEE_TALK`, `SCENE_1C_FIRST_MESSAGE/STALKING`
- **第4层**：`SCENE_1A_4A/4B/STRUGGLE/OBSERVE/CONFRONT`, `SCENE_1B_4A/4B/5A/6A/REGULAR_MEET`, `SCENE_1C_4A/4B/MEETING`
- **第5层**：`SCENE_1A_5A/5B/FIRST_MEET/OBSERVE/ELEVATOR_TALK`, `SCENE_1B_5A/6A`, `SCENE_1C_5A/6A/FRIENDSHIP`
- **第6层**：`SCENE_1A_6A/6B/7A/7B`, `SCENE_1B_7A`, `SCENE_1C_7A`
- **第7层**：`SCENE_1A_7A/8A/8B`, `SCENE_1B_8A`, `SCENE_1C_8A`
- **第8层**：`SCENE_1A_8A/8B`, `SCENE_1B_8A`, `SCENE_1C_8A`
- **第9层**：`SCENE_1A_9A/9B/9C`, `SCENE_1B_9A/9B/9C`, `SCENE_1C_9A/9B/9C`
- **第10层**：`SCENE_1A_10A/10B`, `SCENE_1B_10A/10B`, `SCENE_1C_10A/10B`

### 选择ID规范
- **序章选择**：`p1`, `p2`, `p3`
- **1A分支**：`1a_1`, `1a_2`, `1a_3`, `1a_2a`, `1a_2b`, `1a_3a`, `1a_3b`, `1a_4`, `1a_5`, `1a_4a`, `1a_4b`, `1a_4c`, `1a_4d`, `1a_5aa`, `1a_5ab`, `1a_5ba`, `1a_5bb`, `1a_5a`, `1a_5b`, `1a_5c`, `1a_5d`, `1a_6`, `1a_6a`, `1a_6b`, `1a_6c`, `1a_6d`, `1a_7`, `1a_7a`, `1a_7b`, `1a_7c`, `1a_7d`, `1a_8a`, `1a_8b`, `1a_8c`, `1a_8d`, `1a_9a`, `1a_9b`, `1a_9c`, `1a_9d`, `1a_9e`, `1a_10a`, `1a_10b`
- **1B分支**：`1b_1`, `1b_2`, `1b_3`, `1b_1a`, `1b_1b`, `1b_1aa`, `1b_1ab`, `1b_1ac`, `1b_1ad`, `1b_2a`, `1b_2b`, `1b_2aa`, `1b_2ab`, `1b_2ac`, `1b_2ad`, `1b_3a`, `1b_3b`, `1b_3c`, `1b_3d`, `1b_4a`, `1b_4b`, `1b_4c`, `1b_4d`, `1b_5a`, `1b_5b`, `1b_6a`, `1b_6b`, `1b_7a`, `1b_7b`, `1b_8a`, `1b_8b`, `1b_8c`, `1b_9a`, `1b_9b`, `1b_9c`, `1b_9d`, `1b_9e`, `1b_9f`, `1b_10a`, `1b_10b`
- **1C分支**：`1c_1`, `1c_2`, `1c_3`, `1c_2a`, `1c_2b`, `1c_3a`, `1c_3b`, `1c_4`, `1c_5`, `1c_4a`, `1c_4b`, `1c_4c`, `1c_4d`, `1c_5a`, `1c_5b`, `1c_6a`, `1c_6b`, `1c_7a`, `1c_7b`, `1c_8a`, `1c_8b`, `1c_8c`, `1c_9a`, `1c_9b`, `1c_9c`, `1c_9d`, `1c_9e`, `1c_9f`, `1c_10a`, `1c_10b`

---

## 🔧 已修复的问题

### 编号和顺序Bug修复
1. **第6层匹配错误**：移除了不应该在第6层匹配的选择（`1a_6a`, `1a_6b`, `1a_8a`, `1a_8b`, `1a_9a`, `1a_9b`）
2. **第7层匹配优化**：正确匹配从第6层场景来的选择
3. **第8层匹配优化**：正确匹配从第7层场景来的选择
4. **场景层级对应**：确保每个选择ID只在正确的深度层被匹配

---

## 🎯 五个结局触发条件

### 1. 真爱结局（ENDING_TRUE_LOVE）
- **亲密度**：≥ 80
- **关系类型**：romantic
- **已坦白**：true

### 2. 救赎结局（ENDING_REDEMPTION）
- **亲密度**：60-79
- **条件**：有坦白 或 诚实度 ≥ 6

### 3. 挚友结局（ENDING_FRIEND）
- **亲密度**：40-79
- **关系类型**：friend

### 4. 遗憾结局（ENDING_REGRET）
- **亲密度**：20-39

### 5. 陌路结局（ENDING_STRANGER）
- **亲密度**：< 20
- **或关系类型**：stranger

---

## 📝 使用说明

1. **查看详细树状图**：请打开 `STORY_TREE_VISUAL.md` 查看完整的ASCII艺术树状图
2. **场景编号**：所有场景都按照层级和分支进行了规范化编号
3. **选择ID**：所有选择ID都遵循统一的命名规范
4. **路径匹配**：系统根据完整路径和深度进行场景匹配

---

**版本**：2.1（修复编号和顺序Bug）  
**最后更新**：2024年
