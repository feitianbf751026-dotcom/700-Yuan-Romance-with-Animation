import { SceneData } from "../../types";
import * as Scenes from "../scenes";

export function isStoryV2Enabled(): boolean {
  return (import.meta as any).env?.VITE_STORY_V2 === 'true';
}

export function normalizeChoiceId(choiceId: string): string {
  return choiceId.endsWith('_v2') ? choiceId.slice(0, -3) : choiceId;
}

export function tokenizePath(path: string[]): Set<string> {
  return new Set(path);
}

export function hasToken(tokens: Set<string>, token: string): boolean {
  return tokens.has(token);
}

export function warnMissingChoice(
  choiceId: string,
  path: string[],
  depth: number,
  branch: string
): void {
  console.warn('[story-v2] missing choice id', { choiceId, path, depth, branch });
}

export function matchWithFallbackV2(
  matchLegacy: () => SceneData,
  matchStrictV2: () => SceneData | null,
  missingIdContext?: { choiceId: string; path: string[]; depth: number; branch: string }
): SceneData {
  if (!isStoryV2Enabled()) {
    return matchLegacy();
  }

  try {
    const strictResult = matchStrictV2();
    if (strictResult) {
      return strictResult;
    }
  } catch (error) {
    console.error('[story-v2] strict match failed, fallback to legacy', error);
  }

  if (missingIdContext) {
    warnMissingChoice(
      missingIdContext.choiceId,
      missingIdContext.path,
      missingIdContext.depth,
      missingIdContext.branch
    );
  }

  return matchLegacy();
}

/**
 * 获取默认下一个场景（向后兼容）
 */
export function getDefaultNextScene(path: string[], depth: number): SceneData {
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

  // 否则返回通用场景
  return Scenes.SCENE_2_REUNION;
}




