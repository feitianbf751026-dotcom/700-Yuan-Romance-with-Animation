# Branch A Strict Matcher 映射导出

## 1) Strict Matcher 映射表（Depth 1-9）

| depth | lastChoice | Scene 常量名 | 代码判断条件 |
|-------|-----------|-------------|-------------|
| 1 | (any) | SCENE_1A_PANIC | `depth === 1` |
| 2 | 1a_1 | SCENE_1A_LIFE | `lastChoice === '1a_1'` |
| 2 | 1a_1b | SCENE_1A_LIFE | `lastChoice === '1a_1b'` |
| 2 | 1a_1c | SCENE_1A_TRY_CHANGE | `lastChoice === '1a_1c'` |
| 3 | 1a_2 | SCENE_1A_DEEP_WORK | `lastChoice === '1a_2'` |
| 3 | 1a_3 | SCENE_1A_TRY_CHANGE | `lastChoice === '1a_3'` |
| 3 | 1a_2c | SCENE_1A_OBSERVE | `lastChoice === '1a_2c'` |
| 4 | 1a_2a | SCENE_1A_4A_WORK_COLLAPSE | `lastChoice === '1a_2a'` |
| 4 | 1a_2b | SCENE_1A_4B_TRY_SOCIAL | `lastChoice === '1a_2b'` |
| 4 | 1a_2d | SCENE_1A_4B_TRY_SOCIAL | `lastChoice === '1a_2d'` |
| 4 | 1a_3a | SCENE_1A_STRUGGLE | `lastChoice === '1a_3a'` |
| 4 | 1a_3b | SCENE_1A_OBSERVE | `lastChoice === '1a_3b'` |
| 4 | 1a_3c | SCENE_1A_OBSERVE | `lastChoice === '1a_3c'` |
| 4 | 1a_4 | SCENE_1A_CONFRONT | `lastChoice === '1a_4'` |
| 4 | 1a_5 | SCENE_1A_OBSERVE | `lastChoice === '1a_5'` |
| 4 | 1a_4a2 | SCENE_1A_4B_TRY_SOCIAL | `lastChoice === '1a_4a2'` |
| 5 | 1a_4a | SCENE_1A_5A_COLLAPSE_HOSPITAL | `lastChoice === '1a_4a'` |
| 5 | 1a_4b | SCENE_1A_5B_SOCIAL_ATTEMPT | `lastChoice === '1a_4b'` |
| 5 | 1a_4c | SCENE_1A_5A_CAFETERIA_TALK | `lastChoice === '1a_4c'` |
| 5 | 1a_4d | SCENE_1A_5B_AVOID_AGAIN | `lastChoice === '1a_4d'` |
| 5 | 1a_6 | SCENE_1A_FIRST_MEET | `lastChoice === '1a_6'` |
| 5 | 1a_6c | SCENE_1A_FIRST_MEET | `lastChoice === '1a_6c'` |
| 5 | 1a_7 | SCENE_1A_5B_AVOID_AGAIN | `lastChoice === '1a_7'` |
| 5 | 1a_8 | SCENE_1A_ELEVATOR_TALK | `lastChoice === '1a_8'` |
| 5 | 1a_8c | SCENE_1A_ELEVATOR_TALK | `lastChoice === '1a_8c'` |
| 5 | 1a_9 | SCENE_1A_STALKING | `lastChoice === '1a_9'` |
| 5 | 1a_4c_a | SCENE_1A_5C_FIRST_CONTACT | `lastChoice === '1a_4c_a'` |
| 5 | 1a_4c_b | SCENE_1A_5D_MISSED_CHANCE | `lastChoice === '1a_4c_b'` |
| 5 | 1a_4c_c | SCENE_1A_5B_SOCIAL_ATTEMPT | `lastChoice === '1a_4c_c'` |
| 5 | 1a_5c_a | SCENE_1A_FIRST_MEET | `lastChoice === '1a_5c_a'` |
| 5 | 1a_5c_b | SCENE_1A_5D_MISSED_CHANCE | `lastChoice === '1a_5c_b'` |
| 5 | 1a_5d_a | SCENE_1A_ELEVATOR_TALK | `lastChoice === '1a_5d_a'` |
| 5 | 1a_5d_b | SCENE_1A_STALKING | `lastChoice === '1a_5d_b'` |
| 5 | 1a_4e_a | SCENE_1A_5E_OPPORTUNITY | `lastChoice === '1a_4e_a'` |
| 5 | 1a_5e_a | SCENE_1A_FIRST_MEET | `lastChoice === '1a_5e_a'` |
| 5 | 1a_5e_b | SCENE_1A_OBSERVE | `lastChoice === '1a_5e_b'` |
| 6 | 1a_5aa | SCENE_1A_6A_COFFEE_DEEP | `lastChoice === '1a_5aa'` |
| 6 | 1a_5ab | SCENE_1A_8B_FINAL_ESCAPE | `lastChoice === '1a_5ab'` |
| 6 | 1a_5ba | SCENE_1A_5A_CAFETERIA_TALK | `lastChoice === '1a_5ba'` |
| 6 | 1a_5bb | SCENE_1A_5B_AVOID_AGAIN | `lastChoice === '1a_5bb'` |
| 6 | 1a_5a | SCENE_1A_6A_COFFEE_DEEP | `lastChoice === '1a_5a'` |
| 6 | 1a_5b | SCENE_1A_6B_ELEVATOR_CONTINUE | `lastChoice === '1a_5b'` |
| 6 | 1a_5c | SCENE_1A_6B_ELEVATOR_CONTINUE | `lastChoice === '1a_5c'` |
| 6 | 1a_5d | SCENE_1A_7B_STALKING_DISCOVERED | `lastChoice === '1a_5d'` |
| 6 | 1a_6 | SCENE_1A_FIRST_MEET | `lastChoice === '1a_6'` |
| 6 | 1a_6c_a | SCENE_1A_6C_DEEP_CONNECTION | `lastChoice === '1a_6c_a'` |
| 6 | 1a_6c_b | SCENE_1A_6D_MUTUAL_UNDERSTANDING | `lastChoice === '1a_6c_b'` |
| 6 | 1a_6d_a | SCENE_1A_6E_TRUST_BUILDING | `lastChoice === '1a_6d_a'` |
| 6 | 1a_6d_b | SCENE_1A_6F_INTIMACY_DEEPEN | `lastChoice === '1a_6d_b'` |
| 6 | 1a_6e_a | SCENE_1A_7A_RELATIONSHIP_GROW | `lastChoice === '1a_6e_a'` |
| 6 | 1a_6e_b | SCENE_1A_BUILDING_TRUST | `lastChoice === '1a_6e_b'` |
| 6 | 1a_6f_a | SCENE_1A_7A_RELATIONSHIP_GROW | `lastChoice === '1a_6f_a'` |
| 6 | 1a_6f_b | SCENE_1A_BUILDING_TRUST | `lastChoice === '1a_6f_b'` |
| 6 | 1a_6g_a | SCENE_1A_6G_RELATIONSHIP_DEVELOPMENT | `lastChoice === '1a_6g_a'` |
| 6 | 1a_6g_b | SCENE_1A_BUILDING_TRUST | `lastChoice === '1a_6g_b'` |
| 7 | 1a_6a | SCENE_1A_BUILDING_TRUST | `lastChoice === '1a_6a'` |
| 7 | 1a_6a2 | SCENE_1A_BUILDING_TRUST | `lastChoice === '1a_6a2'` |
| 7 | 1a_6b | SCENE_1A_BUILDING_TRUST | `lastChoice === '1a_6b'` |
| 7 | 1a_6c | SCENE_1A_7A_RELATIONSHIP_GROW | `lastChoice === '1a_6c'` |
| 7 | 1a_6d | SCENE_1A_7B_STALKING_DISCOVERED | `lastChoice === '1a_6d'` |
| 7 | 1a_6c2 | SCENE_1A_7A_RELATIONSHIP_GROW | `lastChoice === '1a_6c2'` |
| 7 | 1a_7a | SCENE_1A_7A_RELATIONSHIP_GROW | `lastChoice === '1a_7a'` |
| 7 | 1a_7b | SCENE_1A_7A_RELATIONSHIP_GROW | `lastChoice === '1a_7b'` |
| 7 | 1a_7c | SCENE_1A_8A_CONFESSION | `lastChoice === '1a_7c'` |
| 7 | 1a_7d | SCENE_1A_8B_FINAL_ESCAPE | `lastChoice === '1a_7d'` |
| 7 | 1a_8a | SCENE_1A_6B_ELEVATOR_CONTINUE | `lastChoice === '1a_8a'` |
| 7 | 1a_8a2 | SCENE_1A_6B_ELEVATOR_CONTINUE | `lastChoice === '1a_8a2'` |
| 7 | 1a_8b | SCENE_1A_STALKING | `lastChoice === '1a_8b'` |
| 7 | 1a_9a | SCENE_1A_8A_CONFESSION | `lastChoice === '1a_9a'` |
| 7 | 1a_9a2 | SCENE_1A_8A_CONFESSION | `lastChoice === '1a_9a2'` |
| 7 | 1a_9b | SCENE_1A_8B_FINAL_ESCAPE | `lastChoice === '1a_9b'` |
| 7 | 1a_7c_a | SCENE_1A_7C_CONFESSION_MOMENT | `lastChoice === '1a_7c_a'` |
| 7 | 1a_7c_b | SCENE_1A_7D_FRIENDSHIP_CONFIRM | `lastChoice === '1a_7c_b'` |
| 7 | 1a_7c_c | SCENE_1A_7E_DISTANCE_KEEP | `lastChoice === '1a_7c_c'` |
| 7 | 1a_7d_a | SCENE_1A_7F_COMPLICATED_FEEL | `lastChoice === '1a_7d_a'` |
| 7 | 1a_7d_b | SCENE_1A_7D_FRIENDSHIP_CONFIRM | `lastChoice === '1a_7d_b'` |
| 7 | 1a_7e_a | SCENE_1A_8A_CONFESSION | `lastChoice === '1a_7e_a'` |
| 7 | 1a_7e_b | SCENE_1A_7E_DISTANCE_KEEP | `lastChoice === '1a_7e_b'` |
| 7 | 1a_7f_a | SCENE_1A_8A_CONFESSION | `lastChoice === '1a_7f_a'` |
| 7 | 1a_7f_b | SCENE_1A_7F_COMPLICATED_FEEL | `lastChoice === '1a_7f_b'` |
| 7 | 1a_7g_a | SCENE_1A_8G_TRUTH_REVEALED | `lastChoice === '1a_7g_a'` |
| 7 | 1a_7g_b | SCENE_1A_8A_CONFESSION | `lastChoice === '1a_7g_b'` |
| 8 | 1a_6c | SCENE_1A_7A_RELATIONSHIP_GROW | `lastChoice === '1a_6c'` |
| 8 | 1a_6c2 | SCENE_1A_7A_RELATIONSHIP_GROW | `lastChoice === '1a_6c2'` |
| 8 | 1a_6d | SCENE_1A_7A_RELATIONSHIP_GROW | `lastChoice === '1a_6d'` |
| 8 | 1a_7a | SCENE_1A_8A_CONFESSION | `lastChoice === '1a_7a'` |
| 8 | 1a_7b | SCENE_1A_8A_CONFESSION | `lastChoice === '1a_7b'` |
| 8 | 1a_8a | SCENE_1A_9A_REUNION_ATTEMPT | `lastChoice === '1a_8a'` |
| 8 | 1a_8b | SCENE_1A_9A_REUNION_ATTEMPT | `lastChoice === '1a_8b'` |
| 8 | 1a_8c | SCENE_1A_9B_FINAL_GOODBYE | `lastChoice === '1a_8c'` |
| 8 | 1a_8d | SCENE_1A_9C_LAST_MESSAGE | `lastChoice === '1a_8d'` |
| 8 | 1a_8c_a | SCENE_1A_8C_FEAR_FACE | `lastChoice === '1a_8c_a'` |
| 8 | 1a_8c_b | SCENE_1A_8D_PAST_CONFESS | `lastChoice === '1a_8c_b'` |
| 8 | 1a_8d_a | SCENE_1A_8E_FUTURE_PLAN | `lastChoice === '1a_8d_a'` |
| 8 | 1a_8d_b | SCENE_1A_8F_FINAL_HESITATION | `lastChoice === '1a_8d_b'` |
| 8 | 1a_8e_a | SCENE_1A_9A_REUNION_ATTEMPT | `lastChoice === '1a_8e_a'` |
| 8 | 1a_8e_b | SCENE_1A_9B_FINAL_GOODBYE | `lastChoice === '1a_8e_b'` |
| 8 | 1a_8f_a | SCENE_1A_9A_REUNION_ATTEMPT | `lastChoice === '1a_8f_a'` |
| 8 | 1a_8f_b | SCENE_1A_9B_FINAL_GOODBYE | `lastChoice === '1a_8f_b'` |
| 8 | 1a_8g_a | SCENE_1A_9I_MUTUAL_UNDERSTANDING | `lastChoice === '1a_8g_a'` |
| 8 | 1a_8g_b | SCENE_1A_9B_FINAL_GOODBYE | `lastChoice === '1a_8g_b'` |
| 9 | 1a_9a | SCENE_1A_10B_FINAL_CONFESSION | `lastChoice === '1a_9a'` |
| 9 | 1a_9b | SCENE_1A_9B_FINAL_GOODBYE | `lastChoice === '1a_9b'` |
| 9 | 1a_9c | SCENE_1A_10C_ACCEPTANCE | `lastChoice === '1a_9c'` |
| 9 | 1a_9c2 | SCENE_1A_10D_FINAL_SEARCH | `lastChoice === '1a_9c2'` |
| 9 | 1a_9d | SCENE_1A_10A_FINAL_BLESSING | `lastChoice === '1a_9d'` |
| 9 | 1a_9e | SCENE_1A_10B_FINAL_CONFESSION | `lastChoice === '1a_9e'` |
| 9 | 1a_9d_a | SCENE_1A_9D_RELATIONSHIP_DECISION | `lastChoice === '1a_9d_a'` |
| 9 | 1a_9d_b | SCENE_1A_9E_FINAL_CHOICE | `lastChoice === '1a_9d_b'` |
| 9 | 1a_9e_a | SCENE_1A_9F_NEW_BEGINNING | `lastChoice === '1a_9e_a'` |
| 9 | 1a_9e_b | SCENE_1A_9E_FINAL_CHOICE | `lastChoice === '1a_9e_b'` |
| 9 | 1a_9f_a | SCENE_1A_10B_FINAL_CONFESSION | `lastChoice === '1a_9f_a'` |
| 9 | 1a_9f_b | SCENE_1A_10C_ACCEPTANCE | `lastChoice === '1a_9f_b'` |
| 9 | 1a_9i_a | SCENE_1A_10E_FINAL_DECISION | `lastChoice === '1a_9i_a'` |
| 9 | 1a_9i_b | SCENE_1A_10C_ACCEPTANCE | `lastChoice === '1a_9i_b'` |

