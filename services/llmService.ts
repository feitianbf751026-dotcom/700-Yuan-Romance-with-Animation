import { SceneData, Choice } from "../types";

// ============================================================================
// 分支剧情系统 - 多结局版本
// ============================================================================

// 玩家状态追踪
interface PlayerState {
  affection: number;        // 好感度 (-10 到 10)
  courage: number;          // 勇气值 (0 到 10)
  honesty: number;          // 诚实度 (0 到 10)
  branch: 'main' | 'cold' | 'romantic' | 'friend'; // 当前分支
  stage: number;            // 当前阶段
  hasConfessed: boolean;    // 是否坦白过
  specialEvents: string[];  // 触发的特殊事件
}

// ============================================================================
// 场景定义
// ============================================================================

const SCENE_0_PROLOGUE: SceneData = {
  narrative: `【序章：那一夜】
手机屏幕的光有些刺眼。APP上的订单显示"已接单"，备注是"全套服务，不过夜"。我看着微信支付里刚刚转出去的700元，又抬头看了看面前的302号房门。

这本该是一场充满欲望的交易。我只是太寂寞了，想找个人陪。但真到了门口，听着里面的电视机声，一股巨大的荒谬感和羞耻感突然击中了我。

我的手指悬在门板前，犹豫了整整五分钟。里面的电视声音很清晰，她在等我。但我就是迈不出这一步。`,
  dialogue: "（不行……我做不到……）",
  speaker: "内心独白",
  backgroundDescription: "dark hotel hallway, pov looking at door number 302, phone screen glowing, moody cinematic lighting, wong kar wai style",
  choices: [
    { id: "p1", text: "直接转身逃跑，什么都不说", sentiment: "shy" },
    { id: "p2", text: "给她发消息："对不起，我来不了"", sentiment: "neutral" },
    { id: "p3", text: "站在门口纠结很久，最终还是走了", sentiment: "cold" }
  ],
  isEnding: false
};

// 分支1A：直接逃跑（懦弱路线）
const SCENE_1A_PANIC: SceneData = {
  narrative: `【第一章A：逃兵】
我转身就跑。电梯太慢，我直接冲下楼梯，一口气跑到街上。雨开始下了，我任由雨水打在脸上，心跳如擂鼓。

700块钱打了水漂。我连道歉都不敢说，就这么逃了。我拉黑了所有联系方式，删掉了那个APP，发誓再也不碰这种事。

但那个门后的人，那个我永远不会见到的她，却成了我心底一个永远的问号。她会不会觉得我是个变态？还是只是觉得我是个懦夫？

三个月后——`,
  dialogue: "（我真是个废物……）",
  speaker: "内心独白",
  backgroundDescription: "rainy city street at night, protagonist running in panic, neon reflections, self-loathing atmosphere",
  choices: [
    { id: "1a_1", text: "【继续】", sentiment: "neutral" }
  ],
  isEnding: false
};

// 分支1B：发消息道歉（诚实路线）
const SCENE_1B_MESSAGE: SceneData = {
  narrative: `【第一章B：短信】
我的手指在屏幕上打字，删了又写，写了又删。最后发出去的只有简单的几个字：

"不好意思，我来不了了。给您添麻烦了。"

发送。

我盯着屏幕看了很久，对方一直没回。我正准备离开，手机震了一下。

"没关系的。"

然后又是一条："不过既然你付了钱，我有义务问一句——你还好吗？"

我愣住了。这是职业话术吗？还是……真的在关心我？

"如果只是想找人聊聊天，其实不用这样的。"`,
  dialogue: "（她在……安慰我？）",
  speaker: "内心独白",
  backgroundDescription: "phone screen close-up, chat messages glowing in dark hallway, warm text bubbles",
  choices: [
    { id: "1b_1", text: ""谢谢，我没事。"然后删除好友", sentiment: "cold" },
    { id: "1b_2", text: ""对不起，我只是……做不到那种事。"", sentiment: "shy" },
    { id: "1b_3", text: ""其实，能聊聊吗？我请你喝咖啡。"", sentiment: "bold" }
  ],
  isEnding: false
};

