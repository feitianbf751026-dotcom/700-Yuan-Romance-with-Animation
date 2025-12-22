# Branch B Strict Matcher 映射导出

## 1) Strict Matcher 映射表（Depth 1-9）

**注意**: Branch B 的 strict matcher 使用 `hasToken(tokens, ...)` 进行历史路径匹配，而不是精确的 `lastChoice === ...` 匹配。

| depth | lastChoice | Scene 常量名 | 代码判断条件 |
|-------|-----------|-------------|-------------|
| 1 | (any) | SCENE_1B_MESSAGE | `depth === 1` |
| 2 | 1b_1 | SCENE_1B_DELETED | `path[1] === "1b_1"` |
| 2 | 1b_2 | SCENE_1B_CHAT | `path[1] === "1b_2"` |
| 2 | 1b_3 | SCENE_1B_COFFEE | `path[1] === "1b_3"` |
| 3 | 1b_1a | SCENE_1B_APOLOGY | `hasToken(tokens, "1b_1a")` |
| 3 | 1b_1b | SCENE_1B_REGRET | `hasToken(tokens, "1b_1b")` |
| 3 | 1b_2a | SCENE_1B_PLAN_MEET | `hasToken(tokens, "1b_2a")` |
| 3 | 1b_2b | SCENE_1B_DEEP_CHAT | `hasToken(tokens, "1b_2b")` |
| 3 | 1b_2ae | SCENE_1B_4C_HESITATION | `hasToken(tokens, "1b_2ae")` |
| 3 | 1b_3a | SCENE_1B_COFFEE_TALK | `hasToken(tokens, "1b_3a")` |
| 3 | 1b_3b | SCENE_2_REUNION | `hasToken(tokens, "1b_3b")` |
| 4 | 1b_1aa | SCENE_1B_4A_DELETED_REGRET | `hasToken(tokens, "1b_1aa")` |
| 4 | 1b_1ab | SCENE_1B_4A_DELETED_REGRET | `hasToken(tokens, "1b_1ab")` |
| 4 | 1b_1ac | SCENE_2_REUNION | `hasToken(tokens, "1b_1ac")` |
| 4 | 1b_1ad | SCENE_1B_4A_DELETED_REGRET | `hasToken(tokens, "1b_1ad")` |
| 4 | 1b_2aa | SCENE_1B_5A_MEET_PLAN | `hasToken(tokens, "1b_2aa")` |
| 4 | 1b_2ab | SCENE_1B_4B_CHAT_DEEPEN | `hasToken(tokens, "1b_2ab")` |
| 4 | 1b_2ac | SCENE_1B_6A_COFFEE_CONVERSATION | `hasToken(tokens, "1b_2ac")` |
| 4 | 1b_2ad | SCENE_2_REUNION | `hasToken(tokens, "1b_2ad")` |
| 4 | 1b_2ae | SCENE_1B_4C_HESITATION | `hasToken(tokens, "1b_2ae")` |
| 4 | 1b_2af | SCENE_1B_4D_TRUST_BUILD | `hasToken(tokens, "1b_2af")` |
| 4 | 1b_3c | SCENE_1B_REGULAR_MEET | `hasToken(tokens, "1b_3c")` |
| 4 | 1b_3d | SCENE_2_REUNION | `hasToken(tokens, "1b_3d")` |
| 4 | 2_1 | SCENE_2_1_AWKWARD | `hasToken(tokens, "2_1")` |
| 4 | 2_2 | SCENE_2_2_RECOGNITION | `hasToken(tokens, "2_2")` |
| 4 | 2_3 | SCENE_2_3_ESCAPE | `hasToken(tokens, "2_3")` |
| 4 | 3_1 | SCENE_3_1_LUNCH_TALK | `hasToken(tokens, "3_1")` |
| 4 | 3_2 | SCENE_3_2_REJECTION | `hasToken(tokens, "3_2")` |
| 4 | 3_3 | SCENE_3_3_APOLOGY | `hasToken(tokens, "3_3")` |
| 5 | 1b_4a | SCENE_1B_APOLOGY | `hasToken(tokens, "1b_4a")` |
| 5 | 1b_4b | SCENE_1B_4A_DELETED_REGRET | `hasToken(tokens, "1b_4b")` |
| 5 | 1b_4c | SCENE_1B_5A_MEET_PLAN | `hasToken(tokens, "1b_4c")` |
| 5 | 1b_4d | SCENE_1B_4B_CHAT_DEEPEN | `hasToken(tokens, "1b_4d")` |
| 5 | 1b_4c_a | SCENE_1B_5C_DAILY_TALK | `hasToken(tokens, "1b_4c_a")` |
| 5 | 1b_4c_b | SCENE_1B_5E_DOUBT | `hasToken(tokens, "1b_4c_b")` |
| 5 | 1b_4c_c | SCENE_1B_5D_SHARED_MOMENT | `hasToken(tokens, "1b_4c_c")` |
| 5 | 1b_4d_a | SCENE_1B_5A_MEET_PLAN | `hasToken(tokens, "1b_4d_a")` |
| 5 | 1b_4d_b | SCENE_1B_5E_DOUBT | `hasToken(tokens, "1b_4d_b")` |
| 5 | 1b_4d_c | SCENE_1B_5C_DAILY_TALK | `hasToken(tokens, "1b_4d_c")` |
| 5 | 1b_5a | SCENE_1B_6A_COFFEE_CONVERSATION | `hasToken(tokens, "1b_5a")` |
| 5 | 1b_5b | SCENE_1B_6A_COFFEE_CONVERSATION | `hasToken(tokens, "1b_5b")` |
| 5 | 2_1a | SCENE_2_1A_CONFESSION | `hasToken(tokens, "2_1a")` |
| 5 | 2_1b | SCENE_2_1B_CONTINUE_ESCAPE | `hasToken(tokens, "2_1b")` |
| 5 | 2_2a | SCENE_2_2A_COFFEE_INVITATION | `hasToken(tokens, "2_2a")` |
| 5 | 2_2b | SCENE_2_2B_HESITATE | `hasToken(tokens, "2_2b")` |
| 5 | 2_3a | SCENE_2_3A_TURN_BACK | `hasToken(tokens, "2_3a")` |
| 5 | 2_3b | SCENE_2_3B_FINAL_ESCAPE | `hasToken(tokens, "2_3b")` |
| 5 | 3_1a | SCENE_3_1A_AGREE | `hasToken(tokens, "3_1a")` |
| 5 | 3_1b | SCENE_3_1B_HESITATE | `hasToken(tokens, "3_1b")` |
| 5 | 3_2a | SCENE_3_2A_REGRET | `hasToken(tokens, "3_2a")` |
| 5 | 3_2b | SCENE_3_2B_FINAL_ESCAPE | `hasToken(tokens, "3_2b")` |
| 5 | 3_3a | SCENE_3_3A_NEW_START | `hasToken(tokens, "3_3a")` |
| 5 | 3_3b | SCENE_3_3B_FEAR | `hasToken(tokens, "3_3b")` |
| 6 | 1b_6a | SCENE_1B_7A_REGULAR_MEETINGS | `hasToken(tokens, "1b_6a")` |
| 6 | 1b_6b | SCENE_1B_7A_REGULAR_MEETINGS | `hasToken(tokens, "1b_6b")` |
| 6 | 1b_6e_a | SCENE_1B_7A_REGULAR_MEETINGS | `hasToken(tokens, "1b_6e_a")` |
| 6 | 1b_6e_b | SCENE_1B_7C_FRIENDSHIP_CONFIRM | `hasToken(tokens, "1b_6e_b")` |
| 6 | 1b_5c_a | SCENE_1B_6B_DEEP_UNDERSTANDING | `hasToken(tokens, "1b_5c_a")` |
| 6 | 1b_5c_b | SCENE_1B_6C_CONFLICT | `hasToken(tokens, "1b_5c_b")` |
| 6 | 1b_5c_c | SCENE_1B_6D_RECONCILIATION | `hasToken(tokens, "1b_5c_c")` |
| 6 | 1b_5d_a | SCENE_1B_6A_COFFEE_CONVERSATION | `hasToken(tokens, "1b_5d_a")` |
| 6 | 1b_5d_b | SCENE_1B_6C_CONFLICT | `hasToken(tokens, "1b_5d_b")` |
| 6 | 1b_5d_c | SCENE_1B_6B_DEEP_UNDERSTANDING | `hasToken(tokens, "1b_5d_c")` |
| 6 | 1b_5e_a | SCENE_1B_6D_RECONCILIATION | `hasToken(tokens, "1b_5e_a")` |
| 6 | 1b_5e_b | SCENE_1B_6A_COFFEE_CONVERSATION | `hasToken(tokens, "1b_5e_b")` |
| 6 | 1b_5e_c | SCENE_1B_6C_CONFLICT | `hasToken(tokens, "1b_5e_c")` |
| 6 | 1b_4e_a | SCENE_1B_5F_EMOTIONAL_TURMOIL | `hasToken(tokens, "1b_4e_a")` |
| 6 | 1b_4e_b | SCENE_1B_4B_CHAT_DEEPEN | `hasToken(tokens, "1b_4e_b")` |
| 6 | 1b_5f_a | SCENE_1B_6A_COFFEE_CONVERSATION | `hasToken(tokens, "1b_5f_a")` |
| 6 | 1b_5f_b | SCENE_1B_5F_EMOTIONAL_TURMOIL | `hasToken(tokens, "1b_5f_b")` |
| 6 | 1b_4c_a | SCENE_1B_5C_DAILY_TALK | `hasToken(tokens, "1b_4c_a")` |
| 6 | 1b_4c_b | SCENE_1B_5E_DOUBT | `hasToken(tokens, "1b_4c_b")` |
| 6 | 1b_4c_c | SCENE_1B_5D_SHARED_MOMENT | `hasToken(tokens, "1b_4c_c")` |
| 6 | 1b_4d_a | SCENE_1B_5A_MEET_PLAN | `hasToken(tokens, "1b_4d_a")` |
| 6 | 1b_4d_b | SCENE_1B_5E_DOUBT | `hasToken(tokens, "1b_4d_b")` |
| 6 | 1b_4d_c | SCENE_1B_5C_DAILY_TALK | `hasToken(tokens, "1b_4d_c")` |
| 6 | 2_1aa | SCENE_1B_9A_FIRST_DATE | `hasToken(tokens, "2_1aa")` |
| 6 | 2_1ab | SCENE_1B_9B_FEAR_CONFRONTATION | `hasToken(tokens, "2_1ab")` |
| 6 | 2_1ba | SCENE_2_3A_TURN_BACK | `hasToken(tokens, "2_1ba")` |
| 6 | 2_1bb | SCENE_2_3B_FINAL_ESCAPE | `hasToken(tokens, "2_1bb")` |
| 6 | 2_2aa | SCENE_1B_9A_FIRST_DATE | `hasToken(tokens, "2_2aa")` |
| 6 | 2_2ab | SCENE_1B_9B_FEAR_CONFRONTATION | `hasToken(tokens, "2_2ab")` |
| 6 | 2_2ba | SCENE_1B_9C_FULL_CONFESSION | `hasToken(tokens, "2_2ba")` |
| 6 | 2_2bb | SCENE_2_3B_FINAL_ESCAPE | `hasToken(tokens, "2_2bb")` |
| 6 | 2_3aa | SCENE_1B_9A_FIRST_DATE | `hasToken(tokens, "2_3aa")` |
| 6 | 2_3ab | SCENE_2_2B_HESITATE | `hasToken(tokens, "2_3ab")` |
| 6 | 2_3ba | SCENE_1A_10C_ACCEPTANCE | `hasToken(tokens, "2_3ba")` |
| 6 | 2_3bb | SCENE_1A_10D_FINAL_SEARCH | `hasToken(tokens, "2_3bb")` |
| 6 | 3_1aa | SCENE_1B_9A_FIRST_DATE | `hasToken(tokens, "3_1aa")` |
| 6 | 3_1ab | SCENE_1B_9B_FEAR_CONFRONTATION | `hasToken(tokens, "3_1ab")` |
| 6 | 3_1ba | SCENE_1B_9C_FULL_CONFESSION | `hasToken(tokens, "3_1ba")` |
| 6 | 3_1bb | SCENE_2_3B_FINAL_ESCAPE | `hasToken(tokens, "3_1bb")` |
| 6 | 3_2aa | SCENE_1B_9C_FULL_CONFESSION | `hasToken(tokens, "3_2aa")` |
| 6 | 3_2ab | SCENE_2_3B_FINAL_ESCAPE | `hasToken(tokens, "3_2ab")` |
| 6 | 3_2ba | SCENE_1A_10C_ACCEPTANCE | `hasToken(tokens, "3_2ba")` |
| 6 | 3_2bb | SCENE_1A_10D_FINAL_SEARCH | `hasToken(tokens, "3_2bb")` |
| 6 | 3_3aa | SCENE_1B_9A_FIRST_DATE | `hasToken(tokens, "3_3aa")` |
| 6 | 3_3ab | SCENE_1B_9B_FEAR_CONFRONTATION | `hasToken(tokens, "3_3ab")` |
| 6 | 3_3ba | SCENE_1B_9C_FULL_CONFESSION | `hasToken(tokens, "3_3ba")` |
| 6 | 3_3bb | SCENE_1B_10B_FRIENDSHIP_CHOICE | `hasToken(tokens, "3_3bb")` |
| 7 | 1b_7a | SCENE_1B_8A_RELATIONSHIP_DEFINE | `hasToken(tokens, "1b_7a")` |
| 7 | 1b_7b | SCENE_1B_8A_RELATIONSHIP_DEFINE | `hasToken(tokens, "1b_7b")` |
| 7 | 1b_7c | SCENE_1B_7B_CONFESSION_MOMENT | `hasToken(tokens, "1b_7c")` |
| 7 | 1b_7d | SCENE_1B_7C_FRIENDSHIP_CONFIRM | `hasToken(tokens, "1b_7d")` |
| 7 | 1b_7e | SCENE_1B_7D_DISTANCE_KEEP | `hasToken(tokens, "1b_7e")` |
| 7 | 1b_7f | SCENE_1B_7E_COMPLICATED_FEEL | `hasToken(tokens, "1b_7f")` |
| 7 | 1b_7g_a | SCENE_1B_8G_PROMISE_MADE | `hasToken(tokens, "1b_7g_a")` |
| 7 | 1b_7g_b | SCENE_1B_8A_RELATIONSHIP_DEFINE | `hasToken(tokens, "1b_7g_b")` |
| 7 | 1b_7h | SCENE_1B_8A_RELATIONSHIP_DEFINE | `hasToken(tokens, "1b_7h")` |
| 7 | 1b_7i | SCENE_1B_7D_DISTANCE_KEEP | `hasToken(tokens, "1b_7i")` |
| 7 | 1b_7j | SCENE_1B_8A_RELATIONSHIP_DEFINE | `hasToken(tokens, "1b_7j")` |
| 7 | 1b_7k | SCENE_1B_7E_COMPLICATED_FEEL | `hasToken(tokens, "1b_7k")` |
| 8 | 1b_8a | SCENE_1B_9A_FIRST_DATE | `hasToken(tokens, "1b_8a")` |
| 8 | 1b_8b | SCENE_1B_9B_FEAR_CONFRONTATION | `hasToken(tokens, "1b_8b")` |
| 8 | 1b_8c | SCENE_1B_9C_FULL_CONFESSION | `hasToken(tokens, "1b_8c")` |
| 8 | 1b_8d | SCENE_1B_8B_FEAR_FACE | `hasToken(tokens, "1b_8d")` |
| 8 | 1b_8e | SCENE_1B_8C_PAST_CONFESS | `hasToken(tokens, "1b_8e")` |
| 8 | 1b_8f | SCENE_1B_8D_FUTURE_PLAN | `hasToken(tokens, "1b_8f")` |
| 8 | 1b_8g_a | SCENE_1B_9K_FUTURE_VISION | `hasToken(tokens, "1b_8g_a")` |
| 8 | 1b_8g_b | SCENE_1B_9A_FIRST_DATE | `hasToken(tokens, "1b_8g_b")` |
| 8 | 1b_8h | SCENE_1B_9A_FIRST_DATE | `hasToken(tokens, "1b_8h")` |
| 8 | 1b_8i | SCENE_1B_9B_FEAR_CONFRONTATION | `hasToken(tokens, "1b_8i")` |
| 8 | 1b_8j | SCENE_1B_9A_FIRST_DATE | `hasToken(tokens, "1b_8j")` |
| 8 | 1b_8k | SCENE_1B_9B_FEAR_CONFRONTATION | `hasToken(tokens, "1b_8k")` |
| 9 | 1b_9a | SCENE_1B_10A_RELATIONSHIP_GROWTH | `hasToken(tokens, "1b_9a")` |
| 9 | 1b_9b | SCENE_1B_10A_RELATIONSHIP_GROWTH | `hasToken(tokens, "1b_9b")` |
| 9 | 1b_9c | SCENE_1B_10A_RELATIONSHIP_GROWTH | `hasToken(tokens, "1b_9c")` |
| 9 | 1b_9d | SCENE_1B_10B_FRIENDSHIP_CHOICE | `hasToken(tokens, "1b_9d")` |
| 9 | 1b_9e | SCENE_1B_10A_RELATIONSHIP_GROWTH | `hasToken(tokens, "1b_9e")` |
| 9 | 1b_9f | SCENE_1B_10B_FRIENDSHIP_CHOICE | `hasToken(tokens, "1b_9f")` |
| 9 | 1b_9k_a | SCENE_1B_10C_RELATIONSHIP_FINAL | `hasToken(tokens, "1b_9k_a")` |
| 9 | 1b_9k_b | SCENE_1B_10A_RELATIONSHIP_GROWTH | `hasToken(tokens, "1b_9k_b")` |
| 9 | 1b_9g | SCENE_1B_9D_RELATIONSHIP_DECISION | `hasToken(tokens, "1b_9g")` |
| 9 | 1b_9h | SCENE_1B_9E_FINAL_CHOICE | `hasToken(tokens, "1b_9h")` |
| 9 | 1b_9i | SCENE_1B_9F_NEW_BEGINNING | `hasToken(tokens, "1b_9i")` |
| 9 | 1b_9j | SCENE_1B_9E_FINAL_CHOICE | `hasToken(tokens, "1b_9j")` |
| 9 | 1b_9k | SCENE_1B_10A_RELATIONSHIP_GROWTH | `hasToken(tokens, "1b_9k")` |
| 9 | 1b_9l | SCENE_1B_10B_FRIENDSHIP_CHOICE | `hasToken(tokens, "1b_9l")` |

