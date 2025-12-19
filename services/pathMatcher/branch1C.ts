import { SceneData } from "../../types";
import * as Scenes from "../scenes";
import { getDefaultNextScene, matchWithFallbackV2, normalizeChoiceId, hasToken, tokenizePath } from "./utils";

/**
 * 1C分支树匹配 - 完整的10层树状结构
 */
export function match1CBranch(path: string[], depth: number): SceneData {
  return matchWithFallbackV2(
    () => match1CBranchLegacy(path, depth),
    () => match1CBranchStrict(path, depth)
  );
}

/**
 * 严格V2匹配 - 使用token-based匹配
 */
export function match1CBranchStrict(path: string[], depth: number): SceneData | null {
  const tokens = tokenizePath(path.map(normalizeChoiceId));

  // 第1层 - REQUIRED per handoff
  if (depth === 1) {
    return Scenes.SCENE_1C_HESITATE;
  }

  // 第2层
  if (depth === 2) {
    if (hasToken(tokens, '1c_1')) return Scenes.SCENE_1C_GUILT; // 删除联系方式
    if (hasToken(tokens, '1c_1b')) return Scenes.SCENE_1C_GUILT; // 保留联系方式
    if (hasToken(tokens, '1c_1c')) return Scenes.SCENE_1C_GUILT; // 开始观察
  }

  // 第3层
  if (depth === 3) {
    if (hasToken(tokens, '1c_2')) return Scenes.SCENE_1C_FIRST_MESSAGE;
    if (hasToken(tokens, '1c_3')) return Scenes.SCENE_1C_STALKING;
  }

  // 第4层
  if (depth === 4) {
    if (hasToken(tokens, '1c_2a')) return Scenes.SCENE_1C_MEETING;
    if (hasToken(tokens, '1c_2b')) return Scenes.SCENE_1C_4A_GUILT_OBSERVE;
    if (hasToken(tokens, '1c_3a')) return Scenes.SCENE_1B_APOLOGY;
    if (hasToken(tokens, '1c_3b')) return Scenes.SCENE_1C_4A_GUILT_OBSERVE;
    if (hasToken(tokens, '1c_4')) return Scenes.SCENE_1C_MEETING;
    if (hasToken(tokens, '1c_5')) return Scenes.SCENE_1C_4A_GUILT_OBSERVE;
    if (hasToken(tokens, '1c_4c_a')) return Scenes.SCENE_1C_4D_SEEK_FORGIVE;
    if (hasToken(tokens, '1c_4c_b')) return Scenes.SCENE_1C_4E_ACCEPTANCE;
    if (hasToken(tokens, '1c_4c_c')) return Scenes.SCENE_1C_4C_GUILT_DEEPEN;
    if (hasToken(tokens, '1c_4d_a')) return Scenes.SCENE_1C_5A_FIRST_MEETING;
    if (hasToken(tokens, '1c_4d_b')) return Scenes.SCENE_1C_5B_SLOW_APPROACH;
    if (hasToken(tokens, '1c_4e_a')) return Scenes.SCENE_1C_5A_FIRST_MEETING;
    if (hasToken(tokens, '1c_4e_b')) return Scenes.SCENE_1C_4C_GUILT_DEEPEN;
  }

  // 第5层
  if (depth === 5) {
    if (hasToken(tokens, '1c_4c')) return Scenes.SCENE_1C_5A_FIRST_MEETING;
    if (hasToken(tokens, '1c_4d')) return Scenes.SCENE_1C_4B_FIRST_MESSAGE;
    if (hasToken(tokens, '1c_5a')) return Scenes.SCENE_1C_6A_DEEP_TALK;
    if (hasToken(tokens, '1c_5b')) return Scenes.SCENE_1C_FRIENDSHIP;
    if (hasToken(tokens, '1c_5b_a')) return Scenes.SCENE_1C_5B_SLOW_APPROACH;
    if (hasToken(tokens, '1c_5b_b')) return Scenes.SCENE_1C_5C_BARRIER;
    if (hasToken(tokens, '1c_5c_a')) return Scenes.SCENE_1C_5D_BREAKTHROUGH;
    if (hasToken(tokens, '1c_5c_b')) return Scenes.SCENE_1C_5C_BARRIER;
    if (hasToken(tokens, '1c_5d_a')) return Scenes.SCENE_1C_6A_DEEP_TALK;
    if (hasToken(tokens, '1c_5d_b')) return Scenes.SCENE_1C_FRIENDSHIP;
    if (hasToken(tokens, '1c_4f_a')) return Scenes.SCENE_1C_5E_GROWING_CLOSER;
    if (hasToken(tokens, '1c_5e_a')) return Scenes.SCENE_1C_6A_DEEP_TALK;
    if (hasToken(tokens, '1c_5e_b')) return Scenes.SCENE_1C_FRIENDSHIP;
  }

  // 第6层
  if (depth === 6) {
    if (hasToken(tokens, '1c_6a')) return Scenes.SCENE_1C_7A_RELATIONSHIP_GROW;
    if (hasToken(tokens, '1c_6b')) return Scenes.SCENE_1C_7A_RELATIONSHIP_GROW;
    if (hasToken(tokens, '1c_6b_a')) return Scenes.SCENE_1C_6B_TRUST_TEST;
    if (hasToken(tokens, '1c_6b_b')) return Scenes.SCENE_1C_6C_UNDERSTANDING;
    if (hasToken(tokens, '1c_6c_a')) return Scenes.SCENE_1C_6D_DECISION;
    if (hasToken(tokens, '1c_6c_b')) return Scenes.SCENE_1C_6C_UNDERSTANDING;
    if (hasToken(tokens, '1c_6d_a')) return Scenes.SCENE_1C_7A_RELATIONSHIP_GROW;
    if (hasToken(tokens, '1c_6d_b')) return Scenes.SCENE_1C_7A_RELATIONSHIP_GROW;
    if (hasToken(tokens, '1c_6e_a')) return Scenes.SCENE_1C_6E_EMOTIONAL_BOND;
    if (hasToken(tokens, '1c_6e_b')) return Scenes.SCENE_1C_7A_RELATIONSHIP_GROW;
  }

  // 第7层
  if (depth === 7) {
    if (hasToken(tokens, '1c_7a')) return Scenes.SCENE_1C_8A_FINAL_CHOICE;
    if (hasToken(tokens, '1c_7b')) return Scenes.SCENE_1C_8A_FINAL_CHOICE;
    if (hasToken(tokens, '1c_7b_a')) return Scenes.SCENE_1C_7B_CONFESSION_MOMENT;
    if (hasToken(tokens, '1c_7b_b')) return Scenes.SCENE_1C_7C_FRIENDSHIP_CONFIRM;
    if (hasToken(tokens, '1c_7b_c')) return Scenes.SCENE_1C_7D_DISTANCE_KEEP;
    if (hasToken(tokens, '1c_7c_a')) return Scenes.SCENE_1C_8A_FINAL_CHOICE;
    if (hasToken(tokens, '1c_7c_b')) return Scenes.SCENE_1C_7C_FRIENDSHIP_CONFIRM;
    if (hasToken(tokens, '1c_7d_a')) return Scenes.SCENE_1C_8A_FINAL_CHOICE;
    if (hasToken(tokens, '1c_7d_b')) return Scenes.SCENE_1C_7D_DISTANCE_KEEP;
    if (hasToken(tokens, '1c_7e_a')) return Scenes.SCENE_1C_8A_FINAL_CHOICE;
    if (hasToken(tokens, '1c_7e_b')) return Scenes.SCENE_1C_7E_COMPLICATED_FEEL;
    if (hasToken(tokens, '1c_7g_a')) return Scenes.SCENE_1C_8G_REDEMPTION_PATH;
    if (hasToken(tokens, '1c_7g_b')) return Scenes.SCENE_1C_8A_FINAL_CHOICE;
  }

  // 第8层
  if (depth === 8) {
    if (hasToken(tokens, '1c_8a')) return Scenes.SCENE_1C_9A_NEW_BEGINNING;
    if (hasToken(tokens, '1c_8b')) return Scenes.SCENE_1C_9B_FEAR_AGAIN;
    if (hasToken(tokens, '1c_8c')) return Scenes.SCENE_1C_9C_700_APOLOGY;
    if (hasToken(tokens, '1c_8b_a')) return Scenes.SCENE_1C_8B_FEAR_FACE;
    if (hasToken(tokens, '1c_8b_b')) return Scenes.SCENE_1C_8D_PAST_CONFESS;
    if (hasToken(tokens, '1c_8d_a')) return Scenes.SCENE_1C_8E_FUTURE_PLAN;
    if (hasToken(tokens, '1c_8d_b')) return Scenes.SCENE_1C_8F_FINAL_HESITATION;
    if (hasToken(tokens, '1c_8e_a')) return Scenes.SCENE_1C_9A_NEW_BEGINNING;
    if (hasToken(tokens, '1c_8e_b')) return Scenes.SCENE_1C_9B_FEAR_AGAIN;
    if (hasToken(tokens, '1c_8f_a')) return Scenes.SCENE_1C_9A_NEW_BEGINNING;
    if (hasToken(tokens, '1c_8f_b')) return Scenes.SCENE_1C_9B_FEAR_AGAIN;
    if (hasToken(tokens, '1c_8g_a')) return Scenes.SCENE_1C_9K_NEW_BEGINNING;
    if (hasToken(tokens, '1c_8g_b')) return Scenes.SCENE_1C_9B_FEAR_AGAIN;
  }

  // 第9层
  if (depth === 9) {
    if (hasToken(tokens, '1c_9a')) return Scenes.SCENE_1C_10A_RELATIONSHIP_DEEPEN;
    if (hasToken(tokens, '1c_9b')) return Scenes.SCENE_1C_10B_FRIENDSHIP_PATH;
    if (hasToken(tokens, '1c_9c')) return Scenes.SCENE_1C_10A_RELATIONSHIP_DEEPEN;
    if (hasToken(tokens, '1c_9d')) return Scenes.SCENE_1C_10B_FRIENDSHIP_PATH;
    if (hasToken(tokens, '1c_9e')) return Scenes.SCENE_1C_10A_RELATIONSHIP_DEEPEN;
    if (hasToken(tokens, '1c_9f')) return Scenes.SCENE_1C_10B_FRIENDSHIP_PATH;
    if (hasToken(tokens, '1c_9d_a')) return Scenes.SCENE_1C_9D_RELATIONSHIP_DECISION;
    if (hasToken(tokens, '1c_9d_b')) return Scenes.SCENE_1C_9E_FINAL_CHOICE;
    if (hasToken(tokens, '1c_9e_a')) return Scenes.SCENE_1C_9F_NEW_BEGINNING;
    if (hasToken(tokens, '1c_9e_b')) return Scenes.SCENE_1C_9E_FINAL_CHOICE;
    if (hasToken(tokens, '1c_9f_a')) return Scenes.SCENE_1C_10A_RELATIONSHIP_DEEPEN;
    if (hasToken(tokens, '1c_9f_b')) return Scenes.SCENE_1C_10B_FRIENDSHIP_PATH;
    if (hasToken(tokens, '1c_9k_a')) return Scenes.SCENE_1C_10C_REDEMPTION_FINAL;
    if (hasToken(tokens, '1c_9k_b')) return Scenes.SCENE_1C_10A_RELATIONSHIP_DEEPEN;
  }

  // 第10层及以后 - 返回null，让legacy处理
  if (depth > 10) {
    return null;
  }

  return null;
}

