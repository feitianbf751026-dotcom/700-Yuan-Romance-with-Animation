import { PlayerState } from "../types";
import { calculateIntimacy } from "./calculator";
import { normalizeChoiceId } from "../pathMatcher/utils";

/**
 * 根据选择ID更新玩家状态
 */
export function updatePlayerState(state: PlayerState, choiceId: string): void {
  // 规范化choice ID
  const normalizedId = normalizeChoiceId(choiceId);

  // 序章选择 - 所有选择都是逃跑，只是方式不同
  if (normalizedId === "p1") {
    // 直接跑：最懦弱
    state.courage -= 2;
    state.honesty -= 1;
  } else if (normalizedId === "p2") {
    // 发消息：有诚意
    state.honesty += 3;
    state.affection += 2;
  } else if (normalizedId === "p3") {
    // 犹豫很久：内疚但没行动
    state.honesty += 1;
    state.affection -= 1;
  }

  // 1A分支后续选择
  if (normalizedId === "1a_1") {
    // 试图彻底忘记 - 降低好感度和勇气
    state.affection -= 2;
    state.courage -= 1;
  } else if (normalizedId === "1a_1b") {
    // 开始感到内疚 - 增加诚实度
    state.honesty += 1;
    state.affection -= 1;
  } else if (normalizedId === "1a_1c") {
    // 决定改变 - 增加勇气
    state.courage += 2;
    state.specialEvents.push('1a_try_change');
  } else if (normalizedId === "1a_2") {
    state.courage -= 1;
    state.affection -= 1;
    state.specialEvents.push('1a_deep_work');
  } else if (normalizedId === "1a_3") {
    state.courage += 1;
    state.specialEvents.push('1a_try_change');
  } else if (normalizedId === "1a_2a") {
    state.courage -= 2;
    state.affection -= 2;
  } else if (normalizedId === "1a_2b") {
    state.courage += 2;
    state.specialEvents.push('1a_try_change');
  } else if (normalizedId === "1a_3a") {
    state.courage += 3;
    state.affection += 2;
    state.specialEvents.push('1a_confront');
  } else if (normalizedId === "1a_3b") {
    state.courage -= 1;
  } else if (normalizedId === "1a_4") {
    state.courage += 3;
    state.affection += 2;
    state.specialEvents.push('1a_confront');
  } else if (normalizedId === "1a_5") {
    state.courage -= 1;
    state.specialEvents.push('1a_observe');
  } else if (normalizedId === "1a_6") {
    state.courage += 2;
    state.affection += 3;
    state.specialEvents.push('1a_first_meet');
  } else if (normalizedId === "1a_7") {
    state.courage -= 1;
    state.affection -= 1;
  } else if (normalizedId === "1a_6a") {
    state.affection += 3;
    state.courage += 2;
    state.specialEvents.push('1a_building_trust');
  } else if (normalizedId === "1a_6b") {
    state.affection += 1;
    state.courage -= 1;
  } else if (normalizedId === "1a_6c") {
    state.affection += 4;
    state.courage += 3;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1a_6d") {
    state.affection += 2;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1a_7a") {
    state.affection += 4;
    state.courage += 3;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1a_7b") {
    state.affection += 2;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1a_7c") {
    state.courage += 2;
    state.honesty += 2;
    state.affection += 1;
  } else if (normalizedId === "1a_7d") {
    state.courage -= 3;
    state.affection -= 3;
  } else if (normalizedId === "1a_8a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1a_8b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1a_8c") {
    state.affection -= 2;
    state.relationshipType = 'stranger';
  } else if (normalizedId === "1a_8") {
    state.courage += 1;
    state.affection += 1;
    state.specialEvents.push('1a_elevator_talk');
  } else if (normalizedId === "1a_9") {
    state.courage -= 2;
    state.affection -= 2;
    state.specialEvents.push('1a_stalking');
  } else if (normalizedId === "1a_9a") {
    state.courage += 2;
    state.honesty += 2;
    state.affection += 1;
  } else if (normalizedId === "1a_9b") {
    state.courage -= 3;
    state.affection -= 3;
  }

  // 1B分支（发消息后的回复）
  if (normalizedId === "1b_1") {
    state.branch = 'cold';
    state.affection -= 3;
    state.specialEvents.push('1b_1');
  } else if (normalizedId === "1b_2") {
    state.honesty += 2;
    state.affection += 2;
    state.specialEvents.push('1b_2');
  } else if (normalizedId === "1b_3") {
    state.courage += 3;
    state.affection += 3;
    state.specialEvents.push('coffee_date');
  }

  // 1B分支后续选择
  if (normalizedId === "1b_1a") {
    state.courage += 2;
    state.honesty += 2;
    state.affection += 1;
    state.specialEvents.push('1b_apology');
  } else if (normalizedId === "1b_1b") {
    state.courage -= 2;
    state.affection -= 2;
    state.specialEvents.push('1b_regret');
  } else if (normalizedId === "1b_1aa") {
    state.courage += 3;
    state.affection += 2;
    state.specialEvents.push('1b_apology');
  } else if (normalizedId === "1b_1ab") {
    state.courage -= 1;
  } else if (normalizedId === "1b_1ac") {
    state.courage += 2;
    state.affection += 3;
    state.specialEvents.push('normal_meet');
  } else if (normalizedId === "1b_1ad") {
    state.courage -= 1;
    state.affection -= 1;
  } else if (normalizedId === "1b_2a") {
    state.courage += 2;
    state.affection += 2;
    state.specialEvents.push('1b_plan_meet');
  } else if (normalizedId === "1b_2b") {
    state.courage -= 1;
    state.affection -= 1;
    state.specialEvents.push('1b_deep_chat');
  } else if (normalizedId === "1b_2aa") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1b_2ab") {
    state.affection += 2;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1b_2ac") {
    state.honesty += 2;
    state.affection += 2;
    state.specialEvents.push('coffee_talk');
  } else if (normalizedId === "1b_2ad") {
    state.affection += 1;
  } else if (normalizedId === "1b_3a") {
    state.honesty += 2;
    state.affection += 2;
    state.specialEvents.push('coffee_talk');
  } else if (normalizedId === "1b_3b") {
    state.affection += 1;
  } else if (normalizedId === "1b_3c") {
    state.affection += 3;
    state.courage += 2;
    state.specialEvents.push('1b_regular_meet');
  } else if (normalizedId === "1b_3d") {
    state.affection += 1;
    state.courage -= 1;
  } else if (normalizedId === "1b_3ca") {
    state.affection += 4;
    state.courage += 3;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1b_3cb") {
    state.affection += 2;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1b_7a") {
    state.affection += 4;
    state.courage += 3;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1b_7b") {
    state.affection += 2;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1b_8a") {
    state.affection += 5;
    state.courage += 3;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1b_8b") {
    state.affection += 2;
    state.relationshipType = 'friend';
  }

  // 1C分支后续选择
  if (normalizedId === "1c_1") {
    // 删除联系方式 - 降低好感度
    state.affection -= 2;
    state.courage -= 1;
  } else if (normalizedId === "1c_1b") {
    // 保留联系方式 - 中性选择
    state.affection += 0;
    state.courage += 0;
  } else if (normalizedId === "1c_1c") {
    // 开始观察 - 增加勇气但可能触发跟踪
    state.courage += 1;
    state.specialEvents.push('1c_stalking');
  } else if (normalizedId === "1c_2") {
    state.courage += 2;
    state.honesty += 2;
    state.specialEvents.push('1c_first_message');
  } else if (normalizedId === "1c_3") {
    state.courage -= 1;
    state.specialEvents.push('1c_stalking');
  } else if (normalizedId === "1c_2a") {
    state.courage += 2;
    state.affection += 2;
    state.specialEvents.push('normal_meet');
  } else if (normalizedId === "1c_2b") {
    state.courage -= 1;
    state.affection -= 1;
  } else if (normalizedId === "1c_3a") {
    state.courage += 3;
    state.affection += 2;
    state.specialEvents.push('1b_apology');
  } else if (normalizedId === "1c_3b") {
    state.courage -= 1;
  } else if (normalizedId === "1c_4") {
    state.courage += 2;
    state.affection += 2;
    state.specialEvents.push('normal_meet');
  } else if (normalizedId === "1c_5") {
    state.courage -= 1;
    state.affection -= 1;
  } else if (normalizedId === "1c_6") {
    state.affection += 3;
    state.courage += 2;
    state.specialEvents.push('1c_deep_conversation');
  } else if (normalizedId === "1c_7") {
    state.affection += 1;
    state.specialEvents.push('1c_friendship');
  } else if (normalizedId === "1c_6a") {
    state.affection += 4;
    state.courage += 3;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1c_6b") {
    state.affection += 2;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1c_7a") {
    state.affection += 4;
    state.courage += 3;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1c_7b") {
    state.affection += 2;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1c_8a") {
    state.affection += 5;
    state.courage += 3;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1c_8b") {
    state.affection += 2;
    state.relationshipType = 'friend';
  }

  // 重逢场景选择
  if (normalizedId === "2_1") {
    state.affection += 1;
  } else if (normalizedId === "2_2") {
    state.courage += 3;
    state.honesty += 3;
    state.hasConfessed = true;
  } else if (normalizedId === "2_3") {
    state.affection -= 2;
    state.relationshipType = 'stranger';
  }

  // 午餐场景选择
  if (normalizedId === "3_1") {
    state.affection += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "3_2") {
    state.affection -= 1;
    state.relationshipType = 'stranger';
  } else if (normalizedId === "3_3") {
    state.honesty += 3;
    state.courage += 2;
    state.affection += 2;
    state.hasConfessed = true;
  }

  // SCENE_2_REUNION和SCENE_3_LUNCH的后续选择状态更新
  if (normalizedId === "2_1a") {
    state.courage += 2;
    state.honesty += 2;
    state.affection += 1;
  } else if (normalizedId === "2_1b") {
    state.courage -= 1;
  } else if (normalizedId === "2_2a") {
    state.courage += 2;
    state.affection += 3;
    state.specialEvents.push('normal_meet');
  } else if (normalizedId === "2_2b") {
    state.courage -= 1;
    state.affection -= 1;
  } else if (normalizedId === "2_3a") {
    state.courage += 3;
    state.affection += 2;
    state.specialEvents.push('normal_meet');
  } else if (normalizedId === "2_3b") {
    state.courage -= 2;
    state.affection -= 2;
  } else if (normalizedId === "3_1a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "3_1b") {
    state.affection += 1;
    state.courage -= 1;
  } else if (normalizedId === "3_2a") {
    state.courage += 2;
    state.affection += 1;
  } else if (normalizedId === "3_2b") {
    state.courage -= 2;
    state.affection -= 2;
  } else if (normalizedId === "3_3a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "3_3b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  }

  // SCENE_2_1A_CONFESSION的后续选择（2_1aa, 2_1ab）
  if (normalizedId === "2_1aa") {
    state.affection += 4;
    state.courage += 3;
    state.honesty += 2;
    state.relationshipType = 'romantic';
    state.hasConfessed = true;
  } else if (normalizedId === "2_1ab") {
    state.affection += 1;
    state.courage -= 1;
  }

  // SCENE_2_2A_COFFEE_INVITATION的后续选择（2_2aa, 2_2ab）
  if (normalizedId === "2_2aa") {
    state.affection += 4;
    state.courage += 3;
    state.relationshipType = 'romantic';
    state.specialEvents.push('normal_meet');
  } else if (normalizedId === "2_2ab") {
    state.affection += 2;
    state.relationshipType = 'friend';
  }

  // SCENE_2_3A_TURN_BACK的后续选择（2_3aa, 2_3ab）
  if (normalizedId === "2_3aa") {
    state.affection += 3;
    state.courage += 2;
    state.specialEvents.push('normal_meet');
  } else if (normalizedId === "2_3ab") {
    state.courage -= 1;
    state.affection -= 1;
  }

  // SCENE_3_1A_AGREE的后续选择（3_1aa, 3_1ab）
  if (normalizedId === "3_1aa") {
    state.affection += 4;
    state.courage += 3;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "3_1ab") {
    state.affection += 2;
    state.relationshipType = 'friend';
  }

  // SCENE_3_2A_REGRET的后续选择（3_2aa, 3_2ab）
  if (normalizedId === "3_2aa") {
    state.affection += 3;
    state.courage += 3;
    state.honesty += 2;
    state.hasConfessed = true;
  } else if (normalizedId === "3_2ab") {
    state.courage -= 2;
    state.affection -= 2;
  }

  // SCENE_3_3A_NEW_START的后续选择（3_3aa, 3_3ab）
  if (normalizedId === "3_3aa") {
    state.affection += 4;
    state.courage += 3;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "3_3ab") {
    state.affection += 2;
    state.relationshipType = 'friend';
  }

  // 第9层选择（1a_9c, 1a_9c2, 1a_9d, 1a_9e）
  if (normalizedId === "1a_9c") {
    state.affection -= 1;
    state.courage -= 1;
  } else if (normalizedId === "1a_9c2") {
    state.affection += 2;
    state.courage += 3;
  } else if (normalizedId === "1a_9d") {
    state.affection += 1;
    state.honesty += 1;
  } else if (normalizedId === "1a_9e") {
    state.affection += 3;
    state.courage += 2;
    state.honesty += 2;
    state.hasConfessed = true;
  }

  // 第10层选择（1a_10a, 1a_10b, 1a_10c, 1a_10d）
  // 这些是结局前的最后选择，通常只影响最终状态
  if (normalizedId === "1a_10a") {
    state.affection += 1;
    state.honesty += 1;
  } else if (normalizedId === "1a_10b") {
    state.affection += 2;
    state.courage += 1;
    state.honesty += 2;
    state.hasConfessed = true;
  } else if (normalizedId === "1a_10c") {
    state.affection += 1;
  } else if (normalizedId === "1a_10d") {
    state.affection += 2;
    state.courage += 2;
  }

  // 1B和1C分支的第10层选择
  if (normalizedId === "1b_10a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1b_10b") {
    state.affection += 2;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1c_10a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1c_10b") {
    state.affection += 2;
    state.relationshipType = 'friend';
  }

  // 1B分支第7-9层新增选择的状态更新
  if (normalizedId === "1b_7c") {
    state.courage += 2;
    state.honesty += 2;
    state.affection += 1;
  } else if (normalizedId === "1b_7d") {
    state.affection += 1;
    state.courage -= 1;
  } else if (normalizedId === "1b_7e") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1b_7f") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1b_7g") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1b_7h") {
    state.courage += 2;
    state.affection += 2;
  } else if (normalizedId === "1b_7i") {
    state.courage -= 1;
    state.affection -= 1;
  } else if (normalizedId === "1b_7j") {
    state.courage += 2;
    state.affection += 2;
  } else if (normalizedId === "1b_7k") {
    state.affection += 1;
  } else if (normalizedId === "1b_8d") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1b_8e") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1b_8f") {
    state.courage += 2;
    state.honesty += 2;
    state.affection += 1;
  } else if (normalizedId === "1b_8g") {
    state.affection += 1;
    state.courage -= 1;
  } else if (normalizedId === "1b_8h") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1b_8i") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1b_8j") {
    state.courage += 3;
    state.affection += 2;
  } else if (normalizedId === "1b_8k") {
    state.courage -= 2;
    state.affection -= 2;
  } else if (normalizedId === "1b_9g") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1b_9h") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1b_9i") {
    state.courage += 2;
    state.affection += 2;
  } else if (normalizedId === "1b_9j") {
    state.courage -= 1;
    state.affection -= 1;
  } else if (normalizedId === "1b_9k") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1b_9l") {
    state.affection += 2;
    state.relationshipType = 'friend';
  }

  // 1C分支第4-9层新增选择的状态更新
  if (normalizedId === "1c_4c_a") {
    state.courage += 2;
    state.honesty += 2;
    state.affection += 1;
  } else if (normalizedId === "1c_4c_b") {
    state.courage -= 1;
    state.affection -= 1;
  } else if (normalizedId === "1c_4c_c") {
    state.courage += 1;
    state.affection += 1;
  } else if (normalizedId === "1c_4d_a") {
    state.courage += 2;
    state.affection += 2;
  } else if (normalizedId === "1c_4d_b") {
    state.courage -= 1;
    state.affection -= 1;
  } else if (normalizedId === "1c_4e_a") {
    state.courage += 2;
    state.affection += 2;
  } else if (normalizedId === "1c_4e_b") {
    state.courage -= 1;
    state.affection -= 1;
  } else if (normalizedId === "1c_5b_a") {
    state.affection += 1;
    state.courage += 1;
  } else if (normalizedId === "1c_5b_b") {
    state.courage += 2;
    state.affection += 2;
  } else if (normalizedId === "1c_5c_a") {
    state.courage += 3;
    state.affection += 2;
    state.honesty += 1;
  } else if (normalizedId === "1c_5c_b") {
    state.courage -= 1;
    state.affection -= 1;
  } else if (normalizedId === "1c_5d_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1c_5d_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1c_6b_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1c_6b_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1c_6c_a") {
    state.affection += 2;
    state.courage += 1;
  } else if (normalizedId === "1c_6c_b") {
    state.affection += 1;
  } else if (normalizedId === "1c_6d_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1c_6d_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1c_7b_a") {
    state.courage += 2;
    state.honesty += 2;
    state.affection += 1;
  } else if (normalizedId === "1c_7b_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1c_7b_c") {
    state.affection += 1;
    state.courage -= 1;
  } else if (normalizedId === "1c_7c_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1c_7c_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1c_7d_a") {
    state.courage += 2;
    state.affection += 2;
  } else if (normalizedId === "1c_7d_b") {
    state.courage -= 1;
    state.affection -= 1;
  } else if (normalizedId === "1c_7e_a") {
    state.courage += 2;
    state.affection += 2;
  } else if (normalizedId === "1c_7e_b") {
    state.affection += 1;
  } else if (normalizedId === "1c_8b_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1c_8b_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1c_8d_a") {
    state.courage += 2;
    state.honesty += 2;
    state.affection += 1;
  } else if (normalizedId === "1c_8d_b") {
    state.affection += 1;
    state.courage -= 1;
  } else if (normalizedId === "1c_8e_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1c_8e_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1c_8f_a") {
    state.courage += 3;
    state.affection += 2;
  } else if (normalizedId === "1c_8f_b") {
    state.courage -= 2;
    state.affection -= 2;
  } else if (normalizedId === "1c_9d_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1c_9d_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1c_9e_a") {
    state.courage += 2;
    state.affection += 2;
  } else if (normalizedId === "1c_9e_b") {
    state.courage -= 1;
    state.affection -= 1;
  } else if (normalizedId === "1c_9f_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1c_9f_b") {
    state.affection += 2;
    state.relationshipType = 'friend';
  }

  // 1A分支第7-9层新增选择的状态更新
  if (normalizedId === "1a_7c_a") {
    state.courage += 2;
    state.honesty += 2;
    state.affection += 1;
  } else if (normalizedId === "1a_7c_b") {
    state.affection += 1;
    state.courage -= 1;
  } else if (normalizedId === "1a_7c_c") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1a_7d_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1a_7d_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1a_7e_a") {
    state.courage += 2;
    state.affection += 2;
  } else if (normalizedId === "1a_7e_b") {
    state.courage -= 1;
    state.affection -= 1;
  } else if (normalizedId === "1a_7f_a") {
    state.courage += 2;
    state.affection += 2;
  } else if (normalizedId === "1a_7f_b") {
    state.affection += 1;
  } else if (normalizedId === "1a_8c_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1a_8c_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1a_8d_a") {
    state.courage += 2;
    state.honesty += 2;
    state.affection += 1;
  } else if (normalizedId === "1a_8d_b") {
    state.affection += 1;
    state.courage -= 1;
  } else if (normalizedId === "1a_8e_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1a_8e_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1a_8f_a") {
    state.courage += 3;
    state.affection += 2;
  } else if (normalizedId === "1a_8f_b") {
    state.courage -= 2;
    state.affection -= 2;
  } else if (normalizedId === "1a_9d_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1a_9d_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1a_9e_a") {
    state.courage += 2;
    state.affection += 2;
  } else if (normalizedId === "1a_9e_b") {
    state.courage -= 1;
    state.affection -= 1;
  } else if (normalizedId === "1a_9f_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1a_9f_b") {
    state.affection += 2;
    state.relationshipType = 'friend';
  }

  // 共享场景新增选择的状态更新
  if (normalizedId === "4_a") {
    state.courage += 2;
    state.affection += 2;
  } else if (normalizedId === "4_b") {
    state.courage -= 1;
    state.affection -= 1;
  } else if (normalizedId === "4_c") {
    state.affection += 1;
  } else if (normalizedId === "4_d") {
    state.courage += 2;
    state.affection += 2;
  } else if (normalizedId === "4_e") {
    state.affection += 1;
  } else if (normalizedId === "4a_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "4a_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "4b_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "4b_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "5_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "5_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "5_c") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "5_d") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "5a_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "5a_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "5b_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "5b_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "6_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "6_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "6_c") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "6_d") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "6a_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "6a_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "6b_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "6b_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "7_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "7_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "7_c") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "7_d") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "7a_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "7a_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "7b_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "7b_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "8_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "8_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "8_c") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "8_d") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "8a_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "8a_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "8b_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "8b_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "9_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "9_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "9_c") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "9_d") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "9a_a") {
    state.courage += 2;
    state.affection += 2;
  } else if (normalizedId === "9a_b") {
    state.courage -= 1;
    state.affection -= 1;
  } else if (normalizedId === "9b_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "9b_b") {
    state.affection += 2;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1b_4e_a") {
    state.courage += 2;
    state.affection += 2;
  } else if (normalizedId === "1b_4e_b") {
    state.affection += 1;
  } else if (normalizedId === "1b_5f_a") {
    state.courage += 2;
    state.affection += 2;
  } else if (normalizedId === "1b_5f_b") {
    state.affection += 1;
  } else if (normalizedId === "1b_6e_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1b_6e_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1c_4f_a") {
    state.courage += 2;
    state.affection += 2;
  } else if (normalizedId === "1c_4f_b") {
    state.courage -= 1;
    state.affection -= 1;
  } else if (normalizedId === "1c_5e_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1c_5e_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1c_6e_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1c_6e_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1a_4e_a") {
    state.courage += 2;
    state.affection += 2;
  } else if (normalizedId === "1a_4e_b") {
    state.courage -= 1;
    state.affection -= 1;
  } else if (normalizedId === "1a_5e_a") {
    state.courage += 2;
    state.affection += 2;
  } else if (normalizedId === "1a_5e_b") {
    state.affection += 1;
  } else if (normalizedId === "1a_6g_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1a_6g_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "4c_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "4c_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "5c_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "5c_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "6e_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "6e_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "7c_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "7c_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "8c_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "8c_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "9c_a") {
    state.courage += 2;
    state.affection += 2;
  } else if (normalizedId === "9c_b") {
    state.courage -= 1;
    state.affection -= 1;
  } else if (normalizedId === "1a_7g_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1a_7g_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1a_8g_a") {
    state.courage += 3;
    state.honesty += 2;
    state.affection += 2;
  } else if (normalizedId === "1a_8g_b") {
    state.courage -= 1;
    state.affection -= 1;
  } else if (normalizedId === "1a_9i_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1a_9i_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1a_10e_a") {
    state.courage += 2;
    state.affection += 2;
  } else if (normalizedId === "1a_10e_b") {
    state.courage -= 1;
    state.affection -= 1;
  } else if (normalizedId === "1b_7g_a") {
    state.courage += 3;
    state.honesty += 2;
    state.affection += 2;
  } else if (normalizedId === "1b_7g_b") {
    state.courage -= 1;
    state.affection -= 1;
  } else if (normalizedId === "1b_8g_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1b_8g_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1b_9k_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1b_9k_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1b_10c_a") {
    state.courage += 2;
    state.affection += 2;
  } else if (normalizedId === "1b_10c_b") {
    state.courage -= 1;
    state.affection -= 1;
  } else if (normalizedId === "1c_7g_a") {
    state.courage += 3;
    state.honesty += 2;
    state.affection += 2;
  } else if (normalizedId === "1c_7g_b") {
    state.courage -= 1;
    state.affection -= 1;
  } else if (normalizedId === "1c_8g_a") {
    state.courage += 2;
    state.affection += 2;
  } else if (normalizedId === "1c_8g_b") {
    state.courage -= 1;
    state.affection -= 1;
  } else if (normalizedId === "1c_9k_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "1c_9k_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "1c_10c_a") {
    state.courage += 2;
    state.affection += 2;
  } else if (normalizedId === "1c_10c_b") {
    state.courage -= 1;
    state.affection -= 1;
  } else if (normalizedId === "7d_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "7d_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "7d_c") {
    state.affection += 1;
    state.courage += 1;
  } else if (normalizedId === "8d_a") {
    state.affection += 3;
    state.courage += 2;
    state.relationshipType = 'romantic';
  } else if (normalizedId === "8d_b") {
    state.affection += 1;
    state.relationshipType = 'friend';
  } else if (normalizedId === "8d_c") {
    state.courage -= 1;
    state.affection -= 1;
  } else if (normalizedId === "9d_a") {
    state.courage += 2;
    state.affection += 2;
  } else if (normalizedId === "9d_b") {
    state.courage -= 1;
    state.affection -= 1;
  } else if (normalizedId === "9d_c") {
    state.courage -= 2;
    state.affection -= 2;
  }

  // 更新亲密度（每次状态更新后重新计算）
  state.intimacy = calculateIntimacy(state);
}

