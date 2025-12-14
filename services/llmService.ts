import { SceneData, Choice } from "../types";

// ============================================================================
// 分支剧情系统 - 多结局版本
// ============================================================================

// 玩家状态追踪 - 树状分支系统
interface PlayerState {
  affection: number;        // 好感度 (-10 到 10)
  courage: number;          // 勇气值 (0 到 10)
  honesty: number;          // 诚实度 (0 到 10)
  path: string[];           // 选择路径，用于树状分支匹配
  depth: number;            // 当前深度（0-9层）
  stage: number;            // 当前阶段（向后兼容）
  branch: 'main' | 'cold' | 'romantic' | 'friend'; // 当前分支（向后兼容）
  hasConfessed: boolean;    // 是否坦白过
  specialEvents: string[];  // 触发的特殊事件
  relationshipType: 'stranger' | 'friend' | 'romantic' | 'complicated'; // 关系类型
}

// ============================================================================
// 场景定义
// ============================================================================

const SCENE_0_PROLOGUE: SceneData = {
  narrative: `【序章：那一夜】
手机屏幕的光在昏暗的走廊里显得格外刺眼。APP上的订单显示"已接单"，备注栏里写着"全套服务，不过夜"。我盯着微信支付里刚刚转出去的700元，又抬头看了看面前的302号房门。

走廊里很安静，只有远处电梯运行的嗡嗡声。门缝里透出微弱的电视光，还有隐约的说话声——她在打电话，声音很轻，听不清内容，但能感觉到她的紧张。

这本该是一场交易。我只是太寂寞了，想找个人陪。但真到了门口，听着里面传来的声音，一股巨大的荒谬感和羞耻感突然击中了我。

我的手指悬在门板前，犹豫了整整五分钟。里面的电视声音很清晰，她在等我。但我就是迈不出这一步。

700块钱，买来的不是陪伴，而是更深的孤独。`,
  dialogue: "（不行……我做不到……）",
  speaker: "内心独白",
  backgroundDescription: "dark hotel hallway, pov looking at door number 302, phone screen glowing, moody cinematic lighting, wong kar wai style",
  choices: [
    { id: "p1", text: "直接转身逃跑，什么都不说", sentiment: "shy" },
    { id: "p2", text: "给她发消息：\"对不起，我来不了\"", sentiment: "neutral" },
    { id: "p3", text: "站在门口纠结很久，最终还是走了", sentiment: "cold" }
  ],
  isEnding: false
};

// 分支1A：直接逃跑（懦弱路线）
const SCENE_1A_PANIC: SceneData = {
  narrative: `【第一章A：逃兵】
我转身就跑。

电梯太慢，我直接冲下楼梯，三步并作两步，一口气跑到街上。雨开始下了，细密的雨丝打在脸上，冰凉刺骨。我任由雨水冲刷，心跳如擂鼓，呼吸急促得像是要窒息。

700块钱打了水漂。我连道歉都不敢说，就这么逃了。像个小偷，像只老鼠，像所有见不得光的东西。

我拉黑了所有联系方式，删掉了那个APP，发誓再也不碰这种事。但那个门后的人，那个我永远不会见到的她，却成了我心底一个永远的问号。

她会不会觉得我是个变态？还是只是觉得我是个懦夫？

也许，两者都是。`,
  dialogue: "（我真是个废物……）",
  speaker: "内心独白",
  backgroundDescription: "rainy city street at night, protagonist running in panic, neon reflections, self-loathing atmosphere",
  choices: [
    { id: "1a_1", text: "【继续】", sentiment: "neutral" }
  ],
  isEnding: false
};

