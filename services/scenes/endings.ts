import { SceneData } from "../../types";

// ============================================================================
// 结局场景
// ============================================================================

export const ENDING_TRUE_LOVE: SceneData = {
  narrative: `
公园的长椅上，我把那一夜所有的恐惧、羞耻、自我怀疑全盘托出。每一个字都像是从心底挖出来的，带着血，带着痛。

"我逃跑不是因为嫌弃你，是因为我嫌弃我自己。我怕进了那扇门，就再也回不去了。"

琳安静地听完，眼眶红了。月光洒在她脸上，把眼泪照得闪闪发光。

"笨蛋。"她突然笑了，眼泪却掉了下来，"那天你跑掉的时候，我反而松了口气。因为我也是第一次接那种单，吓死了。"

"什么？"我愣住了。

"我那阵子家里出事，急需用钱。但真到了那一刻，我也不知道自己能不能做到……"她握住我的手，手心很暖，"所以谢谢你，那天没敲门。"

月光下，我们的手紧紧相握。那一刻，我突然觉得，也许，这700块钱，是我这辈子花得最值得的一笔钱。

"那这700块……"

"就当我们的定情信物吧。"她笑着说，眼泪还在掉，"不过下次约会，你得请我吃好一点的。"`,
  dialogue: "\"我们回家吧。\"",
  speaker: "琳",
  backgroundDescription: "park bench under moonlight, warm embrace, romantic ending, cherry blossoms",
  choices: [],
  isEnding: true,
  endingType: "good"
};

export const ENDING_FRIEND: SceneData = {
  narrative: `
"我明白了。"琳点点头，声音很轻，"那天的事，我们都当它没发生过吧。"

"真的可以吗？"我问，声音里带着一丝不确定。

"为什么不可以？"她笑得很轻松，但眼神很认真，"人生那么长，谁没有几件想忘记的事呢。"

后来，我们成了很好的同事，很好的朋友。偶尔一起加班，一起吐槽公司的奇葩客户，一起在深夜的便利店买打折便当。

那700块钱，最后变成了我们的梗——每次我请客，她都会说："行啊，反正你还欠我700。"然后我们就会笑，笑得很大声，像是要把所有的尴尬和羞耻都笑掉。

有些关系，不是爱情，却同样珍贵。就像那700块钱，买来的不是交易，而是一段真正的友谊。`,
  dialogue: "\"下次一起吃饭，你请客。\"",
  speaker: "琳",
  backgroundDescription: "office rooftop at sunset, two friends laughing, warm friendship ending",
  choices: [],
  isEnding: true,
  endingType: "neutral"
};

export const ENDING_REGRET: SceneData = {
  narrative: `
"对不起，我不能接受这样的开始。"琳站起身，眼神里是深深的失望。那种失望，比愤怒更让人难受。

"我本来以为……算了，不重要了。"她的声音很轻，但每个字都像是刀子，割在我心上。

她转身离开，背影消失在夜色里。我想追上去，但腿像灌了铅一样沉重。我只能站在原地，看着她走远，直到再也看不见。

后来我换了工作，离开了那栋楼。听说她也跳槽去了外地。

那700块钱，成了我心里永远的刺。每次路过那家酒店，我都会想：如果那天我更勇敢一点，如果我更早说出真相……

但人生没有如果。

我们错过了。就像两条平行线，永远不会有交集。`,
  dialogue: "（再见了……）",
  speaker: "内心独白",
  backgroundDescription: "empty street at night, lonely figure, cold blue tones, melancholic ending",
  choices: [],
  isEnding: true,
  endingType: "bad"
};

export const ENDING_REDEMPTION: SceneData = {
  narrative: `
"我不能说我完全原谅你。"琳看着我，眼神很认真，"但我理解你当时的感受。"

"我……"我想说什么，但话到嘴边又咽了回去。

"嘘。"她伸出手指抵住我的嘴唇，动作很轻，但很坚定，"过去的事就让它过去吧。如果你真的想补偿我，那就……"

"请我吃一个月的早餐，怎么样？"她笑了，那笑容很轻，但很真实，"不许迟到，不许偷懒。"

"成交！"我说，声音比我想象的要坚定。

从那天起，每天早上7点，我们会在便利店门口碰面。她喝豆浆配包子，我喝咖啡配三明治。有时候我们会聊几句，有时候只是安静地坐着，看着窗外的阳光慢慢亮起来。

一个月后，她说："早餐可以停了，但晚餐得继续。"

我说："那就一辈子吧。"

她脸红了，但没说话，只是点了点头。`,
  dialogue: "\"笨蛋，谁说要一辈子了……\"",
  speaker: "琳（脸红）",
  backgroundDescription: "morning convenience store, two people having breakfast, warm sunlight, hopeful ending",
  choices: [],
  isEnding: true,
  endingType: "good"
};

export const ENDING_STRANGER: SceneData = {
  narrative: `
我选择了沉默。她也没有再问。

从那天起，我们偶尔还会在电梯里遇到，在食堂擦肩而过。我们会点头，会说"你好"，但仅此而已。就像两条平行线，永远不会有交集。

她交了男朋友，听说是另一个部门的主管。我在交友软件上划来划去，却再也找不到能让我心动的人。

那700块钱，最终什么都没有买到。没有陪伴，没有理解，没有改变。什么都没有。

我们成了最熟悉的陌生人。有时候我会想，如果那天我敲门了，现在会是什么样子？但人生没有如果。

就这样吧。`,
  dialogue: "（就这样吧……）",
  speaker: "内心独白",
  backgroundDescription: "crowded elevator, two people standing far apart, cold atmosphere, neutral ending",
  choices: [],
  isEnding: true,
  endingType: "neutral"
};




