import { SceneData } from "../../types";
import * as Scenes from "../scenes";
import { getDefaultNextScene } from "./utils";

/**
 * 1A分支树匹配 - 完整的10层树状结构
 */
export function match1ABranch(path: string[], depth: number): SceneData {
  const pathStr = path.join('->');
  const lastChoice = path[path.length - 1];

  // 第2层
  if (depth === 2) {
    if (path[1] === '1a_1') return Scenes.SCENE_1A_LIFE; // 试图忘记
    if (path[1] === '1a_1b') return Scenes.SCENE_1A_LIFE; // 开始内疚
    if (path[1] === '1a_1c') return Scenes.SCENE_1A_TRY_CHANGE; // 决定改变（直接进入改变路线）
  }

  // 第3层 - 根据1A_LIFE的选择分支
  if (depth === 3) {
    if (lastChoice === '1a_2') return Scenes.SCENE_1A_DEEP_WORK;
    if (lastChoice === '1a_3') return Scenes.SCENE_1A_TRY_CHANGE;
  }

  // 第4层 - 深度分支
  if (depth === 4) {
    if (lastChoice === '1a_2a') return Scenes.SCENE_1A_4A_WORK_COLLAPSE;
    if (lastChoice === '1a_2b') return Scenes.SCENE_1A_4B_TRY_SOCIAL;
    if (lastChoice === '1a_3a') return Scenes.SCENE_1A_STRUGGLE;
    if (lastChoice === '1a_3b') return Scenes.SCENE_1A_OBSERVE;
    if (lastChoice === '1a_4') return Scenes.SCENE_1A_CONFRONT;
    if (lastChoice === '1a_5') return Scenes.SCENE_1A_OBSERVE;
  }

  // 第5层
  if (depth === 5) {
    if (lastChoice === '1a_4a') return Scenes.SCENE_1A_5A_COLLAPSE_HOSPITAL; // 崩溃路线
    if (lastChoice === '1a_4b') return Scenes.SCENE_1A_5B_SOCIAL_ATTEMPT; // 尝试社交路线
    if (lastChoice === '1a_4c') return Scenes.SCENE_1A_5A_CAFETERIA_TALK;
    if (lastChoice === '1a_4d') return Scenes.SCENE_1A_5B_AVOID_AGAIN;
    if (lastChoice === '1a_6') return Scenes.SCENE_1A_FIRST_MEET;
    if (lastChoice === '1a_7') return Scenes.SCENE_1A_5B_AVOID_AGAIN;
    if (lastChoice === '1a_8') return Scenes.SCENE_1A_ELEVATOR_TALK;
    if (lastChoice === '1a_9') return Scenes.SCENE_1A_STALKING;
    // 新增场景路径
    if (lastChoice === '1a_4c_a') return Scenes.SCENE_1A_5C_FIRST_CONTACT;
    if (lastChoice === '1a_4c_b') return Scenes.SCENE_1A_5D_MISSED_CHANCE;
    if (lastChoice === '1a_4c_c') return Scenes.SCENE_1A_5B_SOCIAL_ATTEMPT;
    if (lastChoice === '1a_5c_a') return Scenes.SCENE_1A_FIRST_MEET;
    if (lastChoice === '1a_5c_b') return Scenes.SCENE_1A_5D_MISSED_CHANCE;
    if (lastChoice === '1a_5d_a') return Scenes.SCENE_1A_ELEVATOR_TALK;
    if (lastChoice === '1a_5d_b') return Scenes.SCENE_1A_STALKING;
    // 额外场景路径
    if (lastChoice === '1a_4e_a') return Scenes.SCENE_1A_5E_OPPORTUNITY;
    if (lastChoice === '1a_5e_a') return Scenes.SCENE_1A_FIRST_MEET;
    if (lastChoice === '1a_5e_b') return Scenes.SCENE_1A_OBSERVE;
  }

  // 第6层
  if (depth === 6) {
    if (lastChoice === '1a_5aa') return Scenes.SCENE_1A_6A_COFFEE_DEEP; // 出院后改变
    if (lastChoice === '1a_5ab') return Scenes.SCENE_1A_8B_FINAL_ESCAPE; // 继续逃避
    if (lastChoice === '1a_5ba') return Scenes.SCENE_1A_5A_CAFETERIA_TALK; // 社交尝试成功
    if (lastChoice === '1a_5bb') return Scenes.SCENE_1A_5B_AVOID_AGAIN; // 社交尝试失败
    if (lastChoice === '1a_5a') return Scenes.SCENE_1A_6A_COFFEE_DEEP;
    if (lastChoice === '1a_5b') return Scenes.SCENE_1A_6B_ELEVATOR_CONTINUE;
    if (lastChoice === '1a_5c') return Scenes.SCENE_1A_6B_ELEVATOR_CONTINUE;
    if (lastChoice === '1a_5d') return Scenes.SCENE_1A_7B_STALKING_DISCOVERED;
    if (lastChoice === '1a_6') return Scenes.SCENE_1A_FIRST_MEET; // 从CONFRONT来的
    // 新增场景路径
    if (lastChoice === '1a_6c_a') return Scenes.SCENE_1A_6C_DEEP_CONNECTION;
    if (lastChoice === '1a_6c_b') return Scenes.SCENE_1A_6D_MUTUAL_UNDERSTANDING;
    if (lastChoice === '1a_6d_a') return Scenes.SCENE_1A_6E_TRUST_BUILDING;
    if (lastChoice === '1a_6d_b') return Scenes.SCENE_1A_6F_INTIMACY_DEEPEN;
    if (lastChoice === '1a_6e_a') return Scenes.SCENE_1A_7A_RELATIONSHIP_GROW;
    if (lastChoice === '1a_6e_b') return Scenes.SCENE_1A_BUILDING_TRUST;
    if (lastChoice === '1a_6f_a') return Scenes.SCENE_1A_7A_RELATIONSHIP_GROW;
    if (lastChoice === '1a_6f_b') return Scenes.SCENE_1A_BUILDING_TRUST;
    // 额外场景路径
    if (lastChoice === '1a_6g_a') return Scenes.SCENE_1A_6G_RELATIONSHIP_DEVELOPMENT;
    if (lastChoice === '1a_6g_b') return Scenes.SCENE_1A_BUILDING_TRUST;
  }

  // 第7层
  if (depth === 7) {
    // 从SCENE_1A_FIRST_MEET或SCENE_1A_6A_COFFEE_DEEP来的选择
    if (lastChoice === '1a_6a') return Scenes.SCENE_1A_BUILDING_TRUST;
    if (lastChoice === '1a_6b') return Scenes.SCENE_1A_BUILDING_TRUST;
    // 从SCENE_1A_6B_ELEVATOR_CONTINUE来的选择
    if (lastChoice === '1a_6c') return Scenes.SCENE_1A_7A_RELATIONSHIP_GROW;
    if (lastChoice === '1a_6d') return Scenes.SCENE_1A_7B_STALKING_DISCOVERED;
    // 从SCENE_1A_BUILDING_TRUST来的选择
    if (lastChoice === '1a_7a') return Scenes.SCENE_1A_7A_RELATIONSHIP_GROW;
    if (lastChoice === '1a_7b') return Scenes.SCENE_1A_7A_RELATIONSHIP_GROW;
    // 从SCENE_1A_7B_STALKING_DISCOVERED来的选择
    if (lastChoice === '1a_7c') return Scenes.SCENE_1A_8A_CONFESSION;
    if (lastChoice === '1a_7d') return Scenes.SCENE_1A_8B_FINAL_ESCAPE;
    // 从SCENE_1A_ELEVATOR_TALK来的选择
    if (lastChoice === '1a_8a') return Scenes.SCENE_1A_6B_ELEVATOR_CONTINUE;
    if (lastChoice === '1a_8b') return Scenes.SCENE_1A_STALKING;
    // 从SCENE_1A_STALKING来的选择
    if (lastChoice === '1a_9a') return Scenes.SCENE_1A_8A_CONFESSION;
    if (lastChoice === '1a_9b') return Scenes.SCENE_1A_8B_FINAL_ESCAPE;
    // 新增场景路径
    if (lastChoice === '1a_7c_a') return Scenes.SCENE_1A_7C_CONFESSION_MOMENT;
    if (lastChoice === '1a_7c_b') return Scenes.SCENE_1A_7D_FRIENDSHIP_CONFIRM;
    if (lastChoice === '1a_7c_c') return Scenes.SCENE_1A_7E_DISTANCE_KEEP;
    if (lastChoice === '1a_7d_a') return Scenes.SCENE_1A_7F_COMPLICATED_FEEL;
    if (lastChoice === '1a_7d_b') return Scenes.SCENE_1A_7D_FRIENDSHIP_CONFIRM;
    if (lastChoice === '1a_7e_a') return Scenes.SCENE_1A_8A_CONFESSION;
    if (lastChoice === '1a_7e_b') return Scenes.SCENE_1A_7E_DISTANCE_KEEP;
    if (lastChoice === '1a_7f_a') return Scenes.SCENE_1A_8A_CONFESSION;
    if (lastChoice === '1a_7f_b') return Scenes.SCENE_1A_7F_COMPLICATED_FEEL;
    // 增强场景路径
    if (lastChoice === '1a_7g_a') return Scenes.SCENE_1A_8G_TRUTH_REVEALED;
    if (lastChoice === '1a_7g_b') return Scenes.SCENE_1A_8A_CONFESSION;
  }

  // 第8层 - 接近结局
  if (depth === 8) {
    // 从SCENE_1A_7A_RELATIONSHIP_GROW来的选择
    if (lastChoice === '1a_7a') return Scenes.SCENE_1A_8A_CONFESSION;
    if (lastChoice === '1a_7b') return Scenes.SCENE_1A_8A_CONFESSION;
    // 从SCENE_1A_8A_CONFESSION来的选择
    if (lastChoice === '1a_8a') {
      // 继续到第9层，不直接结局
      return Scenes.SCENE_1A_9A_REUNION_ATTEMPT;
    }
    if (lastChoice === '1a_8b') return Scenes.SCENE_1A_9A_REUNION_ATTEMPT;
    // 从SCENE_1A_8B_FINAL_ESCAPE来的选择
    if (lastChoice === '1a_8c') return Scenes.SCENE_1A_9B_FINAL_GOODBYE;
    if (lastChoice === '1a_8d') return Scenes.SCENE_1A_9C_LAST_MESSAGE;
    // 新增场景路径
    if (lastChoice === '1a_8c_a') return Scenes.SCENE_1A_8C_FEAR_FACE;
    if (lastChoice === '1a_8c_b') return Scenes.SCENE_1A_8D_PAST_CONFESS;
    if (lastChoice === '1a_8d_a') return Scenes.SCENE_1A_8E_FUTURE_PLAN;
    if (lastChoice === '1a_8d_b') return Scenes.SCENE_1A_8F_FINAL_HESITATION;
    if (lastChoice === '1a_8e_a') return Scenes.SCENE_1A_9A_REUNION_ATTEMPT;
    if (lastChoice === '1a_8e_b') return Scenes.SCENE_1A_9B_FINAL_GOODBYE;
    if (lastChoice === '1a_8f_a') return Scenes.SCENE_1A_9A_REUNION_ATTEMPT;
    if (lastChoice === '1a_8f_b') return Scenes.SCENE_1A_9B_FINAL_GOODBYE;
    // 增强场景路径
    if (lastChoice === '1a_8g_a') return Scenes.SCENE_1A_9I_MUTUAL_UNDERSTANDING;
    if (lastChoice === '1a_8g_b') return Scenes.SCENE_1A_9B_FINAL_GOODBYE;
  }

  // 第9层 - 继续分支
  if (depth === 9) {
    if (lastChoice === '1a_9a') return Scenes.SCENE_1A_10B_FINAL_CONFESSION;
    if (lastChoice === '1a_9b') return Scenes.SCENE_1A_9B_FINAL_GOODBYE;
    if (lastChoice === '1a_9c') return Scenes.SCENE_1A_10C_ACCEPTANCE; // 进入第10层
    if (lastChoice === '1a_9c2') return Scenes.SCENE_1A_10D_FINAL_SEARCH; // 进入第10层
    if (lastChoice === '1a_9d') return Scenes.SCENE_1A_10A_FINAL_BLESSING;
    if (lastChoice === '1a_9e') return Scenes.SCENE_1A_10B_FINAL_CONFESSION;
    // 新增场景路径
    if (lastChoice === '1a_9d_a') return Scenes.SCENE_1A_9D_RELATIONSHIP_DECISION;
    if (lastChoice === '1a_9d_b') return Scenes.SCENE_1A_9E_FINAL_CHOICE;
    if (lastChoice === '1a_9e_a') return Scenes.SCENE_1A_9F_NEW_BEGINNING;
    if (lastChoice === '1a_9e_b') return Scenes.SCENE_1A_9E_FINAL_CHOICE;
    if (lastChoice === '1a_9f_a') return Scenes.SCENE_1A_10B_FINAL_CONFESSION;
    if (lastChoice === '1a_9f_b') return Scenes.SCENE_1A_10C_ACCEPTANCE;
    // 增强场景路径
    if (lastChoice === '1a_9i_a') return Scenes.SCENE_1A_10E_FINAL_DECISION;
    if (lastChoice === '1a_9i_b') return Scenes.SCENE_1A_10C_ACCEPTANCE;
  }

  // 第10层及以后 - 返回场景，由 getNextSceneByPath() 统一判断是否为叶子节点
  // 注意：不是所有 depth === 10 的场景都应该是结局，只有叶子节点才是
  // 如果深度超过10层且没有匹配的场景，返回默认场景
  if (depth > 10) {
    return getDefaultNextScene(path, depth);
  }

  // 如果路径不匹配，尝试通用匹配
  return getDefaultNextScene(path, depth);
}

/**
 * 获取默认下一个场景（向后兼容）
 */
function getDefaultNextScene(path: string[], depth: number): SceneData {
  // 如果深度>=10，返回一个标记为叶子节点的场景，让 getNextSceneByPath() 统一判断
  // 注意：不是所有 depth >= 10 的场景都应该是结局，只有叶子节点才是
  if (depth >= 10) {
    // 返回一个标记为叶子节点的场景（没有选择，表示路径结束）
    return {
      narrative: "（故事继续...）",
      backgroundDescription: "default scene",
      choices: [], // 空选择数组表示这是叶子节点
      isEnding: true // 标记为结局节点
    };
  }

  // 如果深度<10，返回序章场景（不应该发生，但作为安全措施）
  return Scenes.SCENE_0_PROLOGUE;
}

