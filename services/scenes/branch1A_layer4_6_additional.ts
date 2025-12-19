import { SceneData } from "../../types";

// ============================================================================
// 第4-6层场景补充（1A分支）- 新增场景
// ============================================================================

export const SCENE_1A_4C_DAILY_LIFE: SceneData = {
  narrative: `
我选择了继续生活，但那个夜晚的影子一直跟着我。

我开始尝试改变。我开始参加公司的团建活动，开始主动和同事聊天，开始尝试在社交软件上主动打招呼。

但每次，我都失败了。我害怕被拒绝，害怕说错话，害怕暴露自己的孤独。

直到有一天，我在公司食堂看到了一个熟悉的身影。米色风衣，茉莉花香。

是她。

我的心跳瞬间加速。这是机会吗？还是又一次逃避的开始？`,
  dialogue: "（不能再逃了……）",
  speaker: "内心独白",
  backgroundDescription: "company cafeteria, lunch time, protagonist seeing familiar figure, nervous anticipation",
  choices: [
    { id: "1a_4c_a", text: "鼓起勇气，走过去", sentiment: "bold" },
    { id: "1a_4c_b", text: "还是不敢，默默走开", sentiment: "shy" },
    { id: "1a_4c_c", text: "等待更好的时机", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1A_4D_SELF_REFLECTION: SceneData = {
  narrative: `
我开始反思自己。我到底在害怕什么？为什么我总是逃避？

我坐在空荡荡的房间里，看着窗外的城市。霓虹灯在闪烁，车流在流动，每个人都在自己的轨道上生活。

而我，却像是一个局外人，永远无法融入这个世界。

"我到底想要什么？"我问自己。

也许，我只是想要有人理解我，有人陪我说话，有人让我觉得我不那么孤独。

但我知道，如果我不改变，我永远不会有这样的机会。`,
  dialogue: "（我必须改变……）",
  speaker: "内心独白",
  backgroundDescription: "empty apartment at night, protagonist reflecting, city lights outside, melancholic atmosphere",
  choices: [
    { id: "1a_4d_a", text: "决定主动改变", sentiment: "bold" },
    { id: "1a_4d_b", text: "继续逃避，接受现实", sentiment: "sad" }
  ],
  isEnding: false
};

export const SCENE_1A_5C_FIRST_CONTACT: SceneData = {
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
    { id: "1a_5c_a", text: "\"好，我知道附近有家咖啡店\"", sentiment: "bold" },
    { id: "1a_5c_b", text: "\"我……还是算了吧\"", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1A_5D_MISSED_CHANCE: SceneData = {
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
    { id: "1a_5d_a", text: "\"12楼……\"", sentiment: "shy" },
    { id: "1a_5d_b", text: "假装没听见，盯着楼层数字", sentiment: "cold" }
  ],
  isEnding: false
};

export const SCENE_1A_6C_DEEP_CONNECTION: SceneData = {
  narrative: `
我们开始深入交谈。不是表面的寒暄，而是真正的对话。

她告诉我，她喜欢画画，喜欢看日落，喜欢在深夜听音乐。她告诉我，她画的第一幅画是给妈妈的生日礼物，画的是她们家的小花园，那时候她还在上小学。她最喜欢的日落是在海边看到的，那时候她刚失恋，一个人坐在沙滩上，看着太阳慢慢沉入海平面，眼泪和海水混在一起。她深夜听的音乐总是很悲伤，她说，悲伤的音乐让她觉得不那么孤独。

我也开始告诉她我的故事。我的工作，我的孤独，我的恐惧。那些我从未对任何人说过的话，在她面前，却变得那么容易说出口。`,
  dialogue: "\"也许，我们可以成为真正的朋友？\"",
  speaker: "琳",
  backgroundDescription: "coffee shop, deep conversation, two people opening up, intimate atmosphere",
  choices: [
    { id: "1a_6c_a", text: "\"我想……不只是朋友\"", sentiment: "romantic" },
    { id: "1a_6c_b", text: "\"好，朋友也很好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1A_6D_MUTUAL_UNDERSTANDING: SceneData = {
  narrative: `
我们开始理解彼此。不是表面的，而是深层的。

那是一个周末的下午，我们坐在公园的长椅上，看着夕阳慢慢落下。

"你知道吗？"她突然说，"我一直在想，如果那天晚上你敲门了，现在会是什么样子？"

"什么意思？"我问。

"也许，我们不会像现在这样。"她说，"也许，我们会更早地了解彼此，也许，我们不会这么小心翼翼。"

"那你觉得，现在这样好吗？"我问。

"好。"她说，"因为我们现在是真正的朋友，而不是因为那700块钱。"

那一刻，我突然意识到，也许，我真的可以改变。`,
  dialogue: "\"我想，也许我们可以不只是朋友？\"",
  speaker: "我",
  backgroundDescription: "park bench, sunset, two people understanding each other, peaceful and emotional moment",
  choices: [
    { id: "1a_6d_a", text: "\"我想……不只是朋友\"", sentiment: "romantic" },
    { id: "1a_6d_b", text: "\"朋友也很好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1A_6E_TRUST_BUILDING: SceneData = {
  narrative: `
那是一个雨夜，我们坐在咖啡店的窗边，看着外面的雨滴打在玻璃上。店里只有我们两个人，音乐很轻，像是背景音。

"其实，我一直想问你一个问题。"她突然说，声音很轻，"你为什么会相信我？"

"什么意思？"我问。

"你明明可以就这样消失。"她说，"但你选择了相信我。为什么？"

我沉默了很久。咖啡的热气在我们之间升腾，模糊了视线。

"因为我想，也许，我们之间还有可能。"我说，声音很轻，"也许，我们不只是陌生人。也许，我们可以不只是朋友？"

她看着我，眼神很复杂。有理解，有感动，还有某种我读不懂的东西。`,
  dialogue: "\"我想，也许我们可以不只是朋友？\"",
  speaker: "我",
  backgroundDescription: "coffee shop window, rainy night, two people building trust, intimate and warm atmosphere, vulnerability shared",
  choices: [
    { id: "1a_6e_a", text: "握住她的手", sentiment: "romantic" },
    { id: "1a_6e_b", text: "\"好，朋友也很好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1A_6F_INTIMACY_DEEPEN: SceneData = {
  narrative: `
我们之间的亲密感在慢慢加深。不是突然的，而是慢慢的，一点一点的。

我们开始一起做更多的事情。不是刻意的，而是自然而然的。

我们一起去看电影，一起去逛书店，一起去公园散步。我们开始了解彼此的喜好，开始适应彼此的习惯，开始享受彼此的陪伴。

有一天，我们坐在公园的长椅上，看着夕阳慢慢落下。

"你知道吗？"她说，"我从来没有想过，我会和一个人这样相处。"

"什么意思？"我问。

"我觉得，我们之间有一种特殊的联系。"她说，"一种我从来没有体验过的联系。"

那一刻，我突然意识到，也许，我真的可以改变。`,
  dialogue: "\"我想，也许我们可以不只是朋友？\"",
  speaker: "我",
  backgroundDescription: "park bench, sunset, two people sharing activities, growing intimacy, peaceful moment",
  choices: [
    { id: "1a_6f_a", text: "\"我想……不只是朋友\"", sentiment: "romantic" },
    { id: "1a_6f_b", text: "\"朋友也很好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