// 分支1C：犹豫很久才走（内疚路线）
const SCENE_1C_HESITATE: SceneData = {
  narrative: `【第一章C：犹豫】
我站在门口站了很久，久到走廊的感应灯都灭了两次。

手机屏幕在黑暗中发着光，微信支付的记录刺眼地提醒着我——700元，已支付。

我能听到门里传来的声音，她在打电话："嗯……客人好像还没到……可能路上堵车吧。"

那一刻，我突然意识到，门的另一边也是一个活生生的人。她也在等，也会紧张，也会想这个陌生人会是什么样。

最终，我还是走了。但我没有删除联系方式，只是备注改成了"700元"。

三个月后——`,
  dialogue: "（对不起……）",
  speaker: "内心独白",
  backgroundDescription: "dark hallway, motion sensor lights turning off, phone light illuminating protagonist's conflicted face",
  choices: [
    { id: "1c_1", text: "【继续】", sentiment: "neutral" }
  ],
  isEnding: false
};

// ============================================================================
// 主线汇合场景：便利店重逢
// ============================================================================

const SCENE_2_REUNION: SceneData = {
  narrative: `【第二章：便利店的重逢】
三个月后。公司楼下的全家便利店。

外面下着梅雨，我等着微波炉热饭团。身边突然多了一个收伞的身影——米色风衣，淡淡的茉莉花香。

侧脸重叠的那一刻，我的脑子"嗡"了一声。

是她。虽然那天（我们见过/没见过），但我死都不会认错这个气质。`,
  dialogue: ""诶，不好意思，能帮我拿一下那边的纸巾吗？"",
  speaker: "琳",
  backgroundDescription: "convenience store interior, rainy window, fluorescent lighting, slice of life anime style",
  choices: [
    { id: "2_1", text: "僵硬地递过去，不敢对视", sentiment: "shy" },
    { id: "2_2", text: ""你是……那天的？"", sentiment: "bold" },
    { id: "2_3", text: "假装不认识，拿了饭团就走", sentiment: "cold" }
  ],
  isEnding: false
};

// ============================================================================
// 中期分支场景
// ============================================================================

const SCENE_3_LUNCH: SceneData = {
  narrative: `【第三章：意外的午餐】
她认出我了。无论我怎么装，她那双眼睛里闪过的惊讶和复杂的情绪都出卖了一切。

"你也在这栋楼上班？"她问，语气很自然，但我听得出一丝试探。

"嗯……12楼。"

"我在11楼，设计部的。"她笑了笑，"看来以后可能会常见面。"

空气安静了几秒。微波炉的提示音打破了尴尬。`,
  dialogue: ""要不……一起吃？我一个人吃也挺无聊的。"",
  speaker: "琳",
  backgroundDescription: "company cafeteria, warm afternoon light, casual atmosphere",
  choices: [
    { id: "3_1", text: "接受邀请，坐下来聊", sentiment: "romantic" },
    { id: "3_2", text: ""不好意思，我赶时间。"", sentiment: "cold" },
    { id: "3_3", text: ""其实我想先道个歉……"", sentiment: "bold" }
  ],
  isEnding: false
};

// ============================================================================
// 结局场景（5个）
// ============================================================================

const ENDING_TRUE_LOVE: SceneData = {
  narrative: `【真爱结局：七百元的答案】
公园的长椅上，我把那一夜所有的恐惧、羞耻、自我怀疑全盘托出。

"我逃跑不是因为嫌弃你，是因为我嫌弃我自己。我怕进了那扇门，就再也回不去了。"

琳安静地听完，眼眶红了。

"笨蛋。"她突然笑了，眼泪却掉了下来，"那天你跑掉的时候，我反而松了口气。因为我也是第一次接那种单，吓死了。"

"什么？"

"我那阵子家里出事，急需用钱。但真到了那一刻，我也不知道自己能不能做到……"她握住我的手，"所以谢谢你，那天没敲门。"

月光下，我们的手紧紧相握。

"那这700块……"

"就当我们的定情信物吧。"她笑着说，"不过下次约会，你得请我吃好一点的。"`,
  dialogue: ""我们回家吧。"",
  speaker: "琳",
  backgroundDescription: "park bench under moonlight, warm embrace, romantic ending, cherry blossoms",
  choices: [],
  isEnding: true,
  endingType: "good"
};