### 统计
- **depth 范围**: 1-9
- **choice 总数**: 108
- **scene 总数**: 45（去重后）

## 2) 关键 Scene 内容证据

### 1. SCENE_1B_MESSAGE（开局动机）
**摘要**: 主角发消息道歉，她回复安慰，询问是否还好，提议如果只是想聊天可以不用这样。

**证据片段**:
```
最后发出去的只有简单的几个字：

"不好意思，我来不了了。给您添麻烦了。"

发送。

我盯着屏幕看了很久，对方一直没回。时间一分一秒地过去，每一秒都像是煎熬。我正准备离开，手机震了一下。

"没关系的。"
```

**文件路径**: `services/scenes/branch1B.ts:7-36`

---

### 2. SCENE_1B_CHAT（推进）
**摘要**: 两人深夜聊天，她透露自己也是第一次接单，两人聊到凌晨，她提议见面做普通朋友。

**证据片段**:
```
那晚，我们聊了很久。从晚上11点聊到凌晨3点，手机屏幕的光在黑暗中发着光，像是两个孤独的灵魂在互相取暖。

她告诉我，她叫琳，是个设计师。那段时间家里出了事，急需用钱，所以才接了那个单。但真到了那一刻，她也很害怕。

"其实，我也很庆幸你没来。"她说，声音很轻，"因为我不知道自己能不能真的做到。"
```

