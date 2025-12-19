import { SceneData } from "../../types";

// ============================================================================
// 第7-9层场景补充（1B分支）- 新增场景
// ============================================================================

export const SCENE_1B_7B_CONFESSION_MOMENT: SceneData = {
  narrative: `
我们坐在咖啡店的角落里，夜色很浓，店里的灯光很暗。我把所有的事情都说了出来，每一个字都像是从心底挖出来的。

"其实，我想先坦白一件事。"我说，声音很轻，"那天晚上，我发了消息给你，但我其实很害怕。我害怕你会拒绝我，我害怕你会觉得我很奇怪。"

她安静地听完，没有说话。咖啡的热气在我们之间升腾，模糊了视线。

"我明白了。"她终于开口，声音很轻，"你发消息给我，是因为你想了解我，但又不敢直接接近我，对吗？"

我点了点头，不敢看她。

"其实，我也一直在想。"她说，"在想，如果你真的来了，现在会是什么样子？在想，我们会不会像现在这样，坐在这里，聊着彼此的故事。"`,
  dialogue: "\"所以，我们都在等一个机会？\"",
  speaker: "我",
  backgroundDescription: "coffee shop corner, late night, two people sitting, dim lighting, emotional confession, intimate atmosphere",
  choices: [
    { id: "1b_7c", text: "\"那现在，我们可以重新开始吗？\"", sentiment: "bold" },
    { id: "1b_7d", text: "\"我……不知道\"", sentiment: "shy" },
    { id: "1b_7e", text: "\"我想先做朋友\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1B_7C_FRIENDSHIP_CONFIRM: SceneData = {
  narrative: `
我们选择了保持距离，只做朋友。

从那天起，我们开始经常见面。有时候是咖啡店，有时候是公司食堂，有时候是下班后的散步。公园里的路灯已经亮了，昏黄的光洒在我们身上，把影子拉得很长。

我们并排走着，中间隔着一点距离，但那种距离让人感到安全，也让人感到温暖。有时候我们会聊几句，有时候只是安静地走着，听着彼此的脚步声。

"你知道吗？"有一天她对我说，声音很轻，但很坚定，"我发现我们有很多共同点。我们都喜欢安静，都喜欢独处，都喜欢在深夜思考。"

"什么意思？"我问。

"也许，我们不只是偶然相遇。"她说，"也许，我们注定要认识彼此。也许，我们可以不只是朋友？"

那一刻，我突然意识到，也许，我们都在寻找同样的东西。`,
  dialogue: "\"我想，也许我们可以不只是朋友？\"",
  speaker: "我",
  backgroundDescription: "evening walk in park, two people walking side by side, sunset colors, peaceful friendship, growing understanding, mutual recognition",
  choices: [
    { id: "1b_7f", text: "\"我想……不只是朋友\"", sentiment: "romantic" },
    { id: "1b_7g", text: "\"朋友也很好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1B_7D_DISTANCE_KEEP: SceneData = {
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
    { id: "1b_7h", text: "立即回复，约她见面", sentiment: "bold" },
    { id: "1b_7i", text: "犹豫一下，再回复", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1B_7E_COMPLICATED_FEEL: SceneData = {
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
    { id: "1b_7j", text: "\"也许，我们应该定义一下我们的关系\"", sentiment: "bold" },
    { id: "1b_7k", text: "\"也许，这样就好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1B_8B_FEAR_FACE: SceneData = {
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
    { id: "1b_8d", text: "握住她的手", sentiment: "romantic" },
    { id: "1b_8e", text: "保持距离，慢慢来", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1B_8C_PAST_CONFESS: SceneData = {
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
    { id: "1b_8f", text: "\"那现在，我们可以重新开始吗？\"", sentiment: "bold" },
    { id: "1b_8g", text: "\"我……还是有点害怕\"", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1B_8D_FUTURE_PLAN: SceneData = {
  narrative: `
我们开始讨论未来。不是那种虚无缥缈的未来，而是具体的，可以实现的未来。

"我想，也许我们可以一起做点什么。"她说，"比如，一起去看日落，一起去海边，一起去听音乐会。"

"好。"我说，"我也想。"

"那我们就这么定了。"她笑了，那笑容很轻，但很真实，"从明天开始，我们每周六下午见面，好吗？"

"好。"我说，心里涌起一阵暖流。

那一刻，我突然意识到，也许，我真的可以改变。也许，我真的可以幸福。`,
  dialogue: "\"谢谢你，琳。\"",
  speaker: "我",
  backgroundDescription: "coffee shop, two people planning future together, warm and hopeful atmosphere",
  choices: [
    { id: "1b_8h", text: "握住她的手", sentiment: "romantic" },
    { id: "1b_8i", text: "保持距离，慢慢来", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1B_8E_FINAL_HESITATION: SceneData = {
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
    { id: "1b_8j", text: "追上去，告诉她我想说的话", sentiment: "bold" },
    { id: "1b_8k", text: "放弃，接受现实", sentiment: "sad" }
  ],
  isEnding: false
};

export const SCENE_1B_9D_RELATIONSHIP_DECISION: SceneData = {
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
    { id: "1b_9g", text: "握住她的手", sentiment: "romantic" },
    { id: "1b_9h", text: "保持距离，慢慢来", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1B_9E_FINAL_CHOICE: SceneData = {
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
    { id: "1b_9i", text: "立即回复，约她见面", sentiment: "bold" },
    { id: "1b_9j", text: "犹豫一下，再回复", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1B_9F_NEW_BEGINNING: SceneData = {
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
    { id: "1b_9k", text: "握住她的手", sentiment: "romantic" },
    { id: "1b_9l", text: "保持距离，慢慢来", sentiment: "shy" }
  ],
  isEnding: false
};

