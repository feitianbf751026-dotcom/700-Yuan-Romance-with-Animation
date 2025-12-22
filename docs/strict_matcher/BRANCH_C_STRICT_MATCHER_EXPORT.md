# Branch C Strict Matcher 映射表与场景证据

## A) Depth 1-10 映射表

**函数**: `match1CBranchStrict`  
**文件**: `services/pathMatcher/branch1C.ts`

| depth | lastChoice | Scene 常量名 | 原始判断 |
|-------|------------|--------------|----------|
| 1 | (无选择) | SCENE_1C_HESITATE | `depth === 1` |
| 2 | 1c_1 | SCENE_1C_GUILT | `lastChoice === '1c_1'` |
| 2 | 1c_1b | SCENE_1C_GUILT | `lastChoice === '1c_1b'` |
| 2 | 1c_1c | SCENE_1C_GUILT | `lastChoice === '1c_1c'` |
| 3 | 1c_2 | SCENE_1C_FIRST_MESSAGE | `lastChoice === '1c_2'` |
| 3 | 1c_3 | SCENE_1C_STALKING | `lastChoice === '1c_3'` |
| 4 | 1c_2a | SCENE_1C_MEETING | `lastChoice === '1c_2a'` |
| 4 | 1c_2b | SCENE_1C_4A_GUILT_OBSERVE | `lastChoice === '1c_2b'` |
| 4 | 1c_3a | SCENE_1B_APOLOGY | `lastChoice === '1c_3a'` |
| 4 | 1c_3b | SCENE_1C_4A_GUILT_OBSERVE | `lastChoice === '1c_3b'` |
| 4 | 1c_4 | SCENE_1C_MEETING | `lastChoice === '1c_4'` |
| 4 | 1c_5 | SCENE_1C_4A_GUILT_OBSERVE | `lastChoice === '1c_5'` |
| 4 | 1c_4c_a | SCENE_1C_4D_SEEK_FORGIVE | `lastChoice === '1c_4c_a'` |
| 4 | 1c_4c_b | SCENE_1C_4E_ACCEPTANCE | `lastChoice === '1c_4c_b'` |
| 4 | 1c_4c_c | SCENE_1C_4C_GUILT_DEEPEN | `lastChoice === '1c_4c_c'` |
| 4 | 1c_4d_a | SCENE_1C_5A_FIRST_MEETING | `lastChoice === '1c_4d_a'` |
| 4 | 1c_4d_b | SCENE_1C_5B_SLOW_APPROACH | `lastChoice === '1c_4d_b'` |
| 4 | 1c_4e_a | SCENE_1C_5A_FIRST_MEETING | `lastChoice === '1c_4e_a'` |
| 4 | 1c_4e_b | SCENE_1C_4C_GUILT_DEEPEN | `lastChoice === '1c_4e_b'` |
| 5 | 1c_4c | SCENE_1C_5A_FIRST_MEETING | `lastChoice === '1c_4c'` |
| 5 | 1c_4d | SCENE_1C_4B_FIRST_MESSAGE | `lastChoice === '1c_4d'` |
| 5 | 1c_5a | SCENE_1C_6A_DEEP_TALK | `lastChoice === '1c_5a'` |
| 5 | 1c_5b | SCENE_1C_FRIENDSHIP | `lastChoice === '1c_5b'` |
| 5 | 1c_5b_a | SCENE_1C_5B_SLOW_APPROACH | `lastChoice === '1c_5b_a'` |
| 5 | 1c_5b_b | SCENE_1C_5C_BARRIER | `lastChoice === '1c_5b_b'` |
| 5 | 1c_5c_a | SCENE_1C_5D_BREAKTHROUGH | `lastChoice === '1c_5c_a'` |
| 5 | 1c_5c_b | SCENE_1C_5C_BARRIER | `lastChoice === '1c_5c_b'` |
| 5 | 1c_5d_a | SCENE_1C_6A_DEEP_TALK | `lastChoice === '1c_5d_a'` |
| 5 | 1c_5d_b | SCENE_1C_FRIENDSHIP | `lastChoice === '1c_5d_b'` |
| 5 | 1c_4f_a | SCENE_1C_5E_GROWING_CLOSER | `lastChoice === '1c_4f_a'` |
| 5 | 1c_5e_a | SCENE_1C_6A_DEEP_TALK | `lastChoice === '1c_5e_a'` |
| 5 | 1c_5e_b | SCENE_1C_FRIENDSHIP | `lastChoice === '1c_5e_b'` |
| 6 | 1c_6a | SCENE_1C_7A_RELATIONSHIP_GROW | `lastChoice === '1c_6a'` |
| 6 | 1c_6b | SCENE_1C_7A_RELATIONSHIP_GROW | `lastChoice === '1c_6b'` |
| 6 | 1c_6b_a | SCENE_1C_6B_TRUST_TEST | `lastChoice === '1c_6b_a'` |
| 6 | 1c_6b_b | SCENE_1C_6C_UNDERSTANDING | `lastChoice === '1c_6b_b'` |
| 6 | 1c_6c_a | SCENE_1C_6D_DECISION | `lastChoice === '1c_6c_a'` |
| 6 | 1c_6c_b | SCENE_1C_6C_UNDERSTANDING | `lastChoice === '1c_6c_b'` |
| 6 | 1c_6d_a | SCENE_1C_7A_RELATIONSHIP_GROW | `lastChoice === '1c_6d_a'` |
| 6 | 1c_6d_b | SCENE_1C_7A_RELATIONSHIP_GROW | `lastChoice === '1c_6d_b'` |
| 6 | 1c_6e_a | SCENE_1C_6E_EMOTIONAL_BOND | `lastChoice === '1c_6e_a'` |
| 6 | 1c_6e_b | SCENE_1C_7A_RELATIONSHIP_GROW | `lastChoice === '1c_6e_b'` |
| 7 | 1c_7a | SCENE_1C_8A_FINAL_CHOICE | `lastChoice === '1c_7a'` |
| 7 | 1c_7b | SCENE_1C_8A_FINAL_CHOICE | `lastChoice === '1c_7b'` |
| 7 | 1c_7b_a | SCENE_1C_7B_CONFESSION_MOMENT | `lastChoice === '1c_7b_a'` |
| 7 | 1c_7b_b | SCENE_1C_7C_FRIENDSHIP_CONFIRM | `lastChoice === '1c_7b_b'` |
| 7 | 1c_7b_c | SCENE_1C_7D_DISTANCE_KEEP | `lastChoice === '1c_7b_c'` |
| 7 | 1c_7c_a | SCENE_1C_8A_FINAL_CHOICE | `lastChoice === '1c_7c_a'` |
| 7 | 1c_7c_b | SCENE_1C_7C_FRIENDSHIP_CONFIRM | `lastChoice === '1c_7c_b'` |
| 7 | 1c_7d_a | SCENE_1C_8A_FINAL_CHOICE | `lastChoice === '1c_7d_a'` |
| 7 | 1c_7d_b | SCENE_1C_7D_DISTANCE_KEEP | `lastChoice === '1c_7d_b'` |
| 7 | 1c_7e_a | SCENE_1C_8A_FINAL_CHOICE | `lastChoice === '1c_7e_a'` |
| 7 | 1c_7e_b | SCENE_1C_7E_COMPLICATED_FEEL | `lastChoice === '1c_7e_b'` |
| 7 | 1c_7g_a | SCENE_1C_8G_REDEMPTION_PATH | `lastChoice === '1c_7g_a'` |
| 7 | 1c_7g_b | SCENE_1C_8A_FINAL_CHOICE | `lastChoice === '1c_7g_b'` |
| 8 | 1c_8a | SCENE_1C_9A_NEW_BEGINNING | `lastChoice === '1c_8a'` |
| 8 | 1c_8b | SCENE_1C_9B_FEAR_AGAIN | `lastChoice === '1c_8b'` |
| 8 | 1c_8c | SCENE_1C_9C_700_APOLOGY | `lastChoice === '1c_8c'` |
| 8 | 1c_8b_a | SCENE_1C_8B_FEAR_FACE | `lastChoice === '1c_8b_a'` |
| 8 | 1c_8b_b | SCENE_1C_8D_PAST_CONFESS | `lastChoice === '1c_8b_b'` |
| 8 | 1c_8d_a | SCENE_1C_8E_FUTURE_PLAN | `lastChoice === '1c_8d_a'` |
| 8 | 1c_8d_b | SCENE_1C_8F_FINAL_HESITATION | `lastChoice === '1c_8d_b'` |
| 8 | 1c_8e_a | SCENE_1C_9A_NEW_BEGINNING | `lastChoice === '1c_8e_a'` |
| 8 | 1c_8e_b | SCENE_1C_9B_FEAR_AGAIN | `lastChoice === '1c_8e_b'` |
| 8 | 1c_8f_a | SCENE_1C_9A_NEW_BEGINNING | `lastChoice === '1c_8f_a'` |
| 8 | 1c_8f_b | SCENE_1C_9B_FEAR_AGAIN | `lastChoice === '1c_8f_b'` |
| 8 | 1c_8g_a | SCENE_1C_9K_NEW_BEGINNING | `lastChoice === '1c_8g_a'` |
| 8 | 1c_8g_b | SCENE_1C_9B_FEAR_AGAIN | `lastChoice === '1c_8g_b'` |
| 9 | 1c_9a | SCENE_1C_10A_RELATIONSHIP_DEEPEN | `lastChoice === '1c_9a'` |
| 9 | 1c_9b | SCENE_1C_10B_FRIENDSHIP_PATH | `lastChoice === '1c_9b'` |
| 9 | 1c_9c | SCENE_1C_10A_RELATIONSHIP_DEEPEN | `lastChoice === '1c_9c'` |
| 9 | 1c_9d | SCENE_1C_10B_FRIENDSHIP_PATH | `lastChoice === '1c_9d'` |
| 9 | 1c_9e | SCENE_1C_10A_RELATIONSHIP_DEEPEN | `lastChoice === '1c_9e'` |
| 9 | 1c_9f | SCENE_1C_10B_FRIENDSHIP_PATH | `lastChoice === '1c_9f'` |
| 9 | 1c_9d_a | SCENE_1C_9D_RELATIONSHIP_DECISION | `lastChoice === '1c_9d_a'` |
| 9 | 1c_9d_b | SCENE_1C_9E_FINAL_CHOICE | `lastChoice === '1c_9d_b'` |
| 9 | 1c_9e_a | SCENE_1C_9F_NEW_BEGINNING | `lastChoice === '1c_9e_a'` |
| 9 | 1c_9e_b | SCENE_1C_9E_FINAL_CHOICE | `lastChoice === '1c_9e_b'` |
| 9 | 1c_9f_a | SCENE_1C_10A_RELATIONSHIP_DEEPEN | `lastChoice === '1c_9f_a'` |
| 9 | 1c_9f_b | SCENE_1C_10B_FRIENDSHIP_PATH | `lastChoice === '1c_9f_b'` |
| 9 | 1c_9k_a | SCENE_1C_10C_REDEMPTION_FINAL | `lastChoice === '1c_9k_a'` |
| 9 | 1c_9k_b | SCENE_1C_10A_RELATIONSHIP_DEEPEN | `lastChoice === '1c_9k_b'` |

