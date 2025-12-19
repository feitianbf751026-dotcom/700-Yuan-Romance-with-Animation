import { SceneData } from "../../types";

// ============================================================================
// branch1B 场景
// ============================================================================

export const SCENE_1B_MESSAGE: SceneData = {
  narrative: `我的手指在屏幕上打字，删了又写，写了又删。走廊里的感应灯灭了，我站在黑暗中，只有手机屏幕的光照亮我的脸。

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

export const SCENE_1B_DELETED: SceneData = {
  narrative: `我删除了她的好友。那一刻，我松了一口气，但心里却空落落的。

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

export const SCENE_1B_REGRET: SceneData = {
  narrative: `我删除了她，但后悔很快就来了。

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

export const SCENE_1B_APOLOGY: SceneData = {
  narrative: `我走了过去。每一步都像是踩在刀刃上，但我知道，如果这次再逃避，就真的没有机会了。

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

export const SCENE_1B_CHAT: SceneData = {
  narrative: `那晚，我们聊了很久。从晚上11点聊到凌晨3点，手机屏幕的光在黑暗中发着光，像是两个孤独的灵魂在互相取暖。

她告诉我，她叫琳，是个设计师。那段时间家里出了事，急需用钱，所以才接了那个单。但真到了那一刻，她也很害怕。

"其实，我也很庆幸你没来。"她说，声音很轻，"因为我不知道自己能不能真的做到。"

我们聊工作，聊生活，聊那些不敢对别人说的话。第一次，我感觉到有人真正理解我的孤独。那种感觉很奇怪，就像是在黑暗中突然看到了一束光。

"要不，我们见个面吧？"她突然说，声音里带着一丝试探，"不是那种见面，就是……普通朋友那种。"`,
  dialogue: "\"你觉得呢？\"",
  speaker: "琳",
  backgroundDescription: "phone chat interface, late night, warm conversation atmosphere",
  choices: [
    { id: "1b_2a", text: "\"好，什么时候？\"", sentiment: "bold" },
    { id: "1b_2b", text: "\"我……还是算了吧\"", sentiment: "shy" },
    { id: "1b_2ae", text: "\"我想先多了解你一些\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1B_DEEP_CHAT: SceneData = {
  narrative: `从那天起，我们每天晚上都会聊天。有时候是文字，有时候是语音，有时候是视频。手机屏幕的光在黑暗中发着光，像是两个孤独的灵魂在互相取暖。

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

export const SCENE_1B_PLAN_MEET: SceneData = {
  narrative: `我们约好了见面。周六下午，咖啡店。

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

export const SCENE_1B_COFFEE: SceneData = {
  narrative: `周六下午，我提前半小时就到了咖啡店。选了个靠窗的位置，点了两杯拿铁，然后开始等待。

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

export const SCENE_1B_COFFEE_TALK: SceneData = {
  narrative: `我们聊了很久。从下午2点聊到傍晚6点，窗外的阳光从明亮变成金黄，再变成橘红，最后消失在城市的边缘。

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

export const SCENE_1B_REGULAR_MEET: SceneData = {
  narrative: `从那天起，我们开始定期见面。每周六下午，同一家咖啡店，同一个位置。

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

export const SCENE_1B_4A_DELETED_REGRET: SceneData = {
  narrative: `
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

export const SCENE_1B_4B_CHAT_DEEPEN: SceneData = {
  narrative: `
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

export const SCENE_1B_4C_HESITATION: SceneData = {
  narrative: `
从那天起，我们开始定期联系。但每次见面前，我都会犹豫很久。

我害怕说错话，害怕她发现真实的我，害怕这段关系会突然结束。

有一天，她发消息问我："你是不是有什么事瞒着我？"

我的心跳瞬间加速。她察觉到了什么吗？`,
  dialogue: "\"你好像……总是有点心事？\"",
  speaker: "琳",
  backgroundDescription: "coffee shop, afternoon, two people talking, tense atmosphere",
  choices: [
    { id: "1b_4c_a", text: "坦白那晚的事", sentiment: "honest" },
    { id: "1b_4c_b", text: "转移话题", sentiment: "shy" },
    { id: "1b_4c_c", text: "半真半假地解释", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1B_4D_TRUST_BUILD: SceneData = {
  narrative: `
我们开始更深入地了解彼此。她告诉我她的过去，她的梦想，她的恐惧。我也开始分享我的故事，那些我从未对任何人说过的话。

"你知道吗？"有一天她对我说，"我一直在想，如果那天你敲门了，现在会是什么样子？"

"也许，我们会成为朋友。"我说。

"也许，不只是朋友。"她笑了，眼神里有种我从未见过的温柔。`,
  dialogue: "\"我想，我们可以试试看。\"",
  speaker: "琳",
  backgroundDescription: "coffee shop, afternoon, two people deep in conversation, trust building",
  choices: [
    { id: "1b_4d_a", text: "\"我也想试试看。\"", sentiment: "romantic" },
    { id: "1b_4d_b", text: "\"但我还是有点害怕\"", sentiment: "shy" },
    { id: "1b_4d_c", text: "\"我想先了解更多\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1B_5A_MEET_PLAN: SceneData = {
  narrative: `
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

export const SCENE_1B_5C_DAILY_TALK: SceneData = {
  narrative: `
我们开始每天聊天。从早安到晚安，从工作到生活，从天气到心情。那些看似无关紧要的日常对话，却让我感到前所未有的温暖。

"今天下雨了。"她说。

"嗯，我也看到了。"我回复。

"你带伞了吗？"

"没有，我淋着雨跑回来的。"

"下次记得带伞，别感冒了。"

那一刻，我突然意识到，也许，这就是我一直在寻找的东西——有人关心我，有人在乎我。`,
  dialogue: "\"谢谢你关心我。\"",
  speaker: "我",
  backgroundDescription: "phone chat interface, daily conversation, warm and caring atmosphere",
  choices: [
    { id: "1b_5c_a", text: "\"我想见你。\"", sentiment: "romantic" },
    { id: "1b_5c_b", text: "\"我们继续保持这样就好\"", sentiment: "neutral" },
    { id: "1b_5c_c", text: "\"我有点害怕见面\"", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1B_5D_SHARED_MOMENT: SceneData = {
  narrative: `
我们开始分享彼此的生活。她发给我她画的画，我发给她我拍的照片。我们聊音乐，聊电影，聊那些让我们感动的东西。

"你知道吗？"有一天她对我说，"和你聊天，让我感觉不那么孤独了。"

"我也是。"我说，"和你聊天，让我感觉我也有存在的意义。"

我们开始计划见面。不是那种正式的约会，只是简单的见面，就像朋友一样。`,
  dialogue: "\"要不，我们见个面？\"",
  speaker: "琳",
  backgroundDescription: "phone chat interface, sharing moments, building connection, warm atmosphere",
  choices: [
    { id: "1b_5d_a", text: "\"好，什么时候？\"", sentiment: "bold" },
    { id: "1b_5d_b", text: "\"我……还是有点紧张\"", sentiment: "shy" },
    { id: "1b_5d_c", text: "\"我想先多了解你一些\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1B_5E_DOUBT: SceneData = {
  narrative: `
我开始怀疑。怀疑这段关系的真实性，怀疑她是否真的在乎我，怀疑我是否值得被爱。

"你在想什么？"她问我。

"我在想，我们这样聊天，到底算什么？"我说。

"你觉得算什么？"她反问。

我不知道。我不知道我们是什么关系，不知道我们会不会有未来，不知道我是否应该继续。

"也许，我们只是两个孤独的人在互相取暖。"我说。`,
  dialogue: "\"也许，不只是取暖。\"",
  speaker: "琳",
  backgroundDescription: "phone chat interface, doubt and uncertainty, emotional moment",
  choices: [
    { id: "1b_5e_a", text: "\"那是什么？\"", sentiment: "neutral" },
    { id: "1b_5e_b", text: "\"我想见你，当面说\"", sentiment: "bold" },
    { id: "1b_5e_c", text: "\"我害怕见面会破坏现在的关系\"", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1B_6A_COFFEE_CONVERSATION: SceneData = {
  narrative: `
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

export const SCENE_1B_6B_DEEP_UNDERSTANDING: SceneData = {
  narrative: `
我们开始更深入地了解彼此。她告诉我她的过去，她的梦想，她的恐惧。我也开始分享我的故事，那些我从未对任何人说过的话。

"你知道吗？"有一天她对我说，"我一直在想，如果那天你敲门了，现在会是什么样子？"

"也许，我们会成为朋友。"我说。

"也许，不只是朋友。"她笑了，眼神里有种我从未见过的温柔。

那一刻，我突然意识到，也许，我真的可以改变。也许，我真的可以幸福。`,
  dialogue: "\"我想，我们可以试试看。\"",
  speaker: "琳",
  backgroundDescription: "coffee shop, deep conversation, understanding each other, emotional moment",
  choices: [
    { id: "1b_6b_a", text: "\"我也想试试看。\"", sentiment: "romantic" },
    { id: "1b_6b_b", text: "\"但我还是有点害怕\"", sentiment: "shy" },
    { id: "1b_6b_c", text: "\"我想先了解更多\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1B_6C_CONFLICT: SceneData = {
  narrative: `
我们开始有了分歧。有时候是因为小事，有时候是因为价值观的不同。我开始怀疑，我们是否真的适合彼此。

"我觉得你太敏感了。"她说。

"我觉得你太冷漠了。"我说。

我们开始争吵，开始冷战，开始怀疑这段关系的意义。

"也许，我们真的不适合。"她说。

"也许，你说得对。"我说。

但我知道，我不想失去她。`,
  dialogue: "\"我们还能继续吗？\"",
  speaker: "我",
  backgroundDescription: "coffee shop, conflict and tension, emotional struggle",
  choices: [
    { id: "1b_6c_a", text: "\"我想试试看。\"", sentiment: "bold" },
    { id: "1b_6c_b", text: "\"也许，我们真的不适合\"", sentiment: "sad" },
    { id: "1b_6c_c", text: "\"我想先冷静一下\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1B_6D_RECONCILIATION: SceneData = {
  narrative: `
我们开始和解。我们开始理解彼此，开始包容彼此，开始接受彼此的不完美。

"对不起。"我说。

"我也对不起。"她说。

我们开始重新建立信任，开始重新建立关系。这一次，我们更加谨慎，更加珍惜。

"你知道吗？"有一天她对我说，"和你在一起，让我感觉我也有存在的意义。"

"我也是。"我说，"和你在一起，让我感觉我也可以被爱。"`,
  dialogue: "\"那我们重新开始？\"",
  speaker: "琳",
  backgroundDescription: "coffee shop, reconciliation, rebuilding trust, warm atmosphere",
  choices: [
    { id: "1b_6d_a", text: "\"好，我们重新开始。\"", sentiment: "romantic" },
    { id: "1b_6d_b", text: "\"我想慢慢来\"", sentiment: "shy" },
    { id: "1b_6d_c", text: "\"我想先做朋友\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1B_7A_REGULAR_MEETINGS: SceneData = {
  narrative: `
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

export const SCENE_1B_8A_RELATIONSHIP_DEFINE: SceneData = {
  narrative: `
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
    { id: "1b_8b", text: "\"我……还是有点害怕\"", sentiment: "shy" },
    { id: "1b_8c", text: "\"我想先坦白一件事\"", sentiment: "honest" }
  ],
  isEnding: false
};

export const SCENE_1B_9A_FIRST_DATE: SceneData = {
  narrative: `
我们开始了第一次正式的约会。

我提前半小时就到了，选了个靠窗的位置，点了她最喜欢的拿铁。咖啡的香气在空气中弥漫，阳光透过百叶窗洒在桌子上，形成斑驳的光影。

她准时出现，穿着简单的白衬衫和牛仔裤，和我想象中的完全不一样。我想象中的她，应该是那种浓妆艳抹、穿着暴露的样子。但眼前的她，干净、简单，甚至有些朴素。

"你好。"她在我对面坐下，把包放在旁边的椅子上，"没想到我们真的会在一起。"

"我也没想到。"我说，声音有点紧张，"我以为你会直接拒绝我。"

"为什么要拒绝？"她笑了，眼睛弯成月牙，"你又不是坏人，只是……有点胆小而已。"`,
  dialogue: "\"其实，我只是想要有人陪。\"",
  speaker: "我",
  backgroundDescription: "coffee shop, first date, two people at table, warm and romantic atmosphere",
  choices: [
    { id: "1b_9a", text: "握住她的手，告诉她我的感受", sentiment: "romantic" },
    { id: "1b_9b", text: "保持距离，慢慢来", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1B_9B_FEAR_CONFRONTATION: SceneData = {
  narrative: `
我选择了告诉她我的恐惧。

"其实，我还是有点害怕。"我说，声音很轻，"我害怕我会伤害你，我害怕我会让你失望，我害怕……"

"害怕什么？"她问，眼神很温柔。

"害怕我会再次逃跑。"我说，声音更轻了，"就像那天晚上一样。"

她看着我，眼神很复杂。有理解，有同情，还有一丝我读不懂的东西。

"那我们就慢慢来。"她说，握住我的手，"不用着急，我们可以慢慢了解彼此。"`,
  dialogue: "\"谢谢你理解我。\"",
  speaker: "我",
  backgroundDescription: "coffee shop, two people talking, understanding and support, warm atmosphere",
  choices: [
    { id: "1b_9c", text: "拥抱她，告诉她我会努力", sentiment: "romantic" },
    { id: "1b_9d", text: "保持距离，只做朋友", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1B_9C_FULL_CONFESSION: SceneData = {
  narrative: `
我选择了向她坦白一切。

"其实，我想先坦白一件事。"我说，声音很轻，"那天晚上，我到了门口，但我逃跑了。我删除了你的联系方式，我试图忘记你，但我做不到。"

她安静地听完，没有说话。空气很安静，安静到我能听到自己的心跳声。

"我明白了。"她终于开口，声音很轻，"你跟踪我，是因为你想了解我，但又不敢直接接近我，对吗？"

我点了点头，不敢看她。

"其实，我也一直在观察你。"她说，"在公司里，在电梯里，在食堂里。我一直在想，你会不会主动和我说话。"`,
  dialogue: "\"所以，我们都在等对方先开口？\"",
  speaker: "我",
  backgroundDescription: "coffee shop, full confession, two people understanding each other, emotional moment",
  choices: [
    { id: "1b_9e", text: "\"那现在，我们可以重新开始吗？\"", sentiment: "bold" },
    { id: "1b_9f", text: "\"我……还是有点害怕\"", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1B_10A_RELATIONSHIP_GROWTH: SceneData = {
  narrative: `
从那天起，我们开始正式交往。

我们每周六下午都会见面，有时候是咖啡店，有时候是公园，有时候是电影院。我们聊工作，聊生活，聊那些不敢对别人说的话。

我慢慢了解到，她叫琳，是个设计师。她喜欢画画，喜欢看日落，喜欢在深夜听音乐。她也开始了解我。我的工作，我的孤独，我的恐惧。

"你知道吗？"有一天她对我说，声音很轻，但很坚定，"你其实不是懦弱，你只是太善良了。善良到不敢伤害任何人，包括自己。"

那一刻，我突然意识到，也许，我真的可以改变。也许，我真的可以幸福。`,
  dialogue: "\"谢谢你，琳。\"",
  speaker: "我",
  backgroundDescription: "park walk, two people in love, growing relationship, warm sunset colors",
  choices: [
    { id: "1b_10a", text: "【结局】", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1B_10B_FRIENDSHIP_CHOICE: SceneData = {
  narrative: `
我选择了保持距离，只做朋友。

"我明白了。"她说，声音很轻，"也许，朋友的关系更适合我们。"

我们继续见面，继续聊天，但再也没有越过那条线。我们成了最好的朋友，无话不谈，互相支持。

有时候，我会想，如果那天我更勇敢一点，如果我更早说出真相，现在会是什么样子？

但我知道，有些关系，不是爱情，却同样珍贵。`,
  dialogue: "\"谢谢你，琳。你是我最好的朋友。\"",
  speaker: "我",
  backgroundDescription: "coffee shop, two friends, warm friendship, peaceful atmosphere",
  choices: [
    { id: "1b_10b", text: "【结局】", sentiment: "neutral" }
  ],
  isEnding: false
};