**文件路径**: `services/scenes/branch1B.ts:106-125`

---

### 3. SCENE_1B_COFFEE（推进）
**摘要**: 两人在咖啡店第一次见面，她准时出现，主角解释那晚没来的原因，她表示理解。

**证据片段**:
```
周六下午，我提前半小时就到了咖啡店。选了个靠窗的位置，点了两杯拿铁，然后开始等待。

她迟到了十分钟，进门的时候还在打电话："嗯，我到了，先挂了。"

挂断电话，她看到了我，愣了一下，然后笑了。那笑容很轻，但很真实。

"没想到你真的会来。"她在我对面坐下，脱掉外套，"我还以为你会放我鸽子。"
```

**文件路径**: `services/scenes/branch1B.ts:173-197`

---

### 4. SCENE_1B_6C_CONFLICT（冲突）
**摘要**: 两人开始有分歧，因小事和价值观不同产生争吵和冷战，主角怀疑是否适合，但不想失去她。

**证据片段**:
```
我们开始有了分歧。有时候是因为小事，有时候是因为价值观的不同。我开始怀疑，我们是否真的适合彼此。

"我觉得你太敏感了。"她说。

"我觉得你太冷漠了。"我说。

我们开始争吵，开始冷战，开始怀疑这段关系的意义。

"也许，我们真的不适合。"她说。
```