const ENDING_FRIEND: SceneData = {
  narrative: `【挚友结局：最好的距离】
"我明白了。"琳点点头，"那天的事，我们都当它没发生过吧。"

"真的可以吗？"

"为什么不可以？"她笑得很轻松，"人生那么长，谁没有几件想忘记的事呢。"

后来，我们成了很好的同事，很好的朋友。偶尔一起加班，一起吐槽公司的奇葩客户，一起在深夜的便利店买打折便当。

那700块钱，最后变成了我们的梗——每次我请客，她都会说："行啊，反正你还欠我700。"

有些关系，不是爱情，却同样珍贵。`,
  dialogue: ""下次一起吃饭，你请客。"",
  speaker: "琳",
  backgroundDescription: "office rooftop at sunset, two friends laughing, warm friendship ending",
  choices: [],
  isEnding: true,
  endingType: "neutral"
};

const ENDING_REGRET: SceneData = {
  narrative: `【遗憾结局：错过】
"对不起，我不能接受这样的开始。"琳站起身，眼神里是深深的失望。

"我本来以为……算了，不重要了。"

她转身离开，背影消失在夜色里。我想追上去，但腿像灌了铅一样沉重。

后来我换了工作，离开了那栋楼。听说她也跳槽去了外地。

那700块钱，成了我心里永远的刺。每次路过那家酒店，我都会想：如果那天我更勇敢一点，如果我更早说出真相……

但人生没有如果。

我们错过了。`,
  dialogue: "（再见了……）",
  speaker: "内心独白",
  backgroundDescription: "empty street at night, lonely figure, cold blue tones, melancholic ending",
  choices: [],
  isEnding: true,
  endingType: "bad"
};

const ENDING_REDEMPTION: SceneData = {
  narrative: `【救赎结局：重新开始】
"我不能说我完全原谅你。"琳看着我，"但我理解你当时的感受。"

"我……"

"嘘。"她伸出手指抵住我的嘴唇，"过去的事就让它过去吧。如果你真的想补偿我，那就……"

"请我吃一个月的早餐，怎么样？"她笑了，"不许迟到，不许偷懒。"

"成交！"

从那天起，每天早上7点，我们会在便利店门口碰面。她喝豆浆配包子，我喝咖啡配三明治。

一个月后，她说："早餐可以停了，但晚餐得继续。"

我说："那就一辈子吧。"`,
  dialogue: ""笨蛋，谁说要一辈子了……"",
  speaker: "琳（脸红）",
  backgroundDescription: "morning convenience store, two people having breakfast, warm sunlight, hopeful ending",
  choices: [],
  isEnding: true,
  endingType: "good"
};

const ENDING_STRANGER: SceneData = {
  narrative: `【陌路结局：平行线】
我选择了沉默。她也没有再问。

从那天起，我们偶尔还会在电梯里遇到，在食堂擦肩而过。我们会点头，会说"你好"，但仅此而已。

她交了男朋友，听说是另一个部门的主管。我在交友软件上划来划去，却再也找不到能让我心动的人。

那700块钱，最终什么都没有买到。

我们成了最熟悉的陌生人。`,
  dialogue: "（就这样吧……）",
  speaker: "内心独白",
  backgroundDescription: "crowded elevator, two people standing far apart, cold atmosphere, neutral ending",
  choices: [],
  isEnding: true,
  endingType: "neutral"
};

// ============================================================================
// 状态机逻辑
// ============================================================================

export class LLMService {
  private state: PlayerState = {
    affection: 0,
    courage: 0,
    honesty: 0,
    branch: 'main',
    stage: 0,
    hasConfessed: false,
    specialEvents: []
  };

  async startNewGame(): Promise<SceneData> {
    this.state = {
      affection: 0,
      courage: 0,
      honesty: 0,
      branch: 'main',
      stage: 0,
      hasConfessed: false,
      specialEvents: []
    };
    return SCENE_0_PROLOGUE;
  }