## B) 8 个关键 Scene 证据块

### 1. SCENE_1C_HESITATE
**摘要**: 主角站在门口犹豫，最终没有敲门就离开了，但保留了联系方式。

**证据片段**:
```
[占位场景: SCENE_1C_HESITATE]
```

**文件路径**: `services/scenes/branch1C.ts` (占位版本)

---

### 2. SCENE_1C_4C_GUILT_DEEPEN
**摘要**: 内疚感加深，主角开始失眠做噩梦，意识到不能再这样下去。

**证据片段**:
```
内疚感在我心里越来越深。每次看到她的朋友圈，每次听到她的消息，我都会想起那个夜晚，想起那700块钱，想起我的逃避。

我开始失眠，开始做噩梦。梦里，我总是站在那扇门前，但永远不敢敲门。

"我到底在害怕什么？"我问自己。
```

**文件路径**: `services/scenes/branch1C_additional.ts`

---

### 3. SCENE_1C_4D_SEEK_FORGIVE
**摘要**: 主角决定寻求她的原谅，给她发消息道歉，她同意聊聊。

**证据片段**:
```
我决定寻求她的原谅。我知道，这很难，但我必须这么做。

我给她发了条消息："我想为那天的事道歉。我知道这很突然，但我真的想和你聊聊。"

发送。

我盯着屏幕，心跳加速。她会回吗？她会原谅我吗？

三天后，她回了："好，我们聊聊。"
```