### 统计
- **depth 范围**: 1-9
- **choice 总数**: 103
- **scene 总数**: 48（去重后）

## 2) 关键 Scene 内容证据

### 1. SCENE_1A_OBSERVE（观察）
**摘要**: 主角选择观察而非直接接触，在电梯中偶遇，开始留意她的日常作息。

**证据片段**:
```
我还是没有勇气上前。我看着她走进电梯，看着电梯门关上，看着数字从1跳到11。

接下来的几天，我开始留意她。我发现她每天早上8点半到公司，中午12点在食堂吃饭，晚上经常加班到很晚。

我甚至开始计算时间，想要"偶遇"她。但每次真的遇到了，我又会假装没看见，或者快速走开。

直到有一天，在电梯里，我们被挤到了一起。她身上的茉莉花香再次袭来，我心跳加速。

"你也是这栋楼的？"她突然问。
```

**文件路径**: `services/scenes/branch1A.ts:232-260`

---

### 2. SCENE_1A_CONFRONT（初遇/冲突）
**摘要**: 主角鼓起勇气主动上前打招呼，她记得那晚的事，两人在公司楼下对话，她提议找个地方聊聊。

**证据片段**:
```
我深吸一口气，走了过去。每一步都像是踩在棉花上，软绵绵的，使不上力。

"你好……"我的声音有点颤抖，几乎听不见，"你还记得我吗？"

她转过身，看到我的瞬间，眼神里闪过一丝惊讶，然后是复杂的情绪——困惑、好奇，还有一丝我读不懂的东西。

"记得。"她点点头，声音很轻，"那天晚上，你到了门口，但没进来。"

我愣住了。她居然记得。我以为她早就忘了，就像我试图忘记一样。

"不用道歉。"她打断我，语气很平静，"其实，我也很庆幸你没进来。因为那天，我也是第一次接那种单，我也很害怕。"
```

