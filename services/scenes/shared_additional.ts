import { SceneData } from "../../types";

// ============================================================================
// 共享场景补充（第4-9层过渡场景）
// ============================================================================

export const SCENE_4_TRANSITION_A: SceneData = {
  narrative: `
时间过得很快，转眼间已经过去了一个月。我们之间的关系也在慢慢变化。

有时候，我会在公司里遇到她。有时候，我们会在电梯里相遇。有时候，我们会在食堂里碰面。

每次遇到她，我的心都会跳得很快。每次听到她的声音，我都会感到温暖。每次和她聊天，我都会忘记时间。

我开始怀疑，我是不是喜欢上她了？

但我知道，我不能。我们之间有一道无形的墙，一道我永远无法跨越的墙。`,
  dialogue: "（我该怎么办？）",
  speaker: "内心独白",
  backgroundDescription: "company building, daily encounters, growing feelings, uncertain atmosphere",
  choices: [
    { id: "4_a", text: "尝试打破这道墙", sentiment: "bold" },
    { id: "4_b", text: "保持距离，接受现实", sentiment: "sad" },
    { id: "4_c", text: "继续观察，等待机会", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_4_TRANSITION_B: SceneData = {
  narrative: `
我们之间的关系变得越来越复杂。不是朋友，也不是恋人，而是某种介于两者之间的东西。

有时候，我们会像恋人一样亲密。有时候，我们会像朋友一样保持距离。有时候，我们会像陌生人一样尴尬。

我不知道我们到底是什么关系，也不知道我们想要什么。

"你知道吗？"有一天她对我说，"我觉得我们之间的关系很奇怪。"

"什么意思？"我问。

"我不知道我们是什么。"她说，"朋友？恋人？还是只是……互相取暖的人？"`,
  dialogue: "\"我也不知道。\"",
  speaker: "我",
  backgroundDescription: "coffee shop, complicated relationship, uncertain atmosphere",
  choices: [
    { id: "4_d", text: "\"也许，我们应该定义一下我们的关系\"", sentiment: "bold" },
    { id: "4_e", text: "\"也许，这样就好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_5_TRANSITION_A: SceneData = {
  narrative: `
我们终于到了做决定的时候。不是匆忙的，而是经过深思熟虑的。

"你知道吗？"有一天她对我说，"我觉得我们之间的关系很奇怪。"

"什么意思？"我问。

"我不知道我们是什么。"她说，"朋友？恋人？还是只是……互相取暖的人？"

"我也不知道。"我说，"但我想，也许，我们应该试试看。"

"好。"她说，"我们试试看。"

那一刻，我突然意识到，也许，这就是最好的开始。`,
  dialogue: "\"谢谢你，琳。\"",
  speaker: "我",
  backgroundDescription: "coffee shop, decision moment, two people making choice, emotional moment",
  choices: [
    { id: "5_a", text: "握住她的手", sentiment: "romantic" },
    { id: "5_b", text: "保持距离，慢慢来", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_5_TRANSITION_B: SceneData = {
  narrative: `
我们之间的关系面临着一个考验。不是外部的，而是内部的。

"你知道吗？"有一天她对我说，"我觉得我们之间的关系很奇怪。"

"什么意思？"我问。

"我不知道我们是什么。"她说，"朋友？恋人？还是只是……互相取暖的人？"

"我也不知道。"我说，"但我想，也许，我们应该试试看。"

"好。"她说，"我们试试看。"

那一刻，我突然意识到，也许，这就是最好的开始。`,
  dialogue: "\"谢谢你，琳。\"",
  speaker: "我",
  backgroundDescription: "coffee shop, trust test moment, two people facing challenge, emotional moment",
  choices: [
    { id: "5_c", text: "\"也许，我们可以不只是朋友？\"", sentiment: "romantic" },
    { id: "5_d", text: "\"朋友也很好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_6_TRANSITION_A: SceneData = {
  narrative: `
那是一个周末的下午，我们坐在公园的长椅上，看着夕阳慢慢落下。

"你知道吗？"她突然说，"我一直在想，如果那天晚上你敲门了，现在会是什么样子？"

"什么意思？"我问。

"也许，我们不会像现在这样。"她说，"也许，我们会更早地了解彼此，也许，我们不会这么小心翼翼。"

"那你觉得，现在这样好吗？"我问。

"好。"她说，"因为我们现在是真正的朋友，而不是因为那700块钱。"

那一刻，我突然意识到，也许，我真的可以改变。`,
  dialogue: "\"我想，也许我们可以不只是朋友？\"",
  speaker: "我",
  backgroundDescription: "park bench, sunset, two people in deep conversation, peaceful and emotional moment",
  choices: [
    { id: "6_a", text: "\"我想……不只是朋友\"", sentiment: "romantic" },
    { id: "6_b", text: "\"朋友也很好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_6_TRANSITION_B: SceneData = {
  narrative: `
那是一个雨夜，我们坐在咖啡店的窗边，看着外面的雨滴打在玻璃上。

"你知道吗？"她突然说，"我一直在想，如果那天晚上你真的来了，现在会是什么样子？"

"什么意思？"我问。

"也许，我们不会像现在这样。"她说，"也许，我们会更早地了解彼此，也许，我们不会这么小心翼翼。"

"那你觉得，现在这样好吗？"我问。

"好。"她说，"因为我们现在是真正的朋友，而不是因为那700块钱。"

那一刻，我突然意识到，也许，我真的可以改变。`,
  dialogue: "\"我想，也许我们可以不只是朋友？\"",
  speaker: "我",
  backgroundDescription: "coffee shop window, rainy night, two people breaking through barriers, intimate atmosphere",
  choices: [
    { id: "6_c", text: "\"我想……不只是朋友\"", sentiment: "romantic" },
    { id: "6_d", text: "\"好，朋友也很好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_7_TRANSITION_A: SceneData = {
  narrative: `
那是一个深夜，我们坐在咖啡店的角落里，周围已经没有人了。

"你知道吗？"她突然说，"我一直在想，我们之间到底是什么关系？"

"什么意思？"我问。

"我们不是朋友，也不是恋人。"她说，"我们之间有一种特殊的东西，一种我从来没有体验过的东西。"

"那是什么？"我问。

"我不知道。"她说，"但我想，也许，我们应该给它一个名字。"

那一刻，我突然意识到，也许，这就是最好的开始。`,
  dialogue: "\"我想，也许我们可以不只是朋友？\"",
  speaker: "我",
  backgroundDescription: "coffee shop corner, late night, two people at decision point, intimate and emotional atmosphere",
  choices: [
    { id: "7_a", text: "握住她的手", sentiment: "romantic" },
    { id: "7_b", text: "保持距离，慢慢来", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_7_TRANSITION_B: SceneData = {
  narrative: `
我们之间的关系面临着一个考验。不是外部的，而是内部的。

那是一个周末的下午，我们坐在公园的长椅上，看着夕阳慢慢落下。

"你知道吗？"她说，"我一直在想，如果那天晚上你敲门了，现在会是什么样子？"

"什么意思？"我问。

"也许，我们不会像现在这样。"她说，"也许，我们会更早地了解彼此，也许，我们不会这么小心翼翼。"

"那你觉得，现在这样好吗？"我问。

"好。"她说，"因为我们现在是真正的朋友，而不是因为那700块钱。"

那一刻，我突然意识到，也许，这就是最好的开始。`,
  dialogue: "\"我想，也许我们可以不只是朋友？\"",
  speaker: "我",
  backgroundDescription: "park bench, sunset, two people facing internal test, emotional and reflective atmosphere",
  choices: [
    { id: "7_c", text: "\"我想……不只是朋友\"", sentiment: "romantic" },
    { id: "7_d", text: "\"朋友也很好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_8_TRANSITION_A: SceneData = {
  narrative: `
我们开始一起做更多的事情。不是刻意的，而是自然而然的。

我们一起去看电影，一起去逛书店，一起去公园散步。我们开始了解彼此的喜好，开始适应彼此的习惯，开始享受彼此的陪伴。

有一天，我们坐在公园的长椅上，看着夕阳慢慢落下。

"你知道吗？"她说，"我从来没有想过，我会和一个人这样相处。"

"什么意思？"我问。

"我觉得，我们之间有一种特殊的联系。"她说，"一种我从来没有体验过的联系。"

那一刻，我突然意识到，也许，我真的可以改变。`,
  dialogue: "\"我想，也许我们可以不只是朋友？\"",
  speaker: "我",
  backgroundDescription: "park bench, sunset, two people sharing activities, growing connection, peaceful moment",
  choices: [
    { id: "8_a", text: "\"我想……不只是朋友\"", sentiment: "romantic" },
    { id: "8_b", text: "\"朋友也很好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_8_TRANSITION_B: SceneData = {
  narrative: `
我们开始分享更深层的东西。不是表面的，而是内心的。

她告诉我，她曾经有一个梦想，想要成为一名画家。但现实让她放弃了，她只能把画画当作爱好。

我也告诉她，我曾经的梦想，想要成为一名作家。但现实也让我放弃了，我只能把写作当作消遣。

"你知道吗？"她说，声音很轻，"我觉得我们很像。我们都有梦想，但都被现实打败了。"

"什么意思？"我问。

"也许，我们可以一起重新开始。"她说，"一起追求我们的梦想。"

那一刻，我突然意识到，也许，我真的可以改变。`,
  dialogue: "\"我想，也许我们可以不只是朋友？\"",
  speaker: "我",
  backgroundDescription: "coffee shop, deep sharing, two people sharing dreams, emotional connection, hopeful atmosphere",
  choices: [
    { id: "8_c", text: "\"我想……不只是朋友\"", sentiment: "romantic" },
    { id: "8_d", text: "\"好，朋友也很好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_9_TRANSITION_A: SceneData = {
  narrative: `
我们终于到了做决定的时候。不是匆忙的，而是经过深思熟虑的。

那是一个周末的下午，我们坐在公园的长椅上，看着夕阳慢慢落下。

"你知道吗？"她说，"我一直在想，如果那天晚上你敲门了，现在会是什么样子？"

"什么意思？"我问。

"也许，我们不会像现在这样。"她说，"也许，我们会更早地了解彼此，也许，我们不会这么小心翼翼。"

"那你觉得，现在这样好吗？"我问。

"好。"她说，"因为我们现在是真正的朋友，而不是因为那700块钱。"

那一刻，我突然意识到，也许，这就是最好的开始。`,
  dialogue: "\"我想，也许我们可以不只是朋友？\"",
  speaker: "我",
  backgroundDescription: "park bench, sunset, two people at decision point, peaceful and emotional moment",
  choices: [
    { id: "9_a", text: "握住她的手", sentiment: "romantic" },
    { id: "9_b", text: "保持距离，慢慢来", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_9_TRANSITION_B: SceneData = {
  narrative: `
我们之间的关系面临着一个考验。不是外部的，而是内部的。

那是一个雨夜，我们坐在咖啡店的窗边，看着外面的雨滴打在玻璃上。

"你知道吗？"她突然说，"我一直在想，我们之间到底是什么关系？"

"什么意思？"我问。

"我们不是朋友，也不是恋人。"她说，"我们之间有一种特殊的东西，一种我从来没有体验过的东西。"

"那是什么？"我问。

"我不知道。"她说，"但我想，也许，我们应该给它一个名字。"

那一刻，我突然意识到，也许，这就是最好的开始。`,
  dialogue: "\"我想，也许我们可以不只是朋友？\"",
  speaker: "我",
  backgroundDescription: "coffee shop window, rainy night, two people facing internal test, emotional and reflective atmosphere",
  choices: [
    { id: "9_c", text: "\"我想……不只是朋友\"", sentiment: "romantic" },
    { id: "9_d", text: "\"朋友也很好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

// ============================================================================
// 更多共享场景（第4-9层）
// ============================================================================

export const SCENE_4A_DEEP_CONVERSATION: SceneData = {
  narrative: `
我们开始深入交谈。不是表面的寒暄，而是真正的对话。

她告诉我，她喜欢画画，喜欢看日落，喜欢在深夜听音乐。她告诉我，她画的第一幅画是给妈妈的生日礼物，画的是她们家的小花园，那时候她还在上小学。她最喜欢的日落是在海边看到的，那时候她刚失恋，一个人坐在沙滩上，看着太阳慢慢沉入海平面，眼泪和海水混在一起。她深夜听的音乐总是很悲伤，她说，悲伤的音乐让她觉得不那么孤独。

我也开始告诉她我的故事。我的工作，我的孤独，我的恐惧。那些我从未对任何人说过的话，在她面前，却变得那么容易说出口。`,
  dialogue: "\"也许，我们可以成为真正的朋友？\"",
  speaker: "琳",
  backgroundDescription: "coffee shop, deep conversation, two people opening up, intimate atmosphere",
  choices: [
    { id: "4a_a", text: "\"我想……不只是朋友\"", sentiment: "romantic" },
    { id: "4a_b", text: "\"好，朋友也很好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_4B_MUTUAL_UNDERSTANDING: SceneData = {
  narrative: `
那是一个周末的下午，我们坐在公园的长椅上，看着夕阳慢慢落下。夕阳把天空染成橘红色，很美。

我们聊着彼此的工作，聊着彼此的生活，聊着那些不敢对别人说的话。我发现，我们有很多相似的地方。我们都喜欢安静，都喜欢独处，都喜欢在深夜思考。

"你知道吗？"她突然说，"我一直在想，如果那天晚上你敲门了，现在会是什么样子？"

"什么意思？"我问。

"也许，我们不会像现在这样。"她说，"也许，我们会更早地了解彼此，也许，我们不会这么小心翼翼。"

"那你觉得，现在这样好吗？"我问。

"好。"她说，"因为我们现在是真正的朋友，而不是因为那700块钱。我们是真正了解彼此的人。"`,
  dialogue: "\"我想，也许我们可以不只是朋友？\"",
  speaker: "我",
  backgroundDescription: "park bench, sunset, two people understanding each other, peaceful and emotional moment, mutual recognition",
  choices: [
    { id: "4b_a", text: "\"我想……不只是朋友\"", sentiment: "romantic" },
    { id: "4b_b", text: "\"朋友也很好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_5A_RELATIONSHIP_GROWTH: SceneData = {
  narrative: `
我们开始在公司食堂一起吃饭。不是刻意的，而是自然而然的。

她总是点那家店的麻辣烫，我则总是点那家店的盖浇饭。我们坐在同一张桌子旁，聊着工作，聊着生活，聊着那些不敢对别人说的话。

有一天，她突然说："你知道吗？我发现我们有很多共同点。我们都喜欢安静，都喜欢独处，都喜欢在深夜思考。"

"什么意思？"我问。

"也许，我们不只是偶然相遇。"她说，"也许，我们注定要认识彼此。也许，我们可以不只是朋友？"

那一刻，我突然意识到，也许，我真的可以改变。也许，我们可以不只是朋友。`,
  dialogue: "\"我想，也许我们可以不只是朋友？\"",
  speaker: "我",
  backgroundDescription: "company cafeteria, lunch time, two people eating together, casual conversation, growing intimacy, recognition of connection",
  choices: [
    { id: "5a_a", text: "\"我想……不只是朋友\"", sentiment: "romantic" },
    { id: "5a_b", text: "\"朋友也很好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_5B_EMOTIONAL_CONNECTION: SceneData = {
  narrative: `
我们开始每天聊天。从早安到晚安，从工作到生活，从天气到心情。手机成了我们之间最重要的联系。

有一天，她发了一张照片给我。是她画的画，画的是窗外的夕阳。夕阳把天空染成橘红色，很美。

"好看吗？"她问。

"好看。"我说，"你画得很好。"

"其实，我画这幅画的时候，在想你。"她说，"在想，如果那天晚上你敲门了，现在会是什么样子？在想，我们会不会像现在这样，每天聊天，分享彼此的生活。"

我的心跳瞬间加速。她也在想我吗？她也在想我们的未来吗？`,
  dialogue: "\"我想，也许我们可以不只是朋友？\"",
  speaker: "我",
  backgroundDescription: "phone screen showing artwork, sunset painting, emotional message exchange, growing intimacy",
  choices: [
    { id: "5b_a", text: "\"我想……不只是朋友\"", sentiment: "romantic" },
    { id: "5b_b", text: "\"朋友也很好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_6A_TRUST_BUILDING: SceneData = {
  narrative: `
那是一个雨夜，我们坐在咖啡店的窗边，看着外面的雨滴打在玻璃上。店里只有我们两个人，音乐很轻，像是背景音。

"其实，我一直想问你一个问题。"她突然说，声音很轻，"你为什么会相信我？"

"什么意思？"我问。

"你明明可以就这样消失。"她说，"但你选择了相信我。为什么？"

我沉默了很久。咖啡的热气在我们之间升腾，模糊了视线。

"因为我想，也许，我们之间还有可能。"我说，声音很轻，"也许，我们不只是陌生人。也许，我们可以不只是朋友？"`,
  dialogue: "\"我想，也许我们可以不只是朋友？\"",
  speaker: "我",
  backgroundDescription: "coffee shop window, rainy night, two people building trust, intimate and warm atmosphere, vulnerability shared",
  choices: [
    { id: "6a_a", text: "握住她的手", sentiment: "romantic" },
    { id: "6a_b", text: "\"好，朋友也很好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_6B_INTIMACY_DEEPEN: SceneData = {
  narrative: `
我们开始一起做更多的事情。不是刻意的，而是自然而然的。

我们一起去看电影，一起去逛书店，一起去公园散步。我们开始了解彼此的喜好，开始适应彼此的习惯，开始享受彼此的陪伴。

有一天，我们坐在公园的长椅上，看着夕阳慢慢落下。夕阳把天空染成橘红色，很美。

"你知道吗？"她说，"我从来没有想过，我会和一个人这样相处。我从来没有想过，我会和一个人分享这么多。"

"什么意思？"我问。

"我觉得，我们之间有一种特殊的联系。"她说，"一种我从来没有体验过的联系。一种让我感到安全，感到被理解的联系。"

"我也是。"我说，"我想，也许我们可以不只是朋友？"`,
  dialogue: "\"我……也想。\"",
  speaker: "琳",
  backgroundDescription: "park bench, sunset, two people sharing activities, growing intimacy, peaceful moment, deep connection",
  choices: [
    { id: "6b_a", text: "握住她的手", sentiment: "romantic" },
    { id: "6b_b", text: "\"朋友也很好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_7A_FINAL_DECISION: SceneData = {
  narrative: `
那是一个深夜，我们坐在咖啡店的角落里，周围已经没有人了。店里的灯光很暗，只有我们这一桌还亮着。

"你知道吗？"她突然说，"我一直在想，我们之间到底是什么关系？"

"什么意思？"我问。

"我们不是朋友，也不是恋人。"她说，"我们之间有一种特殊的东西，一种我从来没有体验过的东西。一种让我感到困惑，也让我感到期待的东西。"

"那是什么？"我问。

"我不知道。"她说，"但我想，也许，我们应该给它一个名字。也许，我们应该试试看，我们能不能不只是朋友？"

那一刻，我突然意识到，也许，这就是最好的开始。`,
  dialogue: "\"我想，也许我们可以不只是朋友？\"",
  speaker: "我",
  backgroundDescription: "coffee shop corner, late night, two people at final decision point, intimate and emotional atmosphere, defining moment",
  choices: [
    { id: "7a_a", text: "握住她的手", sentiment: "romantic" },
    { id: "7a_b", text: "保持距离，慢慢来", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_7B_RELATIONSHIP_DEFINE: SceneData = {
  narrative: `
那是一个雨夜，我们坐在咖啡店的窗边，看着外面的雨滴打在玻璃上。雨声很轻，像是背景音。

"你知道吗？"她突然说，"我一直在想，我们之间到底是什么关系？"

"什么意思？"我问。

"我们不是朋友，也不是恋人。"她说，"我们之间有一种特殊的东西，一种我从来没有体验过的东西。一种让我感到困惑，也让我感到期待的东西。"

"那是什么？"我问。

"我不知道。"她说，"但我想，也许，我们应该给它一个名字。也许，我们应该试试看，我们能不能不只是朋友？也许，我们可以给它一个新的定义。"

那一刻，我突然意识到，也许，这就是最好的开始。`,
  dialogue: "\"我想，也许我们可以不只是朋友？\"",
  speaker: "我",
  backgroundDescription: "coffee shop window, rainy night, two people defining relationship, emotional and reflective atmosphere, naming moment",
  choices: [
    { id: "7b_a", text: "握住她的手", sentiment: "romantic" },
    { id: "7b_b", text: "保持距离，慢慢来", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_8A_FUTURE_TOGETHER: SceneData = {
  narrative: `
我们开始讨论未来。不是那种虚无缥缈的未来，而是具体的，可以实现的未来。

"我想，也许我们可以一起做点什么。"她说，"比如，一起去看日落，一起去海边，一起去听音乐会。"

"好。"我说，"我也想。"

"那我们就这么定了。"她笑了，那笑容很轻，但很真实，"从明天开始，我们每周六下午见面，好吗？"

"好。"我说，心里涌起一阵暖流。

"还有，"她说，"我想，也许我们可以不只是朋友？我想和你一起看未来。"`,
  dialogue: "\"我想和你一起看未来。\"",
  speaker: "琳",
  backgroundDescription: "coffee shop, future planning, two people making plans together, warm and hopeful atmosphere",
  choices: [
    { id: "8a_a", text: "\"我想……不只是朋友\"", sentiment: "romantic" },
    { id: "8a_b", text: "\"我们一步一步来\"", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_8B_COMMITMENT: SceneData = {
  narrative: `
那是一个周末的下午，我们坐在咖啡店里，讨论着未来。阳光从窗户照进来，洒在我们身上，很温暖。

"你知道吗？"有一天她对我说，"我觉得我们之间的关系很奇怪。"

"什么意思？"我问。

"我不知道我们是什么。"她说，"朋友？恋人？还是只是……互相取暖的人？"

"我也不知道。"我说，"但我想，也许，我们应该试试看。也许，我们可以给它一个新的定义。也许，我们可以不只是朋友？"

"好。"她说，"我们试试看。我想，也许我们可以一起看未来。"

那一刻，我突然意识到，也许，这就是最好的开始。`,
  dialogue: "\"我想和你一起看未来。\"",
  speaker: "琳",
  backgroundDescription: "coffee shop, afternoon, commitment moment, two people making promise, emotional moment, future vision",
  choices: [
    { id: "8b_a", text: "握住她的手", sentiment: "romantic" },
    { id: "8b_b", text: "保持距离，慢慢来", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_9A_FINAL_MOMENT: SceneData = {
  narrative: `
我们终于到了最后的时刻。我知道，如果我不说，我们永远不会有结果。但如果我说了，我们可能会变得陌生。

我站在咖啡店门口，看着她离开的背影，心里五味杂陈。她的背影在夕阳下显得很单薄，很孤独。

我想追上去，告诉她我想说的话。但我的脚像是被钉在了地上，怎么也动不了。

"算了。"我对自己说，"也许，这样就好。"

但我知道，我后悔了。我知道，我错过了什么。我知道，如果我不说，我会后悔一辈子。

我拿出手机，给她发了条消息："我想和你聊聊。关于我们，关于未来，关于我想对你说的话。"`,
  dialogue: "\"好，什么时候？\"",
  speaker: "琳",
  backgroundDescription: "coffee shop entrance, evening, protagonist watching her leave, final chance, emotional decision moment",
  choices: [
    { id: "9a_a", text: "立即回复，约她见面", sentiment: "bold" },
    { id: "9a_b", text: "犹豫一下，再回复", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_9B_NEW_START: SceneData = {
  narrative: `
那是一个周末的下午，我们坐在咖啡店里，讨论着我们的未来。阳光从窗户照进来，洒在我们身上，很温暖。

"你知道吗？"她说，"我觉得我们之间的关系很奇怪。"

"什么意思？"我问。

"我不知道我们是什么。"她说，"朋友？恋人？还是只是……互相取暖的人？"

"我也不知道。"我说，"但我想，也许，我们应该试试看。也许，我们可以给它一个新的定义。也许，我们可以不只是朋友？也许，我们可以重新开始，从今天开始，从这一刻开始。"

"好。"她说，"我们试试看。我想，也许我们可以一起看未来。"

那一刻，我突然意识到，也许，这就是最好的开始。`,
  dialogue: "\"我想和你一起看未来。\"",
  speaker: "琳",
  backgroundDescription: "coffee shop, afternoon, new start, two people starting fresh, warm and hopeful atmosphere, future vision",
  choices: [
    { id: "9b_a", text: "握住她的手", sentiment: "romantic" },
    { id: "9b_b", text: "保持距离，慢慢来", sentiment: "shy" }
  ],
  isEnding: false
};

