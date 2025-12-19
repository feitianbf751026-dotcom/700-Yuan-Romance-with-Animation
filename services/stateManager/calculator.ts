import { PlayerState } from '../types';

/**
 * 计算亲密度 - 模拟人类情感的复杂算法
 * 亲密度 = 基础好感 + 勇气加成 + 诚实加成 + 关系类型加成 + 特殊事件加成
 * 范围：0-100
 */
export function calculateIntimacy(state: PlayerState): number {
  const { affection, courage, honesty, hasConfessed, relationshipType, specialEvents, depth } = state;
  
  // ========== 人类情感模拟算法 ==========
  // 亲密度不是简单的数值相加，而是基于情感共鸣、信任建立、时间积累的综合体现
  
  // 1. 基础好感度转换 (好感度范围 -10到10，转换为0-35分)
  // 好感度是亲密度的基础，但非线性：负好感会大幅降低，正好感需要配合其他因素
  let baseScore = 0;
  if (affection >= 0) {
    // 正好感：指数增长，但需要配合其他因素
    baseScore = Math.pow(affection / 10, 0.7) * 35; // 0->0, 5->20, 10->35
  } else {
    // 负好感：线性惩罚，但不会完全归零（因为可能有其他因素）
    baseScore = Math.max(0, (affection + 10) * 1.5); // -10->0, -5->7.5, 0->15
  }
  
  // 2. 勇气与诚实的协同效应 (0-30分)
  // 单独的勇气或诚实效果有限，但两者结合会产生协同效应
  const courageBase = courage * 1.2; // 0->0, 10->12
  const honestyBase = honesty * 1.3; // 0->0, 10->13
  // 协同效应：当两者都高时，会产生额外的加成
  const synergy = (courage >= 5 && honesty >= 5) 
    ? Math.min(courage, honesty) * 0.5  // 两者都高时，取较小值的一半作为加成
    : 0;
  const courageHonestyScore = Math.min(30, courageBase + honestyBase + synergy);
  
  // 3. 坦白的深度影响 (0-15分)
  // 坦白是建立深度信任的关键，但需要勇气和诚实的支撑
  let confessionBonus = 0;
  if (hasConfessed) {
    // 坦白的价值取决于勇气和诚实度
    const confessionValue = (courage + honesty) / 2; // 平均勇气和诚实
    confessionBonus = Math.min(15, confessionValue * 1.5); // 最高15分
  }
  
  // 4. 关系类型的情感权重 (0-20分)
  // 不同关系类型对亲密度的贡献不同，且非线性
  let relationshipBonus = 0;
  switch (relationshipType) {
    case 'romantic':
      // 浪漫关系：高权重，但需要好感度支撑
      relationshipBonus = affection >= 3 ? 20 : (affection >= 0 ? 15 : 10);
      break;
    case 'friend':
      // 朋友关系：稳定但中等权重
      relationshipBonus = 12;
      break;
    case 'complicated':
      // 复杂关系：低权重，可能还有波动
      relationshipBonus = 6;
      break;
    case 'stranger':
      relationshipBonus = 0;
      break;
  }
  
  // 5. 特殊事件的累积效应 (0-12分)
  // 正面事件会累积，但边际效应递减
  const positiveEvents = [
    // 原有事件
    'normal_meet', 'coffee_date', 'coffee_talk', '1a_first_meet',
    '1b_apology', '1c_first_message', '1a_building_trust',
    '1b_regular_meet', '1c_deep_conversation', '1a_confront',
    '1b_deep_chat', '1c_meeting',
    // 新增事件（匹配10层树状剧情）
    '1a_try_change',      // 1A分支尝试改变（正面）
    '1a_elevator_talk',    // 1A分支电梯谈话（正面）
    '1b_2',                // 1B分支回复消息（正面）
    '1b_plan_meet',        // 1B分支计划见面（正面）
    '1c_friendship',       // 1C分支友谊（正面）
    'had_lunch'            // 午餐事件（正面）
  ];
  const eventCount = specialEvents.filter(e => positiveEvents.includes(e)).length;
  // 边际效应递减：第一个事件+3分，第二个+2.5分，第三个+2分...
  let eventBonus = 0;
  for (let i = 0; i < Math.min(eventCount, 5); i++) {
    eventBonus += 3 - i * 0.5;
  }
  eventBonus = Math.min(12, eventBonus);
  
  // 6. 负面事件的惩罚 (最多-15分)
  // 负面事件会显著降低亲密度，但不会完全抵消正面因素
  const negativeEvents = [
    // 原有事件
    '1a_stalking', '1b_1', '1a_escape',
    // 新增事件（匹配10层树状剧情）
    '1c_stalking'  // 1C分支跟踪（负面）
  ];
  const negativeCount = specialEvents.filter(e => negativeEvents.includes(e)).length;
  const eventPenalty = Math.min(15, negativeCount * 4);
  
  // 7. 时间/深度的自然增长 (0-10分)
  // 随着剧情深入，即使没有特别的选择，亲密度也会自然增长
  // 但增长是递减的：前5层增长快，后5层增长慢
  let depthBonus = 0;
  if (depth <= 5) {
    depthBonus = depth * 1.2; // 前5层：每层+1.2分
  } else {
    depthBonus = 6 + (depth - 5) * 0.8; // 后5层：每层+0.8分
  }
  depthBonus = Math.min(10, depthBonus);
  
  // 8. 综合计算
  let totalIntimacy = baseScore + courageHonestyScore + confessionBonus + 
                      relationshipBonus + eventBonus - eventPenalty + depthBonus;
  
  // 9. 情感平衡调整
  // 如果好感度极低，即使其他因素好，亲密度也会受限
  if (affection < -7) {
    totalIntimacy *= 0.5; // 极低好感：减半
  } else if (affection < -3) {
    totalIntimacy *= 0.75; // 低好感：减少25%
  }
  
  // 如果只有好感度高，但缺乏勇气和诚实，亲密度也会受限
  if (affection >= 5 && (courage < 3 || honesty < 3)) {
    totalIntimacy *= 0.85; // 好感度高但缺乏行动：减少15%
  }
  
  // 10. 关系类型的最终调整
  // 如果关系类型是romantic但好感度不够，会降低
  if (relationshipType === 'romantic' && affection < 2) {
    totalIntimacy *= 0.9; // 浪漫关系但好感度不足：减少10%
  }
  
  // 11. 最终范围限制和四舍五入
  totalIntimacy = Math.max(0, Math.min(100, Math.round(totalIntimacy)));
  
  return totalIntimacy;
}