**文件路径**: `services/scenes/branch1C_additional.ts`

---

### 5. SCENE_1C_5E_GROWING_CLOSER
**摘要**: 两人通过每天聊天逐渐靠近，她发画作照片，暗示也在想他。

**证据片段**:
```
我们开始每天聊天。从早安到晚安，从工作到生活，从天气到心情。手机成了我们之间最重要的联系。

有一天，她发了一张照片给我。是她画的画，画的是窗外的夕阳。夕阳把天空染成橘红色，很美。

"好看吗？"她问。

"好看。"我说，"你画得很好。"

"其实，我画这幅画的时候，在想你。"她说，"在想，如果那天晚上你敲门了，现在会是什么样子？"
```

**文件路径**: `services/scenes/more_scenes.ts`

---

### 6. SCENE_1C_5C_BARRIER
**摘要**: 两人之间出现无形的墙，她质疑他们之间的关系定义。

**证据片段**:
```
我们之间似乎有一道无形的墙。无论我怎么努力，都无法跨越。

我开始怀疑，是不是我做错了什么？是不是我不够好？是不是我们真的不适合？

"你知道吗？"有一天她对我说，"我觉得我们之间的关系很奇怪。"

"什么意思？"我问。

"我不知道我们是什么。"她说，"朋友？陌生人？还是只是……互相取暖的人？"
```