**文件路径**: `services/scenes/branch1B_additional.ts:457-481`

---

### 5. SCENE_1B_7B_CONFESSION_MOMENT（转折）
**摘要**: 主角在咖啡店坦白那晚的恐惧，她表示理解，两人讨论是否可以重新开始。

**证据片段**:
```
我们坐在咖啡店的角落里，夜色很浓，店里的灯光很暗。我把所有的事情都说了出来，每一个字都像是从心底挖出来的。

"其实，我想先坦白一件事。"我说，声音很轻，"那天晚上，我发了消息给你，但我其实很害怕。我害怕你会拒绝我，我害怕你会觉得我很奇怪。"

她安静地听完，没有说话。咖啡的热气在我们之间升腾，模糊了视线。

"我明白了。"她终于开口，声音很轻，"你发消息给我，是因为你想了解我，但又不敢直接接近我，对吗？"
```

**文件路径**: `services/scenes/branch1B_additional.ts:7-29`

---

### 6. SCENE_1B_9A_FIRST_DATE（关键门槛）
**摘要**: 两人第一次正式约会，主角提前到达，她准时出现，两人开始正式交往。

**证据片段**:
```
我们开始了第一次正式的约会。

我提前半小时就到了，选了个靠窗的位置，点了她最喜欢的拿铁。咖啡的香气在空气中弥漫，阳光透过百叶窗洒在桌子上，形成斑驳的光影。

她准时出现，穿着简单的白衬衫和牛仔裤，和我想象中的完全不一样。我想象中的她，应该是那种浓妆艳抹、穿着暴露的样子。但眼前的她，干净、简单，甚至有些朴素。

"你好。"她在我对面坐下，把包放在旁边的椅子上，"没想到我们真的会在一起。"
```