const SCENE_1A_LIFE: SceneData = {
  narrative: `【第二章A：逃避的生活】
接下来的一个月，我把自己埋在工作里。加班到深夜，周末也待在办公室，用忙碌麻痹自己。

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

const SCENE_1A_DEEP_WORK: SceneData = {
  narrative: `【第二章A-2：更深层的逃避】
我选择了继续逃避。工作成了我唯一的避风港。

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

const SCENE_1A_TRY_CHANGE: SceneData = {
  narrative: `【第二章A-3：尝试改变】
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
    { id: "1a_3a", text: "鼓起勇气，走过去", sentiment: "bold" },
    { id: "1a_3b", text: "还是不敢，默默走开", sentiment: "shy" }
  ],
  isEnding: false
};

const SCENE_1A_STRUGGLE: SceneData = {
  narrative: `【第三章A：内心的挣扎】
两个月过去了。我尝试过改变——去健身房，参加社交活动，甚至下载了新的交友软件。

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

const SCENE_1A_CONFRONT: SceneData = {
  narrative: `【第四章A：第一次接触】
我深吸一口气，走了过去。每一步都像是踩在棉花上，软绵绵的，使不上力。

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

const SCENE_1A_FIRST_MEET: SceneData = {
  narrative: `【第五章A：第一次正式见面】
我们去了公司附近的一家咖啡店。店面不大，但很安静，角落里摆着几盆绿植，阳光从落地窗洒进来，在地板上投下斑驳的光影。

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

const SCENE_1A_BUILDING_TRUST: SceneData = {
  narrative: `【第六章A：建立信任】
从那天起，我们开始经常见面。有时候是咖啡店，有时候是公司食堂，有时候是下班后的散步。

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

const SCENE_1A_OBSERVE: SceneData = {
  narrative: `【第四章A：默默观察】
我还是没有勇气上前。我看着她走进电梯，看着电梯门关上，看着数字从1跳到11。

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

const SCENE_1A_ELEVATOR_TALK: SceneData = {
  narrative: `【第五章A：电梯里的对话】
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
    { id: "1a_8a", text: "下次遇到她，主动打招呼", sentiment: "bold" },
    { id: "1a_8b", text: "继续观察，等待更好的时机", sentiment: "shy" }
  ],
  isEnding: false
};

const SCENE_1A_STALKING: SceneData = {
  narrative: `【第五章A：继续逃避】
我还是选择了逃避。我假装没听见，盯着楼层数字，直到电梯到了12楼。

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

// 分支1B：发消息道歉（诚实路线）
const SCENE_1B_MESSAGE: SceneData = {
  narrative: `【第一章B：短信】
我的手指在屏幕上打字，删了又写，写了又删。走廊里的感应灯灭了，我站在黑暗中，只有手机屏幕的光照亮我的脸。

最后发出去的只有简单的几个字：

"不好意思，我来不了了。给您添麻烦了。"

发送。

我盯着屏幕看了很久，对方一直没回。时间一分一秒地过去，每一秒都像是煎熬。我正准备离开，手机震了一下。

"没关系的。"

然后又是一条，间隔了几秒："不过既然你付了钱，我有义务问一句——你还好吗？"

我愣住了。这是职业话术吗？还是……真的在关心我？

"如果只是想找人聊聊天，其实不用这样的。"

屏幕上的字在黑暗中发着光，像是一根救命稻草。`,
  dialogue: "（她在……安慰我？）",
  speaker: "内心独白",
  backgroundDescription: "phone screen close-up, chat messages glowing in dark hallway, warm text bubbles",
  choices: [
    { id: "1b_1", text: "\"谢谢，我没事。\"然后删除好友", sentiment: "cold" },
    { id: "1b_2", text: "\"对不起，我只是……做不到那种事。\"", sentiment: "shy" },
    { id: "1b_3", text: "\"其实，能聊聊吗？我请你喝咖啡。\"", sentiment: "bold" }
  ],
  isEnding: false
};

// 1B分支：删除好友后的发展
const SCENE_1B_DELETED: SceneData = {
  narrative: `【第二章B：切断联系】
我删除了她的好友。那一刻，我松了一口气，但心里却空落落的。

接下来的日子，我试图忘记那个夜晚，忘记那个700块，忘记那个我永远不知道名字的她。

但奇怪的是，我反而更频繁地想起她。想起她最后那句话："如果只是想找人聊聊天，其实不用这样的。"

也许，我真的只是想要有人陪？也许，我错过了什么？

两个月后，我在公司楼下看到了一个熟悉的身影。`,
  dialogue: "（是她吗？）",
  speaker: "内心独白",
  backgroundDescription: "convenience store, protagonist seeing familiar figure, recognition dawning",
  choices: [
    { id: "1b_1a", text: "主动上前，想要道歉", sentiment: "bold" },
    { id: "1b_1b", text: "假装没看见，快速离开", sentiment: "cold" }
  ],
  isEnding: false
};

const SCENE_1B_REGRET: SceneData = {
  narrative: `【第三章B：后悔】
我删除了她，但后悔很快就来了。

我开始在微信里搜索她的账号，想要重新加她。但我发现，我已经不记得她的微信号了。

我开始在社交软件上寻找，试图找到她的痕迹。但我知道，即使找到了，我也没有勇气去联系。

一个月后，我在公司楼下看到了一个熟悉的身影。米色风衣，茉莉花香。

是她。

我的心跳瞬间加速。这是机会吗？还是又一次错过？`,
  dialogue: "（不能再错过了……）",
  speaker: "内心独白",
  backgroundDescription: "company building entrance, morning, protagonist seeing familiar figure, second chance dawning",
  choices: [
    { id: "1b_1aa", text: "鼓起勇气，主动上前", sentiment: "bold" },
    { id: "1b_1ab", text: "还是不敢，默默走开", sentiment: "shy" }
  ],
  isEnding: false
};

const SCENE_1B_APOLOGY: SceneData = {
  narrative: `【第四章B：迟来的道歉】
我走了过去。每一步都像是踩在刀刃上，但我知道，如果这次再逃避，就真的没有机会了。

"你好……"我的声音有点颤抖，几乎听不清，"你还记得我吗？"

她转过身，看到我的瞬间，眼神里闪过一丝惊讶，然后是复杂的情绪——困惑、好奇，还有一丝我读不懂的东西。

"记得。"她点点头，声音很轻，"你删除了我的好友。"

我愣住了。她居然记得。我以为她早就忘了，就像我试图忘记一样。

"对不起……"我说，声音越来越小，"我……我当时很混乱，我不知道该怎么面对你。"

"没关系。"她笑了，眼睛弯成月牙，"其实，我也理解。那种情况下，谁都会混乱的。"

我们站在公司楼下，早高峰的人流从身边经过，但那一刻，世界好像只剩下我们两个人。`,
  dialogue: "\"要不，我们重新认识一下？\"",
  speaker: "琳",
  backgroundDescription: "company building lobby, two people talking, morning crowd, second chance moment",
  choices: [
    { id: "1b_1ac", text: "\"好，我想重新认识你\"", sentiment: "bold" },
    { id: "1b_1ad", text: "\"我……还是算了吧\"", sentiment: "shy" }
  ],
  isEnding: false
};

// 1B分支：继续聊天的后续
const SCENE_1B_CHAT: SceneData = {
  narrative: `【第二章B：深夜的对话】
那晚，我们聊了很久。从晚上11点聊到凌晨3点，手机屏幕的光在黑暗中发着光，像是两个孤独的灵魂在互相取暖。

她告诉我，她叫琳，是个设计师。那段时间家里出了事，急需用钱，所以才接了那个单。但真到了那一刻，她也很害怕。

"其实，我也很庆幸你没来。"她说，声音很轻，"因为我不知道自己能不能真的做到。"

我们聊工作，聊生活，聊那些不敢对别人说的话。第一次，我感觉到有人真正理解我的孤独。那种感觉很奇怪，就像是在黑暗中突然看到了一束光。

"要不，我们见个面吧？"她突然说，声音里带着一丝试探，"不是那种见面，就是……普通朋友那种。"`,
  dialogue: "\"你觉得呢？\"",
  speaker: "琳",
  backgroundDescription: "phone chat interface, late night, warm conversation atmosphere",
  choices: [
    { id: "1b_2a", text: "\"好，什么时候？\"", sentiment: "bold" },
    { id: "1b_2b", text: "\"我……还是算了吧\"", sentiment: "shy" }
  ],
  isEnding: false
};

const SCENE_1B_DEEP_CHAT: SceneData = {
  narrative: `【第三章B：更深入的了解】
从那天起，我们每天晚上都会聊天。有时候是文字，有时候是语音，有时候是视频。手机屏幕的光在黑暗中发着光，像是两个孤独的灵魂在互相取暖。

我了解到，她喜欢画画，喜欢看日落，喜欢在深夜听音乐。她告诉我，她画的第一幅画是给妈妈的生日礼物，画的是她们家的小花园。她最喜欢的日落是在海边看到的，那时候她刚失恋，一个人坐在沙滩上，看着太阳慢慢沉入海平面。她深夜听的音乐总是很悲伤，她说，悲伤的音乐让她觉得不那么孤独。

我也开始告诉她我的故事。我的工作，我的孤独，我的恐惧。那些我从未对任何人说过的话，在她面前，却变得那么容易说出口。

"你知道吗？"有一天她对我说，声音很轻，但很坚定，"你其实不是孤独，你只是太害怕了。害怕被拒绝，害怕被伤害，害怕暴露真实的自己。"

那一刻，我突然意识到，也许，我真的可以改变。`,
  dialogue: "\"也许，我们可以成为真正的朋友？\"",
  speaker: "琳",
  backgroundDescription: "phone video call interface, late night, two people talking, intimate conversation",
  choices: [
    { id: "1b_2aa", text: "\"我想……不只是朋友\"", sentiment: "romantic" },
    { id: "1b_2ab", text: "\"好，朋友也很好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

const SCENE_1B_PLAN_MEET: SceneData = {
  narrative: `【第四章B：计划见面】
我们约好了见面。周六下午，咖啡店。

我提前半小时就到了，选了个靠窗的位置，点了两杯拿铁。

我紧张得手心出汗。这是我第一次真正意义上的"约会"，虽然我们都说只是朋友见面。

她迟到了十分钟，进门的时候还在打电话："嗯，我到了，先挂了。"

挂断电话，她看到了我，愣了一下，然后笑了。

"没想到你真的会来。"她在我对面坐下，"我还以为你会放我鸽子。"

"我答应的事，不会反悔。"我说。

"那那天晚上呢？"她问，但语气里没有责备，只有好奇。`,
  dialogue: "\"那天……我到了门口，但没敢进去。\"",
  speaker: "我",
  backgroundDescription: "coffee shop, afternoon, two people meeting for first time, nervous but warm atmosphere",
  choices: [
    { id: "1b_2ac", text: "继续解释那晚的感受", sentiment: "bold" },
    { id: "1b_2ad", text: "转移话题，聊其他事情", sentiment: "shy" }
  ],
  isEnding: false
};

// 1B分支：咖啡约会的详细场景
const SCENE_1B_COFFEE: SceneData = {
  narrative: `【第二章B：咖啡店的相遇】
周六下午，我提前半小时就到了咖啡店。选了个靠窗的位置，点了两杯拿铁，然后开始等待。

窗外的阳光很好，洒在桌面上，把咖啡杯的影子拉得很长。我盯着那两杯咖啡，看着热气慢慢消散，心里七上八下的。

她迟到了十分钟，进门的时候还在打电话："嗯，我到了，先挂了。"

挂断电话，她看到了我，愣了一下，然后笑了。那笑容很轻，但很真实。

"没想到你真的会来。"她在我对面坐下，脱掉外套，"我还以为你会放我鸽子。"

"我答应的事，不会反悔。"我说，声音比我想象的要坚定。

"那那天晚上呢？"她问，但语气里没有责备，只有好奇，还有一丝我读不懂的东西。

我沉默了。咖啡的热气在我们之间升腾，模糊了视线。`,
  dialogue: "\"那天……我到了门口，但没敢进去。\"",
  speaker: "我",
  backgroundDescription: "cozy coffee shop, afternoon sunlight, two people at table, warm atmosphere",
  choices: [
    { id: "1b_3a", text: "继续解释那晚的感受", sentiment: "bold" },
    { id: "1b_3b", text: "转移话题，聊其他事情", sentiment: "shy" }
  ],
  isEnding: false
};

const SCENE_1B_COFFEE_TALK: SceneData = {
  narrative: `【第三章B：咖啡店的对话】
我们聊了很久。从下午2点聊到傍晚6点，窗外的阳光从明亮变成金黄，再变成橘红，最后消失在城市的边缘。

她告诉我，她叫琳，是个设计师。那段时间家里出了事，急需用钱，所以才接了那个单。但真到了那一刻，她也很害怕。

"其实，我也很庆幸你没来。"她说，声音很轻，"因为我不知道自己能不能真的做到。"

我们聊工作，聊生活，聊那些不敢对别人说的话。咖啡凉了又热，热了又凉，但我们谁都没有在意。

"你知道吗？"她突然说，眼神很认真，"那天晚上，我一直在想，你会是什么样的人。现在我知道了——你是个好人，只是太孤独了。"

那一刻，我突然觉得，也许，我真的可以改变。`,
  dialogue: "\"要不，我们以后经常见面吧？\"",
  speaker: "琳",
  backgroundDescription: "coffee shop evening, warm lighting, two people deep in conversation, intimate atmosphere",
  choices: [
    { id: "1b_3c", text: "\"好，我也想。\"", sentiment: "romantic" },
    { id: "1b_3d", text: "\"我……需要考虑一下\"", sentiment: "shy" }
  ],
  isEnding: false
};

const SCENE_1B_REGULAR_MEET: SceneData = {
  narrative: `【第四章B：定期见面】
从那天起，我们开始定期见面。每周六下午，同一家咖啡店，同一个位置。

我们聊工作，聊生活，聊那些不敢对别人说的话。我慢慢了解到，她喜欢画画，喜欢看日落，喜欢在深夜听音乐。

她也开始了解我。我的工作，我的孤独，我的恐惧。

"你知道吗？"有一天她对我说，"你其实不是孤独，你只是太害怕了。害怕被拒绝，害怕被伤害，害怕暴露真实的自己。"

那一刻，我突然意识到，也许，我真的可以改变。

"也许，我们可以不只是朋友？"我鼓起勇气问。`,
  dialogue: "\"我……也想。\"",
  speaker: "琳",
  backgroundDescription: "coffee shop, regular meeting spot, two people comfortable with each other, growing intimacy",
  choices: [
    { id: "1b_3ca", text: "握住她的手", sentiment: "romantic" },
    { id: "1b_3cb", text: "保持距离，慢慢来", sentiment: "shy" }
  ],
  isEnding: false
};

// 分支1C：犹豫很久才走（内疚路线）
const SCENE_1C_HESITATE: SceneData = {
  narrative: `【第一章C：犹豫】
我站在门口站了很久，久到走廊的感应灯都灭了两次。

手机屏幕在黑暗中发着光，微信支付的记录刺眼地提醒着我——700元，已支付。那数字在屏幕上跳动着，像是在嘲笑我的犹豫。

我能听到门里传来的声音，她在打电话："嗯……客人好像还没到……可能路上堵车吧。"

声音很轻，带着一丝不确定。那一刻，我突然意识到，门的另一边也是一个活生生的人。她也在等，也会紧张，也会想这个陌生人会是什么样。

我抬起手，想要敲门，但手指悬在半空中，怎么也落不下去。

最终，我还是走了。但我没有删除联系方式，只是备注改成了"700元"。那三个字，像是一个标记，提醒我那个我永远无法忘记的夜晚。`,
  dialogue: "（对不起……）",
  speaker: "内心独白",
  backgroundDescription: "dark hallway, motion sensor lights turning off, phone light illuminating protagonist's conflicted face",
  choices: [
    { id: "1c_1", text: "【继续】", sentiment: "neutral" }
  ],
  isEnding: false
};

const SCENE_1C_GUILT: SceneData = {
  narrative: `【第二章C：内疚的生活】
那700块钱成了我心里的一个结。一个解不开的结，一个让我夜不能寐的结。

我时不时会点开她的微信头像，想看看她的朋友圈，想了解她是个什么样的人。她的头像是一张风景照，夕阳下的海边，很美。海浪拍打着沙滩，夕阳把天空染成橘红色，像是一幅画。

但我从来没有发过消息。我不知道该说什么——道歉？解释？还是假装什么都没发生过？每次打开对话框，手指悬在键盘上，却一个字也打不出来。那些话在脑海里转来转去，但就是说不出口。

一个月后，我在朋友圈看到了她的动态。她发了一张工作照，配文是："新项目终于上线了，累死了。"

照片里的她笑得很灿烂，完全不像那个夜晚我脑海中想象的样子。她看起来……很普通，很真实，就像我身边的任何一个同事。

我突然意识到，我欠她一个道歉。不是为那700块钱，而是为我的逃避，为我的懦弱。`,
  dialogue: "（也许，我应该主动联系她？）",
  speaker: "内心独白",
  backgroundDescription: "phone screen showing social media, protagonist scrolling, guilt and hesitation",
  choices: [
    { id: "1c_2", text: "给她发消息，想要道歉", sentiment: "bold" },
    { id: "1c_3", text: "还是不敢，继续观察", sentiment: "shy" }
  ],
  isEnding: false
};

const SCENE_1C_STALKING: SceneData = {
  narrative: `【第三章C：继续观察】
我选择了继续观察。我开始每天查看她的朋友圈，开始留意她的动态，开始试图从这些碎片中拼凑出她的生活。

我发现她喜欢画画，喜欢看日落，喜欢在深夜听音乐。我发现她工作很努力，经常加班到很晚。我发现她似乎很孤独，朋友圈里很少有其他人的照片。

我开始想象，如果那天我敲门了，现在会是什么样子？我们会成为朋友吗？还是只是陌生人？

两个月后，我在公司楼下看到了一个熟悉的身影。米色风衣，茉莉花香，还有那个我永远忘不了的气质。

是她。

我的心跳瞬间加速。这是机会吗？还是又一次错过？我站在人群中，看着她走进大楼，心里五味杂陈。`,
  dialogue: "（不能再错过了……）",
  speaker: "内心独白",
  backgroundDescription: "company building entrance, morning, protagonist seeing familiar figure, opportunity dawning",
  choices: [
    { id: "1c_3a", text: "鼓起勇气，主动上前", sentiment: "bold" },
    { id: "1c_3b", text: "还是不敢，继续观察", sentiment: "shy" }
  ],
  isEnding: false
};

const SCENE_1C_FIRST_MESSAGE: SceneData = {
  narrative: `【第三章C：第一条消息】
我鼓起勇气，给她发了条消息："你好，我是那天晚上的……我想为那天的事道歉。"

发送。

我盯着屏幕，心跳加速。她会回吗？她会骂我吗？还是直接拉黑我？

十分钟后，她回了："没事的，我理解。你还好吗？"

我愣住了。她不仅没有生气，还在关心我？

"我……还好。你呢？"我回复。

"我也还好。对了，你也在XX大厦上班吗？我好像见过你。"

我们开始聊天。从简单的问候，到工作，到生活，到那些不敢对别人说的话。`,
  dialogue: "\"要不，我们见个面？就当……交个朋友？\"",
  speaker: "琳",
  backgroundDescription: "phone chat interface, two people chatting, warm conversation, building connection",
  choices: [
    { id: "1c_2a", text: "\"好，什么时候方便？\"", sentiment: "bold" },
    { id: "1c_2b", text: "\"我……还是算了吧\"", sentiment: "shy" }
  ],
  isEnding: false
};


const SCENE_1C_MEETING: SceneData = {
  narrative: `【第四章C：第一次正式见面】
我们约在公司楼下的咖啡店。我提前到了，选了个安静的角落，点了两杯拿铁。

窗外的阳光很好，透过百叶窗洒进来，在桌面上投下斑驳的光影。我盯着那两杯咖啡，看着热气慢慢消散，心里七上八下的。

她准时出现，穿着简单的白衬衫和牛仔裤，和我想象中的完全不一样。她看起来很普通，很真实，就像我身边的任何一个同事。

"你好。"她在我对面坐下，声音很轻，"没想到我们真的会见面。"

"我也没想到。"我说，声音比我想象的要平静，"我以为你会直接拉黑我。"

"为什么要拉黑？"她笑了，那笑容很轻，但很真实，"你又不是坏人，只是……有点胆小而已。"

我们聊了很久。她告诉我，她叫琳，是个设计师。那700块钱，她其实早就忘了。

"对我来说，那只是工作。"她说，语气很平静，"但对你来说，可能不一样吧？"`,
  dialogue: "\"其实，我只是想要有人陪。\"",
  speaker: "我",
  backgroundDescription: "coffee shop, afternoon, two people meeting for first time, warm and understanding atmosphere",
  choices: [
    { id: "1c_6", text: "继续深入聊下去", sentiment: "romantic" },
    { id: "1c_7", text: "保持距离，只做朋友", sentiment: "neutral" }
  ],
  isEnding: false
};

const SCENE_1C_DEEP_CONVERSATION: SceneData = {
  narrative: `【第五章C：深入对话】
我们继续聊下去。从下午2点聊到傍晚6点，窗外的阳光从明亮变成金黄，再变成橘红，最后消失在城市的边缘。

她告诉我，她喜欢画画，喜欢看日落，喜欢在深夜听音乐。她告诉我，她画的第一幅画是给妈妈的生日礼物，画的是她们家的小花园，那时候她还在上小学。她最喜欢的日落是在海边看到的，那时候她刚失恋，一个人坐在沙滩上，看着太阳慢慢沉入海平面，眼泪和海水混在一起。她深夜听的音乐总是很悲伤，她说，悲伤的音乐让她觉得不那么孤独。

我也开始告诉她我的故事。我的工作，我的孤独，我的恐惧。那些我从未对任何人说过的话，在她面前，却变得那么容易说出口。

"你知道吗？"有一天她对我说，声音很轻，但很坚定，"你其实不是孤独，你只是太害怕了。害怕被拒绝，害怕被伤害，害怕暴露真实的自己。"

那一刻，我突然意识到，也许，我真的可以改变。

"也许，我们可以不只是朋友？"我鼓起勇气问。`,
  dialogue: "\"我……也想。\"",
  speaker: "琳",
  backgroundDescription: "coffee shop evening, warm lighting, two people deep in conversation, growing intimacy",
  choices: [
    { id: "1c_6a", text: "握住她的手", sentiment: "romantic" },
    { id: "1c_6b", text: "保持距离，慢慢来", sentiment: "shy" }
  ],
  isEnding: false
};

const SCENE_1C_FRIENDSHIP: SceneData = {
  narrative: `【第五章C：友谊的开始】
我们选择了保持距离，只做朋友。

从那天起，我们开始经常见面。有时候是咖啡店，有时候是公司食堂，有时候是下班后的散步。公园里的路灯已经亮了，昏黄的光洒在我们身上，把影子拉得很长。

我们并排走着，中间隔着一点距离，但那种距离让人感到安全，也让人感到温暖。有时候我们会聊几句，有时候只是安静地走着，听着彼此的脚步声。

我慢慢了解到，她喜欢画画，喜欢看日落，喜欢在深夜听音乐。她也开始了解我。我的工作，我的孤独，我的恐惧。那些我从未对任何人说过的话，在她面前，却变得那么容易说出口。

"你知道吗？"有一天她对我说，声音很轻，但很坚定，"你其实不是孤独，你只是太害怕了。害怕被拒绝，害怕被伤害，害怕暴露真实的自己。"

那一刻，我突然意识到，也许，我真的可以改变。

"也许，我们可以不只是朋友？"我鼓起勇气问。`,
  dialogue: "\"我……也想。\"",
  speaker: "琳",
  backgroundDescription: "evening walk in park, two people walking side by side, sunset colors, peaceful friendship",
  choices: [
    { id: "1c_7a", text: "握住她的手", sentiment: "romantic" },
    { id: "1c_7b", text: "保持距离，继续做朋友", sentiment: "neutral" }
  ],
  isEnding: false
};

// ============================================================================
// 主线汇合场景：便利店重逢
// ============================================================================

const SCENE_2_REUNION: SceneData = {
  narrative: `【第二章：便利店的重逢】
三个月后。公司楼下的全家便利店。

外面下着梅雨，细密的雨丝打在玻璃窗上，模糊了外面的世界。我等着微波炉热饭团，盯着那个旋转的盘子，听着"叮"的一声。

身边突然多了一个收伞的身影——米色风衣，淡淡的茉莉花香。那香味很熟悉，熟悉到让我心跳加速。

我转过头，侧脸重叠的那一刻，我的脑子"嗡"了一声。

是她。虽然那天我们没见过面，但我死都不会认错这个气质。那个在黑暗中安慰我的人，那个让我感到温暖的人。

她也在看我，眼神里闪过一丝惊讶，然后是复杂的情绪。`,
  dialogue: "\"诶，不好意思，能帮我拿一下那边的纸巾吗？\"",
  speaker: "琳",
  backgroundDescription: "convenience store interior, rainy window, fluorescent lighting, slice of life anime style",
  choices: [
    { id: "2_1", text: "僵硬地递过去，不敢对视", sentiment: "shy" },
    { id: "2_2", text: "\"你是……那天的？\"", sentiment: "bold" },
    { id: "2_3", text: "假装不认识，拿了饭团就走", sentiment: "cold" }
  ],
  isEnding: false
};

// ============================================================================
// 中期分支场景
// ============================================================================

const SCENE_3_LUNCH: SceneData = {
  narrative: `【第三章：意外的午餐】
她认出我了。无论我怎么装，她那双眼睛里闪过的惊讶和复杂的情绪都出卖了一切。那眼神里有困惑，有好奇，还有一丝我读不懂的东西。

公司食堂里人声鼎沸，但我们之间的空气却像是凝固了一样。她端着餐盘，站在我面前，餐盘里的饭菜还冒着热气。

"你也在这栋楼上班？"她问，语气很自然，但我听得出一丝试探。她的声音很轻，但在嘈杂的食堂里，我却听得清清楚楚。

"嗯……12楼。"我说，声音比我想象的要平静。但我知道，我的心跳已经快得像是要跳出胸膛。

"我在11楼，设计部的。"她笑了笑，那笑容很轻，但很真实，"看来以后可能会常见面。"

空气安静了几秒。微波炉的提示音打破了尴尬，"叮"的一声，像是把我们从某种奇怪的氛围中拉了出来。

"要不……一起吃？"她问，声音很轻，带着一丝不确定，"我一个人吃也挺无聊的。"`,
  dialogue: "\"好。\"",
  speaker: "我",
  backgroundDescription: "company cafeteria, warm afternoon light, casual atmosphere",
  choices: [
    { id: "3_1", text: "接受邀请，坐下来聊", sentiment: "romantic" },
    { id: "3_2", text: "\"不好意思，我赶时间。\"", sentiment: "cold" },
    { id: "3_3", text: "\"其实我想先道个歉……\"", sentiment: "bold" }
  ],
  isEnding: false
};

// ============================================================================
// 第4-7层：深度分支场景（树状结构的关键节点）
// ============================================================================

// 1A分支的第4层场景
const SCENE_1A_4A_WORK_COLLAPSE: SceneData = {
  narrative: `【第四章A-1：崩溃边缘】
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

// 1A分支：崩溃后的场景（第5层）
const SCENE_1A_5A_COLLAPSE_HOSPITAL: SceneData = {
  narrative: `【第五章A-1：医院】
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

// 1A分支：尝试改变后的社交场景（第5层）
const SCENE_1A_5B_SOCIAL_ATTEMPT: SceneData = {
  narrative: `【第五章A-2：社交尝试】
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

const SCENE_1A_4B_TRY_SOCIAL: SceneData = {
  narrative: `【第四章A-2：尝试社交】
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

// 1A分支的第5层场景
const SCENE_1A_5A_CAFETERIA_TALK: SceneData = {
  narrative: `【第五章A-1：食堂对话】
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

const SCENE_1A_5B_AVOID_AGAIN: SceneData = {
  narrative: `【第五章A-2：再次逃避】
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

// 1A分支的第6层场景
const SCENE_1A_6A_COFFEE_DEEP: SceneData = {
  narrative: `【第六章A-1：咖啡店的深入】
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
    { id: "1a_6a", text: "\"和你聊天的时候，好像……不那么孤独了。\"", sentiment: "romantic" },
    { id: "1a_6b", text: "\"也许吧，但我不敢奢望什么\"", sentiment: "sad" }
  ],
  isEnding: false
};

const SCENE_1A_6B_ELEVATOR_CONTINUE: SceneData = {
  narrative: `【第六章A-2：电梯里的继续】
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
    { id: "1a_6c", text: "下次遇到她，主动打招呼", sentiment: "bold" },
    { id: "1a_6d", text: "继续观察，等待更好的时机", sentiment: "shy" }
  ],
  isEnding: false
};

// 1A分支的第7层场景
const SCENE_1A_7A_RELATIONSHIP_GROW: SceneData = {
  narrative: `【第七章A-1：关系的发展】
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

const SCENE_1A_7B_STALKING_DISCOVERED: SceneData = {
  narrative: `【第七章A-2：跟踪被发现】
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

// 1A分支的第8层场景（接近结局）
const SCENE_1A_8A_CONFESSION: SceneData = {
  narrative: `【第八章A-1：坦白】
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
    { id: "1a_8a", text: "\"那现在，我们可以重新开始吗？\"", sentiment: "bold" },
    { id: "1a_8b", text: "\"我……不知道\"", sentiment: "shy" }
  ],
  isEnding: false
};

const SCENE_1A_8B_FINAL_ESCAPE: SceneData = {
  narrative: `【第八章A-2：最终逃避】
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
    { id: "1a_8c", text: "【结局】", sentiment: "neutral" }
  ],
  isEnding: false
};

// ============================================================================
// 1B分支的深度场景（第4-8层）
// ============================================================================

// 1B分支的第4层场景
const SCENE_1B_4A_DELETED_REGRET: SceneData = {
  narrative: `【第四章B-1：删除后的后悔】
我删除了她，但后悔很快就来了。

我开始在微信里搜索她的账号，想要重新加她。但我发现，我已经不记得她的微信号了。

我开始在社交软件上寻找，试图找到她的痕迹。但我知道，即使找到了，我也没有勇气去联系。

一个月后，我在公司楼下看到了一个熟悉的身影。米色风衣，茉莉花香。

是她。

我的心跳瞬间加速。这是机会吗？还是又一次错过？`,
  dialogue: "（不能再错过了……）",
  speaker: "内心独白",
  backgroundDescription: "company building entrance, morning, protagonist seeing familiar figure, second chance dawning",
  choices: [
    { id: "1b_4a", text: "鼓起勇气，主动上前", sentiment: "bold" },
    { id: "1b_4b", text: "还是不敢，默默走开", sentiment: "shy" }
  ],
  isEnding: false
};

const SCENE_1B_4B_CHAT_DEEPEN: SceneData = {
  narrative: `【第四章B-2：聊天的深入】
从那天起，我们每天晚上都会聊天。有时候是文字，有时候是语音，有时候是视频。手机屏幕的光在黑暗中发着光，像是两个孤独的灵魂在互相取暖。

我了解到，她喜欢画画，喜欢看日落，喜欢在深夜听音乐。她告诉我，她画的第一幅画是给妈妈的生日礼物，画的是她们家的小花园，那时候她还在上小学。她最喜欢的日落是在海边看到的，那时候她刚失恋，一个人坐在沙滩上，看着太阳慢慢沉入海平面，眼泪和海水混在一起。

我也开始告诉她我的故事。我的工作，我的孤独，我的恐惧。那些我从未对任何人说过的话，在她面前，却变得那么容易说出口。`,
  dialogue: "\"也许，我们可以成为真正的朋友？\"",
  speaker: "琳",
  backgroundDescription: "phone video call interface, late night, two people talking, intimate conversation",
  choices: [
    { id: "1b_4c", text: "\"我想……不只是朋友\"", sentiment: "romantic" },
    { id: "1b_4d", text: "\"好，朋友也很好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

// 1B分支的第5层场景
const SCENE_1B_5A_MEET_PLAN: SceneData = {
  narrative: `【第五章B-1：计划见面】
我们约好了见面。周六下午，咖啡店。

我提前半小时就到了，选了个靠窗的位置，点了两杯拿铁。咖啡的香气在空气中弥漫，阳光透过百叶窗洒在桌子上，形成斑驳的光影。

我紧张得手心出汗，不停地看手机，又不停地望向门口。每一个推门进来的人，都让我的心跳加速。

她迟到了十分钟，进门的时候还在打电话："嗯，我到了，先挂了。"

挂断电话，她看到了我，愣了一下，然后笑了。那个笑容很轻，但很真实。`,
  dialogue: "\"没想到你真的会来。\"",
  speaker: "琳",
  backgroundDescription: "coffee shop, afternoon, two people meeting for first time, nervous but warm atmosphere",
  choices: [
    { id: "1b_5a", text: "\"我答应的事，不会反悔。\"", sentiment: "bold" },
    { id: "1b_5b", text: "\"其实我也很紧张……\"", sentiment: "shy" }
  ],
  isEnding: false
};

// 1B分支的第6层场景
const SCENE_1B_6A_COFFEE_CONVERSATION: SceneData = {
  narrative: `【第六章B-1：咖啡店的对话】
我们聊了很久。从下午2点聊到傍晚6点，窗外的阳光从明亮变成金黄，再变成橘红，最后消失在城市的边缘。

她告诉我，她叫琳，是个设计师。那段时间家里出了事，急需用钱，所以才接了那个单。但真到了那一刻，她也很害怕。

"其实，我也很庆幸你没来。"她说，声音很轻，"因为我不知道自己能不能真的做到。"

我们聊工作，聊生活，聊那些不敢对别人说的话。咖啡凉了又热，热了又凉，但我们谁都没有在意。

"你知道吗？"她突然说，眼神很认真，"那天晚上，我一直在想，你会是什么样的人。现在我知道了——你是个好人，只是太孤独了。"`,
  dialogue: "\"要不，我们以后经常见面吧？\"",
  speaker: "琳",
  backgroundDescription: "coffee shop evening, warm lighting, two people deep in conversation, intimate atmosphere",
  choices: [
    { id: "1b_6a", text: "\"好，我也想。\"", sentiment: "romantic" },
    { id: "1b_6b", text: "\"我……需要考虑一下\"", sentiment: "shy" }
  ],
  isEnding: false
};

// 1B分支的第7层场景
const SCENE_1B_7A_REGULAR_MEETINGS: SceneData = {
  narrative: `【第七章B-1：定期见面】
从那天起，我们开始定期见面。每周六下午，同一家咖啡店，同一个位置。

我们聊工作，聊生活，聊那些不敢对别人说的话。我慢慢了解到，她喜欢画画，喜欢看日落，喜欢在深夜听音乐。

她也开始了解我。我的工作，我的孤独，我的恐惧。

"你知道吗？"有一天她对我说，"你其实不是孤独，你只是太害怕了。害怕被拒绝，害怕被伤害，害怕暴露真实的自己。"

那一刻，我突然意识到，也许，我真的可以改变。

"也许，我们可以不只是朋友？"我鼓起勇气问。`,
  dialogue: "\"我……也想。\"",
  speaker: "琳",
  backgroundDescription: "coffee shop, regular meeting spot, two people comfortable with each other, growing intimacy",
  choices: [
    { id: "1b_7a", text: "握住她的手", sentiment: "romantic" },
    { id: "1b_7b", text: "保持距离，慢慢来", sentiment: "shy" }
  ],
  isEnding: false
};

// 1B分支的第8层场景
const SCENE_1B_8A_RELATIONSHIP_DEFINE: SceneData = {
  narrative: `【第八章B-1：定义关系】
我握住了她的手。她的手很暖，很软，像是一团火，温暖了我冰冷的心。

她看着我，眼神很复杂。有惊讶，有感动，还有一丝我读不懂的东西。

"你知道吗？"她说，声音很轻，"我一直以为，我们只是朋友。但现在，我发现我错了。"

"什么意思？"我问。

"我也想要更多。"她说，脸红了，"不只是朋友，而是……"

她没有说完，但我明白了。那一刻，我突然觉得，也许，这700块钱，是我这辈子花得最值得的一笔钱。`,
  dialogue: "\"那我们……试试看？\"",
  speaker: "我",
  backgroundDescription: "coffee shop, two people holding hands, warm atmosphere, relationship defining moment",
  choices: [
    { id: "1b_8a", text: "\"好，我们试试看。\"", sentiment: "romantic" },
    { id: "1b_8b", text: "\"我……还是有点害怕\"", sentiment: "shy" }
  ],
  isEnding: false
};

// ============================================================================
// 1C分支的深度场景（第4-8层）
// ============================================================================

// 1C分支的第4层场景
const SCENE_1C_4A_GUILT_OBSERVE: SceneData = {
  narrative: `【第四章C-1：内疚的观察】
我选择了继续观察。我开始每天查看她的朋友圈，开始留意她的动态，开始试图从这些碎片中拼凑出她的生活。

我发现她喜欢画画，喜欢看日落，喜欢在深夜听音乐。我发现她工作很努力，经常加班到很晚。我发现她似乎很孤独，朋友圈里很少有其他人的照片。

我开始想象，如果那天我敲门了，现在会是什么样子？我们会成为朋友吗？还是只是陌生人？

两个月后，我在公司楼下看到了一个熟悉的身影。米色风衣，茉莉花香。

是她。

我的心跳瞬间加速。这是机会吗？还是又一次错过？`,
  dialogue: "（不能再错过了……）",
  speaker: "内心独白",
  backgroundDescription: "company building entrance, morning, protagonist seeing familiar figure, opportunity dawning",
  choices: [
    { id: "1c_4a", text: "鼓起勇气，主动上前", sentiment: "bold" },
    { id: "1c_4b", text: "还是不敢，继续观察", sentiment: "shy" }
  ],
  isEnding: false
};

const SCENE_1C_4B_FIRST_MESSAGE: SceneData = {
  narrative: `【第四章C-2：第一条消息】
我鼓起勇气，给她发了条消息："你好，我是那天晚上的……我想为那天的事道歉。"

发送。

我盯着屏幕，心跳加速。她会回吗？她会骂我吗？还是直接拉黑我？

十分钟后，她回了："没事的，我理解。你还好吗？"

我愣住了。她不仅没有生气，还在关心我？

"我……还好。你呢？"我回复。

"我也还好。对了，你也在XX大厦上班吗？我好像见过你。"

我们开始聊天。从简单的问候，到工作，到生活，到那些不敢对别人说的话。`,
  dialogue: "\"要不，我们见个面？就当……交个朋友？\"",
  speaker: "琳",
  backgroundDescription: "phone chat interface, two people chatting, warm conversation, building connection",
  choices: [
    { id: "1c_4c", text: "\"好，什么时候方便？\"", sentiment: "bold" },
    { id: "1c_4d", text: "\"我……还是算了吧\"", sentiment: "shy" }
  ],
  isEnding: false
};

// 1C分支的第5层场景
const SCENE_1C_5A_FIRST_MEETING: SceneData = {
  narrative: `【第五章C-1：第一次见面】
我们约在公司楼下的咖啡店。我提前到了，选了个安静的角落。咖啡店的音乐很轻，是那种让人放松的爵士乐。

我点了两杯拿铁，然后开始等待。时间过得很慢，每一秒都像是在考验我的耐心。

她准时出现，穿着简单的白衬衫和牛仔裤，和我想象中的完全不一样。我想象中的她，应该是那种浓妆艳抹、穿着暴露的样子。但眼前的她，干净、简单，甚至有些朴素。

"你好。"她在我对面坐下，把包放在旁边的椅子上，"没想到我们真的会见面。"

"我也没想到。"我说，声音有点紧张，"我以为你会直接拉黑我。"

"为什么要拉黑？"她笑了，眼睛弯成月牙，"你又不是坏人，只是……有点胆小而已。"`,
  dialogue: "\"其实，我只是想要有人陪。\"",
  speaker: "我",
  backgroundDescription: "coffee shop, afternoon, two people meeting for first time, warm and understanding atmosphere",
  choices: [
    { id: "1c_5a", text: "继续深入聊下去", sentiment: "romantic" },
    { id: "1c_5b", text: "保持距离，只做朋友", sentiment: "neutral" }
  ],
  isEnding: false
};

// 1C分支的第6层场景
const SCENE_1C_6A_DEEP_TALK: SceneData = {
  narrative: `【第六章C-1：深入对话】
我们继续聊下去。从下午2点聊到傍晚6点，窗外的阳光从明亮变成金黄，再变成橘红，最后消失在城市的边缘。

她告诉我，她喜欢画画，喜欢看日落，喜欢在深夜听音乐。她告诉我，她画的第一幅画是给妈妈的生日礼物，那时候她还在上小学，画得很丑，但妈妈却把它裱起来，挂在客厅里。她最喜欢的日落是在海边看到的，那时候她刚失恋，一个人坐在沙滩上，看着太阳慢慢沉入海平面，眼泪和海水混在一起。

我也开始告诉她我的故事。我的工作，我的孤独，我的恐惧。那些我从未对任何人说过的话，在她面前，却变得那么容易说出口。

"你知道吗？"有一天她对我说，声音很轻，但很坚定，"你其实不是孤独，你只是太害怕了。害怕被拒绝，害怕被伤害，害怕暴露真实的自己。"`,
  dialogue: "\"也许，我们可以不只是朋友？\"",
  speaker: "我",
  backgroundDescription: "coffee shop evening, warm lighting, two people deep in conversation, growing intimacy",
  choices: [
    { id: "1c_6a", text: "\"我……也想。\"", sentiment: "romantic" },
    { id: "1c_6b", text: "\"我……还是有点害怕\"", sentiment: "shy" }
  ],
  isEnding: false
};

// 1C分支的第7层场景
const SCENE_1C_7A_RELATIONSHIP_GROW: SceneData = {
  narrative: `【第七章C-1：关系的发展】
从那天起，我们开始经常见面。有时候是咖啡店，有时候是公司食堂，有时候是下班后的散步。

公园里的路灯已经亮了，昏黄的光洒在我们身上，把影子拉得很长。我们并排走着，中间隔着一点距离，但那种距离让人感到安全，也让人感到温暖。

我慢慢了解到，她叫琳，是个设计师。她喜欢画画，喜欢看日落，喜欢在深夜听音乐。她也开始了解我。我的工作，我的孤独，我的恐惧。

"你知道吗？"有一天她对我说，声音很轻，但很坚定，"你其实不是懦弱，你只是太善良了。善良到不敢伤害任何人，包括自己。"

那一刻，我突然意识到，也许，我真的可以改变。`,
  dialogue: "\"也许，我们可以不只是朋友？\"",
  speaker: "琳",
  backgroundDescription: "evening walk in park, two people walking side by side, sunset colors, peaceful atmosphere",
  choices: [
    { id: "1c_7a", text: "\"我想……不只是朋友\"", sentiment: "romantic" },
    { id: "1c_7b", text: "\"好，朋友也很好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

// 1C分支的第8层场景
const SCENE_1C_8A_FINAL_CHOICE: SceneData = {
  narrative: `【第八章C-1：最终选择】
我握住了她的手。她的手很暖，很软，像是一团火，温暖了我冰冷的心。

她看着我，眼神很复杂。有惊讶，有感动，还有一丝我读不懂的东西。

"你知道吗？"她说，声音很轻，"我一直以为，我们只是朋友。但现在，我发现我错了。"

"什么意思？"我问。

"我也想要更多。"她说，脸红了，"不只是朋友，而是……"

她没有说完，但我明白了。那一刻，我突然觉得，也许，这700块钱，是我这辈子花得最值得的一笔钱。`,
  dialogue: "\"那我们……试试看？\"",
  speaker: "我",
  backgroundDescription: "park bench at night, two people holding hands, warm atmosphere, relationship defining moment",
  choices: [
    { id: "1c_8a", text: "\"好，我们试试看。\"", sentiment: "romantic" },
    { id: "1c_8b", text: "\"我……还是有点害怕\"", sentiment: "shy" }
  ],
  isEnding: false
};

// ============================================================================
// 结局场景（5个）
// ============================================================================

const ENDING_TRUE_LOVE: SceneData = {
  narrative: `【真爱结局：七百元的答案】
公园的长椅上，我把那一夜所有的恐惧、羞耻、自我怀疑全盘托出。每一个字都像是从心底挖出来的，带着血，带着痛。

"我逃跑不是因为嫌弃你，是因为我嫌弃我自己。我怕进了那扇门，就再也回不去了。"

琳安静地听完，眼眶红了。月光洒在她脸上，把眼泪照得闪闪发光。

"笨蛋。"她突然笑了，眼泪却掉了下来，"那天你跑掉的时候，我反而松了口气。因为我也是第一次接那种单，吓死了。"

"什么？"我愣住了。

"我那阵子家里出事，急需用钱。但真到了那一刻，我也不知道自己能不能做到……"她握住我的手，手心很暖，"所以谢谢你，那天没敲门。"

月光下，我们的手紧紧相握。那一刻，我突然觉得，也许，这700块钱，是我这辈子花得最值得的一笔钱。

"那这700块……"

"就当我们的定情信物吧。"她笑着说，眼泪还在掉，"不过下次约会，你得请我吃好一点的。"`,
  dialogue: "\"我们回家吧。\"",
  speaker: "琳",
  backgroundDescription: "park bench under moonlight, warm embrace, romantic ending, cherry blossoms",
  choices: [],
  isEnding: true,
  endingType: "good"
};

const ENDING_FRIEND: SceneData = {
  narrative: `【挚友结局：最好的距离】
"我明白了。"琳点点头，声音很轻，"那天的事，我们都当它没发生过吧。"

"真的可以吗？"我问，声音里带着一丝不确定。

"为什么不可以？"她笑得很轻松，但眼神很认真，"人生那么长，谁没有几件想忘记的事呢。"

后来，我们成了很好的同事，很好的朋友。偶尔一起加班，一起吐槽公司的奇葩客户，一起在深夜的便利店买打折便当。

那700块钱，最后变成了我们的梗——每次我请客，她都会说："行啊，反正你还欠我700。"然后我们就会笑，笑得很大声，像是要把所有的尴尬和羞耻都笑掉。

有些关系，不是爱情，却同样珍贵。就像那700块钱，买来的不是交易，而是一段真正的友谊。`,
  dialogue: "\"下次一起吃饭，你请客。\"",
  speaker: "琳",
  backgroundDescription: "office rooftop at sunset, two friends laughing, warm friendship ending",
  choices: [],
  isEnding: true,
  endingType: "neutral"
};

const ENDING_REGRET: SceneData = {
  narrative: `【遗憾结局：错过】
"对不起，我不能接受这样的开始。"琳站起身，眼神里是深深的失望。那种失望，比愤怒更让人难受。

"我本来以为……算了，不重要了。"她的声音很轻，但每个字都像是刀子，割在我心上。

她转身离开，背影消失在夜色里。我想追上去，但腿像灌了铅一样沉重。我只能站在原地，看着她走远，直到再也看不见。

后来我换了工作，离开了那栋楼。听说她也跳槽去了外地。

那700块钱，成了我心里永远的刺。每次路过那家酒店，我都会想：如果那天我更勇敢一点，如果我更早说出真相……

但人生没有如果。

我们错过了。就像两条平行线，永远不会有交集。`,
  dialogue: "（再见了……）",
  speaker: "内心独白",
  backgroundDescription: "empty street at night, lonely figure, cold blue tones, melancholic ending",
  choices: [],
  isEnding: true,
  endingType: "bad"
};

const ENDING_REDEMPTION: SceneData = {
  narrative: `【救赎结局：重新开始】
"我不能说我完全原谅你。"琳看着我，眼神很认真，"但我理解你当时的感受。"

"我……"我想说什么，但话到嘴边又咽了回去。

"嘘。"她伸出手指抵住我的嘴唇，动作很轻，但很坚定，"过去的事就让它过去吧。如果你真的想补偿我，那就……"

"请我吃一个月的早餐，怎么样？"她笑了，那笑容很轻，但很真实，"不许迟到，不许偷懒。"

"成交！"我说，声音比我想象的要坚定。

从那天起，每天早上7点，我们会在便利店门口碰面。她喝豆浆配包子，我喝咖啡配三明治。有时候我们会聊几句，有时候只是安静地坐着，看着窗外的阳光慢慢亮起来。

一个月后，她说："早餐可以停了，但晚餐得继续。"

我说："那就一辈子吧。"

她脸红了，但没说话，只是点了点头。`,
  dialogue: "\"笨蛋，谁说要一辈子了……\"",
  speaker: "琳（脸红）",
  backgroundDescription: "morning convenience store, two people having breakfast, warm sunlight, hopeful ending",
  choices: [],
  isEnding: true,
  endingType: "good"
};

const ENDING_STRANGER: SceneData = {
  narrative: `【陌路结局：平行线】
我选择了沉默。她也没有再问。

从那天起，我们偶尔还会在电梯里遇到，在食堂擦肩而过。我们会点头，会说"你好"，但仅此而已。就像两条平行线，永远不会有交集。

她交了男朋友，听说是另一个部门的主管。我在交友软件上划来划去，却再也找不到能让我心动的人。

那700块钱，最终什么都没有买到。没有陪伴，没有理解，没有改变。什么都没有。

我们成了最熟悉的陌生人。有时候我会想，如果那天我敲门了，现在会是什么样子？但人生没有如果。

就这样吧。`,
  dialogue: "（就这样吧……）",
  speaker: "内心独白",
  backgroundDescription: "crowded elevator, two people standing far apart, cold atmosphere, neutral ending",
  choices: [],
  isEnding: true,
  endingType: "neutral"
};

// ============================================================================
// 状态机逻辑
// ============================================================================

export class LLMService {
  private state: PlayerState = {
    affection: 0,
    courage: 0,
    honesty: 0,
    path: [],
    depth: 0,
    stage: 0,
    branch: 'main',
    hasConfessed: false,
    specialEvents: [],
    relationshipType: 'stranger'
  };

  async startNewGame(): Promise<SceneData> {
    this.state = {
      affection: 0,
      courage: 0,
      honesty: 0,
      path: [],
      depth: 0,
      stage: 0,
      branch: 'main',
      hasConfessed: false,
      specialEvents: [],
      relationshipType: 'stranger'
    };
    return SCENE_0_PROLOGUE;
  }

  async nextTurn(history: any[], choiceId: string): Promise<SceneData> {
    await new Promise(resolve => setTimeout(resolve, 800));

    // 记录选择路径
    this.state.path.push(choiceId);
    this.state.depth++;

    // 根据选择更新状态
    this.updateState(choiceId);

    // 根据路径决定下一个场景（树状匹配）
    return this.getNextSceneByPath();
  }

  // 传入完整 Choice 对象的重载方法
  async nextTurnWithChoice(history: any[], choice: Choice): Promise<SceneData> {
    return this.nextTurn(history, choice.id);
  }

  private updateState(choiceId: string): void {
    // 序章选择 - 所有选择都是逃跑，只是方式不同
    if (choiceId === "p1") {
      // 直接跑：最懦弱
      this.state.courage -= 2;
      this.state.honesty -= 1;
    } else if (choiceId === "p2") {
      // 发消息：有诚意
      this.state.honesty += 3;
      this.state.affection += 2;
    } else if (choiceId === "p3") {
      // 犹豫很久：内疚但没行动
      this.state.honesty += 1;
      this.state.affection -= 1;
    }

    // 1A分支后续选择
    if (choiceId === "1a_2") {
      this.state.courage -= 1;
      this.state.affection -= 1;
      this.state.specialEvents.push('1a_deep_work');
    } else if (choiceId === "1a_3") {
      this.state.courage += 1;
      this.state.specialEvents.push('1a_try_change');
    } else if (choiceId === "1a_2a") {
      this.state.courage -= 2;
      this.state.affection -= 2;
    } else if (choiceId === "1a_2b") {
      this.state.courage += 2;
      this.state.specialEvents.push('1a_try_change');
    } else if (choiceId === "1a_3a") {
      this.state.courage += 3;
      this.state.affection += 2;
      this.state.specialEvents.push('1a_confront');
    } else if (choiceId === "1a_3b") {
      this.state.courage -= 1;
    } else if (choiceId === "1a_4") {
      this.state.courage += 3;
      this.state.affection += 2;
      this.state.specialEvents.push('1a_confront');
    } else if (choiceId === "1a_5") {
      this.state.courage -= 1;
      this.state.specialEvents.push('1a_observe');
    } else if (choiceId === "1a_6") {
      this.state.courage += 2;
      this.state.affection += 3;
      this.state.specialEvents.push('1a_first_meet');
    } else if (choiceId === "1a_7") {
      this.state.courage -= 1;
      this.state.affection -= 1;
    } else if (choiceId === "1a_6a") {
      this.state.affection += 3;
      this.state.courage += 2;
      this.state.specialEvents.push('1a_building_trust');
    } else if (choiceId === "1a_6b") {
      this.state.affection += 1;
      this.state.courage -= 1;
    } else if (choiceId === "1a_6c") {
      this.state.affection += 4;
      this.state.courage += 3;
      this.state.relationshipType = 'romantic';
    } else if (choiceId === "1a_6d") {
      this.state.affection += 2;
      this.state.relationshipType = 'friend';
    } else if (choiceId === "1a_7a") {
      this.state.affection += 4;
      this.state.courage += 3;
      this.state.relationshipType = 'romantic';
    } else if (choiceId === "1a_7b") {
      this.state.affection += 2;
      this.state.relationshipType = 'friend';
    } else if (choiceId === "1a_7c") {
      this.state.courage += 2;
      this.state.honesty += 2;
      this.state.affection += 1;
    } else if (choiceId === "1a_7d") {
      this.state.courage -= 3;
      this.state.affection -= 3;
    } else if (choiceId === "1a_8a") {
      this.state.affection += 3;
      this.state.courage += 2;
      this.state.relationshipType = 'romantic';
    } else if (choiceId === "1a_8b") {
      this.state.affection += 1;
      this.state.relationshipType = 'friend';
    } else if (choiceId === "1a_8c") {
      this.state.affection -= 2;
      this.state.relationshipType = 'stranger';
    } else if (choiceId === "1a_8") {
      this.state.courage += 1;
      this.state.affection += 1;
      this.state.specialEvents.push('1a_elevator_talk');
    } else if (choiceId === "1a_9") {
      this.state.courage -= 2;
      this.state.affection -= 2;
      this.state.specialEvents.push('1a_stalking');
    } else if (choiceId === "1a_8a") {
      this.state.courage += 2;
      this.state.affection += 2;
      this.state.specialEvents.push('normal_meet');
    } else if (choiceId === "1a_8b") {
      this.state.courage -= 1;
    } else if (choiceId === "1a_9a") {
      this.state.courage += 2;
      this.state.honesty += 2;
      this.state.affection += 1;
    } else if (choiceId === "1a_9b") {
      this.state.courage -= 3;
      this.state.affection -= 3;
    }

    // 1B分支（发消息后的回复）
    if (choiceId === "1b_1") {
      this.state.branch = 'cold';
      this.state.affection -= 3;
      this.state.specialEvents.push('1b_1');
    } else if (choiceId === "1b_2") {
      this.state.honesty += 2;
      this.state.affection += 2;
      this.state.specialEvents.push('1b_2');
    } else if (choiceId === "1b_3") {
      this.state.courage += 3;
      this.state.affection += 3;
      this.state.specialEvents.push('coffee_date');
    }

    // 1B分支后续选择
    if (choiceId === "1b_1a") {
      this.state.courage += 2;
      this.state.honesty += 2;
      this.state.affection += 1;
      this.state.specialEvents.push('1b_apology');
    } else if (choiceId === "1b_1b") {
      this.state.courage -= 2;
      this.state.affection -= 2;
      this.state.specialEvents.push('1b_regret');
    } else if (choiceId === "1b_1aa") {
      this.state.courage += 3;
      this.state.affection += 2;
      this.state.specialEvents.push('1b_apology');
    } else if (choiceId === "1b_1ab") {
      this.state.courage -= 1;
    } else if (choiceId === "1b_1ac") {
      this.state.courage += 2;
      this.state.affection += 3;
      this.state.specialEvents.push('normal_meet');
    } else if (choiceId === "1b_1ad") {
      this.state.courage -= 1;
      this.state.affection -= 1;
    } else if (choiceId === "1b_2a") {
      this.state.courage += 2;
      this.state.affection += 2;
      this.state.specialEvents.push('1b_plan_meet');
    } else if (choiceId === "1b_2b") {
      this.state.courage -= 1;
      this.state.affection -= 1;
      this.state.specialEvents.push('1b_deep_chat');
    } else if (choiceId === "1b_2aa") {
      this.state.affection += 3;
      this.state.courage += 2;
      this.state.relationshipType = 'romantic';
    } else if (choiceId === "1b_2ab") {
      this.state.affection += 2;
      this.state.relationshipType = 'friend';
    } else if (choiceId === "1b_2ac") {
      this.state.honesty += 2;
      this.state.affection += 2;
      this.state.specialEvents.push('coffee_talk');
    } else if (choiceId === "1b_2ad") {
      this.state.affection += 1;
    } else if (choiceId === "1b_3a") {
      this.state.honesty += 2;
      this.state.affection += 2;
      this.state.specialEvents.push('coffee_talk');
    } else if (choiceId === "1b_3b") {
      this.state.affection += 1;
    } else if (choiceId === "1b_3c") {
      this.state.affection += 3;
      this.state.courage += 2;
      this.state.specialEvents.push('1b_regular_meet');
    } else if (choiceId === "1b_3d") {
      this.state.affection += 1;
      this.state.courage -= 1;
    } else if (choiceId === "1b_3ca") {
      this.state.affection += 4;
      this.state.courage += 3;
      this.state.relationshipType = 'romantic';
    } else if (choiceId === "1b_3cb") {
      this.state.affection += 2;
      this.state.relationshipType = 'friend';
    } else if (choiceId === "1b_7a") {
      this.state.affection += 4;
      this.state.courage += 3;
      this.state.relationshipType = 'romantic';
    } else if (choiceId === "1b_7b") {
      this.state.affection += 2;
      this.state.relationshipType = 'friend';
    } else if (choiceId === "1b_8a") {
      this.state.affection += 5;
      this.state.courage += 3;
      this.state.relationshipType = 'romantic';
    } else if (choiceId === "1b_8b") {
      this.state.affection += 2;
      this.state.relationshipType = 'friend';
    }

    // 1C分支后续选择
    if (choiceId === "1c_2") {
      this.state.courage += 2;
      this.state.honesty += 2;
      this.state.specialEvents.push('1c_first_message');
    } else if (choiceId === "1c_3") {
      this.state.courage -= 1;
      this.state.specialEvents.push('1c_stalking');
    } else if (choiceId === "1c_2a") {
      this.state.courage += 2;
      this.state.affection += 2;
      this.state.specialEvents.push('normal_meet');
    } else if (choiceId === "1c_2b") {
      this.state.courage -= 1;
      this.state.affection -= 1;
    } else if (choiceId === "1c_3a") {
      this.state.courage += 3;
      this.state.affection += 2;
      this.state.specialEvents.push('1b_apology');
    } else if (choiceId === "1c_3b") {
      this.state.courage -= 1;
    } else if (choiceId === "1c_4") {
      this.state.courage += 2;
      this.state.affection += 2;
      this.state.specialEvents.push('normal_meet');
    } else if (choiceId === "1c_5") {
      this.state.courage -= 1;
      this.state.affection -= 1;
    } else if (choiceId === "1c_6") {
      this.state.affection += 3;
      this.state.courage += 2;
      this.state.specialEvents.push('1c_deep_conversation');
    } else if (choiceId === "1c_7") {
      this.state.affection += 1;
      this.state.specialEvents.push('1c_friendship');
    } else if (choiceId === "1c_6a") {
      this.state.affection += 4;
      this.state.courage += 3;
      this.state.relationshipType = 'romantic';
    } else if (choiceId === "1c_6b") {
      this.state.affection += 2;
      this.state.relationshipType = 'friend';
    } else if (choiceId === "1c_7a") {
      this.state.affection += 4;
      this.state.courage += 3;
      this.state.relationshipType = 'romantic';
    } else if (choiceId === "1c_7b") {
      this.state.affection += 2;
      this.state.relationshipType = 'friend';
    } else if (choiceId === "1c_8a") {
      this.state.affection += 5;
      this.state.courage += 3;
      this.state.relationshipType = 'romantic';
    } else if (choiceId === "1c_8b") {
      this.state.affection += 2;
      this.state.relationshipType = 'friend';
    }

    // 重逢场景选择
    if (choiceId === "2_1") {
      this.state.affection += 1;
    } else if (choiceId === "2_2") {
      this.state.courage += 3;
      this.state.honesty += 3;
      this.state.hasConfessed = true;
    } else if (choiceId === "2_3") {
      this.state.affection -= 2;
      this.state.relationshipType = 'stranger';
    }

    // 午餐场景选择
    if (choiceId === "3_1") {
      this.state.affection += 2;
      this.state.relationshipType = 'romantic';
    } else if (choiceId === "3_2") {
      this.state.affection -= 1;
      this.state.relationshipType = 'stranger';
    } else if (choiceId === "3_3") {
      this.state.honesty += 3;
      this.state.courage += 2;
      this.state.affection += 2;
      this.state.hasConfessed = true;
    }

  }

  // 基于路径的树状分支匹配系统
  private getNextSceneByPath(): SceneData {
    const path = this.state.path;
    const depth = this.state.depth;

    // 第0层：序章
    if (depth === 0) {
      return SCENE_0_PROLOGUE;
    }

    // 第1层：根据序章选择进入不同分支
    if (depth === 1) {
      if (path[0] === 'p1') return SCENE_1A_PANIC;
      if (path[0] === 'p2') return SCENE_1B_MESSAGE;
      if (path[0] === 'p3') return SCENE_1C_HESITATE;
    }

    // 使用路径匹配来决定场景（树状结构）
    return this.matchSceneByPath(path, depth);
  }

  // 路径匹配函数 - 根据完整路径决定场景
  private matchSceneByPath(path: string[], depth: number): SceneData {
    // 构建路径字符串用于匹配
    const pathStr = path.join('->');

    // ========== 1A分支树（p1路径）==========
    if (path[0] === 'p1') {
      return this.match1ABranch(path, depth);
    }

    // ========== 1B分支树（p2路径）==========
    if (path[0] === 'p2') {
      return this.match1BBranch(path, depth);
    }

    // ========== 1C分支树（p3路径）==========
    if (path[0] === 'p3') {
      return this.match1CBranch(path, depth);
    }

    // 默认：如果路径不匹配，返回结局
    if (depth >= 8) {
      return this.getEnding();
    }

    return SCENE_0_PROLOGUE;
  }

  // 1A分支树匹配 - 完整的8-9层树状结构
  private match1ABranch(path: string[], depth: number): SceneData {
    const pathStr = path.join('->');
    const lastChoice = path[path.length - 1];

    // 第2层
    if (depth === 2) {
      if (path[1] === '1a_1') return SCENE_1A_LIFE;
    }

    // 第3层 - 根据1A_LIFE的选择分支
    if (depth === 3) {
      if (lastChoice === '1a_2') return SCENE_1A_DEEP_WORK;
      if (lastChoice === '1a_3') return SCENE_1A_TRY_CHANGE;
    }

    // 第4层 - 深度分支
    if (depth === 4) {
      if (lastChoice === '1a_2a') return SCENE_1A_4A_WORK_COLLAPSE;
      if (lastChoice === '1a_2b') return SCENE_1A_4B_TRY_SOCIAL;
      if (lastChoice === '1a_3a') return SCENE_1A_STRUGGLE;
      if (lastChoice === '1a_3b') return SCENE_1A_OBSERVE;
      if (lastChoice === '1a_4') return SCENE_1A_CONFRONT;
      if (lastChoice === '1a_5') return SCENE_1A_OBSERVE;
    }

    // 第5层
    if (depth === 5) {
      if (lastChoice === '1a_4a') return SCENE_1A_5A_COLLAPSE_HOSPITAL; // 崩溃路线
      if (lastChoice === '1a_4b') return SCENE_1A_5B_SOCIAL_ATTEMPT; // 尝试社交路线
      if (lastChoice === '1a_4c') return SCENE_1A_5A_CAFETERIA_TALK;
      if (lastChoice === '1a_4d') return SCENE_1A_5B_AVOID_AGAIN;
      if (lastChoice === '1a_6') return SCENE_1A_FIRST_MEET;
      if (lastChoice === '1a_7') return SCENE_1A_5B_AVOID_AGAIN;
      if (lastChoice === '1a_8') return SCENE_1A_ELEVATOR_TALK;
      if (lastChoice === '1a_9') return SCENE_1A_STALKING;
    }

    // 第6层
    if (depth === 6) {
      if (lastChoice === '1a_5aa') return SCENE_1A_6A_COFFEE_DEEP; // 出院后改变
      if (lastChoice === '1a_5ab') return SCENE_1A_8B_FINAL_ESCAPE; // 继续逃避
      if (lastChoice === '1a_5ba') return SCENE_1A_5A_CAFETERIA_TALK; // 社交尝试成功
      if (lastChoice === '1a_5bb') return SCENE_1A_5B_AVOID_AGAIN; // 社交尝试失败
      if (lastChoice === '1a_5a') return SCENE_1A_6A_COFFEE_DEEP;
      if (lastChoice === '1a_5b') return SCENE_1A_6B_ELEVATOR_CONTINUE;
      if (lastChoice === '1a_5c') return SCENE_1A_6B_ELEVATOR_CONTINUE;
      if (lastChoice === '1a_5d') return SCENE_1A_STALKING;
      if (lastChoice === '1a_6a') return SCENE_1A_BUILDING_TRUST;
      if (lastChoice === '1a_6b') return SCENE_1A_BUILDING_TRUST;
      if (lastChoice === '1a_6c') return SCENE_1A_7A_RELATIONSHIP_GROW;
      if (lastChoice === '1a_6d') return SCENE_1A_7B_STALKING_DISCOVERED;
      if (lastChoice === '1a_8a') return SCENE_1A_6B_ELEVATOR_CONTINUE;
      if (lastChoice === '1a_8b') return SCENE_1A_STALKING;
      if (lastChoice === '1a_9a') return SCENE_1A_8A_CONFESSION;
      if (lastChoice === '1a_9b') return SCENE_1A_8B_FINAL_ESCAPE;
    }

    // 第7层
    if (depth === 7) {
      if (lastChoice === '1a_6a' || lastChoice === '1a_6b') return SCENE_1A_7A_RELATIONSHIP_GROW;
      if (lastChoice === '1a_6c' || lastChoice === '1a_6d') return SCENE_1A_7A_RELATIONSHIP_GROW;
      if (lastChoice === '1a_7a') return SCENE_1A_8A_CONFESSION;
      if (lastChoice === '1a_7b') return SCENE_1A_8A_CONFESSION;
      if (lastChoice === '1a_7c') return SCENE_1A_8A_CONFESSION;
      if (lastChoice === '1a_7d') return SCENE_1A_8B_FINAL_ESCAPE;
    }

    // 第8层 - 接近结局
    if (depth === 8) {
      if (lastChoice === '1a_8a') {
        // 根据关系类型决定结局
        if (this.state.relationshipType === 'romantic') return ENDING_TRUE_LOVE;
        if (this.state.relationshipType === 'friend') return ENDING_FRIEND;
        return ENDING_REDEMPTION;
      }
      if (lastChoice === '1a_8b') return ENDING_REGRET;
      if (lastChoice === '1a_8c') return ENDING_STRANGER;
    }

    // 第9层 - 最终结局
    if (depth >= 9) {
      return this.getEnding();
    }

    // 如果路径不匹配，尝试通用匹配
    return this.getDefaultNextScene(path, depth);
  }

  // 1B分支树匹配 - 完整的8-9层树状结构
  private match1BBranch(path: string[], depth: number): SceneData {
    const pathStr = path.join('->');

    // 第2层
    if (depth === 2) {
      if (path[1] === '1b_1') return SCENE_1B_DELETED;
      if (path[1] === '1b_2') return SCENE_1B_CHAT;
      if (path[1] === '1b_3') return SCENE_1B_COFFEE;
    }

    // 第3层
    if (depth === 3) {
      if (pathStr.includes('1b_1a')) return SCENE_1B_APOLOGY;
      if (pathStr.includes('1b_1b')) return SCENE_1B_REGRET;
      if (pathStr.includes('1b_2a')) return SCENE_1B_PLAN_MEET;
      if (pathStr.includes('1b_2b')) return SCENE_1B_DEEP_CHAT;
      if (pathStr.includes('1b_3a')) return SCENE_1B_COFFEE_TALK;
      if (pathStr.includes('1b_3b')) return SCENE_2_REUNION;
    }

    // 第4层
    if (depth === 4) {
      if (pathStr.includes('1b_1aa')) return SCENE_1B_4A_DELETED_REGRET;
      if (pathStr.includes('1b_1ab')) return SCENE_1B_4A_DELETED_REGRET;
      if (pathStr.includes('1b_1ac')) return SCENE_2_REUNION;
      if (pathStr.includes('1b_1ad')) return SCENE_1B_4A_DELETED_REGRET;
      if (pathStr.includes('1b_2aa')) return SCENE_1B_5A_MEET_PLAN;
      if (pathStr.includes('1b_2ab')) return SCENE_1B_4B_CHAT_DEEPEN;
      if (pathStr.includes('1b_2ac')) return SCENE_1B_6A_COFFEE_CONVERSATION;
      if (pathStr.includes('1b_2ad')) return SCENE_2_REUNION;
      if (pathStr.includes('1b_3c')) return SCENE_1B_REGULAR_MEET;
      if (pathStr.includes('1b_3d')) return SCENE_2_REUNION;
    }

    // 第5层
    if (depth === 5) {
      if (pathStr.includes('1b_4a')) return SCENE_1B_APOLOGY;
      if (pathStr.includes('1b_4b')) return SCENE_1B_4A_DELETED_REGRET;
      if (pathStr.includes('1b_4c')) return SCENE_1B_5A_MEET_PLAN;
      if (pathStr.includes('1b_4d')) return SCENE_1B_4B_CHAT_DEEPEN;
      if (pathStr.includes('1b_5a')) return SCENE_1B_6A_COFFEE_CONVERSATION;
      if (pathStr.includes('1b_5b')) return SCENE_1B_6A_COFFEE_CONVERSATION;
    }

    // 第6层
    if (depth === 6) {
      if (pathStr.includes('1b_6a')) return SCENE_1B_7A_REGULAR_MEETINGS;
      if (pathStr.includes('1b_6b')) return SCENE_1B_7A_REGULAR_MEETINGS;
    }

    // 第7层
    if (depth === 7) {
      if (pathStr.includes('1b_7a')) return SCENE_1B_8A_RELATIONSHIP_DEFINE;
      if (pathStr.includes('1b_7b')) return SCENE_1B_8A_RELATIONSHIP_DEFINE;
    }

    // 第8层 - 接近结局
    if (depth === 8) {
      if (pathStr.includes('1b_8a')) {
        if (this.state.relationshipType === 'romantic') return ENDING_TRUE_LOVE;
        return ENDING_REDEMPTION;
      }
      if (pathStr.includes('1b_8b')) return ENDING_FRIEND;
    }

    // 第9层 - 最终结局
    if (depth >= 9) {
      return this.getEnding();
    }

    return this.getDefaultNextScene(path, depth);
  }

  // 1C分支树匹配 - 完整的8-9层树状结构
  private match1CBranch(path: string[], depth: number): SceneData {
    const pathStr = path.join('->');

    // 第2层
    if (depth === 2) {
      if (path[1] === '1c_1') return SCENE_1C_GUILT;
    }

    // 第3层
    if (depth === 3) {
      if (pathStr.includes('1c_2')) return SCENE_1C_FIRST_MESSAGE;
      if (pathStr.includes('1c_3')) return SCENE_1C_STALKING;
    }

    // 第4层
    if (depth === 4) {
      if (pathStr.includes('1c_2a')) return SCENE_1C_MEETING;
      if (pathStr.includes('1c_2b')) return SCENE_1C_4A_GUILT_OBSERVE;
      if (pathStr.includes('1c_3a')) return SCENE_1B_APOLOGY;
      if (pathStr.includes('1c_3b')) return SCENE_1C_4A_GUILT_OBSERVE;
      if (pathStr.includes('1c_4')) return SCENE_1C_MEETING;
      if (pathStr.includes('1c_5')) return SCENE_1C_4A_GUILT_OBSERVE;
    }

    // 第5层
    if (depth === 5) {
      if (pathStr.includes('1c_4c')) return SCENE_1C_5A_FIRST_MEETING;
      if (pathStr.includes('1c_4d')) return SCENE_1C_4B_FIRST_MESSAGE;
      if (pathStr.includes('1c_5a')) return SCENE_1C_6A_DEEP_TALK;
      if (pathStr.includes('1c_5b')) return SCENE_1C_FRIENDSHIP;
    }

    // 第6层
    if (depth === 6) {
      if (pathStr.includes('1c_6a')) return SCENE_1C_7A_RELATIONSHIP_GROW;
      if (pathStr.includes('1c_6b')) return SCENE_1C_7A_RELATIONSHIP_GROW;
    }

    // 第7层
    if (depth === 7) {
      if (pathStr.includes('1c_7a')) return SCENE_1C_8A_FINAL_CHOICE;
      if (pathStr.includes('1c_7b')) return SCENE_1C_8A_FINAL_CHOICE;
    }

    // 第8层 - 接近结局
    if (depth === 8) {
      if (pathStr.includes('1c_8a')) {
        if (this.state.relationshipType === 'romantic') return ENDING_TRUE_LOVE;
        return ENDING_REDEMPTION;
      }
      if (pathStr.includes('1c_8b')) return ENDING_FRIEND;
    }

    // 第9层 - 最终结局
    if (depth >= 9) {
      return this.getEnding();
    }

    return this.getDefaultNextScene(path, depth);
  }

  // 根据路径获取场景（辅助函数）
  private getSceneByPath(choiceId: string, depth: number): SceneData {
    // 这里可以根据choiceId返回对应的场景
    // 暂时返回默认场景
    return this.getDefaultNextScene([choiceId], depth);
  }

  // 获取默认下一个场景（向后兼容）
  private getDefaultNextScene(path: string[], depth: number): SceneData {
    // 如果深度足够，进入结局
    if (depth >= 8) {
      return this.getEnding();
    }

    // 否则返回通用场景
    return SCENE_2_REUNION;
  }

  // 旧的getNextScene方法（保留用于向后兼容）
  private getNextScene(): SceneData {
    const stage = this.state.stage;
    const branch = this.state.branch;

    // 序章后分支（三种不同的逃跑方式）
    if (stage === 1) {
      if (branch === 'cold') return SCENE_1A_PANIC;
      if (branch === 'friend') return SCENE_1B_MESSAGE;
      return SCENE_1C_HESITATE; // main 分支
    }

    // ========== 1A分支（cold路线）==========
    if (branch === 'cold') {
      if (stage === 2) {
        if (this.state.specialEvents.includes('1a_deep_work')) {
          return SCENE_1A_DEEP_WORK;
        } else if (this.state.specialEvents.includes('1a_try_change')) {
          return SCENE_1A_TRY_CHANGE;
        }
        return SCENE_1A_LIFE;
      }
      if (stage === 3) {
        if (this.state.specialEvents.includes('1a_try_change')) {
          return SCENE_1A_STRUGGLE;
        }
        return SCENE_1A_STRUGGLE;
      }
      if (stage === 4) {
        // 根据1A_STRUGGLE的选择决定
        if (this.state.specialEvents.includes('1a_confront')) {
          return SCENE_1A_CONFRONT;
        } else if (this.state.specialEvents.includes('1a_observe')) {
          return SCENE_1A_OBSERVE;
        }
        return SCENE_2_REUNION; // 默认汇合
      }
      if (stage === 5) {
        if (this.state.specialEvents.includes('1a_first_meet')) {
          return SCENE_1A_FIRST_MEET;
        } else if (this.state.specialEvents.includes('1a_elevator_talk')) {
          return SCENE_1A_ELEVATOR_TALK;
        } else if (this.state.specialEvents.includes('1a_stalking')) {
          return SCENE_1A_STALKING;
        }
        if (this.state.specialEvents.includes('normal_meet')) {
      return SCENE_3_LUNCH;
        }
        return SCENE_2_REUNION;
      }
      if (stage === 6) {
        if (this.state.specialEvents.includes('1a_building_trust')) {
          return SCENE_1A_BUILDING_TRUST;
        }
        if (!this.state.specialEvents.includes('had_lunch')) {
          this.state.specialEvents.push('had_lunch');
          return SCENE_3_LUNCH;
        }
        return SCENE_2_REUNION;
      }
      if (stage === 7) {
        if (!this.state.specialEvents.includes('had_lunch')) {
          this.state.specialEvents.push('had_lunch');
          return SCENE_3_LUNCH;
        }
        return this.getEnding();
      }
      if (stage >= 8) return this.getEnding();
    }

    // ========== 1B分支（friend路线）==========
    if (branch === 'friend') {
    if (stage === 2) {
        // 根据1B的选择决定下一步
        if (this.state.specialEvents.includes('1b_1')) {
          return SCENE_1B_DELETED;
        } else if (this.state.specialEvents.includes('1b_2')) {
          return SCENE_1B_CHAT;
        } else if (this.state.specialEvents.includes('coffee_date')) {
          return SCENE_1B_COFFEE;
        }
      }
      if (stage === 3) {
        if (this.state.specialEvents.includes('1b_regret')) {
          return SCENE_1B_REGRET;
        } else if (this.state.specialEvents.includes('1b_apology')) {
          return SCENE_1B_APOLOGY;
        } else if (this.state.specialEvents.includes('1b_deep_chat')) {
          return SCENE_1B_DEEP_CHAT;
        } else if (this.state.specialEvents.includes('1b_plan_meet')) {
          return SCENE_1B_PLAN_MEET;
        } else if (this.state.specialEvents.includes('coffee_talk')) {
          return SCENE_1B_COFFEE_TALK;
        }
      return SCENE_2_REUNION;
      }
      if (stage === 4) {
        if (this.state.specialEvents.includes('1b_regular_meet')) {
          return SCENE_1B_REGULAR_MEET;
        }
        if (this.state.specialEvents.includes('normal_meet')) {
          return SCENE_3_LUNCH;
        }
        if (!this.state.specialEvents.includes('had_lunch')) {
          this.state.specialEvents.push('had_lunch');
          return SCENE_3_LUNCH;
        }
        return SCENE_2_REUNION;
      }
      if (stage === 5) {
        if (!this.state.specialEvents.includes('had_lunch')) {
          this.state.specialEvents.push('had_lunch');
          return SCENE_3_LUNCH;
        }
        return this.getEnding();
      }
      if (stage >= 6) return this.getEnding();
    }

    // ========== 1C分支（main路线）==========
    if (branch === 'main') {
      if (stage === 2) return SCENE_1C_GUILT;
    if (stage === 3) {
        if (this.state.specialEvents.includes('1c_first_message')) {
          return SCENE_1C_FIRST_MESSAGE;
        } else if (this.state.specialEvents.includes('1c_stalking')) {
          return SCENE_1C_STALKING;
        }
        return SCENE_1C_GUILT;
      }
      if (stage === 4) {
        if (this.state.specialEvents.includes('normal_meet')) {
          return SCENE_1C_MEETING;
        } else if (this.state.specialEvents.includes('1b_apology')) {
          return SCENE_1B_APOLOGY;
        }
        return SCENE_2_REUNION;
      }
      if (stage === 5) {
        if (this.state.specialEvents.includes('1c_deep_conversation')) {
          return SCENE_1C_DEEP_CONVERSATION;
        } else if (this.state.specialEvents.includes('1c_friendship')) {
          return SCENE_1C_FRIENDSHIP;
        }
        if (!this.state.specialEvents.includes('had_lunch')) {
          this.state.specialEvents.push('had_lunch');
      return SCENE_3_LUNCH;
        }
        return SCENE_2_REUNION;
      }
      if (stage === 6) {
        if (!this.state.specialEvents.includes('had_lunch')) {
          this.state.specialEvents.push('had_lunch');
          return SCENE_3_LUNCH;
        }
        return this.getEnding();
      }
      if (stage >= 7) return this.getEnding();
    }

    // ========== 通用汇合场景 ==========
    // 如果还没到重逢场景
    if (stage === 2 && !branch) {
      return SCENE_2_REUNION;
    }

    // 如果还没到午餐场景
    if (stage === 3 || stage === 4) {
      if (!this.state.specialEvents.includes('had_lunch') && 
          !this.state.specialEvents.includes('coffee_date') && 
          !this.state.specialEvents.includes('normal_meet')) {
        return SCENE_2_REUNION;
      }
      if (!this.state.specialEvents.includes('had_lunch')) {
        this.state.specialEvents.push('had_lunch');
        return SCENE_3_LUNCH;
      }
    }

    // 结局判定
    if (stage >= 4) {
      return this.getEnding();
    }

    return SCENE_0_PROLOGUE;
  }

  private getEnding(): SceneData {
    const { affection, honesty, courage, hasConfessed, branch } = this.state;

    // 真爱结局：高好感 + 高诚实 + 坦白过
    if (affection >= 6 && honesty >= 5 && hasConfessed) {
      return ENDING_TRUE_LOVE;
    }

    // 救赎结局：中好感 + 高诚实
    if (affection >= 3 && honesty >= 6) {
      return ENDING_REDEMPTION;
    }

    // 挚友结局：中好感 + 友谊分支
    if (affection >= 2 && branch === 'friend') {
      return ENDING_FRIEND;
    }

    // 陌路结局：低好感
    if (affection < 0 || branch === 'cold') {
      return ENDING_STRANGER;
    }

    // 遗憾结局：默认
    return ENDING_REGRET;
  }

  // 调试用：获取当前状态
  getState(): PlayerState {
    return { ...this.state };
  }
}

export const llmService = new LLMService();