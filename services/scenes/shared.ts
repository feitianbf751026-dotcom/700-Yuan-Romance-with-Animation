import { SceneData } from "../../types";

// ============================================================================
// shared 场景
// ============================================================================

export const SCENE_2_REUNION: SceneData = {
  narrative: `
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

export const SCENE_3_LUNCH: SceneData = {
  narrative: `
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

export const SCENE_2_1_AWKWARD: SceneData = {
  narrative: `
我僵硬地递过纸巾，不敢看她。手指触碰到她手背的瞬间，像是触电一样，我立刻缩了回来。

"谢谢。"她接过纸巾，声音很轻。我能感觉到她在看我，但我就是不敢抬头。

空气安静得可怕。微波炉又"叮"了一声，但这次，我们谁都没有动。

"你……"她突然开口，声音里带着一丝犹豫，"是不是那天晚上的……"

我猛地抬起头，对上了她的眼睛。那双眼睛里，有惊讶，有困惑，还有一丝我读不懂的东西。

"我……"我想说什么，但话到嘴边，却一个字也说不出来。`,
  dialogue: "（她认出来了……）",
  speaker: "内心独白",
  backgroundDescription: "convenience store, awkward moment, two people recognizing each other, tense atmosphere",
  choices: [
    { id: "2_1a", text: "承认，然后道歉", sentiment: "bold" },
    { id: "2_1b", text: "继续装傻，快速离开", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_2_2_RECOGNITION: SceneData = {
  narrative: `
"你是……那天的？"我鼓起勇气问。

她愣了一下，然后笑了。那笑容很轻，但很真实。

"嗯。"她点点头，"没想到会在这里遇到你。"

我们站在便利店里，周围是来来往往的顾客，但那一刻，世界好像只剩下我们两个人。

"那天……对不起。"我说，声音很轻，"我……"

"不用道歉。"她打断我，"其实，我也很庆幸你没进来。因为那天，我也是第一次接那种单，我也很害怕。"

我愣住了。她居然也害怕？我以为只有我一个人在害怕。`,
  dialogue: "\"那……我们能聊聊吗？\"",
  speaker: "我",
  backgroundDescription: "convenience store, recognition moment, two people understanding each other, warm atmosphere",
  choices: [
    { id: "2_2a", text: "\"好，我知道附近有家咖啡店\"", sentiment: "bold" },
    { id: "2_2b", text: "\"我……还是算了吧\"", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_2_3_ESCAPE: SceneData = {
  narrative: `
我假装不认识，拿了饭团就走。脚步很快，快得像是要逃离什么。

但我知道，我逃不掉的。那个夜晚，那700块钱，那个我永远无法忘记的她，会一直跟着我，像影子一样。

我走到门口，推开门，外面的雨还在下。我站在屋檐下，看着雨丝打在玻璃上，模糊了里面的世界。

身后传来脚步声，然后是她的声音："等等。"

我停住了脚步，但没有回头。我知道，如果回头，我就再也走不了了。`,
  dialogue: "（不能再逃了……）",
  speaker: "内心独白",
  backgroundDescription: "convenience store entrance, rainy day, protagonist hesitating, second chance",
  choices: [
    { id: "2_3a", text: "停下脚步，转过身", sentiment: "bold" },
    { id: "2_3b", text: "继续走，不回头", sentiment: "cold" }
  ],
  isEnding: false
};

export const SCENE_3_1_LUNCH_TALK: SceneData = {
  narrative: `
我们找了个靠窗的位置坐下。食堂里人声鼎沸，但我们之间的空气却像是凝固了一样。

她先开口："所以，你也在12楼？"

"嗯，技术部。"我说，声音比我想象的要平静。

"技术部啊……"她笑了笑，"我们设计部经常要和你们对接，说不定以后会经常见面。"

我们聊工作，聊生活，聊那些不敢对别人说的话。午餐时间很快就过去了，但我们谁都没有要离开的意思。

"要不……"她突然说，声音很轻，"我们以后经常一起吃饭？"`,
  dialogue: "\"好。\"",
  speaker: "我",
  backgroundDescription: "company cafeteria, lunch conversation, two people getting closer, warm atmosphere",
  choices: [
    { id: "3_1a", text: "\"我也想。\"", sentiment: "romantic" },
    { id: "3_1b", text: "\"我……需要考虑一下\"", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_3_2_REJECTION: SceneData = {
  narrative: `
"不好意思，我赶时间。"我说，声音很冷。

她的笑容僵了一下，然后点点头："没关系，理解。"

我拿起餐盘，转身就走。每一步都像是踩在刀刃上，但我没有回头。

我知道，我又一次逃跑了。就像那天晚上一样。

但这次，我知道我错过了什么。我错过了一个可能，一个机会，一个也许能改变我人生的瞬间。

那700块钱，又成了我心里一个永远的问号。`,
  dialogue: "（我又逃跑了……）",
  speaker: "内心独白",
  backgroundDescription: "company cafeteria, rejection moment, protagonist leaving, regretful atmosphere",
  choices: [
    { id: "3_2a", text: "后悔，想要回去道歉", sentiment: "bold" },
    { id: "3_2b", text: "继续逃避，彻底放弃", sentiment: "cold" }
  ],
  isEnding: false
};

export const SCENE_3_3_APOLOGY: SceneData = {
  narrative: `
"其实我想先道个歉……"我说，声音很轻，"那天晚上，我到了门口，但我逃跑了。我删除了你的联系方式，我试图忘记你，但我做不到。"

她安静地听完，没有说话。空气很安静，安静到我能听到自己的心跳声。

"我明白了。"她终于开口，声音很轻，"你跟踪我，是因为你想了解我，但又不敢直接接近我，对吗？"

我点了点头，不敢看她。

"其实，我也一直在观察你。"她说，"在公司里，在电梯里，在食堂里。我一直在想，你会不会主动和我说话。"

我们坐在食堂里，周围是嘈杂的说话声，但那一刻，世界好像只剩下我们两个人。`,
  dialogue: "\"所以，我们都在等对方先开口？\"",
  speaker: "我",
  backgroundDescription: "company cafeteria, apology moment, two people understanding each other, emotional atmosphere",
  choices: [
    { id: "3_3a", text: "\"那现在，我们可以重新开始吗？\"", sentiment: "bold" },
    { id: "3_3b", text: "\"我……还是有点害怕\"", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_2_1A_CONFESSION: SceneData = {
  narrative: `
我深吸一口气，终于抬起头看着她。

"对不起。"我说，声音很轻，"那天晚上，我到了门口，但我逃跑了。我删除了你的联系方式，我试图忘记你，但我做不到。"

她安静地听完，没有说话。空气很安静，安静到我能听到自己的心跳声。

"我明白了。"她终于开口，声音很轻，"你跟踪我，是因为你想了解我，但又不敢直接接近我，对吗？"

我点了点头，不敢看她。

"其实，我也一直在观察你。"她说，"在公司里，在电梯里，在食堂里。我一直在想，你会不会主动和我说话。"`,
  dialogue: "\"所以，我们都在等对方先开口？\"",
  speaker: "我",
  backgroundDescription: "convenience store, confession moment, two people understanding each other, emotional",
  choices: [
    { id: "2_1aa", text: "\"那现在，我们可以重新开始吗？\"", sentiment: "bold" },
    { id: "2_1ab", text: "\"我……还是有点害怕\"", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_2_1B_CONTINUE_ESCAPE: SceneData = {
  narrative: `
我继续装傻，快速离开。脚步很快，快得像是要逃离什么。

但我知道，我逃不掉的。那个夜晚，那700块钱，那个我永远无法忘记的她，会一直跟着我，像影子一样。

我走到门口，推开门，外面的雨还在下。我站在屋檐下，看着雨丝打在玻璃上，模糊了里面的世界。

身后传来脚步声，然后是她的声音："等等。"

我停住了脚步，但没有回头。我知道，如果回头，我就再也走不了了。`,
  dialogue: "（不能再逃了……）",
  speaker: "内心独白",
  backgroundDescription: "convenience store entrance, rainy day, protagonist hesitating, second chance",
  choices: [
    { id: "2_1ba", text: "停下脚步，转过身", sentiment: "bold" },
    { id: "2_1bb", text: "继续走，不回头", sentiment: "cold" }
  ],
  isEnding: false
};

export const SCENE_2_2A_COFFEE_INVITATION: SceneData = {
  narrative: `
"好，我知道附近有家咖啡店。"我说，声音比我想象的要平静。

我们走出便利店，外面的雨还在下。她撑开伞，我犹豫了一下，还是走了过去。

"一起吧。"她说，声音很轻。

我们并排走着，中间隔着一点距离，但那种距离让人感到安全，也让人感到温暖。

咖啡店不远，就在街角。我们推门进去，找了个靠窗的位置坐下。

"所以……"她先开口，声音很轻，"那天晚上，你为什么没进来？"`,
  dialogue: "\"我到了门口，但突然意识到，我想要的不是那种关系。\"",
  speaker: "我",
  backgroundDescription: "coffee shop, rainy day, two people talking, intimate atmosphere",
  choices: [
    { id: "2_2aa", text: "继续深入聊下去", sentiment: "romantic" },
    { id: "2_2ab", text: "保持距离，只做朋友", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_2_2B_HESITATE: SceneData = {
  narrative: `
"我……还是算了吧。"我说，声音很轻。

她的笑容僵了一下，然后点点头："没关系，理解。"

我拿起东西，转身就走。每一步都像是踩在刀刃上，但我没有回头。

我知道，我又一次逃跑了。就像那天晚上一样。

但这次，我知道我错过了什么。我错过了一个可能，一个机会，一个也许能改变我人生的瞬间。`,
  dialogue: "（我又逃跑了……）",
  speaker: "内心独白",
  backgroundDescription: "convenience store, hesitation moment, protagonist leaving, regretful atmosphere",
  choices: [
    { id: "2_2ba", text: "后悔，想要回去道歉", sentiment: "bold" },
    { id: "2_2bb", text: "继续逃避，彻底放弃", sentiment: "cold" }
  ],
  isEnding: false
};

export const SCENE_2_3A_TURN_BACK: SceneData = {
  narrative: `
我停下脚步，转过身。

她站在便利店门口，手里拿着伞，看着我。雨丝打在她的头发上，在灯光下闪闪发光。

"你……"她开口，声音很轻，"是不是那天晚上的……"

我点了点头，不敢看她。

"我……对不起。"我说，声音很轻，"我逃跑了。"

她走过来，把伞举到我头上。那一刻，我们之间的距离突然变得很近，近到我能闻到她身上的茉莉花香。`,
  dialogue: "\"不用道歉。其实，我也很庆幸你没进来。\"",
  speaker: "琳",
  backgroundDescription: "convenience store entrance, rainy day, two people under umbrella, intimate moment",
  choices: [
    { id: "2_3aa", text: "\"那……我们能聊聊吗？\"", sentiment: "bold" },
    { id: "2_3ab", text: "\"我……还是算了吧\"", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_2_3B_FINAL_ESCAPE: SceneData = {
  narrative: `
我继续走，不回头。脚步很快，快得像是要逃离什么。

但我知道，我逃不掉的。那个夜晚，那700块钱，那个我永远无法忘记的她，会一直跟着我，像影子一样。

我走到地铁站，买了票，上了车。车厢里人很多，但我却觉得比任何时候都孤独。

那700块钱，成了我心里一个永远的秘密。一个只有我知道的秘密，一个永远不会对任何人提起的秘密。

也许，这就是我的宿命。永远在边缘徘徊，永远不敢真正靠近任何人。`,
  dialogue: "（再见了，琳……）",
  speaker: "内心独白",
  backgroundDescription: "subway station, protagonist leaving, final escape, melancholic atmosphere",
  choices: [
    { id: "2_3ba", text: "接受现实，继续生活", sentiment: "neutral" },
    { id: "2_3bb", text: "决定回去找她，哪怕只是见一面", sentiment: "bold" }
  ],
  isEnding: false
};

export const SCENE_3_1A_AGREE: SceneData = {
  narrative: `
"我也想。"我说，声音比我想象的要平静。

她笑了，那笑容很轻，但很真实。

从那天起，我们开始经常一起吃饭。有时候是食堂，有时候是公司附近的餐厅，有时候是便利店。

我们聊工作，聊生活，聊那些不敢对别人说的话。我慢慢了解到，她叫琳，是个设计师。她喜欢画画，喜欢看日落，喜欢在深夜听音乐。

她也开始了解我。我的工作，我的孤独，我的恐惧。

"你知道吗？"有一天她对我说，声音很轻，但很坚定，"你其实不是孤独，你只是太害怕了。害怕被拒绝，害怕被伤害，害怕暴露真实的自己。"`,
  dialogue: "\"也许，我们可以不只是朋友？\"",
  speaker: "我",
  backgroundDescription: "restaurant, regular lunch meetings, two people getting closer, warm atmosphere",
  choices: [
    { id: "3_1aa", text: "\"我想……不只是朋友\"", sentiment: "romantic" },
    { id: "3_1ab", text: "\"好，朋友也很好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_3_1B_HESITATE: SceneData = {
  narrative: `
"我……需要考虑一下。"我说，声音很轻。

她的笑容僵了一下，然后点点头："没关系，理解。"

我知道，我又一次逃跑了。就像那天晚上一样。

但这次，我知道我错过了什么。我错过了一个可能，一个机会，一个也许能改变我人生的瞬间。

那700块钱，又成了我心里一个永远的问号。`,
  dialogue: "（我又逃跑了……）",
  speaker: "内心独白",
  backgroundDescription: "company cafeteria, hesitation moment, protagonist leaving, regretful atmosphere",
  choices: [
    { id: "3_1ba", text: "后悔，想要回去道歉", sentiment: "bold" },
    { id: "3_1bb", text: "继续逃避，彻底放弃", sentiment: "cold" }
  ],
  isEnding: false
};

export const SCENE_3_2A_REGRET: SceneData = {
  narrative: `
我后悔了。我想要回去道歉，想要告诉她，其实我想和她一起吃饭，想要告诉她，其实我很想了解她。

但我没有。我继续走，继续逃避，继续用工作麻痹自己。

那700块钱，成了我心里一个永远的问号。一个只有我知道的问号，一个永远不会对任何人提起的问号。

也许，这就是我的宿命。永远在边缘徘徊，永远不敢真正靠近任何人。`,
  dialogue: "（我又逃跑了……）",
  speaker: "内心独白",
  backgroundDescription: "office, protagonist working late, regretful atmosphere, lonely",
  choices: [
    { id: "3_2aa", text: "决定回去找她，哪怕只是道歉", sentiment: "bold" },
    { id: "3_2ab", text: "继续逃避，彻底放弃", sentiment: "cold" }
  ],
  isEnding: false
};

export const SCENE_3_2B_FINAL_ESCAPE: SceneData = {
  narrative: `
我选择了继续逃避，彻底放弃。

时间是最好的良药，虽然伤口还在，但至少不再流血了。我学会了和孤独共处，学会了在人群中保持距离，学会了不再期待什么。

那700块钱，成了我心里一个永远的秘密。一个只有我知道的秘密，一个永远不会对任何人提起的秘密。

有时候，我会想，如果那天我接受了她的邀请，现在会是什么样子？但我知道，没有如果。有些选择，做错了就是做错了，错过了就是错过了。`,
  dialogue: "（就这样吧……）",
  speaker: "内心独白",
  backgroundDescription: "city street at night, protagonist walking alone, accepting loneliness, melancholic but peaceful",
  choices: [
    { id: "3_2ba", text: "接受现实，继续生活", sentiment: "neutral" },
    { id: "3_2bb", text: "决定回去找她，哪怕只是见一面", sentiment: "bold" }
  ],
  isEnding: false
};

export const SCENE_3_3A_NEW_START: SceneData = {
  narrative: `
"那现在，我们可以重新开始吗？"我问，声音很轻。

她看着我，眼神很复杂。有理解，有同情，还有某种我读不懂的东西。

"好。"她说，声音很轻，"我们重新开始。"

从那天起，我们开始经常一起吃饭。有时候是食堂，有时候是公司附近的餐厅，有时候是便利店。

我们聊工作，聊生活，聊那些不敢对别人说的话。我慢慢了解到，她叫琳，是个设计师。她喜欢画画，喜欢看日落，喜欢在深夜听音乐。

她也开始了解我。我的工作，我的孤独，我的恐惧。`,
  dialogue: "\"也许，我们可以不只是朋友？\"",
  speaker: "我",
  backgroundDescription: "restaurant, new beginning, two people getting closer, warm atmosphere",
  choices: [
    { id: "3_3aa", text: "\"我想……不只是朋友\"", sentiment: "romantic" },
    { id: "3_3ab", text: "\"好，朋友也很好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_3_3B_FEAR: SceneData = {
  narrative: `
"我……还是有点害怕。"我说，声音很轻。

她看着我，眼神很温柔。

"那我们就慢慢来。"她说，握住我的手，"不用着急，我们可以慢慢了解彼此。"

从那天起，我们开始经常一起吃饭。有时候是食堂，有时候是公司附近的餐厅，有时候是便利店。

我们聊工作，聊生活，聊那些不敢对别人说的话。我慢慢了解到，她叫琳，是个设计师。她喜欢画画，喜欢看日落，喜欢在深夜听音乐。

她也开始了解我。我的工作，我的孤独，我的恐惧。`,
  dialogue: "\"谢谢你理解我。\"",
  speaker: "我",
  backgroundDescription: "restaurant, understanding moment, two people supporting each other, warm atmosphere",
  choices: [
    { id: "3_3ba", text: "拥抱她，告诉她我会努力", sentiment: "romantic" },
    { id: "3_3bb", text: "保持距离，只做朋友", sentiment: "neutral" }
  ],
  isEnding: false
};