**文件路径**: `services/scenes/branch1B.ts:554-575`

---

### 7. SCENE_1B_9C_FULL_CONFESSION（终局前）
**摘要**: 主角向她坦白一切，包括那晚逃跑和删除联系方式，她表示理解，透露自己也在观察主角。

**证据片段**:
```
我选择了向她坦白一切。

"其实，我想先坦白一件事。"我说，声音很轻，"那天晚上，我到了门口，但我逃跑了。我删除了你的联系方式，我试图忘记你，但我做不到。"

她安静地听完，没有说话。空气很安静，安静到我能听到自己的心跳声。

"我明白了。"她终于开口，声音很轻，"你跟踪我，是因为你想了解我，但又不敢直接接近我，对吗？"

"其实，我也一直在观察你。"她说，"在公司里，在电梯里，在食堂里。我一直在想，你会不会主动和我说话。"
```

**文件路径**: `services/scenes/branch1B.ts:600-621`

---

### 8. SCENE_1B_10A_RELATIONSHIP_GROWTH（结局）
**摘要**: 两人开始正式交往，每周见面，互相了解，她评价主角"太善良"，主角意识到可以改变和幸福。

**证据片段**:
```
从那天起，我们开始正式交往。

我们每周六下午都会见面，有时候是咖啡店，有时候是公园，有时候是电影院。我们聊工作，聊生活，聊那些不敢对别人说的话。

我慢慢了解到，她叫琳，是个设计师。她喜欢画画，喜欢看日落，喜欢在深夜听音乐。她也开始了解我。我的工作，我的孤独，我的恐惧。

"你知道吗？"有一天她对我说，声音很轻，但很坚定，"你其实不是懦弱，你只是太善良了。善良到不敢伤害任何人，包括自己。"

那一刻，我突然意识到，也许，我真的可以改变。也许，我真的可以幸福。
```

**文件路径**: `services/scenes/branch1B.ts:623-641`

