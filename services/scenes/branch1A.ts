import { SceneData } from "../../types";

// ============================================================================
// branch1A 场景
// ============================================================================

export const SCENE_1A_PANIC: SceneData = {
  narrative: `我转身就跑。

电梯太慢，我直接冲下楼梯，三步并作两步，一口气跑到街上。雨开始下了，细密的雨丝打在脸上，冰凉刺骨。我任由雨水冲刷，心跳如擂鼓，呼吸急促得像是要窒息。

700块钱打了水漂。我连道歉都不敢说，就这么逃了。像个小偷，像只老鼠，像所有见不得光的东西。

我拉黑了所有联系方式，删掉了那个APP，发誓再也不碰这种事。但那个门后的人，那个我永远不会见到的她，却成了我心底一个永远的问号。

她会不会觉得我是个变态？还是只是觉得我是个懦夫？

也许，两者都是。`,
  dialogue: "（我真是个废物……）",
  speaker: "内心独白",
  backgroundDescription: "rainy city street at night, protagonist running in panic, neon reflections, self-loathing atmosphere",
  choices: [
    { id: "1a_1", text: "试图彻底忘记这件事，继续生活", sentiment: "cold" },
    { id: "1a_1b", text: "开始感到深深的内疚和后悔", sentiment: "sad" },
    { id: "1a_1c", text: "决定改变自己，不再逃避", sentiment: "bold" }
  ],
  isEnding: false
};

export const SCENE_1A_LIFE: SceneData = {
  narrative: `接下来的一个月，我把自己埋在工作里。加班到深夜，周末也待在办公室，用忙碌麻痹自己。

但每到深夜，那个问号就会冒出来：她怎么样了？她会不会恨我？还是早就把我忘了？

我开始在社交软件上疯狂地刷，试图找到她的痕迹。但我知道，即使找到了，我也没有勇气去联系。

我甚至开始怀疑，我是不是真的只配这样活着——永远在边缘徘徊，永远不敢真正靠近任何人。`,
  dialogue: "（也许，我注定就是这样的人……）",
  speaker: "内心独白",
  backgroundDescription: "dark office at night, computer screen glowing, lonely atmosphere, city lights outside window",
  choices: [
    { id: "1a_2", text: "继续逃避，用工作填满生活", sentiment: "cold" },
    { id: "1a_3", text: "想要改变，但不知道从哪里开始", sentiment: "sad" }
  ],
  isEnding: false
};

export const SCENE_1A_DEEP_WORK: SceneData = {
  narrative: `我选择了继续逃避。工作成了我唯一的避风港。

我接了更多的项目，主动申请加班，甚至周末也来公司。同事们都说我变了，变得"上进"了。只有我知道，我只是在逃避。

每天晚上回到家，空荡荡的房间让我感到窒息。我开始失眠，开始做噩梦。梦里，我总是站在那扇门前，但永远不敢敲门。

一个月后，我的身体开始抗议。胃痛、头痛、失眠。我知道，这样下去不行。

但我还是不知道该怎么改变。`,
  dialogue: "（我到底在害怕什么？）",
  speaker: "内心独白",
  backgroundDescription: "empty apartment at night, protagonist lying on bed, phone screen glowing, lonely and exhausted",
  choices: [
    { id: "1a_2a", text: "继续这样下去，直到崩溃", sentiment: "cold" },
    { id: "1a_2b", text: "决定尝试改变，哪怕只是一小步", sentiment: "bold" }
  ],
  isEnding: false
};

