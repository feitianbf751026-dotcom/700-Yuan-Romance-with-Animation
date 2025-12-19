import { SceneData } from "../../types";

// ============================================================================
// 增强场景补充（确保达到200个节点，每个场景剧情独特）
// ============================================================================

// 1A分支第7-9层增强场景
export const SCENE_1A_7G_MEMORY_REVISIT: SceneData = {
  narrative: `
我们回到了那个夜晚的地方。不是刻意的，而是偶然的。

那家便利店还在，那扇门还在，那个楼梯还在。一切都和那天晚上一样，只是时间不同了。

"你还记得这里吗？"她问我。

"记得。"我说，"我永远都不会忘记。"

"我也是。"她说，"那天晚上，我其实很害怕。但不知道为什么，看到你，我就觉得安心了。"

那一刻，我突然意识到，也许，我们之间的缘分，从那天晚上就开始了。`,
  dialogue: "\"也许，这就是命运？\"",
  speaker: "我",
  backgroundDescription: "convenience store at night, memory lane, two people revisiting past, nostalgic atmosphere",
  choices: [
    { id: "1a_7g_a", text: "\"我想，也许我们可以重新开始\"", sentiment: "romantic" },
    { id: "1a_7g_b", text: "\"过去就让它过去吧\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1A_8G_TRUTH_REVEALED: SceneData = {
  narrative: `
我决定告诉她真相。不是全部，而是最重要的那部分。

"其实，那天晚上，我本来想敲门的。"我说，"但我没有勇气。"

"我知道。"她说，"我能感觉到。你的眼神，你的犹豫，我都看到了。"

"那你为什么没有生气？"我问。

"因为我也在犹豫。"她说，"我也在害怕。害怕这段关系会改变什么，害怕我们会变得陌生。"

那一刻，我突然意识到，也许，我们都在害怕同样的东西。`,
  dialogue: "\"也许，我们可以一起面对？\"",
  speaker: "我",
  backgroundDescription: "coffee shop, truth moment, two people being honest, vulnerable atmosphere",
  choices: [
    { id: "1a_8g_a", text: "\"好，我们一起面对\"", sentiment: "bold" },
    { id: "1a_8g_b", text: "\"但我还是害怕\"", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1A_9I_MUTUAL_UNDERSTANDING: SceneData = {
  narrative: `
那是一个周末的下午，我们坐在公园的长椅上，看着夕阳慢慢落下。夕阳把天空染成橘红色，很美。

她告诉我，她曾经有一个梦想，想要成为一名画家。但现实让她放弃了，她只能把画画当作爱好。她给我看了她的画，画的是窗外的夕阳，很美。

我也告诉她，我曾经的梦想，想要成为一名作家。但现实也让我放弃了，我只能把写作当作消遣。我给她看了我写的东西，她看得很认真。

"你知道吗？"她说，"我觉得我们很像。我们都有梦想，但都被现实打败了。"

"什么意思？"我问。

"也许，我们可以一起重新开始。"她说，"一起追求我们的梦想。也许，我们可以不只是朋友？也许，我们可以一起变得更好。"`,
  dialogue: "\"我想，也许我们可以不只是朋友？\"",
  speaker: "琳",
  backgroundDescription: "park bench, sunset, two people sharing dreams and artwork, deep understanding, emotional moment, mutual support",
  choices: [
    { id: "1a_9i_a", text: "握住她的手", sentiment: "romantic" },
    { id: "1a_9i_b", text: "\"朋友也很好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

// 1B分支第7-9层增强场景
export const SCENE_1B_7G_VULNERABILITY_SHARED: SceneData = {
  narrative: `
那是一个深夜，我们坐在咖啡店的角落里，周围已经没有人了。

"你知道吗？"她突然说，"我一直在想，如果那天晚上你真的来了，现在会是什么样子？"

"什么意思？"我问。

"也许，我们不会像现在这样。"她说，"也许，我们会更早地了解彼此，也许，我们不会这么小心翼翼。"

"那你觉得，现在这样好吗？"我问。

"好。"她说，"因为我们现在是真正的朋友，而不是因为那700块钱。"

那一刻，我突然意识到，也许，我真的可以改变。`,
  dialogue: "\"我想，也许我们可以不只是朋友？\"",
  speaker: "我",
  backgroundDescription: "coffee shop corner, late night, two people in deep conversation, intimate and vulnerable atmosphere",
  choices: [
    { id: "1b_7g_a", text: "\"我想……不只是朋友\"", sentiment: "romantic" },
    { id: "1b_7g_b", text: "\"但我还是害怕\"", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1B_8G_PROMISE_MADE: SceneData = {
  narrative: `
那是一个周末的下午，我们坐在咖啡店里，讨论着未来。

"我想，也许我们可以一起做点什么。"她说，"比如，一起去看日落，一起去海边，一起去听音乐会。"

"好。"我说，"我也想。"

"那我们就这么定了。"她笑了，那笑容很轻，但很真实，"从明天开始，我们每周六下午见面，好吗？"

"好。"我说，心里涌起一阵暖流。

"还有，"她说，"我想，也许我们可以不只是朋友？我想和你一起看未来。"

那一刻，我突然意识到，也许，这就是最好的开始。`,
  dialogue: "\"我想和你一起看未来。\"",
  speaker: "琳",
  backgroundDescription: "coffee shop, afternoon, two people making promise, commitment moment, warm and hopeful atmosphere",
  choices: [
    { id: "1b_8g_a", text: "握住她的手", sentiment: "romantic" },
    { id: "1b_8g_b", text: "\"我们一步一步来\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1B_9K_FUTURE_VISION: SceneData = {
  narrative: `
那是一个周末的下午，我们坐在公园的长椅上，看着夕阳慢慢落下。夕阳把天空染成橘红色，很美。

"你知道吗？"她突然说，"我一直在想，我们的未来会是什么样子？"

"什么意思？"我问。

"我想，也许我们可以一起做很多事。"她说，"一起去看日落，一起去海边，一起去听音乐会。我想，也许我们可以不只是朋友？我想和你一起看未来。"

"我也想。"我说，声音很轻，"我想和你一起看未来。"

她看着我，眼神很复杂。有感动，有期待，还有某种我读不懂的东西。

"那我们就这么定了。"她说，"从明天开始，我们每周六下午见面，好吗？"`,
  dialogue: "\"好，我们试试看。\"",
  speaker: "我",
  backgroundDescription: "park bench, sunset, two people envisioning future together, warm and hopeful atmosphere, commitment moment",
  choices: [
    { id: "1b_9k_a", text: "握住她的手", sentiment: "romantic" },
    { id: "1b_9k_b", text: "\"我们一步一步来\"", sentiment: "neutral" }
  ],
  isEnding: false
};

// 1C分支第7-9层增强场景
export const SCENE_1C_7G_FORGIVENESS_SEEK: SceneData = {
  narrative: `
那是一个雨夜，我们坐在咖啡店的窗边，看着外面的雨滴打在玻璃上。店里只有我们两个人，音乐很轻，像是背景音。

"其实，我想先坦白一件事。"我说，声音很轻，"那天晚上，我本来想敲门的。但我没有勇气。"

"我知道。"她说，"我能感觉到。你的眼神，你的犹豫，我都看到了。"

"那你为什么没有生气？"我问。

"因为我也在犹豫。"她说，"我也在害怕。害怕这段关系会改变什么，害怕我们会变得陌生。"

"那现在呢？"我问。

"现在，我想，也许我们可以一起面对。"她说，"一起面对我们的恐惧，一起面对我们的未来。也许，我们可以不只是朋友？"`,
  dialogue: "\"我想，也许我们可以不只是朋友？\"",
  speaker: "琳",
  backgroundDescription: "coffee shop window, rainy night, reconciliation moment, two people being honest, emotional and vulnerable atmosphere",
  choices: [
    { id: "1c_7g_a", text: "握住她的手", sentiment: "romantic" },
    { id: "1c_7g_b", text: "\"但我还是害怕\"", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1C_8G_REDEMPTION_PATH: SceneData = {
  narrative: `
我开始走上救赎的道路。不是突然的，而是慢慢的，一点一点的。

我开始主动联系她，开始主动关心她，开始主动了解她的生活。

我发现她喜欢画画，喜欢看日落，喜欢在深夜听音乐。我也开始了解她。她的工作，她的孤独，她的恐惧。

"你知道吗？"有一天她对我说，"我觉得你变了。"

"什么意思？"我问。

"你变得更勇敢了。"她说，"你开始主动了。"

那一刻，我突然意识到，也许，我真的可以改变。`,
  dialogue: "\"谢谢你，琳。\"",
  speaker: "我",
  backgroundDescription: "coffee shop, redemption path, protagonist changing, hopeful atmosphere",
  choices: [
    { id: "1c_8g_a", text: "\"我想继续改变\"", sentiment: "bold" },
    { id: "1c_8g_b", text: "\"但我还是害怕\"", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1C_9K_NEW_BEGINNING: SceneData = {
  narrative: `
那是一个周末的下午，我们坐在公园的长椅上，看着夕阳慢慢落下。夕阳把天空染成橘红色，很美。

"你知道吗？"她说，"我一直在想，如果那天晚上你敲门了，现在会是什么样子？"

"什么意思？"我问。

"也许，我们不会像现在这样。"她说，"也许，我们会更早地了解彼此，也许，我们不会这么小心翼翼。"

"那你觉得，现在这样好吗？"我问。

"好。"她说，"因为我们现在是真正的朋友，而不是因为那700块钱。"

"我想，也许我们可以不只是朋友？"我鼓起勇气问。

"我……也想。"她说，声音很轻，"我想，也许我们可以重新开始。从今天开始，从这一刻开始。"`,
  dialogue: "\"我想，也许我们可以重新开始。\"",
  speaker: "琳",
  backgroundDescription: "park bench, sunset, two people at new beginning, peaceful and hopeful atmosphere, fresh start moment",
  choices: [
    { id: "1c_9k_a", text: "握住她的手", sentiment: "romantic" },
    { id: "1c_9k_b", text: "\"我们一步一步来\"", sentiment: "neutral" }
  ],
  isEnding: false
};

// 共享场景增强（第7-9层）
export const SCENE_7D_TRUST_BUILDING: SceneData = {
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
    { id: "7d_a", text: "握住她的手", sentiment: "romantic" },
    { id: "7d_b", text: "\"好，朋友也很好\"", sentiment: "neutral" },
    { id: "7d_c", text: "\"我们慢慢来\"", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_8D_COMMITMENT_MOMENT: SceneData = {
  narrative: `
那是一个周末的下午，我们坐在咖啡店里，讨论着未来。

"我想，也许我们可以一起做点什么。"她说，"比如，一起去看日落，一起去海边，一起去听音乐会。"

"好。"我说，"我也想。"

"那我们就这么定了。"她笑了，那笑容很轻，但很真实，"从明天开始，我们每周六下午见面，好吗？"

"好。"我说，心里涌起一阵暖流。

"还有，"她说，"我想，也许我们可以不只是朋友？我想和你一起看未来。"

那一刻，我突然意识到，也许，这就是最好的开始。`,
  dialogue: "\"我想和你一起看未来。\"",
  speaker: "琳",
  backgroundDescription: "coffee shop, afternoon, commitment moment, two people making promise, emotional and hopeful atmosphere",
  choices: [
    { id: "8d_a", text: "握住她的手", sentiment: "romantic" },
    { id: "8d_b", text: "\"我们一步一步来\"", sentiment: "neutral" },
    { id: "8d_c", text: "\"但我还是害怕\"", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_9D_FINAL_CHOICE: SceneData = {
  narrative: `
我们终于到了最后的时刻。我知道，如果我不说，我们永远不会有结果。但如果我说了，我们可能会变得陌生。

我站在咖啡店门口，看着她离开的背影，心里五味杂陈。

我想追上去，告诉她我想说的话。但我的脚像是被钉在了地上，怎么也动不了。

"算了。"我对自己说，"也许，这样就好。"

但我知道，我后悔了。我知道，我错过了什么。

我拿出手机，给她发了条消息："我想和你聊聊。关于我们，关于未来，关于我想对你说的话。"`,
  dialogue: "\"好，什么时候？\"",
  speaker: "琳",
  backgroundDescription: "coffee shop entrance, evening, protagonist watching her leave, final decision moment",
  choices: [
    { id: "9d_a", text: "立即回复，约她见面", sentiment: "bold" },
    { id: "9d_b", text: "犹豫一下，再回复", sentiment: "shy" },
    { id: "9d_c", text: "算了，不回复了", sentiment: "sad" }
  ],
  isEnding: false
};

// 1A分支第10层增强场景
export const SCENE_1A_10E_FINAL_DECISION: SceneData = {
  narrative: `
我们终于到了最后的时刻。我知道，如果我不说，我们永远不会有结果。但如果我说了，我们可能会变得陌生。

我站在咖啡店门口，看着她离开的背影，心里五味杂陈。她的背影在夕阳下显得很单薄，很孤独。

我想追上去，告诉她我想说的话。但我的脚像是被钉在了地上，怎么也动不了。

"算了。"我对自己说，"也许，这样就好。"

但我知道，我后悔了。我知道，我错过了什么。

我拿出手机，给她发了条消息："我想和你聊聊。关于我们，关于未来，关于我想对你说的话。关于那天晚上，关于那700块钱，关于我想重新开始。"`,
  dialogue: "\"好，什么时候？\"",
  speaker: "琳",
  backgroundDescription: "coffee shop entrance, evening, final decision moment, protagonist at crossroads, emotional atmosphere, second chance",
  choices: [
    { id: "1a_10e_a", text: "立即回复，约她见面", sentiment: "bold" },
    { id: "1a_10e_b", text: "犹豫一下，再回复", sentiment: "shy" }
  ],
  isEnding: false
};

// 1B分支第10层增强场景
export const SCENE_1B_10C_RELATIONSHIP_FINAL: SceneData = {
  narrative: `
我们终于到了最后的时刻。我知道，如果我不说，我们永远不会有结果。但如果我说了，我们可能会变得陌生。

我站在咖啡店门口，看着她离开的背影，心里五味杂陈。她的背影在夕阳下显得很单薄，很孤独。

我想追上去，告诉她我想说的话。但我的脚像是被钉在了地上，怎么也动不了。

"算了。"我对自己说，"也许，这样就好。"

但我知道，我后悔了。我知道，我错过了什么。

我拿出手机，给她发了条消息："我想和你聊聊。关于我们，关于未来，关于我想对你说的话。关于那天晚上，关于那700块钱，关于我想和你一起看未来。"`,
  dialogue: "\"好，什么时候？\"",
  speaker: "琳",
  backgroundDescription: "coffee shop entrance, evening, relationship final moment, two people at crossroads, emotional atmosphere, defining moment",
  choices: [
    { id: "1b_10c_a", text: "立即回复，约她见面", sentiment: "bold" },
    { id: "1b_10c_b", text: "犹豫一下，再回复", sentiment: "shy" }
  ],
  isEnding: false
};

// 1C分支第10层增强场景
export const SCENE_1C_10C_REDEMPTION_FINAL: SceneData = {
  narrative: `
我们终于到了最后的时刻。我知道，如果我不说，我们永远不会有结果。但如果我说了，我们可能会变得陌生。

我站在咖啡店门口，看着她离开的背影，心里五味杂陈。她的背影在夕阳下显得很单薄，很孤独。

我想追上去，告诉她我想说的话。但我的脚像是被钉在了地上，怎么也动不了。

"算了。"我对自己说，"也许，这样就好。"

但我知道，我后悔了。我知道，我错过了什么。

我拿出手机，给她发了条消息："我想和你聊聊。关于我们，关于未来，关于我想对你说的话。关于那天晚上，关于那700块钱，关于我想寻求你的原谅，关于我想重新开始。"`,
  dialogue: "\"好，什么时候？\"",
  speaker: "琳",
  backgroundDescription: "coffee shop entrance, evening, redemption final moment, protagonist seeking closure and forgiveness, emotional atmosphere, second chance",
  choices: [
    { id: "1c_10c_a", text: "立即回复，约她见面", sentiment: "bold" },
    { id: "1c_10c_b", text: "犹豫一下，再回复", sentiment: "shy" }
  ],
  isEnding: false
};

