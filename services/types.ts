// 玩家状态追踪 - 树状分支系统
export interface PlayerState {
  affection: number;        // 好感度 (-10 到 10)
  courage: number;          // 勇气值 (0 到 10)
  honesty: number;          // 诚实度 (0 到 10)
  path: string[];           // 选择路径，用于树状分支匹配
  depth: number;            // 当前深度（0-10层）
  stage: number;            // 当前阶段（向后兼容）
  branch: 'main' | 'cold' | 'romantic' | 'friend'; // 当前分支（向后兼容）
  hasConfessed: boolean;    // 是否坦白过
  specialEvents: string[];  // 触发的特殊事件
  relationshipType: 'stranger' | 'friend' | 'romantic' | 'complicated'; // 关系类型
  intimacy: number;         // 亲密度 (0 到 100)，由综合算法计算
}