  async nextTurn(history: any[], choiceId: string): Promise<SceneData> {
    await new Promise(resolve => setTimeout(resolve, 800));

    // 根据选择更新状态
    this.updateState(choiceId);

    // 决定下一个场景
    return this.getNextScene();
  }

  // 传入完整 Choice 对象的重载方法
  async nextTurnWithChoice(history: any[], choice: Choice): Promise<SceneData> {
    return this.nextTurn(history, choice.id);
  }

  private updateState(choiceId: string): void {
    // 序章选择 - 所有选择都是逃跑，只是方式不同
    if (choiceId === "p1") {
      // 直接跑：最懦弱
      this.state.courage -= 2;
      this.state.honesty -= 1;
      this.state.branch = 'cold';
    } else if (choiceId === "p2") {
      // 发消息：有诚意
      this.state.honesty += 3;
      this.state.affection += 2;
      this.state.branch = 'friend';
    } else if (choiceId === "p3") {
      // 犹豫很久：内疚但没行动
      this.state.honesty += 1;
      this.state.affection -= 1;
      this.state.branch = 'main';
    }

    // 1B分支（发消息后的回复）
    if (choiceId === "1b_1") {
      this.state.branch = 'cold';
      this.state.affection -= 3;
    } else if (choiceId === "1b_2") {
      this.state.honesty += 2;
      this.state.affection += 2;
    } else if (choiceId === "1b_3") {
      this.state.courage += 3;
      this.state.affection += 3;
      this.state.specialEvents.push('coffee_date');
    }

    // 重逢场景选择
    if (choiceId === "2_1") {
      this.state.affection += 1;
    } else if (choiceId === "2_2") {
      this.state.courage += 3;
      this.state.honesty += 3;
      this.state.hasConfessed = true;
    } else if (choiceId === "2_3") {
      this.state.affection -= 2;
      this.state.branch = 'cold';
    }

    // 午餐场景选择
    if (choiceId === "3_1") {
      this.state.affection += 2;
      this.state.branch = 'romantic';
    } else if (choiceId === "3_2") {
      this.state.affection -= 1;
      this.state.branch = 'cold';
    } else if (choiceId === "3_3") {
      this.state.honesty += 3;
      this.state.courage += 2;
      this.state.affection += 2;
      this.state.hasConfessed = true;
    }

    this.state.stage++;
  }

  private getNextScene(): SceneData {
    const stage = this.state.stage;

    // 序章后分支（三种不同的逃跑方式）
    if (stage === 1) {
      if (this.state.branch === 'cold') return SCENE_1A_PANIC;
      if (this.state.branch === 'friend') return SCENE_1B_MESSAGE;
      return SCENE_1C_HESITATE; // main 分支
    }

    // 1B 分支的后续
    if (stage === 2 && this.state.specialEvents.includes('coffee_date')) {
      // 如果约了咖啡，跳过重逢场景，直接进入更深的关系
      this.state.affection += 1;
      return SCENE_3_LUNCH;
    }

    // 重逢场景
    if (stage === 2) {
      return SCENE_2_REUNION;
    }

    // 午餐场景
    if (stage === 3) {
      return SCENE_3_LUNCH;
    }

    // 结局判定（stage >= 4）
    if (stage >= 4) {
      return this.getEnding();
    }

    return SCENE_0_PROLOGUE;
  }

  private getEnding(): SceneData {
    const { affection, honesty, courage, hasConfessed, branch } = this.state;

    // 真爱结局：高好感 + 高诚实 + 坦白过
    if (affection >= 6 && honesty >= 5 && hasConfessed) {
      return ENDING_TRUE_LOVE;
    }

    // 救赎结局：中好感 + 高诚实
    if (affection >= 3 && honesty >= 6) {
      return ENDING_REDEMPTION;
    }

    // 挚友结局：中好感 + 友谊分支
    if (affection >= 2 && branch === 'friend') {
      return ENDING_FRIEND;
    }

    // 陌路结局：低好感
    if (affection < 0 || branch === 'cold') {
      return ENDING_STRANGER;
    }

    // 遗憾结局：默认
    return ENDING_REGRET;
  }

  // 调试用：获取当前状态
  getState(): PlayerState {
    return { ...this.state };
  }
}

export const llmService = new LLMService();