**文件路径**: `services/scenes/branch1A.ts:137-170`

---

### 3. SCENE_1A_FIRST_MEET（初遇）
**摘要**: 两人在咖啡店第一次正式见面，主角解释那晚没进门的原因，表达对理解和陪伴的渴望。

**证据片段**:
```
我们去了公司附近的一家咖啡店。店面不大，但很安静，角落里摆着几盆绿植，阳光从落地窗洒进来，在地板上投下斑驳的光影。

我点了两杯拿铁，找了个靠窗的位置。她在我对面坐下，脱掉外套，露出里面简单的白衬衫。

"所以……"她先开口，声音很轻，"那天晚上，你为什么没进来？"

我沉默了很久。咖啡的热气在两人之间升腾，模糊了视线。该怎么说？说我害怕？说我懦弱？说我配不上那种交易？

"我……"我深吸一口气，终于抬起头看着她，"我到了门口，但突然意识到，我想要的不是那种关系。我想要的是……有人理解我，有人陪我说话，有人让我觉得我不那么孤独。"
```

**文件路径**: `services/scenes/branch1A.ts:172-201`

---

### 4. SCENE_1A_ELEVATOR_TALK（电梯对话）
**摘要**: 在电梯中她主动搭话，询问是否见过，主角紧张地回应，她认出但未说破，留下机会。

