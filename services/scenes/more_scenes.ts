import { SceneData } from "../../types";

// ============================================================================
// 更多场景补充（确保达到200个节点）
// ============================================================================

// 1B分支第4-6层额外场景
export const SCENE_1B_4E_DOUBT_MOMENT: SceneData = {
  narrative: `
我开始怀疑。怀疑她，怀疑自己，怀疑这段关系。

"你知道吗？"有一天她对我说，"我觉得我们之间的关系很奇怪。"

"什么意思？"我问。

"我不知道我们是什么。"她说，"朋友？恋人？还是只是……互相取暖的人？"

那一刻，我突然意识到，也许，我们真的需要重新定义我们的关系。

但我知道，我害怕。我害怕失去她，我害怕这段关系会突然结束。`,
  dialogue: "（我该怎么办？）",
  speaker: "内心独白",
  backgroundDescription: "coffee shop, doubt moment, two people uncertain, tense atmosphere",
  choices: [
    { id: "1b_4e_a", text: "尝试定义我们的关系", sentiment: "bold" },
    { id: "1b_4e_b", text: "保持现状，不改变", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1B_5F_EMOTIONAL_TURMOIL: SceneData = {
  narrative: `
那是一个周末的下午，我们约在公园里散步。阳光很好，但我的心情却很复杂。

我们并排走着，中间隔着一点距离。我想靠近一点，但又不敢。我想牵她的手，但又害怕被拒绝。

"你在想什么？"她突然问。

"没什么。"我说，但我知道，我的表情出卖了我。

"你在想我们之间的关系，对吗？"她说，声音很轻，"我也在想。"

我们走到一个长椅前，她坐了下来，我也跟着坐下。我们之间还是隔着一点距离，但那种距离让人感到安全，也让人感到不安。

"其实，我也不知道我们是什么。"她说，"朋友？恋人？还是只是……互相取暖的人？"

那一刻，我突然意识到，也许，我们真的需要重新定义我们的关系。`,
  dialogue: "\"我想，也许我们应该试试看？\"",
  speaker: "我",
  backgroundDescription: "park bench, sunny afternoon, two people sitting together, emotional turmoil, uncertain atmosphere",
  choices: [
    { id: "1b_5f_a", text: "\"我想……不只是朋友\"", sentiment: "romantic" },
    { id: "1b_5f_b", text: "\"我们慢慢来\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1B_6E_BREAKTHROUGH_MOMENT: SceneData = {
  narrative: `
那是一个雨夜，我们坐在咖啡店的窗边，看着外面的雨滴打在玻璃上。店里只有我们两个人，音乐很轻，像是背景音。

"其实，我一直想问你一个问题。"她突然说，声音很轻，"那天晚上，你为什么会发消息给我？"

"什么意思？"我问。

"你明明可以就这样消失。"她说，"但你选择了发消息。为什么？"

我沉默了很久。咖啡的热气在我们之间升腾，模糊了视线。

"因为我想，也许，我们之间还有可能。"我说，声音很轻，"也许，我们不只是陌生人。"

她看着我，眼神很复杂。有理解，有同情，还有某种我读不懂的东西。

"也许，我们可以试试看。"她说，"试试看，我们能不能不只是朋友。"`,
  dialogue: "\"我想，也许我们可以不只是朋友？\"",
  speaker: "琳",
  backgroundDescription: "coffee shop window, rainy night, two people in deep conversation, breakthrough moment, intimate atmosphere",
  choices: [
    { id: "1b_6e_a", text: "\"我想……不只是朋友\"", sentiment: "romantic" },
    { id: "1b_6e_b", text: "\"我们慢慢来\"", sentiment: "neutral" }
  ],
  isEnding: false
};

// 1C分支第4-6层额外场景
export const SCENE_1C_4F_INTERNAL_CONFLICT: SceneData = {
  narrative: `
我的内心充满了冲突。我想接近她，但我又害怕。我想告诉她真相，但我又不敢。

我开始失眠，开始做噩梦。梦里，我总是站在那扇门前，但永远不敢敲门。

"我到底在害怕什么？"我问自己。

也许，我害怕的不是她，而是我自己。我害怕真实的自己，害怕自己的孤独，害怕自己的懦弱。

但我知道，如果我不改变，我永远不会有结果。`,
  dialogue: "（我必须改变……）",
  speaker: "内心独白",
  backgroundDescription: "empty apartment at night, protagonist in conflict, city lights outside, melancholic atmosphere",
  choices: [
    { id: "1c_4f_a", text: "决定主动改变", sentiment: "bold" },
    { id: "1c_4f_b", text: "继续逃避，接受现实", sentiment: "sad" }
  ],
  isEnding: false
};

export const SCENE_1C_5E_GROWING_CLOSER: SceneData = {
  narrative: `
我们开始每天聊天。从早安到晚安，从工作到生活，从天气到心情。手机成了我们之间最重要的联系。

有一天，她发了一张照片给我。是她画的画，画的是窗外的夕阳。夕阳把天空染成橘红色，很美。

"好看吗？"她问。

"好看。"我说，"你画得很好。"

"其实，我画这幅画的时候，在想你。"她说，"在想，如果那天晚上你敲门了，现在会是什么样子？"

我的心跳瞬间加速。她也在想我吗？

"我想，也许我们可以不只是朋友？"我鼓起勇气问。`,
  dialogue: "\"我……也想。\"",
  speaker: "琳",
  backgroundDescription: "phone screen showing artwork, sunset painting, emotional message exchange, growing intimacy, late night chat",
  choices: [
    { id: "1c_5e_a", text: "\"那我们见面吧？\"", sentiment: "romantic" },
    { id: "1c_5e_b", text: "\"我们慢慢来\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1C_6E_EMOTIONAL_BOND: SceneData = {
  narrative: `
我们约在公园里见面。那是一个周末的下午，阳光很好，风很轻。

她坐在长椅上，手里拿着一本素描本，正在画着什么。我走过去，在她旁边坐下。

"你在画什么？"我问。

"画你。"她说，脸红了，"我想记住你的样子。"

"为什么？"我问。

"因为我想，也许，我们以后不会再见面了。"她说，"所以我想记住你。"

"不会的。"我说，声音很轻，"我们以后还会见面的。我保证。"

她看着我，眼神很复杂。有惊讶，有感动，还有某种我读不懂的东西。

"真的吗？"她问。

"真的。"我说，"我想，也许我们可以不只是朋友？"`,
  dialogue: "\"我……也想。\"",
  speaker: "琳",
  backgroundDescription: "park bench, sunny afternoon, two people sitting together, sketchbook, emotional bond forming, intimate moment",
  choices: [
    { id: "1c_6e_a", text: "握住她的手", sentiment: "romantic" },
    { id: "1c_6e_b", text: "\"我们慢慢来\"", sentiment: "neutral" }
  ],
  isEnding: false
};

// 1A分支第4-6层额外场景
export const SCENE_1A_4E_CHANGE_ATTEMPT: SceneData = {
  narrative: `
我决定尝试改变。我知道，这很难，但我必须这么做。

我开始参加公司的团建活动，开始主动和同事聊天，开始尝试在社交软件上主动打招呼。

但每次，我都失败了。我害怕被拒绝，害怕说错话，害怕暴露自己的孤独。

直到有一天，我在公司食堂看到了一个熟悉的身影。米色风衣，茉莉花香。

是她。

我的心跳瞬间加速。这是机会吗？还是又一次逃避的开始？`,
  dialogue: "（不能再逃了……）",
  speaker: "内心独白",
  backgroundDescription: "company cafeteria, lunch time, protagonist seeing familiar figure, nervous anticipation",
  choices: [
    { id: "1a_4e_a", text: "鼓起勇气，走过去", sentiment: "bold" },
    { id: "1a_4e_b", text: "还是不敢，默默走开", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1A_5E_OPPORTUNITY: SceneData = {
  narrative: `
我开始留意她。不是刻意的，而是自然而然的。

我发现她每天早上8点半到公司，中午12点在食堂吃饭，晚上经常加班到很晚。我发现她喜欢画画，喜欢看日落，喜欢在深夜听音乐。我发现她工作很努力，经常加班到很晚。我发现她似乎很孤独，朋友圈里很少有其他人的照片。

我开始想象，如果那天我敲门了，现在会是什么样子？我们会成为朋友吗？还是只是陌生人？

直到有一天，在电梯里，我们被挤到了一起。她身上的茉莉花香再次袭来，我心跳加速。

"你也是这栋楼的？"她突然问。

"嗯……12楼。"我说，声音有点颤抖。`,
  dialogue: "\"我在11楼，设计部。\"",
  speaker: "琳",
  backgroundDescription: "crowded elevator, morning commute, two people close together, opportunity moment, nervous anticipation",
  choices: [
    { id: "1a_5e_a", text: "\"要不，我们找个时间聊聊？\"", sentiment: "bold" },
    { id: "1a_5e_b", text: "只是点头，不敢多说", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1A_6G_RELATIONSHIP_DEVELOPMENT: SceneData = {
  narrative: `
我们开始在公司食堂一起吃饭。不是刻意的，而是自然而然的。

她总是点那家店的麻辣烫，我则总是点那家店的盖浇饭。我们坐在同一张桌子旁，聊着工作，聊着生活，聊着那些不敢对别人说的话。

有一天，她突然说："你知道吗？我一直在想，如果那天晚上你敲门了，现在会是什么样子？"

"什么意思？"我问。

"也许，我们不会像现在这样。"她说，"也许，我们会更早地了解彼此，也许，我们不会这么小心翼翼。"

"那你觉得，现在这样好吗？"我问。

"好。"她说，"因为我们现在是真正的朋友，而不是因为那700块钱。"

那一刻，我突然意识到，也许，我真的可以改变。也许，我们可以不只是朋友。`,
  dialogue: "\"我想，也许我们可以不只是朋友？\"",
  speaker: "我",
  backgroundDescription: "company cafeteria, lunch time, two people eating together, casual conversation, relationship developing, growing intimacy",
  choices: [
    { id: "1a_6g_a", text: "\"我想……不只是朋友\"", sentiment: "romantic" },
    { id: "1a_6g_b", text: "\"朋友也很好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

// 共享场景补充
export const SCENE_4C_MUTUAL_ATTRACTION: SceneData = {
  narrative: `
我们开始注意到彼此。不是刻意的，而是自然而然的。

我发现，每次在公司里遇到她，我的心跳都会加速。每次听到她的声音，我都会感到温暖。每次和她聊天，我都会忘记时间。

她也开始注意到我。她会在电梯里主动和我打招呼，会在食堂里主动坐在我旁边，会在下班后主动和我一起走。

有一天，在电梯里，我们被挤到了一起。她身上的茉莉花香再次袭来，我心跳加速。

"你身上的味道很好闻。"我鼓起勇气说。

"谢谢。"她笑了，那笑容很轻，但很真实，"是茉莉花的味道。"

"我知道。"我说，"那天晚上，我就闻到了。"

她看着我，眼神很复杂。有惊讶，有理解，还有某种我读不懂的东西。

"也许，我们可以不只是朋友？"我鼓起勇气问。`,
  dialogue: "\"我……也想。\"",
  speaker: "琳",
  backgroundDescription: "elevator, crowded space, two people close together, mutual attraction, intimate moment",
  choices: [
    { id: "4c_a", text: "握住她的手", sentiment: "romantic" },
    { id: "4c_b", text: "\"我们慢慢来\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_5C_EMOTIONAL_DEPTH: SceneData = {
  narrative: `
那是一个周末的下午，我们坐在咖啡店里，聊着彼此的梦想。

她告诉我，她曾经有一个梦想，想要成为一名画家。但现实让她放弃了，她只能把画画当作爱好。她给我看了她的画，画的是窗外的夕阳，很美。

我也告诉她，我曾经的梦想，想要成为一名作家。但现实也让我放弃了，我只能把写作当作消遣。我给她看了我写的东西，她看得很认真。

"你知道吗？"她说，声音很轻，"我觉得我们很像。我们都有梦想，但都被现实打败了。"

"什么意思？"我问。

"也许，我们可以一起重新开始。"她说，"一起追求我们的梦想。也许，我们可以不只是朋友？"`,
  dialogue: "\"我想，也许我们可以不只是朋友？\"",
  speaker: "琳",
  backgroundDescription: "coffee shop, afternoon, two people sharing dreams and artwork, deep emotional connection, intimate atmosphere",
  choices: [
    { id: "5c_a", text: "握住她的手", sentiment: "romantic" },
    { id: "5c_b", text: "\"我们慢慢来\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_6E_CONNECTION_STRENGTHEN: SceneData = {
  narrative: `
我们开始一起做更多的事情。不是刻意的，而是自然而然的。

我们一起去看电影，一起去逛书店，一起去公园散步。我们开始了解彼此的喜好，开始适应彼此的习惯，开始享受彼此的陪伴。

有一天，我们坐在公园的长椅上，看着夕阳慢慢落下。夕阳把天空染成橘红色，很美。

"你知道吗？"她说，"我从来没有想过，我会和一个人这样相处。"

"什么意思？"我问。

"我觉得，我们之间有一种特殊的联系。"她说，"一种我从来没有体验过的联系。"

"我也是。"我说，"我想，也许我们可以不只是朋友？"`,
  dialogue: "\"我……也想。\"",
  speaker: "琳",
  backgroundDescription: "park bench, sunset, two people sitting together, peaceful moment, connection strengthening, intimate atmosphere",
  choices: [
    { id: "6e_a", text: "握住她的手", sentiment: "romantic" },
    { id: "6e_b", text: "\"我们慢慢来\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_7C_EMOTIONAL_MOMENT: SceneData = {
  narrative: `
那是一个雨夜，我们坐在咖啡店的窗边，看着外面的雨滴打在玻璃上。

"你知道吗？"她突然说，"我一直在想，我们之间到底是什么关系？"

"什么意思？"我问。

"我们不是朋友，也不是恋人。"她说，"我们之间有一种特殊的东西，一种我从来没有体验过的东西。"

"那是什么？"我问。

"我不知道。"她说，"但我想，也许，我们应该给它一个名字。"

那一刻，我突然意识到，也许，这就是最好的开始。`,
  dialogue: "\"我想，也许我们可以不只是朋友？\"",
  speaker: "我",
  backgroundDescription: "coffee shop window, rainy night, two people at emotional crossroads, intimate atmosphere",
  choices: [
    { id: "7c_a", text: "握住她的手", sentiment: "romantic" },
    { id: "7c_b", text: "保持距离，慢慢来", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_8C_FUTURE_TOGETHER: SceneData = {
  narrative: `
我们开始讨论未来。不是那种虚无缥缈的未来，而是具体的，可以实现的未来。

"我想，也许我们可以一起做点什么。"她说，"比如，一起去看日落，一起去海边，一起去听音乐会。"

"好。"我说，"我也想。"

"那我们就这么定了。"她笑了，那笑容很轻，但很真实，"从明天开始，我们每周六下午见面，好吗？"

"好。"我说，心里涌起一阵暖流。

"还有，"她说，"我想，也许我们可以不只是朋友？"`,
  dialogue: "\"我想，也许我们可以不只是朋友？\"",
  speaker: "琳",
  backgroundDescription: "coffee shop, future planning, two people making plans together, hopeful and warm atmosphere",
  choices: [
    { id: "8c_a", text: "\"我想……不只是朋友\"", sentiment: "romantic" },
    { id: "8c_b", text: "\"我们一步一步来\"", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_9C_FINAL_MOMENT: SceneData = {
  narrative: `
我们终于到了最后的时刻。我知道，如果我不说，我们永远不会有结果。但如果我说了，我们可能会变得陌生。

我站在咖啡店门口，看着她离开的背影，心里五味杂陈。

我想追上去，告诉她我想说的话。但我的脚像是被钉在了地上，怎么也动不了。

"算了。"我对自己说，"也许，这样就好。"

但我知道，我后悔了。我知道，我错过了什么。

我拿出手机，给她发了条消息："我想和你聊聊。关于我们，关于未来。"`,
  dialogue: "\"好，什么时候？\"",
  speaker: "琳",
  backgroundDescription: "coffee shop entrance, evening, protagonist watching her leave, emotional decision moment",
  choices: [
    { id: "9c_a", text: "立即回复，约她见面", sentiment: "bold" },
    { id: "9c_b", text: "犹豫一下，再回复", sentiment: "shy" }
  ],
  isEnding: false
};

