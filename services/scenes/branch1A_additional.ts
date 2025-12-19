import { SceneData } from "../../types";

// ============================================================================
// 第7-9层场景补充（1A分支）
// ============================================================================

export const SCENE_1A_7C_CONFESSION_MOMENT: SceneData = {
  narrative: `
我们坐在公司楼下的长椅上，夜色很浓，路灯的光很暗。我把所有的事情都说了出来，每一个字都像是从心底挖出来的。

"其实，我想先坦白一件事。"我说，声音很轻，"那天晚上，我到了门口，但我逃跑了。我删除了你的联系方式，我试图忘记你，但我做不到。"

她安静地听完，没有说话。空气很安静，安静到我能听到自己的心跳声。

"我明白了。"她终于开口，声音很轻，"你跟踪我，是因为你想了解我，但又不敢直接接近我，对吗？"

我点了点头，不敢看她。

"其实，我也一直在观察你。"她说，"在公司里，在电梯里，在食堂里。我一直在想，你会不会主动和我说话。我一直在等，等一个机会，等一个理由。"`,
  dialogue: "\"所以，我们都在等对方先开口？\"",
  speaker: "我",
  backgroundDescription: "company building entrance, park bench at night, two people sitting, street lights, emotional confession, vulnerable moment",
  choices: [
    { id: "1a_7c_a", text: "\"那现在，我们可以重新开始吗？\"", sentiment: "bold" },
    { id: "1a_7c_b", text: "\"我……不知道\"", sentiment: "shy" },
    { id: "1a_7c_c", text: "\"我想先做朋友\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1A_7D_FRIENDSHIP_CONFIRM: SceneData = {
  narrative: `
我们选择了保持距离，只做朋友。

从那天起，我们开始经常见面。有时候是咖啡店，有时候是公司食堂，有时候是下班后的散步。公园里的路灯已经亮了，昏黄的光洒在我们身上，把影子拉得很长。

我们并排走着，中间隔着一点距离，但那种距离让人感到安全，也让人感到温暖。有时候我们会聊几句，有时候只是安静地走着，听着彼此的脚步声。

"你知道吗？"有一天她对我说，声音很轻，但很坚定，"你其实不是孤独，你只是太害怕了。害怕被拒绝，害怕被伤害，害怕暴露真实的自己。"

"那你呢？"我问，"你害怕什么？"

"我也害怕。"她说，"我害怕你会离开，我害怕我们会变得陌生，我害怕这段关系会突然结束。"

那一刻，我突然意识到，也许，我们都在害怕同样的东西。`,
  dialogue: "\"我想，也许我们可以不只是朋友？\"",
  speaker: "我",
  backgroundDescription: "evening walk in park, two people walking side by side, sunset colors, peaceful friendship, growing understanding",
  choices: [
    { id: "1a_7d_a", text: "\"我想……不只是朋友\"", sentiment: "romantic" },
    { id: "1a_7d_b", text: "\"朋友也很好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1A_7E_DISTANCE_KEEP: SceneData = {
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
    { id: "1a_7e_a", text: "立即回复，约她见面", sentiment: "bold" },
    { id: "1a_7e_b", text: "犹豫一下，再回复", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1A_7F_COMPLICATED_FEEL: SceneData = {
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
    { id: "1a_7f_a", text: "\"也许，我们应该定义一下我们的关系\"", sentiment: "bold" },
    { id: "1a_7f_b", text: "\"也许，这样就好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1A_8C_FEAR_FACE: SceneData = {
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
    { id: "1a_8c_a", text: "握住她的手", sentiment: "romantic" },
    { id: "1a_8c_b", text: "保持距离，慢慢来", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1A_8D_PAST_CONFESS: SceneData = {
  narrative: `
我选择了坦白过去。我知道，如果我不说，我们永远不会有结果。

"其实，我想先坦白一件事。"我说，声音很轻，"那天晚上，我到了门口，但我逃跑了。我删除了你的联系方式，我试图忘记你，但我做不到。"

她安静地听完，没有说话。空气很安静，安静到我能听到自己的心跳声。

"我明白了。"她终于开口，声音很轻，"你跟踪我，是因为你想了解我，但又不敢直接接近我，对吗？"

我点了点头，不敢看她。

"其实，我也一直在观察你。"她说，"在公司里，在电梯里，在食堂里。我一直在想，你会不会主动和我说话。"`,
  dialogue: "\"所以，我们都在等对方先开口？\"",
  speaker: "我",
  backgroundDescription: "coffee shop, full confession, two people understanding each other, emotional moment",
  choices: [
    { id: "1a_8d_a", text: "\"那现在，我们可以重新开始吗？\"", sentiment: "bold" },
    { id: "1a_8d_b", text: "\"我……还是有点害怕\"", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1A_8E_FUTURE_PLAN: SceneData = {
  narrative: `
我们开始讨论未来。不是那种虚无缥缈的未来，而是具体的，可以实现的未来。

"我想，也许我们可以一起做点什么。"她说，"比如，一起去看日落，一起去海边，一起去听音乐会。"

"好。"我说，"我也想。"

"那我们就这么定了。"她笑了，那笑容很轻，但很真实，"从明天开始，我们每周六下午见面，好吗？"

"好。"我说，心里涌起一阵暖流。

"还有，"她说，"我想，也许我们可以不只是朋友？我想和你一起看未来。"`,
  dialogue: "\"我想和你一起看未来。\"",
  speaker: "琳",
  backgroundDescription: "coffee shop, two people planning future together, warm and hopeful atmosphere, emotional moment",
  choices: [
    { id: "1a_8e_a", text: "\"我想……不只是朋友\"", sentiment: "romantic" },
    { id: "1a_8e_b", text: "\"我们一步一步来\"", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1A_8F_FINAL_HESITATION: SceneData = {
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
    { id: "1a_8f_a", text: "追上去，告诉她我想说的话", sentiment: "bold" },
    { id: "1a_8f_b", text: "放弃，接受现实", sentiment: "sad" }
  ],
  isEnding: false
};

export const SCENE_1A_9D_RELATIONSHIP_DECISION: SceneData = {
  narrative: `
我们终于决定定义我们的关系。不是朋友，也不是恋人，而是某种介于两者之间的东西。

那是一个深夜，我们坐在咖啡店的角落里，周围已经没有人了。

"你知道吗？"她突然说，"我一直在想，我们之间到底是什么关系？"

"什么意思？"我问。

"我们不是朋友，也不是恋人。"她说，"我们之间有一种特殊的东西，一种我从来没有体验过的东西。"

"那是什么？"我问。

"我不知道。"她说，"但我想，也许，我们应该给它一个名字。"

那一刻，我突然意识到，也许，这就是最好的开始。`,
  dialogue: "\"我想，也许我们可以不只是朋友？\"",
  speaker: "我",
  backgroundDescription: "coffee shop corner, late night, two people defining relationship, intimate and emotional atmosphere",
  choices: [
    { id: "1a_9d_a", text: "握住她的手", sentiment: "romantic" },
    { id: "1a_9d_b", text: "保持距离，慢慢来", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1A_9E_FINAL_CHOICE: SceneData = {
  narrative: `
我们终于到了最后的时刻。我知道，如果我不说，我们永远不会有结果。但如果我说了，我们可能会变得陌生。

我站在咖啡店门口，看着她离开的背影，心里五味杂陈。

我想追上去，告诉她我想说的话。但我的脚像是被钉在了地上，怎么也动不了。

"算了。"我对自己说，"也许，这样就好。"

但我知道，我后悔了。我知道，我错过了什么。

我拿出手机，给她发了条消息："我想和你聊聊。关于我们，关于未来，关于我想对你说的话。"`,
  dialogue: "\"好，什么时候？\"",
  speaker: "琳",
  backgroundDescription: "coffee shop entrance, evening, protagonist watching her leave, final decision moment, emotional atmosphere",
  choices: [
    { id: "1a_9e_a", text: "立即回复，约她见面", sentiment: "bold" },
    { id: "1a_9e_b", text: "犹豫一下，再回复", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1A_9F_NEW_BEGINNING: SceneData = {
  narrative: `
我们终于决定重新开始。不是从零开始，而是从我们相遇的那一刻开始。

那是一个周末的下午，我们坐在公园的长椅上，看着夕阳慢慢落下。

"你知道吗？"她说，"我一直在想，如果那天晚上你敲门了，现在会是什么样子？"

"什么意思？"我问。

"也许，我们不会像现在这样。"她说，"也许，我们会更早地了解彼此，也许，我们不会这么小心翼翼。"

"那你觉得，现在这样好吗？"我问。

"好。"她说，"因为我们现在是真正的朋友，而不是因为那700块钱。"

那一刻，我突然意识到，也许，这就是最好的开始。`,
  dialogue: "\"我想，也许我们可以不只是朋友？\"",
  speaker: "我",
  backgroundDescription: "park bench, sunset, two people starting new beginning, peaceful and hopeful atmosphere",
  choices: [
    { id: "1a_9f_a", text: "握住她的手", sentiment: "romantic" },
    { id: "1a_9f_b", text: "保持距离，慢慢来", sentiment: "shy" }
  ],
  isEnding: false
};