**证据片段**:
```
"12楼？"她笑了，"那我们以后可能会经常遇到呢。"

电梯到了11楼，她准备出去，但突然回头看了我一眼。

"对了，"她说，"你看起来很眼熟。我们是不是在哪里见过？"

我的心跳瞬间停止。她认出我了？

"可能……在楼下便利店？"我勉强回答。

"也许吧。"她点点头，走出了电梯。
```

**文件路径**: `services/scenes/branch1A.ts:262-293`

---

### 5. SCENE_1A_BUILDING_TRUST（推进/建立信任）
**摘要**: 两人开始经常见面，互相了解，在公园散步时她评价主角"太善良"，提议成为朋友。

**证据片段**:
```
从那天起，我们开始经常见面。有时候是咖啡店，有时候是公司食堂，有时候是下班后的散步。

我慢慢了解到，她叫琳，是个设计师。她喜欢画画，喜欢看日落，喜欢在深夜听音乐。她告诉我，她画的第一幅画是给妈妈的生日礼物，她最喜欢的日落是在海边看到的，她深夜听的音乐总是很悲伤。

她也开始了解我。我的工作，我的孤独，我的恐惧。我告诉她，我害怕被拒绝，害怕被伤害，害怕暴露真实的自己。

"你知道吗？"有一天，我们在公园里散步，夕阳把我们的影子拉得很长，"你其实不是懦弱，你只是太善良了。善良到不敢伤害任何人，包括自己。"

那一刻，我突然意识到，也许，我真的可以改变。也许，我不需要一直逃避。
```

