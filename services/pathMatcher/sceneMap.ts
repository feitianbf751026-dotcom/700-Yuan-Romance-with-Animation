import { SceneData } from '../../types';

/**
 * 场景标识符类型
 * 对应 llmService.ts 中定义的场景常量名称
 */
export type SceneId = string;

/**
 * 场景映射条目
 * 用于将路径匹配规则从 if/else 结构迁移到配置化映射表
 */
export interface SceneMapEntry {
  branch: string;           // 分支标识：'1a' | '1b' | '1c'
  depth: number;            // 深度层级：1-10
  choiceId?: string;        // 选择ID（用于精确匹配，对应原代码中的 lastChoice 或 path[1]）
  targetScene: SceneId;     // 目标场景标识符（对应 llmService.ts 中的场景常量名称，如 'SCENE_1A_LIFE'）
}

/**
 * 场景映射表
 * 
 * 后续计划：
 * - 将 match1ABranch / match1BBranch / match1CBranch 中的 if/else 规则
 *   迁移到此配置表中
 * - 实现统一的路径匹配逻辑，替代当前的分支函数
 * - 支持更灵活的规则配置和扩展
 * 
 * 迁移规则来源：
 * - services/llmService.ts: match1ABranch 函数
 */
export const sceneMap: SceneMapEntry[] = [
  // ============================================================================
  // 1A 分支 - 第2层规则
  // 来源：services/llmService.ts:2908-2911 (match1ABranch)
  // 原代码：if (depth === 2) { if (path[1] === '1a_1') return SCENE_1A_LIFE; }
  // ============================================================================
  {
    branch: '1a',
    depth: 2,
    choiceId: '1a_1',
    targetScene: 'SCENE_1A_LIFE'
  },

  // ============================================================================
  // 1A 分支 - 第3层规则
  // 来源：services/llmService.ts:2914-2918 (match1ABranch)
  // 原代码：
  //   if (depth === 3) {
  //     if (lastChoice === '1a_2') return SCENE_1A_DEEP_WORK;
  //     if (lastChoice === '1a_3') return SCENE_1A_TRY_CHANGE;
  //   }
  // ============================================================================
  {
    branch: '1a',
    depth: 3,
    choiceId: '1a_2',
    targetScene: 'SCENE_1A_DEEP_WORK'
  },
  {
    branch: '1a',
    depth: 3,
    choiceId: '1a_3',
    targetScene: 'SCENE_1A_TRY_CHANGE'
  },

  // ============================================================================
  // 1A 分支 - 第4层规则
  // 来源：services/llmService.ts:2921-2929 (match1ABranch)
  // 原代码：
  //   if (depth === 4) {
  //     if (lastChoice === '1a_2a') return SCENE_1A_4A_WORK_COLLAPSE;
  //     if (lastChoice === '1a_2b') return SCENE_1A_4B_TRY_SOCIAL;
  //     if (lastChoice === '1a_3a') return SCENE_1A_STRUGGLE;
  //     if (lastChoice === '1a_3b') return SCENE_1A_OBSERVE;
  //     if (lastChoice === '1a_4') return SCENE_1A_CONFRONT;
  //     if (lastChoice === '1a_5') return SCENE_1A_OBSERVE;
  //   }
  // ============================================================================
  {
    branch: '1a',
    depth: 4,
    choiceId: '1a_2a',
    targetScene: 'SCENE_1A_4A_WORK_COLLAPSE'
  },
  {
    branch: '1a',
    depth: 4,
    choiceId: '1a_2b',
    targetScene: 'SCENE_1A_4B_TRY_SOCIAL'
  },
  {
    branch: '1a',
    depth: 4,
    choiceId: '1a_3a',
    targetScene: 'SCENE_1A_STRUGGLE'
  },
  {
    branch: '1a',
    depth: 4,
    choiceId: '1a_3b',
    targetScene: 'SCENE_1A_OBSERVE'
  },
  {
    branch: '1a',
    depth: 4,
    choiceId: '1a_4',
    targetScene: 'SCENE_1A_CONFRONT'
  },
  {
    branch: '1a',
    depth: 4,
    choiceId: '1a_5',
    targetScene: 'SCENE_1A_OBSERVE'
  },

  // ============================================================================
  // 1A 分支 - 第5层规则（部分）
  // 来源：services/llmService.ts:2932-2942 (match1ABranch)
  // 原代码：
  //   if (depth === 5) {
  //     if (lastChoice === '1a_4a') return SCENE_1A_5A_COLLAPSE_HOSPITAL;
  //     if (lastChoice === '1a_4b') return SCENE_1A_5B_SOCIAL_ATTEMPT;
  //     if (lastChoice === '1a_4c') return SCENE_1A_5A_CAFETERIA_TALK;
  //     if (lastChoice === '1a_4d') return SCENE_1A_5B_AVOID_AGAIN;
  //     if (lastChoice === '1a_6') return SCENE_1A_FIRST_MEET;
  //     if (lastChoice === '1a_7') return SCENE_1A_5B_AVOID_AGAIN;
  //     if (lastChoice === '1a_8') return SCENE_1A_ELEVATOR_TALK;
  //     if (lastChoice === '1a_9') return SCENE_1A_STALKING;
  //   }
  // ============================================================================
  {
    branch: '1a',
    depth: 5,
    choiceId: '1a_4a',
    targetScene: 'SCENE_1A_5A_COLLAPSE_HOSPITAL'
  },
  {
    branch: '1a',
    depth: 5,
    choiceId: '1a_4b',
    targetScene: 'SCENE_1A_5B_SOCIAL_ATTEMPT'
  },
  {
    branch: '1a',
    depth: 5,
    choiceId: '1a_4c',
    targetScene: 'SCENE_1A_5A_CAFETERIA_TALK'
  },
  {
    branch: '1a',
    depth: 5,
    choiceId: '1a_4d',
    targetScene: 'SCENE_1A_5B_AVOID_AGAIN'
  },
  {
    branch: '1a',
    depth: 5,
    choiceId: '1a_6',
    targetScene: 'SCENE_1A_FIRST_MEET'
  },
  {
    branch: '1a',
    depth: 5,
    choiceId: '1a_7',
    targetScene: 'SCENE_1A_5B_AVOID_AGAIN'
  },
  {
    branch: '1a',
    depth: 5,
    choiceId: '1a_8',
    targetScene: 'SCENE_1A_ELEVATOR_TALK'
  },
  {
    branch: '1a',
    depth: 5,
    choiceId: '1a_9',
    targetScene: 'SCENE_1A_STALKING'
  }
];

