import { SceneData } from "../../types";

// ============================================================================
// branch1C 场景
// ============================================================================

export const SCENE_1C_HESITATE: SceneData = {
  narrative: `我站在门口站了很久，久到走廊的感应灯都灭了两次。
手机屏幕在黑暗中发着光，微信支付的记录刺眼地提醒着我—。700元，已支付。那数字在屏幕上跳动着，像是在嘲笑我的犹豫。
我能听到门里传来的声音，她在打电话："嗯……客人好像还没到……可能路上堵车吧。

声音很轻，带着一丝不确定。那一刻，我突然意识到，门的另一边也是一个活生生的人。她也在等，也会紧张，也会想这个陌生人会是什么样。
我抬起手，想要敲门，但手指悬在半空中，怎么也落不下去。
最终，我还是走了。但我没有删除联系方式，只是备注改成。700。。那三个字，像是一个标记，提醒我那个我永远无法忘记的夜晚。`,
  dialogue: "（对不起……）",
  speaker: "内心独白",
  backgroundDescription: "dark hallway, motion sensor lights turning off, phone light illuminating protagonist's conflicted face",
  choices: [
    { id: "1c_1", text: "删除联系方式，彻底忘记这件事", sentiment: "cold" },
    { id: "1c_1b", text: "保留联系方式，等待合适的机会", sentiment: "neutral" },
    { id: "1c_1c", text: "开始观察她的动态，了解她的生活", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1C_GUILT: SceneData = {
  narrative: `。700块钱成了我心里的一个结。一个解不开的结，一个让我夜不能寐的结。
我时不时会点开她的微信头像，想看看她的朋友圈，想了解她是个什么样的人。她的头像是一张风景照，夕阳下的海边，很美。海浪拍打着沙滩，夕阳把天空染成橘红色，像是一幅画。
但我从来没有发过消息。我不知道该说什么——道歉？解释？还是假装什么都没发生过？每次打开对话框，手指悬在键盘上，却一个字也打不出来。那些话在脑海里转来转去，但就是说不出口。
一个月后，我在朋友圈看到了她的动态。她发了一张工作照，配文是。新项目终于上线了，累死了。

照片里的她笑得很灿烂，完全不像那个夜晚我脑海中想象的样子。她看起来……很普通，很真实，就像我身边的任何一个同事。
我突然意识到，我欠她一个道歉。不是为。700块钱，而是为我的逃避，为我的懦弱。`,
  dialogue: "（也许，我应该主动联系她？）",
  speaker: "内心独白",
  backgroundDescription: "phone screen showing social media, protagonist scrolling, guilt and hesitation",
  choices: [
    { id: "1c_2", text: "给她发消息，想要道歉", sentiment: "bold" },
    { id: "1c_3", text: "还是不敢，继续观察", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1C_STALKING: SceneData = {
  narrative: `我选择了继续观察。我开始每天查看她的朋友圈，开始留意她的动态，开始试图从这些碎片中拼凑出她的生活。
我发现她喜欢画画，喜欢看日落，喜欢在深夜听音乐。我发现她工作很努力，经常加班到很晚。我发现她似乎很孤独，朋友圈里很少有其他人的照片。
我开始想象，如果那天我敲门了，现在会是什么样子？我们会成为朋友吗？还是只是陌生人。
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

export const SCENE_1C_FIRST_MESSAGE: SceneData = {
  narrative: `我鼓起勇气，给她发了条消息："你好，我是那天晚上的……我想为那天的事道歉。

发送。
我盯着屏幕，心跳加速。她会回吗？她会骂我吗？还是直接拉黑我？

十分钟后，她回了。没事的，我理解。你还好吗？"

我愣住了。她不仅没有生气，还在关心我。
"我……还好。你呢？"我回复。
"我也还好。对了，你也在XX大厦上班吗？我好像见过你。

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

export const SCENE_1C_MEETING: SceneData = {
  narrative: `我们约在公司楼下的咖啡店。我提前到了，选了个安静的角落，点了两杯拿铁。
窗外的阳光很好，透过百叶窗洒进来，在桌面上投下斑驳的光影。我盯着那两杯咖啡，看着热气慢慢消散，心里七上八下的。
她准时出现，穿着简单的白衬衫和牛仔裤，和我想象中的完全不一样。她看起来很普通，很真实，就像我身边的任何一个同事。
"你好。她在我对面坐下，声音很轻。没想到我们真的会见面。

"我也没想到。我说，声音比我想象的要平静，"我以为你会直接拉黑我。

"为什么要拉黑。她笑了，那笑容很轻，但很真实。你又不是坏人，只是……有点胆小而已。

我们聊了很久。她告诉我，她叫琳，是个设计师。那700块钱，她其实早就忘了。
"对我来说，那只是工作。她说，语气很平静。但对你来说，可能不一样吧。`,
  dialogue: "\"其实，我只是想要有人陪。\"",
  speaker: "琳",
  backgroundDescription: "coffee shop, afternoon, two people meeting for first time, warm and understanding atmosphere",
  choices: [
    { id: "1c_6", text: "继续深入聊下去", sentiment: "romantic" },
    { id: "1c_7", text: "保持距离，只做朋友", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1C_DEEP_CONVERSATION: SceneData = {
  narrative: `我们继续聊下去。从下午2点聊到傍。点，窗外的阳光从明亮变成金黄，再变成橘红，最后消失在城市的边缘。
她告诉我，她喜欢画画，喜欢看日落，喜欢在深夜听音乐。她告诉我，她画的第一幅画是给妈妈的生日礼物，画的是她们家的小花园，那时候她还在上小学。她最喜欢的日落是在海边看到的，那时候她刚失恋，一个人坐在沙滩上，看着太阳慢慢沉入海平面，眼泪和海水混在一起。她深夜听的音乐总是很悲伤，她说，悲伤的音乐让她觉得不那么孤独。
我也开始告诉她我的故事。我的工作，我的孤独，我的恐惧。那些我从未对任何人说过的话，在她面前，却变得那么容易说出口。
"你知道吗。有一天她对我说，声音很轻，但很坚定，"你其实不是孤独，你只是太害怕了。害怕被拒绝，害怕被伤害，害怕暴露真实的自己。

那一刻，我突然意识到，也许，我真的可以改变。
"也许，我们可以不只是朋友。我鼓起勇气问。`,
  dialogue: "\"我……也想。\"",
  speaker: "琳",
  backgroundDescription: "coffee shop evening, warm lighting, two people deep in conversation, growing intimacy",
  choices: [
    { id: "1c_6a", text: "握住她的手", sentiment: "romantic" },
    { id: "1c_6b", text: "保持距离，慢慢来", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1C_FRIENDSHIP: SceneData = {
  narrative: `我们选择了保持距离，只做朋友。
从那天起，我们开始经常见面。有时候是咖啡店，有时候是公司食堂，有时候是下班后的散步。公园里的路灯已经亮了，昏黄的光洒在我们身上，把影子拉得很长。
我们并排走着，中间隔着一点距离，但那种距离让人感到安全，也让人感到温暖。有时候我们会聊几句，有时候只是安静地走着，听着彼此的脚步声。
我慢慢了解到，她喜欢画画，喜欢看日落，喜欢在深夜听音乐。她也开始了解我。我的工作，我的孤独，我的恐惧。那些我从未对任何人说过的话，在她面前，却变得那么容易说出口。
"你知道吗。有一天她对我说，声音很轻，但很坚定，"你其实不是孤独，你只是太害怕了。害怕被拒绝，害怕被伤害，害怕暴露真实的自己。

那一刻，我突然意识到，也许，我真的可以改变。
"也许，我们可以不只是朋友。我鼓起勇气问。`,
  dialogue: "\"我……也想。\"",
  speaker: "琳",
  backgroundDescription: "evening walk in park, two people walking side by side, sunset colors, peaceful friendship",
  choices: [
    { id: "1c_7a", text: "握住她的手", sentiment: "romantic" },
    { id: "1c_7b", text: "保持距离，继续做朋友", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1C_4A_GUILT_OBSERVE: SceneData = {
  narrative: `
我选择了继续观察。我开始每天查看她的朋友圈，开始留意她的动态，开始试图从这些碎片中拼凑出她的生活。
我发现她喜欢画画，喜欢看日落，喜欢在深夜听音乐。我发现她工作很努力，经常加班到很晚。我发现她似乎很孤独，朋友圈里很少有其他人的照片。
我开始想象，如果那天我敲门了，现在会是什么样子？我们会成为朋友吗？还是只是陌生人。
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

export const SCENE_1C_4B_FIRST_MESSAGE: SceneData = {
  narrative: `
我鼓起勇气，给她发了条消息："你好，我是那天晚上的……我想为那天的事道歉。

发送。
我盯着屏幕，心跳加速。她会回吗？她会骂我吗？还是直接拉黑我？

十分钟后，她回了。没事的，我理解。你还好吗？"

我愣住了。她不仅没有生气，还在关心我。
"我……还好。你呢？"我回复。
"我也还好。对了，你也在XX大厦上班吗？我好像见过你。

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

export const SCENE_1C_5A_FIRST_MEETING: SceneData = {
  narrative: `
我们约在公司楼下的咖啡店。我提前到了，选了个安静的角落。咖啡店的音乐很轻，是那种让人放松的爵士乐。
我点了两杯拿铁，然后开始等待。时间过得很慢，每一秒都像是在考验我的耐心。
她准时出现，穿着简单的白衬衫和牛仔裤，和我想象中的完全不一样。我想象中的她，应该是那种浓妆艳抹、穿着暴露的样子。但眼前的她，干净、简单，甚至有些朴素。
"你好。她在我对面坐下，把包放在旁边的椅子上。没想到我们真的会见面。

"我也没想到。我说，声音有点紧张，"我以为你会直接拉黑我。

"为什么要拉黑。她笑了，眼睛弯成月牙。你又不是坏人，只是……有点胆小而已。`,
  dialogue: "\"其实，我只是想要有人陪。\"",
  speaker: "琳",
  backgroundDescription: "coffee shop, afternoon, two people meeting for first time, warm and understanding atmosphere",
  choices: [
    { id: "1c_5a", text: "继续深入聊下去", sentiment: "romantic" },
    { id: "1c_5b", text: "保持距离，只做朋友", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1C_6A_DEEP_TALK: SceneData = {
  narrative: `
我们继续聊下去。从下午2点聊到傍。点，窗外的阳光从明亮变成金黄，再变成橘红，最后消失在城市的边缘。
她告诉我，她喜欢画画，喜欢看日落，喜欢在深夜听音乐。她告诉我，她画的第一幅画是给妈妈的生日礼物，那时候她还在上小学，画得很丑，但妈妈却把它裱起来，挂在客厅里。她最喜欢的日落是在海边看到的，那时候她刚失恋，一个人坐在沙滩上，看着太阳慢慢沉入海平面，眼泪和海水混在一起。
我也开始告诉她我的故事。我的工作，我的孤独，我的恐惧。那些我从未对任何人说过的话，在她面前，却变得那么容易说出口。
"你知道吗。有一天她对我说，声音很轻，但很坚定，"你其实不是孤独，你只是太害怕了。害怕被拒绝，害怕被伤害，害怕暴露真实的自己。`,
  dialogue: "\"也许，我们可以不只是朋友？\"",
  speaker: "琳",
  backgroundDescription: "coffee shop evening, warm lighting, two people deep in conversation, growing intimacy",
  choices: [
    { id: "1c_6a_v2", text: "\"我……也想。\"", sentiment: "romantic" },
    { id: "1c_6b_v2", text: "\"我……还是有点害怕\"", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1C_7A_RELATIONSHIP_GROW: SceneData = {
  narrative: `
从那天起，我们开始经常见面。有时候是咖啡店，有时候是公司食堂，有时候是下班后的散步。
公园里的路灯已经亮了，昏黄的光洒在我们身上，把影子拉得很长。我们并排走着，中间隔着一点距离，但那种距离让人感到安全，也让人感到温暖。
我慢慢了解到，她叫琳，是个设计师。她喜欢画画，喜欢看日落，喜欢在深夜听音乐。她也开始了解我。我的工作，我的孤独，我的恐惧。
"你知道吗。有一天她对我说，声音很轻，但很坚定，"你其实不是懦弱，你只是太善良了。善良到不敢伤害任何人，包括自己。

那一刻，我突然意识到，也许，我真的可以改变。`,
  dialogue: "\"也许，我们可以不只是朋友？\"",
  speaker: "琳",
  backgroundDescription: "evening walk in park, two people walking side by side, sunset colors, peaceful atmosphere",
  choices: [
    { id: "1c_7a_v2", text: "\"我想……不只是朋友\"", sentiment: "romantic" },
    { id: "1c_7b_v2", text: "\"好，朋友也很好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1C_8A_FINAL_CHOICE: SceneData = {
  narrative: `八章C-1：最终选择。我握住了她的手。她的手很暖，很软，像是一团火，温暖了我冰冷的心。
她看着我，眼神很复杂。有惊讶，有感动，还有一丝我读不懂的东西。
"你知道吗。她说，声音很轻，"我一直以为，我们只是朋友。但现在，我发现我错了。

"什么意思？"我问。
"我也想要更多。她说，脸红了。不只是朋友，而是…。

她没有说完，但我明白了。那一刻，我突然觉得，也许，这700块钱，是我这辈子花得最值得的一笔钱。`,
  dialogue: "\"那我们……试试看？\"",
  speaker: "琳",
  backgroundDescription: "park bench at night, two people holding hands, warm atmosphere, relationship defining moment",
  choices: [
    { id: "1c_8a", text: "\"好，我们试试看。\"", sentiment: "romantic" },
    { id: "1c_8b", text: "\"我……还是有点害怕\"", sentiment: "shy" },
    { id: "1c_8c", text: "\"我想先为700块钱道歉\"", sentiment: "honest" }
  ],
  isEnding: false
};

export const SCENE_1C_9A_NEW_BEGINNING: SceneData = {
  narrative: `九章C-1：新的开始。我们开始了新的关系。
从那天起，我们开始经常见面。有时候是咖啡店，有时候是公司食堂，有时候是下班后的散步。
公园里的路灯已经亮了，昏黄的光洒在我们身上，把影子拉得很长。我们并排走着，中间隔着一点距离，但那种距离让人感到安全，也让人感到温暖。
我慢慢了解到，她叫琳，是个设计师。她喜欢画画，喜欢看日落，喜欢在深夜听音乐。她也开始了解我。我的工作，我的孤独，我的恐惧。
"你知道吗。有一天她对我说，声音很轻，但很坚定，"你其实不是懦弱，你只是太善良了。善良到不敢伤害任何人，包括自己。`,
  dialogue: "\"也许，我们可以不只是朋友？\"",
  speaker: "琳",
  backgroundDescription: "evening walk in park, two people in new relationship, warm sunset colors, peaceful",
  choices: [
    { id: "1c_9a", text: "\"我想……不只是朋友\"", sentiment: "romantic" },
    { id: "1c_9b", text: "\"好，朋友也很好\"", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1C_9B_FEAR_AGAIN: SceneData = {
  narrative: `九章C-2：再次的恐惧。我选择了告诉她我的恐惧。
"其实，我还是有点害怕。我说，声音很轻，"我害怕我会伤害你，我害怕我会让你失望，我害怕…。

"害怕什么？"她问，眼神很温柔。
"害怕我会再次逃跑。我说，声音更轻了。就像那天晚上一样。

她看着我，眼神很复杂。有理解，有同情，还有一丝我读不懂的东西。
"那我们就慢慢来。她说，握住我的手。不用着急，我们可以慢慢了解彼此。`,
  dialogue: "\"谢谢你理解我。\"",
  speaker: "琳",
  backgroundDescription: "coffee shop, two people talking, understanding and support, warm atmosphere",
  choices: [
    { id: "1c_9c", text: "拥抱她，告诉她我会努力", sentiment: "romantic" },
    { id: "1c_9d", text: "保持距离，只做朋友", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1C_9C_700_APOLOGY: SceneData = {
  narrative: `九章C-3。700元的道歉。我选择了向她坦白那700块钱的事。
"其实，我想先为那700块钱道歉。我说，声音很轻，"那天晚上，我到了门口，但我逃跑了。我删除了你的联系方式，我试图忘记你，但我做不到。

她安静地听完，没有说话。空气很安静，安静到我能听到自己的心跳声。
"我明白了。她终于开口，声音很轻。你跟踪我，是因为你想了解我，但又不敢直接接近我，对吗。

我点了点头，不敢看她。
"其实，我也一直在观察你。她说。在公司里，在电梯里，在食堂里。我一直在想，你会不会主动和我说话。`,
  dialogue: "\"所以，我们都在等对方先开口？\"",
  speaker: "琳",
  backgroundDescription: "coffee shop, full confession about 700 yuan, two people understanding each other, emotional",
  choices: [
    { id: "1c_9e", text: "\"那现在，我们可以重新开始吗？\"", sentiment: "bold" },
    { id: "1c_9f", text: "\"我……还是有点害怕\"", sentiment: "shy" }
  ],
  isEnding: false
};

export const SCENE_1C_10A_RELATIONSHIP_DEEPEN: SceneData = {
  narrative: `十章C-1：关系的深化。从那天起，我们开始正式交往。
我们每周六下午都会见面，有时候是咖啡店，有时候是公园，有时候是电影院。我们聊工作，聊生活，聊那些不敢对别人说的话。
我慢慢了解到，她叫琳，是个设计师。她喜欢画画，喜欢看日落，喜欢在深夜听音乐。她也开始了解我。我的工作，我的孤独，我的恐惧。
"你知道吗。有一天她对我说，声音很轻，但很坚定，"你其实不是懦弱，你只是太善良了。善良到不敢伤害任何人，包括自己。

那一刻，我突然意识到，也许，我真的可以改变。也许，我真的可以幸福。`,
  dialogue: "\"谢谢你，琳。\"",
  speaker: "琳",
  backgroundDescription: "park walk, two people in love, deepening relationship, warm sunset colors",
  choices: [
    { id: "1c_10a", text: "【结局】", sentiment: "neutral" }
  ],
  isEnding: false
};

export const SCENE_1C_10B_FRIENDSHIP_PATH: SceneData = {
  narrative: `十章C-2：友谊之路。我选择了保持距离，只做朋友。
"我明白了。她说，声音很轻，"也许，朋友的关系更适合我们。

我们继续见面，继续聊天，但再也没有越过那条线。我们成了最好的朋友，无话不谈，互相支持。
有时候，我会想，如果那天我更勇敢一点，如果我更早说出真相，现在会是什么样子？

但我知道，有些关系，不是爱情，却同样珍贵。`,
  dialogue: "\"谢谢你，琳。你是我最好的朋友。\"",
  speaker: "琳",
  backgroundDescription: "coffee shop, two friends, warm friendship, peaceful atmosphere",
  choices: [
    { id: "1c_10b", text: "【结局】", sentiment: "neutral" }
  ],
  isEnding: false
};


// ============================================================================
// 。。4-6。㳡。。。。。䣨1C。。֧。。
// ============================================================================



