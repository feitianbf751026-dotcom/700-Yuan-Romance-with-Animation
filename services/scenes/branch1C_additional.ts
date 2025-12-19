import { SceneData } from "../../types";

// ============================================================================
// 第4-6层场景补充（1C分支）
// ============================================================================

export const SCENE_1C_4C_GUILT_DEEPEN: SceneData = {
  narrative: `
内疚感在我心里越来越深。每次看到她的朋友圈，每次听到她的消息，我都会想起那个夜晚，想起那700块钱，想起我的逃避。

我开始失眠，开始做噩梦。梦里，我总是站在那扇门前，但永远不敢敲门。

"我到底在害怕什么？"我问自己。

也许，我害怕的不是她，而是我自己。我害怕真实的自己，害怕自己的孤独，害怕自己的懦弱。`,
  dialogue: "（我不能再这样下去了……）",
  speaker: "内心独白",
  backgroundDescription: "empty apartment at night, protagonist lying on bed, phone screen glowing, guilt and insomnia",
  choices: [
    { id: "1c_4c_a", text: "决定主动联系她，道歉", sentiment: "bold" },
    { id: "1c_4c_b", text: "继续逃避，试图忘记", sentiment: "cold" },
    { id: "1c_4c_c", text: "开始观察她的动态，寻找机会", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1C_4D_SEEK_FORGIVE: SceneData = {
  narrative: `
我决定寻求她的原谅。我知道，这很难，但我必须这么做。

我给她发了条消息："我想为那天的事道歉。我知道这很突然，但我真的想和你聊聊。"

发送。

我盯着屏幕，心跳加速。她会回吗？她会原谅我吗？

三天后，她回了："好，我们聊聊。"

那一刻，我突然意识到，也许，我还有机会。`,
  dialogue: "\"谢谢你愿意给我这个机会。\"",
  speaker: "我",
  backgroundDescription: "phone screen, message exchange, seeking forgiveness, emotional moment",
  choices: [
    { id: "1c_4d_a", text: "立即回复，约她见面", sentiment: "bold" },
    { id: "1c_4d_b", text: "犹豫一下，再回复", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1C_4E_ACCEPTANCE: SceneData = {
  narrative: `
我选择了接纳现实。我知道，也许我们永远不会有结果，但我必须接受这个事实。

我开始尝试忘记她，开始尝试重新生活。我删除了她的联系方式，删除了所有关于她的记忆。

但我知道，我忘不掉的。那个夜晚，那700块钱，那个我永远无法忘记的她，会一直跟着我，像影子一样。

一个月后，我在公司楼下看到了一个熟悉的身影。米色风衣，茉莉花香。

是她。

我的心跳瞬间加速。这是机会吗？还是又一次错过？`,
  dialogue: "（如果再给我一次机会……）",
  speaker: "内心独白",
  backgroundDescription: "company building entrance, morning, protagonist seeing familiar figure, second chance dawning",
  choices: [
    { id: "1c_4e_a", text: "鼓起勇气，主动上前", sentiment: "bold" },
    { id: "1c_4e_b", text: "还是不敢，默默走开", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1C_5B_SLOW_APPROACH: SceneData = {
  narrative: `
我选择了缓慢接近。我知道，也许这样更好。也许，我们真的需要时间。

我开始每天和她聊天，开始了解她的生活，开始试图从这些碎片中拼凑出她的样子。

我发现她喜欢画画，喜欢看日落，喜欢在深夜听音乐。我发现她工作很努力，经常加班到很晚。我发现她似乎很孤独，朋友圈里很少有其他人的照片。

我开始想象，如果那天我敲门了，现在会是什么样子？我们会成为朋友吗？还是只是陌生人？`,
  dialogue: "\"也许，我们可以成为朋友？\"",
  speaker: "我",
  backgroundDescription: "phone screen, daily chat, slow approach, building connection",
  choices: [
    { id: "1c_5b_a", text: "继续聊天，慢慢建立关系", sentiment: "neutral" },
    { id: "1c_5b_b", text: "约她见面，加快进度", sentiment: "bold" }
  ],
  isEnding: false
};

export const SCENE_1C_5C_BARRIER: SceneData = {
  narrative: `
我们之间似乎有一道无形的墙。无论我怎么努力，都无法跨越。

我开始怀疑，是不是我做错了什么？是不是我不够好？是不是我们真的不适合？

"你知道吗？"有一天她对我说，"我觉得我们之间的关系很奇怪。"

"什么意思？"我问。

"我不知道我们是什么。"她说，"朋友？陌生人？还是只是……互相取暖的人？"

那一刻，我突然意识到，也许，我们真的需要重新定义我们的关系。`,
  dialogue: "\"也许，我们应该重新开始？\"",
  speaker: "我",
  backgroundDescription: "coffee shop, two people with barrier between them, uncertain atmosphere",
  choices: [
    { id: "1c_5c_a", text: "尝试打破这道墙", sentiment: "bold" },
    { id: "1c_5c_b", text: "接受现实，保持距离", sentiment: "sad" }
  ],
  isEnding: false
};

export const SCENE_1C_5D_BREAKTHROUGH: SceneData = {
  narrative: `
我们终于突破了那道墙。不是突然的，而是慢慢的，一点一点的。

我开始告诉她我的故事。我的工作，我的孤独，我的恐惧。那些我从未对任何人说过的话，在她面前，却变得那么容易说出口。

她也开始告诉我她的故事。她的工作，她的孤独，她的恐惧。那些她从未对任何人说过的话，在我面前，也变得那么容易说出口。

"你知道吗？"有一天她对我说，"我觉得我们很像。"

"什么意思？"我问。

"我们都是孤独的人。"她说，"但也许，我们可以不再孤独。"`,
  dialogue: "\"也许，我们可以成为朋友？\"",
  speaker: "我",
  backgroundDescription: "coffee shop, breakthrough moment, two people understanding each other, warm atmosphere",
  choices: [
    { id: "1c_5d_a", text: "\"我想……不只是朋友\"", sentiment: "romantic" },
    { id: "1c_5d_b", text: "\"好，朋友也很好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1C_6B_TRUST_TEST: SceneData = {
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
    { id: "1c_6b_a", text: "握住她的手", sentiment: "romantic" },
    { id: "1c_6b_b", text: "保持距离，慢慢来", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1C_6C_UNDERSTANDING: SceneData = {
  narrative: `
我们终于理解了彼此。不是表面的，而是深层的。

我开始理解她的孤独，她的恐惧，她的渴望。她也开始理解我的孤独，我的恐惧，我的渴望。

"你知道吗？"有一天她对我说，"我觉得我们很像。"

"什么意思？"我问。

"我们都是孤独的人。"她说，"但也许，我们可以不再孤独。"

那一刻，我突然意识到，也许，我真的可以改变。也许，我真的可以幸福。`,
  dialogue: "\"谢谢你，琳。\"",
  speaker: "我",
  backgroundDescription: "coffee shop, deep understanding, two people connecting, warm atmosphere",
  choices: [
    { id: "1c_6c_a", text: "\"也许，我们可以不只是朋友？\"", sentiment: "romantic" },
    { id: "1c_6c_b", text: "\"朋友也很好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1C_6D_DECISION: SceneData = {
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
    { id: "1c_6d_a", text: "握住她的手", sentiment: "romantic" },
    { id: "1c_6d_b", text: "保持距离，慢慢来", sentiment: "shy" }
  ],
  isEnding: false
};

// ============================================================================
// 第7-9层场景补充（1C分支）
// ============================================================================

export const SCENE_1C_7B_CONFESSION_MOMENT: SceneData = {
  narrative: `
我们坐在公司楼下的长椅上，夜色很浓，路灯的光很暗。我把所有的事情都说了出来，每一个字都像是从心底挖出来的。

"其实，我想先坦白一件事。"我说，声音很轻，"那天晚上，我到了门口，但我逃跑了。我保留了你的联系方式，但我从来没有勇气联系你。我一直在观察你，一直在想，如果那天我敲门了，现在会是什么样子？"

她安静地听完，没有说话。空气很安静，安静到我能听到自己的心跳声。

"我明白了。"她终于开口，声音很轻，"你观察我，是因为你想了解我，但又不敢直接接近我，对吗？"

我点了点头，不敢看她。

"其实，我也一直在想。"她说，"在想，如果你真的来了，现在会是什么样子？在想，我们会不会像现在这样，坐在这里，聊着彼此的故事。"`,
  dialogue: "\"所以，我们都在等一个机会？\"",
  speaker: "我",
  backgroundDescription: "company building entrance, park bench at night, two people sitting, street lights, emotional confession, vulnerable moment",
  choices: [
    { id: "1c_7b_a", text: "\"那现在，我们可以重新开始吗？\"", sentiment: "bold" },
    { id: "1c_7b_b", text: "\"我……不知道\"", sentiment: "shy" },
    { id: "1c_7b_c", text: "\"我想先做朋友\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1C_7C_FRIENDSHIP_CONFIRM: SceneData = {
  narrative: `
我们选择了保持距离，只做朋友。

从那天起，我们开始经常见面。有时候是咖啡店，有时候是公司食堂，有时候是下班后的散步。公园里的路灯已经亮了，昏黄的光洒在我们身上，把影子拉得很长。

我们并排走着，中间隔着一点距离，但那种距离让人感到安全，也让人感到温暖。有时候我们会聊几句，有时候只是安静地走着，听着彼此的脚步声。

"你知道吗？"有一天她对我说，声音很轻，但很坚定，"我发现我们有很多共同点。我们都喜欢安静，都喜欢独处，都喜欢在深夜思考。我们都害怕被拒绝，都害怕被伤害，都害怕暴露真实的自己。"

"什么意思？"我问。

"也许，我们不只是偶然相遇。"她说，"也许，我们注定要认识彼此。也许，我们可以不只是朋友？"

那一刻，我突然意识到，也许，我们都在寻找同样的东西。`,
  dialogue: "\"我想，也许我们可以不只是朋友？\"",
  speaker: "我",
  backgroundDescription: "evening walk in park, two people walking side by side, sunset colors, peaceful friendship, mutual recognition, growing connection",
  choices: [
    { id: "1c_7c_a", text: "\"我想……不只是朋友\"", sentiment: "romantic" },
    { id: "1c_7c_b", text: "\"朋友也很好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1C_7D_DISTANCE_KEEP: SceneData = {
  narrative: `
我选择了保持距离。我知道，也许这样更好。也许，我们真的不适合。

但每次看到她，我的心都会跳得很快。每次听到她的声音，我都会感到温暖。每次和她聊天，我都会忘记时间。

我开始怀疑，我是不是做错了选择？

一个月后，她突然发消息给我："我想和你聊聊。"

我的心跳瞬间加速。她要说什么？`,
  dialogue: "\"好，什么时候？\"",
  speaker: "我",
  backgroundDescription: "phone screen, message notification, anticipation and uncertainty",
  choices: [
    { id: "1c_7d_a", text: "立即回复，约她见面", sentiment: "bold" },
    { id: "1c_7d_b", text: "犹豫一下，再回复", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1C_7E_COMPLICATED_FEEL: SceneData = {
  narrative: `
我们的关系变得很复杂。不是朋友，也不是恋人，而是某种介于两者之间的东西。

有时候，我们会像恋人一样亲密。有时候，我们会像朋友一样保持距离。有时候，我们会像陌生人一样尴尬。

我不知道我们到底是什么关系，也不知道我们想要什么。

"你知道吗？"有一天她对我说，"我觉得我们之间的关系很奇怪。"

"什么意思？"我问。

"我不知道我们是什么。"她说，"朋友？恋人？还是只是……互相取暖的人？"`,
  dialogue: "\"我也不知道。\"",
  speaker: "我",
  backgroundDescription: "coffee shop, two people in complicated relationship, uncertain atmosphere",
  choices: [
    { id: "1c_7e_a", text: "\"也许，我们应该定义一下我们的关系\"", sentiment: "bold" },
    { id: "1c_7e_b", text: "\"也许，这样就好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1C_8B_FEAR_FACE: SceneData = {
  narrative: `
我选择了面对恐惧。我知道，如果我不说，我们永远不会有结果。

"其实，我一直很害怕。"我说，声音很轻，"我害怕被拒绝，害怕被伤害，害怕暴露真实的自己。但我想，也许，我应该勇敢一次。"

她看着我，眼神很复杂。有理解，有同情，还有某种我读不懂的东西。

"你知道吗？"她说，"我也很害怕。我害怕你会离开，我害怕我们会变得陌生，我害怕这段关系会突然结束。"

"那我们怎么办？"我问。

"我不知道。"她说，"但我想，也许，我们应该试试看。"`,
  dialogue: "\"好，我们试试看。\"",
  speaker: "我",
  backgroundDescription: "coffee shop, two people facing fears together, emotional moment",
  choices: [
    { id: "1c_8b_a", text: "握住她的手", sentiment: "romantic" },
    { id: "1c_8b_b", text: "保持距离，慢慢来", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1C_8D_PAST_CONFESS: SceneData = {
  narrative: `
我选择了坦白过去。我知道，如果我不说，我们永远不会有结果。

"其实，我想先坦白一件事。"我说，声音很轻，"那天晚上，我到了门口，但我逃跑了。我保留了你的联系方式，但我从来没有勇气联系你。我一直在观察你，一直在想，如果那天我敲门了，现在会是什么样子？"

她安静地听完，没有说话。空气很安静，安静到我能听到自己的心跳声。

"我明白了。"她终于开口，声音很轻，"你观察我，是因为你想了解我，但又不敢直接接近我，对吗？"

我点了点头，不敢看她。

"其实，我也一直在想。"她说，"在想，如果你真的来了，现在会是什么样子？在想，我们会不会像现在这样，坐在这里，聊着彼此的故事。在想，我们会不会不只是朋友？"`,
  dialogue: "\"所以，我们都在等一个机会？\"",
  speaker: "我",
  backgroundDescription: "coffee shop, full confession, two people understanding each other, emotional moment, past revealed, future possibility",
  choices: [
    { id: "1c_8d_a", text: "\"那现在，我们可以重新开始吗？\"", sentiment: "bold" },
    { id: "1c_8d_b", text: "\"我……还是有点害怕\"", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1C_8E_FUTURE_PLAN: SceneData = {
  narrative: `
那是一个周末的下午，我们坐在咖啡店里，讨论着我们的未来。阳光从窗户照进来，洒在我们身上，很温暖。

"我想，也许我们可以一起做点什么。"她说，"比如，一起去看日落，一起去海边，一起去听音乐会。我想，也许我们可以不只是朋友？我想和你一起看未来。"

"我也想。"我说，声音很轻，"我想和你一起看未来。我想和你一起做很多事。我想，也许我们可以重新开始，从今天开始，从这一刻开始。"

"好。"她说，"我们试试看。我想，也许我们可以一起变得更好。"

那一刻，我突然意识到，也许，我真的可以改变。也许，我真的可以幸福。`,
  dialogue: "\"我想和你一起看未来。\"",
  speaker: "琳",
  backgroundDescription: "coffee shop, afternoon, two people planning future together, warm and hopeful atmosphere, future vision, commitment moment",
  choices: [
    { id: "1c_8e_a", text: "握住她的手", sentiment: "romantic" },
    { id: "1c_8e_b", text: "保持距离，慢慢来", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1C_8F_FINAL_HESITATION: SceneData = {
  narrative: `
我选择了最后犹豫。我知道，如果我不说，我们永远不会有结果。但如果我说了，我们可能会变得陌生。

我站在咖啡店门口，看着她离开的背影，心里五味杂陈。

我想追上去，告诉她我想说的话。但我的脚像是被钉在了地上，怎么也动不了。

"算了。"我对自己说，"也许，这样就好。"

但我知道，我后悔了。我知道，我错过了什么。`,
  dialogue: "（如果再给我一次机会……）",
  speaker: "内心独白",
  backgroundDescription: "coffee shop entrance, protagonist watching her leave, regret and hesitation",
  choices: [
    { id: "1c_8f_a", text: "追上去，告诉她我想说的话", sentiment: "bold" },
    { id: "1c_8f_b", text: "放弃，接受现实", sentiment: "sad" }
  ],
  isEnding: false
};

export const SCENE_1C_9D_RELATIONSHIP_DECISION: SceneData = {
  narrative: `
我们终于决定定义我们的关系。不是朋友，也不是恋人，而是某种介于两者之间的东西。

"你知道吗？"她说，"我觉得我们之间的关系很奇怪。"

"什么意思？"我问。

"我不知道我们是什么。"她说，"朋友？恋人？还是只是……互相取暖的人？"

"我也不知道。"我说，"但我想，也许，我们应该试试看。"

"好。"她说，"我们试试看。"

那一刻，我突然意识到，也许，这就是最好的开始。`,
  dialogue: "\"谢谢你，琳。\"",
  speaker: "我",
  backgroundDescription: "coffee shop, two people defining relationship, warm and hopeful atmosphere",
  choices: [
    { id: "1c_9d_a", text: "握住她的手", sentiment: "romantic" },
    { id: "1c_9d_b", text: "保持距离，慢慢来", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1C_9E_FINAL_CHOICE: SceneData = {
  narrative: `
我们终于到了最后的时刻。我知道，如果我不说，我们永远不会有结果。但如果我说了，我们可能会变得陌生。

我站在咖啡店门口，看着她离开的背影，心里五味杂陈。

我想追上去，告诉她我想说的话。但我的脚像是被钉在了地上，怎么也动不了。

"算了。"我对自己说，"也许，这样就好。"

但我知道，我后悔了。我知道，我错过了什么。

我拿出手机，给她发了条消息："我想和你聊聊。"`,
  dialogue: "\"好，什么时候？\"",
  speaker: "琳",
  backgroundDescription: "phone screen, message exchange, final chance, emotional moment",
  choices: [
    { id: "1c_9e_a", text: "立即回复，约她见面", sentiment: "bold" },
    { id: "1c_9e_b", text: "犹豫一下，再回复", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1C_9F_NEW_BEGINNING: SceneData = {
  narrative: `
我们终于决定重新开始。不是从零开始，而是从我们相遇的那一刻开始。

"你知道吗？"她说，"我觉得我们之间的关系很奇怪。"

"什么意思？"我问。

"我不知道我们是什么。"她说，"朋友？恋人？还是只是……互相取暖的人？"

"我也不知道。"我说，"但我想，也许，我们应该试试看。"

"好。"她说，"我们试试看。"

那一刻，我突然意识到，也许，这就是最好的开始。`,
  dialogue: "\"谢谢你，琳。\"",
  speaker: "我",
  backgroundDescription: "coffee shop, two people starting new beginning, warm and hopeful atmosphere",
  choices: [
    { id: "1c_9f_a", text: "握住她的手", sentiment: "romantic" },
    { id: "1c_9f_b", text: "保持距离，慢慢来", sentiment: "shy" }
  ],
  isEnding: false
};

