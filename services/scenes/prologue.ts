import { SceneData } from "../../types";

// ============================================================================
// prologue 场景
// ============================================================================

export const SCENE_0_PROLOGUE: SceneData = {
  narrative: `手机屏幕的光在昏暗的走廊里显得格外刺眼。APP上的订单显示"已接单"，备注栏里写着"全套服务，不过夜"。我盯着微信支付里刚刚转出去的700元，又抬头看了看面前的302号房门。

走廊里很安静，只有远处电梯运行的嗡嗡声。门缝里透出微弱的电视光，还有隐约的说话声——她在打电话，声音很轻，听不清内容，但能感觉到她的紧张。

这本该是一场交易。我只是太寂寞了，想找个人陪。但真到了门口，听着里面传来的声音，一股巨大的荒谬感和羞耻感突然击中了我。

我的手指悬在门板前，犹豫了整整五分钟。里面的电视声音很清晰，她在等我。但我就是迈不出这一步。

700块钱，买来的不是陪伴，而是更深的孤独。`,
  dialogue: "（不行……我做不到……）",
  speaker: "内心独白",
  backgroundDescription: "dark hotel hallway, pov looking at door number 302, phone screen glowing, moody cinematic lighting, wong kar wai style",
  choices: [
    { id: "p1", text: "直接转身逃跑，什么都不说", sentiment: "shy" },
    { id: "p2", text: "给她发消息：\"对不起，我来不了\"", sentiment: "neutral" },
    { id: "p3", text: "站在门口纠结很久，最终还是走了", sentiment: "cold" }
  ],
  isEnding: false
};