**文件路径**: `services/scenes/branch1A.ts:203-230`

---

### 6. SCENE_1A_STALKING（冲突/转折）
**摘要**: 主角选择逃避后开始跟踪她，了解她的日常，直到被她发现并质问。

**证据片段**:
```
我还是选择了逃避。我假装没听见，盯着楼层数字，直到电梯到了12楼。

接下来的几周，我继续观察她。我知道她喜欢在便利店买三明治当早餐，知道她中午总是点那家店的麻辣烫，知道她晚上经常加班到很晚。

我甚至开始跟踪她——不是恶意的，只是想知道她住在哪里，想知道她下班后去哪里。

我知道这很变态，但我控制不住自己。我想了解她，想靠近她，但我又不敢。

直到有一天，她突然转过身，看着我。

"你跟踪我多久了？"她问，语气很平静，但眼神很冷。
```

**文件路径**: `services/scenes/branch1A.ts:295-321`

---

### 7. SCENE_1A_8A_CONFESSION（转折/坦白）
**摘要**: 主角决定坦白一切，包括700块钱和跟踪，她听完后表示理解，并透露自己也在观察主角。

**证据片段**:
```
我决定向她坦白一切。包括那700块钱，包括我的跟踪，包括我的恐惧和孤独。

我们坐在公园的长椅上，夜色很浓，路灯的光很暗。我把所有的事情都说了出来，每一个字都像是从心底挖出来的。

她安静地听完，没有说话。空气很安静，安静到我能听到自己的心跳声。

"我明白了。"她终于开口，声音很轻，"你跟踪我，是因为你想了解我，但又不敢直接接近我，对吗？"

我点了点头，不敢看她。

"其实，我也一直在观察你。"她说，"在公司里，在电梯里，在食堂里。我一直在想，你会不会主动和我说话。"
```

**文件路径**: `services/scenes/branch1A.ts:550-573` 或 `services/llmService.ts:1408-1431`

---

### 8. SCENE_1A_9A_REUNION_ATTEMPT（终局前关键点）
**摘要**: 三个月后主角决定回去找她，发现一切都变了，在朋友圈看到她有了新男友，意识到错过了。

**证据片段**:
```
三个月后，我决定回去找她。

我回到了那栋楼，回到了那家咖啡店，回到了我们曾经相遇的地方。但一切都变了。咖啡店换了老板，装修也变了。那家酒店也重新装修了，302号房的门牌号都换了。

我开始在社交软件上寻找，试图找到她的痕迹。但我知道，即使找到了，我也没有勇气去联系。

直到有一天，我在朋友圈里看到了一张照片。是她，和一个我不认识的男人，在海边看日落。照片下面写着："终于找到了对的人。"

那一刻，我突然意识到，我错过了。
```

**文件路径**: `services/scenes/branch1A.ts:598-617` 或 `services/llmService.ts:1460-1479`

