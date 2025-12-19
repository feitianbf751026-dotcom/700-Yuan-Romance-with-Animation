import { SceneData, PlayerState } from "../../types";
import * as Scenes from "../scenes";

/**
 * 根据玩家状态获取结局
 */
export function getEnding(state: PlayerState): SceneData {
  const { intimacy, relationshipType, hasConfessed } = state;

  // 基于亲密度判断结局（主要判断标准）
  // 真爱结局：高亲密度(80+) + 浪漫关系 + 坦白过
  if (intimacy >= 80 && relationshipType === 'romantic' && hasConfessed) {
    return Scenes.ENDING_TRUE_LOVE;
  }

  // 救赎结局：中高亲密度(60-79) + 有坦白或高诚实
  if (intimacy >= 60 && intimacy < 80 && (hasConfessed || state.honesty >= 6)) {
    return Scenes.ENDING_REDEMPTION;
  }

  // 挚友结局：中亲密度(40-79) + 朋友关系
  if (intimacy >= 40 && intimacy < 80 && relationshipType === 'friend') {
    return Scenes.ENDING_FRIEND;
  }

  // 遗憾结局：低亲密度(20-39) 或 中等亲密度但关系复杂
  if (intimacy >= 20 && intimacy < 40) {
    return Scenes.ENDING_REGRET;
  }

  // 陌路结局：极低亲密度(<20) 或 陌生人关系
  if (intimacy < 20 || relationshipType === 'stranger') {
    return Scenes.ENDING_STRANGER;
  }

  // 默认：根据亲密度范围判断
  if (intimacy >= 80) {
    return Scenes.ENDING_TRUE_LOVE;
  } else if (intimacy >= 60) {
    return Scenes.ENDING_REDEMPTION;
  } else if (intimacy >= 40) {
    return relationshipType === 'friend' ? Scenes.ENDING_FRIEND : Scenes.ENDING_REGRET;
  } else {
    return Scenes.ENDING_REGRET;
  }
}