export const SCENE_1A_TRY_CHANGE: SceneData = {
  narrative: `我决定尝试改变。哪怕只是一小步。

我开始强迫自己参加公司的团建活动，开始主动和同事聊天，开始尝试在社交软件上主动打招呼。

但每次，我都失败了。我害怕被拒绝，害怕说错话，害怕暴露自己的孤独。

直到有一天，我在公司食堂看到了一个熟悉的身影。米色风衣，茉莉花香。

是她。

我的心跳瞬间加速。这是机会吗？还是又一次逃避的开始？`,
  dialogue: "（不能再逃了……）",
  speaker: "内心独白",
  backgroundDescription: "company cafeteria, lunch time, protagonist seeing familiar figure, nervous anticipation",
  choices: [
    { id: "1a_3a", text: "鼓起勇气，走过去", sentiment: "bold" },
    { id: "1a_3b", text: "还是不敢，默默走开", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1A_STRUGGLE: SceneData = {
  narrative: `两个月过去了。我尝试过改变——去健身房，参加社交活动，甚至下载了新的交友软件。

但每次想要主动的时候，那个夜晚的恐惧就会回来。我害怕被拒绝，害怕被看穿，害怕再次证明自己是个懦夫。

直到有一天，我在公司楼下看到了一个熟悉的身影。米色风衣，茉莉花香。

是她。

我的第一反应是转身逃跑——就像那天晚上一样。但这一次，我停住了脚步。

也许，这就是我改变的机会？`,
  dialogue: "（不能再逃了……）",
  speaker: "内心独白",
  backgroundDescription: "company building entrance, morning light, protagonist hesitating, determination growing",
  choices: [
    { id: "1a_4", text: "鼓起勇气，主动上前打招呼", sentiment: "bold" },
    { id: "1a_5", text: "还是不敢，默默观察", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1A_CONFRONT: SceneData = {
  narrative: `我深吸一口气，走了过去。每一步都像是踩在棉花上，软绵绵的，使不上力。

"你好……"我的声音有点颤抖，几乎听不见，"你还记得我吗？"

她转过身，看到我的瞬间，眼神里闪过一丝惊讶，然后是复杂的情绪——困惑、好奇，还有一丝我读不懂的东西。

"记得。"她点点头，声音很轻，"那天晚上，你到了门口，但没进来。"

我愣住了。她居然记得。我以为她早就忘了，就像我试图忘记一样。

"对不起……"我说，"我……"

"不用道歉。"她打断我，语气很平静，"其实，我也很庆幸你没进来。因为那天，我也是第一次接那种单，我也很害怕。"

我们站在公司楼下，早高峰的人流从身边经过，但那一刻，世界好像只剩下我们两个人。

"要不，我们找个地方聊聊？"她问，眼神里有种我从未见过的温柔。`,
  dialogue: "\"我知道附近有家咖啡店，很安静。\"",
  speaker: "琳",
  backgroundDescription: "company building lobby, two people talking, morning crowd passing by, intimate moment",
  choices: [
    { id: "1a_6", text: "\"好，我知道附近有家咖啡店\"", sentiment: "bold" },
    { id: "1a_7", text: "\"我……还是算了吧\"", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1A_FIRST_MEET: SceneData = {
  narrative: `我们去了公司附近的一家咖啡店。店面不大，但很安静，角落里摆着几盆绿植，阳光从落地窗洒进来，在地板上投下斑驳的光影。

我点了两杯拿铁，找了个靠窗的位置。她在我对面坐下，脱掉外套，露出里面简单的白衬衫。

"所以……"她先开口，声音很轻，"那天晚上，你为什么没进来？"

我沉默了很久。咖啡的热气在两人之间升腾，模糊了视线。该怎么说？说我害怕？说我懦弱？说我配不上那种交易？

"我……"我深吸一口气，终于抬起头看着她，"我到了门口，但突然意识到，我想要的不是那种关系。我想要的是……有人理解我，有人陪我说话，有人让我觉得我不那么孤独。"

她看着我，眼神很复杂。有理解，有同情，还有某种我读不懂的东西。

"那你现在呢？"她问，声音很轻，"还觉得孤独吗？"`,
  dialogue: "\"和你聊天的时候，好像……不那么孤独了。\"",
  speaker: "我",
  backgroundDescription: "cozy coffee shop, afternoon, two people at corner table, deep conversation, warm lighting",
  choices: [
    { id: "1a_6a", text: "\"和你聊天，让我感觉好多了\"", sentiment: "romantic" },
    { id: "1a_6b", text: "\"也许吧，但我不敢奢望什么\"", sentiment: "sad" }
  ],
  isEnding: false
};

export const SCENE_1A_BUILDING_TRUST: SceneData = {
  narrative: `从那天起，我们开始经常见面。有时候是咖啡店，有时候是公司食堂，有时候是下班后的散步。

我慢慢了解到，她叫琳，是个设计师。她喜欢画画，喜欢看日落，喜欢在深夜听音乐。她告诉我，她画的第一幅画是给妈妈的生日礼物，她最喜欢的日落是在海边看到的，她深夜听的音乐总是很悲伤。

她也开始了解我。我的工作，我的孤独，我的恐惧。我告诉她，我害怕被拒绝，害怕被伤害，害怕暴露真实的自己。

"你知道吗？"有一天，我们在公园里散步，夕阳把我们的影子拉得很长，"你其实不是懦弱，你只是太善良了。善良到不敢伤害任何人，包括自己。"

那一刻，我突然意识到，也许，我真的可以改变。也许，我不需要一直逃避。

"也许，我们可以成为朋友？"她问，声音很轻，像是在试探。`,
  dialogue: "\"我想……不只是朋友。\"",
  speaker: "我",
  backgroundDescription: "evening walk in park, two people walking side by side, sunset colors, peaceful atmosphere",
  choices: [
    { id: "1a_6c", text: "\"我想……不只是朋友\"", sentiment: "romantic" },
    { id: "1a_6d", text: "\"好，朋友也很好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1A_OBSERVE: SceneData = {
  narrative: `我还是没有勇气上前。我看着她走进电梯，看着电梯门关上，看着数字从1跳到11。

接下来的几天，我开始留意她。我发现她每天早上8点半到公司，中午12点在食堂吃饭，晚上经常加班到很晚。

我甚至开始计算时间，想要"偶遇"她。但每次真的遇到了，我又会假装没看见，或者快速走开。

直到有一天，在电梯里，我们被挤到了一起。她身上的茉莉花香再次袭来，我心跳加速。

"你也是这栋楼的？"她突然问。

我点了点头，不敢看她。`,
  dialogue: "\"我在11楼，设计部。你呢？\"",
  speaker: "琳",
  backgroundDescription: "crowded elevator, two people close together, tense atmosphere, morning commute",
  choices: [
    { id: "1a_8", text: "\"12楼……\"", sentiment: "shy" },
    { id: "1a_9", text: "假装没听见，盯着楼层数字", sentiment: "cold" }
  ],
  isEnding: false
};

export const SCENE_1A_ELEVATOR_TALK: SceneData = {
  narrative: `"12楼？"她笑了，"那我们以后可能会经常遇到呢。"

电梯到了11楼，她准备出去，但突然回头看了我一眼。

"对了，"她说，"你看起来很眼熟。我们是不是在哪里见过？"

我的心跳瞬间停止。她认出我了？

"可能……在楼下便利店？"我勉强回答。

"也许吧。"她点点头，走出了电梯。

电梯门关上，我靠在墙上，心跳如擂鼓。她认出我了，但她没有说破。这是机会吗？`,
  dialogue: "（也许，我应该主动一点？）",
  speaker: "内心独白",
  backgroundDescription: "elevator interior, protagonist alone, conflicted expression, opportunity dawning",
  choices: [
    { id: "1a_8a", text: "下次遇到她，主动打招呼", sentiment: "bold" },
    { id: "1a_8b", text: "继续观察，等待更好的时机", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1A_STALKING: SceneData = {
  narrative: `我还是选择了逃避。我假装没听见，盯着楼层数字，直到电梯到了12楼。

接下来的几周，我继续观察她。我知道她喜欢在便利店买三明治当早餐，知道她中午总是点那家店的麻辣烫，知道她晚上经常加班到很晚。

我甚至开始跟踪她——不是恶意的，只是想知道她住在哪里，想知道她下班后去哪里。

我知道这很变态，但我控制不住自己。我想了解她，想靠近她，但我又不敢。

直到有一天，她突然转过身，看着我。

"你跟踪我多久了？"她问，语气很平静，但眼神很冷。`,
  dialogue: "\"我……对不起……\"",
  speaker: "我",
  backgroundDescription: "dark street at night, protagonist caught following, guilty expression, tense confrontation",
  choices: [
    { id: "1a_9a", text: "解释自己的行为，请求原谅", sentiment: "bold" },
    { id: "1a_9b", text: "转身逃跑，再次逃避", sentiment: "cold" }
  ],
  isEnding: false
};

export const SCENE_1A_4A_WORK_COLLAPSE: SceneData = {
  narrative: `
我选择了继续逃避。工作成了我唯一的避风港，但也是我的牢笼。

我接了更多的项目，主动申请加班，甚至周末也来公司。同事们都说我变了，变得"上进"了。只有我知道，我只是在逃避。

每天晚上回到家，空荡荡的房间让我感到窒息。我开始失眠，开始做噩梦。梦里，我总是站在那扇门前，但永远不敢敲门。

一个月后，我的身体开始抗议。胃痛、头痛、失眠。我知道，这样下去不行。

但我还是不知道该怎么改变。`,
  dialogue: "（我到底在害怕什么？）",
  speaker: "内心独白",
  backgroundDescription: "empty apartment at night, protagonist lying on bed, phone screen glowing, lonely and exhausted",
  choices: [
    { id: "1a_4a", text: "继续这样下去，直到崩溃", sentiment: "cold" },
    { id: "1a_4b", text: "决定尝试改变，哪怕只是一小步", sentiment: "bold" }
  ],
  isEnding: false
};

export const SCENE_1A_5A_COLLAPSE_HOSPITAL: SceneData = {
  narrative: `
我选择了继续逃避，直到身体彻底崩溃。

那天早上，我在公司突然晕倒了。醒来的时候，我已经在医院里了。医生说我过度劳累，需要休息。

病床很白，很干净，但也很冷。我看着天花板，突然意识到，我不能再这样下去了。

我拿出手机，想要给她发条消息，但手指悬在键盘上，却一个字也打不出来。

也许，这就是我的报应。`,
  dialogue: "（如果那天我敲门了，现在会是什么样子？）",
  speaker: "内心独白",
  backgroundDescription: "hospital room, white walls, protagonist lying on bed, phone in hand, melancholic atmosphere",
  choices: [
    { id: "1a_5aa", text: "出院后，决定彻底改变", sentiment: "bold" },
    { id: "1a_5ab", text: "继续逃避，换一份工作", sentiment: "cold" }
  ],
  isEnding: false
};

export const SCENE_1A_5B_SOCIAL_ATTEMPT: SceneData = {
  narrative: `
我决定尝试改变。我开始参加公司的团建活动，开始主动和同事聊天，开始尝试在社交软件上主动打招呼。

但每次，我都失败了。我害怕被拒绝，害怕说错话，害怕暴露自己的孤独。

直到有一天，我在公司食堂看到了一个熟悉的身影。米色风衣，茉莉花香。

是她。

我的心跳瞬间加速。这是机会吗？还是又一次逃避的开始？`,
  dialogue: "（不能再逃了……）",
  speaker: "内心独白",
  backgroundDescription: "company cafeteria, lunch time, protagonist seeing familiar figure, nervous anticipation",
  choices: [
    { id: "1a_5ba", text: "鼓起勇气，走过去", sentiment: "bold" },
    { id: "1a_5bb", text: "还是不敢，默默走开", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1A_4B_TRY_SOCIAL: SceneData = {
  narrative: `
我决定尝试改变。哪怕只是一小步。

我开始强迫自己参加公司的团建活动，开始主动和同事聊天，开始尝试在社交软件上主动打招呼。

但每次，我都失败了。我害怕被拒绝，害怕说错话，害怕暴露自己的孤独。

直到有一天，我在公司食堂看到了一个熟悉的身影。米色风衣，茉莉花香。

是她。

我的心跳瞬间加速。这是机会吗？还是又一次逃避的开始？`,
  dialogue: "（不能再逃了……）",
  speaker: "内心独白",
  backgroundDescription: "company cafeteria, lunch time, protagonist seeing familiar figure, nervous anticipation",
  choices: [
    { id: "1a_4c", text: "鼓起勇气，走过去", sentiment: "bold" },
    { id: "1a_4d", text: "还是不敢，默默走开", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1A_5A_CAFETERIA_TALK: SceneData = {
  narrative: `
我鼓起勇气，走了过去。每一步都像是踩在刀刃上，但我知道，如果这次再逃避，就真的没有机会了。

"你好……"我的声音有点颤抖，"你还记得我吗？"

她转过身，看到我的瞬间，眼神里闪过一丝惊讶，然后是复杂的情绪。

"记得。"她点点头，声音很轻，"那天晚上，你到了门口，但没进来。"

我们站在食堂里，周围是嘈杂的说话声，但那一刻，世界好像只剩下我们两个人。`,
  dialogue: "\"要不，我们找个地方聊聊？\"",
  speaker: "琳",
  backgroundDescription: "company cafeteria, two people talking, lunch crowd, intimate moment",
  choices: [
    { id: "1a_5a", text: "\"好，我知道附近有家咖啡店\"", sentiment: "bold" },
    { id: "1a_5b", text: "\"我……还是算了吧\"", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1A_5B_AVOID_AGAIN: SceneData = {
  narrative: `
我还是选择了逃避。我假装没看见，快速走开，心跳如擂鼓。

接下来的几天，我开始留意她。我发现她每天早上8点半到公司，中午12点在食堂吃饭，晚上经常加班到很晚。

我甚至开始计算时间，想要"偶遇"她。但每次真的遇到了，我又会假装没看见，或者快速走开。

直到有一天，在电梯里，我们被挤到了一起。她身上的茉莉花香再次袭来，我心跳加速。

"你也是这栋楼的？"她突然问。`,
  dialogue: "\"我在11楼，设计部。你呢？\"",
  speaker: "琳",
  backgroundDescription: "crowded elevator, two people close together, tense atmosphere, morning commute",
  choices: [
    { id: "1a_5c", text: "\"12楼……\"", sentiment: "shy" },
    { id: "1a_5d", text: "假装没听见，盯着楼层数字", sentiment: "cold" }
  ],
  isEnding: false
};

export const SCENE_1A_6A_COFFEE_DEEP: SceneData = {
  narrative: `
我们去了公司附近的一家咖啡店。店面不大，但很安静，角落里摆着几盆绿植，阳光从落地窗洒进来，在地板上投下斑驳的光影。

我点了两杯拿铁，找了个靠窗的位置。她在我对面坐下，脱掉外套，露出里面简单的白衬衫。

"所以……"她先开口，声音很轻，"那天晚上，你为什么没进来？"

我沉默了很久。咖啡的热气在两人之间升腾，模糊了视线。该怎么说？说我害怕？说我懦弱？说我配不上那种交易？

"我……"我深吸一口气，终于抬起头看着她，"我到了门口，但突然意识到，我想要的不是那种关系。我想要的是……有人理解我，有人陪我说话，有人让我觉得我不那么孤独。"

她看着我，眼神很复杂。有理解，有同情，还有某种我读不懂的东西。`,
  dialogue: "\"那你现在呢？还觉得孤独吗？\"",
  speaker: "琳",
  backgroundDescription: "cozy coffee shop, afternoon, two people at corner table, deep conversation, warm lighting",
  choices: [
    { id: "1a_6a_v2", text: "\"和你聊天的时候，好像……不那么孤独了。\"", sentiment: "romantic" },
    { id: "1a_6b_v2", text: "\"也许吧，但我不敢奢望什么\"", sentiment: "sad" }
  ],
  isEnding: false
};

export const SCENE_1A_6B_ELEVATOR_CONTINUE: SceneData = {
  narrative: `
"12楼？"她笑了，"那我们以后可能会经常遇到呢。"

电梯到了11楼，她准备出去，但突然回头看了我一眼。

"对了，"她说，"你看起来很眼熟。我们是不是在哪里见过？"

我的心跳瞬间停止。她认出我了？

"可能……在楼下便利店？"我勉强回答。

"也许吧。"她点点头，走出了电梯。

电梯门关上，我靠在墙上，心跳如擂鼓。她认出我了，但她没有说破。这是机会吗？`,
  dialogue: "（也许，我应该主动一点？）",
  speaker: "内心独白",
  backgroundDescription: "elevator interior, protagonist alone, conflicted expression, opportunity dawning",
  choices: [
    { id: "1a_6c_v2", text: "下次遇到她，主动打招呼", sentiment: "bold" },
    { id: "1a_6d_v2", text: "继续观察，等待更好的时机", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1A_7A_RELATIONSHIP_GROW: SceneData = {
  narrative: `
从那天起，我们开始经常见面。有时候是咖啡店，有时候是公司食堂，有时候是下班后的散步。

公园里的路灯已经亮了，昏黄的光洒在我们身上，把影子拉得很长。我们并排走着，中间隔着一点距离，但那种距离让人感到安全，也让人感到温暖。

我慢慢了解到，她叫琳，是个设计师。她喜欢画画，喜欢看日落，喜欢在深夜听音乐。她告诉我，她画的第一幅画是给妈妈的生日礼物，那时候她还在上小学，画得很丑，但妈妈却把它裱起来，挂在客厅里。

她也开始了解我。我的工作，我的孤独，我的恐惧。那些我从未对任何人说过的话，在她面前，却变得那么容易说出口。

"你知道吗？"有一天她对我说，声音很轻，但很坚定，"你其实不是懦弱，你只是太善良了。善良到不敢伤害任何人，包括自己。"`,
  dialogue: "\"也许，我们可以成为朋友？\"",
  speaker: "琳",
  backgroundDescription: "evening walk in park, two people walking side by side, sunset colors, peaceful atmosphere",
  choices: [
    { id: "1a_7a", text: "\"我想……不只是朋友\"", sentiment: "romantic" },
    { id: "1a_7b", text: "\"好，朋友也很好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1A_7B_STALKING_DISCOVERED: SceneData = {
  narrative: `
我还是选择了继续观察。我看着她走进电梯，看着电梯门关上，看着数字从1跳到11。

接下来的几周，我继续观察她。我知道她喜欢在便利店买三明治当早餐，知道她中午总是点那家店的麻辣烫，知道她晚上经常加班到很晚。

我甚至开始跟踪她——不是恶意的，只是想知道她住在哪里，想知道她下班后去哪里。

我知道这很变态，但我控制不住自己。我想了解她，想靠近她，但我又不敢。

直到有一天，她突然转过身，看着我。

"你跟踪我多久了？"她问，语气很平静，但眼神很冷。`,
  dialogue: "\"我……对不起……\"",
  speaker: "我",
  backgroundDescription: "dark street at night, protagonist caught following, guilty expression, tense confrontation",
  choices: [
    { id: "1a_7c", text: "解释自己的行为，请求原谅", sentiment: "bold" },
    { id: "1a_7d", text: "转身逃跑，再次逃避", sentiment: "cold" }
  ],
  isEnding: false
};

export const SCENE_1A_8A_CONFESSION: SceneData = {
  narrative: `
我决定向她坦白一切。包括那700块钱，包括我的跟踪，包括我的恐惧和孤独。

我们坐在公园的长椅上，夜色很浓，路灯的光很暗。我把所有的事情都说了出来，每一个字都像是从心底挖出来的。

她安静地听完，没有说话。空气很安静，安静到我能听到自己的心跳声。

"我明白了。"她终于开口，声音很轻，"你跟踪我，是因为你想了解我，但又不敢直接接近我，对吗？"

我点了点头，不敢看她。

"其实，我也一直在观察你。"她说，"在公司里，在电梯里，在食堂里。我一直在想，你会不会主动和我说话。"

我愣住了。`,
  dialogue: "\"所以，我们都在等对方先开口？\"",
  speaker: "我",
  backgroundDescription: "park bench at night, two people sitting, street lights, emotional confession",
  choices: [
    { id: "1a_8a_v2", text: "\"那现在，我们可以重新开始吗？\"", sentiment: "bold" },
    { id: "1a_8b_v2", text: "\"我……不知道\"", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1A_8B_FINAL_ESCAPE: SceneData = {
  narrative: `
我选择了再次逃避。我转身就跑，像那天晚上一样。

她在我身后喊我的名字，但我没有回头。我跑得很快，快得像是要逃离什么。

但我知道，我逃不掉的。那个夜晚，那700块钱，那个我永远无法忘记的她，会一直跟着我，像影子一样。

后来我换了工作，离开了那栋楼。听说她也跳槽去了外地。

那700块钱，成了我心里永远的刺。每次路过那家酒店，我都会想：如果那天我更勇敢一点，如果我更早说出真相……

但人生没有如果。`,
  dialogue: "（再见了……）",
  speaker: "内心独白",
  backgroundDescription: "empty street at night, lonely figure running away, cold blue tones, melancholic",
  choices: [
    { id: "1a_8c", text: "继续逃避，彻底离开这座城市", sentiment: "cold" },
    { id: "1a_8d", text: "决定回去找她，哪怕只是道歉", sentiment: "bold" }
  ],
  isEnding: false
};

export const SCENE_1A_9A_REUNION_ATTEMPT: SceneData = {
  narrative: `
三个月后，我决定回去找她。

我回到了那栋楼，回到了那家咖啡店，回到了我们曾经相遇的地方。但一切都变了。咖啡店换了老板，装修也变了。那家酒店也重新装修了，302号房的门牌号都换了。

我开始在社交软件上寻找，试图找到她的痕迹。但我知道，即使找到了，我也没有勇气去联系。

直到有一天，我在朋友圈里看到了一张照片。是她，和一个我不认识的男人，在海边看日落。照片下面写着："终于找到了对的人。"

那一刻，我突然意识到，我错过了。`,
  dialogue: "（也许，这就是我的报应……）",
  speaker: "内心独白",
  backgroundDescription: "empty coffee shop, protagonist sitting alone, melancholic atmosphere, regret",
  choices: [
    { id: "1a_9a_v2", text: "给她发消息，哪怕只是道歉", sentiment: "bold" },
    { id: "1a_9b_v2", text: "彻底放弃，接受现实", sentiment: "sad" }
  ],
  isEnding: false
};

export const SCENE_1A_9B_FINAL_GOODBYE: SceneData = {
  narrative: `
我选择了彻底离开。我删除了所有关于她的记忆，删除了那700块钱的转账记录，删除了那个夜晚所有的痕迹。

我搬到了另一个城市，换了工作，换了手机号，换了所有能换的东西。我以为这样就能忘记，就能重新开始。

但我知道，我忘不掉的。那个夜晚，那700块钱，那个我永远无法忘记的她，会一直跟着我，像影子一样。

每次路过类似的酒店，每次看到米色风衣，每次闻到茉莉花香，我都会想起她。

那700块钱，成了我心里永远的刺。

一年后，我在新城市的咖啡店里，偶然听到了一首歌。歌词里唱着："有些人，错过了就是一辈子。"

我放下咖啡，看着窗外。这座城市很大，很繁华，但我却觉得比从前更孤独了。`,
  dialogue: "（也许，这就是我的宿命……）",
  speaker: "内心独白",
  backgroundDescription: "new city coffee shop, protagonist looking out window, melancholic atmosphere, time passing",
  choices: [
    { id: "1a_9c", text: "接受现实，继续生活", sentiment: "neutral" },
    { id: "1a_9c2", text: "决定回去找她，哪怕只是见一面", sentiment: "bold" }
  ],
  isEnding: false
};

export const SCENE_1A_9C_LAST_MESSAGE: SceneData = {
  narrative: `
我鼓起勇气，给她发了条消息："对不起，那天我逃跑了。我想为我的懦弱道歉。"

发送。

我盯着屏幕，心跳加速。她会回吗？她会骂我吗？还是直接拉黑我？

三天后，她回了："没关系，我理解。你现在还好吗？"

我愣住了。她不仅没有生气，还在关心我？

"我……还好。你呢？"我回复。

"我也还好。对了，我交男朋友了。他对我很好。"

那一刻，我突然意识到，我错过了。彻底错过了。`,
  dialogue: "（祝你幸福……）",
  speaker: "内心独白",
  backgroundDescription: "phone screen, last message, bittersweet farewell, melancholic",
  choices: [
    { id: "1a_9d", text: "祝福她，然后彻底放下", sentiment: "neutral" },
    { id: "1a_9e", text: "告诉她，我其实一直喜欢她", sentiment: "bold" }
  ],
  isEnding: false
};

export const SCENE_1A_10A_FINAL_BLESSING: SceneData = {
  narrative: `
我选择了祝福她。

"祝你幸福。"我回复。

"谢谢。你也是。"她回。

然后，我们再也没有联系过。

那700块钱，成了我心里永远的刺。每次路过那家酒店，我都会想：如果那天我更勇敢一点，如果我更早说出真相……

但人生没有如果。有些错过，就是一辈子。

我学会了接受，学会了放下，学会了祝福。虽然心里还是会痛，但我知道，这是最好的结局。`,
  dialogue: "（再见了，琳。祝你幸福。）",
  speaker: "内心独白",
  backgroundDescription: "sunset over city, protagonist looking at horizon, acceptance and peace, warm colors",
  choices: [
    { id: "1a_10a", text: "【结局】", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1A_10B_FINAL_CONFESSION: SceneData = {
  narrative: `
我选择了告诉她真相。

"其实，我一直喜欢你。"我发过去，"从那天晚上开始，我就一直在想你。我知道现在说这些已经太晚了，但我还是想告诉你。"

发送。

我盯着屏幕，心跳加速。她会回吗？她会骂我吗？还是直接拉黑我？

十分钟后，她回了："谢谢你告诉我。我也曾经对你有过好感，但那是过去的事了。现在，我有男朋友了，我很幸福。我希望你也能找到属于你的幸福。"

那一刻，我突然意识到，也许，这就是最好的结局。我们都没有错，只是错过了。`,
  dialogue: "（谢谢你，琳。我会找到属于我的幸福的。）",
  speaker: "内心独白",
  backgroundDescription: "phone screen, final confession, bittersweet but peaceful, warm lighting",
  choices: [
    { id: "1a_10b", text: "【结局】", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1A_10C_ACCEPTANCE: SceneData = {
  narrative: `
我选择了接受现实。

时间是最好的良药，虽然伤口还在，但至少不再流血了。我学会了和孤独共处，学会了在人群中保持距离，学会了不再期待什么。

那700块钱，成了我心里一个永远的秘密。一个只有我知道的秘密，一个永远不会对任何人提起的秘密。

有时候，我会想，如果那天我敲门了，现在会是什么样子？但我知道，没有如果。有些选择，做错了就是做错了，错过了就是错过了。

我继续生活，继续工作，继续在这个城市里游荡。只是，我再也不会去那家酒店，再也不会下载那种APP，再也不会试图用钱买来陪伴。

也许，这就是成长。学会接受，学会放下，学会一个人走下去。`,
  dialogue: "（就这样吧……）",
  speaker: "内心独白",
  backgroundDescription: "city street at night, protagonist walking alone, accepting loneliness, melancholic but peaceful",
  choices: [
    { id: "1a_10c", text: "【结局】", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1A_10D_FINAL_SEARCH: SceneData = {
  narrative: `
我决定回去找她，哪怕只是见一面。

我买了回程的票，回到了那座城市。一切都没变，又好像一切都变了。那栋楼还在，那家咖啡店还在，但那家酒店已经拆了，建成了新的商业中心。

我开始在社交软件上疯狂地寻找，试图找到她的痕迹。我翻遍了所有可能的地方，问遍了所有可能认识她的人。

终于，我找到了。她的朋友圈里，有她和男朋友的合照，有他们的旅行照片，有他们的日常。每一张照片里，她都笑得很开心。

我盯着那些照片，看了很久很久。然后，我关掉了手机。

也许，这就是最好的结局。她找到了她的幸福，而我，也应该去寻找我的了。

那700块钱，就让它成为过去吧。`,
  dialogue: "（再见了，琳。祝你幸福。）",
  speaker: "内心独白",
  backgroundDescription: "old city street, protagonist looking at phone, bittersweet realization, warm sunset",
  choices: [
    { id: "1a_10d", text: "【结局】", sentiment: "neutral" }
  ],
  isEnding: false
};