**文件路径**: `services/scenes/branch1C_additional.ts`

---

### 7. SCENE_1C_5D_BREAKTHROUGH
**摘要**: 两人突破障碍，开始分享彼此的故事和内心，发现彼此都很孤独。

**证据片段**:
```
我们终于突破了那道墙。不是突然的，而是慢慢的，一点一点的。

我开始告诉她我的故事。我的工作，我的孤独，我的恐惧。那些我从未对任何人说过的话，在她面前，却变得那么容易说出口。

她也开始告诉我她的故事。她的工作，她的孤独，她的恐惧。那些她从未对任何人说过的话，在我面前，也变得那么容易说出口。

"你知道吗？"有一天她对我说，"我觉得我们很像。"

"什么意思？"我问。

"我们都是孤独的人。"她说，"但也许，我们可以不再孤独。"
```

**文件路径**: `services/scenes/branch1C_additional.ts`

---

### 8. SCENE_1C_6E_EMOTIONAL_BOND
**摘要**: 两人在公园见面，她画他的样子，情感纽带加深。

**证据片段**:
```
我们约在公园里见面。那是一个周末的下午，阳光很好，风很轻。

她坐在长椅上，手里拿着一本素描本，正在画着什么。我走过去，在她旁边坐下。

"你在画什么？"我问。

"画你。"她说，脸红了，"我想记住你的样子。"
```

**文件路径**: `services/scenes/more_scenes.ts`

---

### 9. SCENE_1C_7B_CONFESSION_MOMENT
**摘要**: 主角坦白那天晚上逃跑的事，承认一直在观察她，两人开始理解彼此。

**证据片段**:
```
我们坐在公司楼下的长椅上，夜色很浓，路灯的光很暗。我把所有的事情都说了出来，每一个字都像是从心底挖出来的。

"其实，我想先坦白一件事。"我说，声音很轻，"那天晚上，我到了门口，但我逃跑了。我保留了你的联系方式，但我从来没有勇气联系你。我一直在观察你，一直在想，如果那天我敲门了，现在会是什么样子？"

她安静地听完，没有说话。空气很安静，安静到我能听到自己的心跳声。

"我明白了。"她终于开口，声音很轻，"你观察我，是因为你想了解我，但又不敢直接接近我，对吗？"

我点了点头，不敢看她。
```

**文件路径**: `services/scenes/branch1C_additional.ts`

---

## C) 统计数字

- **Depth 范围**: 1-9 (depth=10 返回 null，由 legacy 处理)
- **Choice 总数**: 66 (depth=1 无选择入口不计入)
- **Scene 总数**: 40 (去重后的唯一 Scene 常量名数量)

