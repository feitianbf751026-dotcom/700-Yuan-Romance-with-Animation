# 场景呈现差异层实现总结

## 修改文件清单

1. **services/narrativeVariants.ts** - 新建：场景 narrative 变体模块（261 行）
2. **services/llmService.ts** - 更新：在 `getNextSceneByPath` 中应用 narrative 变体（3 行修改）

## 关键 Diff

### 1. services/narrativeVariants.ts（新建）

**核心功能**：
- `NARRATIVE_VARIANTS`：映射表，包含 24 个场景的 low/high 版本 narrative
- `getNarrativeVariant`：根据状态变量返回对应的 narrative 变体

**关键代码**：
```typescript
const NARRATIVE_VARIANTS: Record<string, NarrativeVariant> = {
  // Branch A: courage_level (0-1 vs 2-3)
  'SCENE_1A_OBSERVE': {
    low: Scenes.SCENE_1A_OBSERVE.narrative,
    high: Scenes.SCENE_1A_OBSERVE.narrative + '\n\n虽然还是害怕，但你开始意识到，也许观察并不是唯一的办法。你内心深处有一丝不甘，想要真正改变。'
  },
  // ... 其他场景
};

export function getNarrativeVariant(scene: SceneData, state: PlayerState): string {
  // 确定场景 ID
  let sceneId: string | null = null;
  if (scene === Scenes.SCENE_1A_OBSERVE) sceneId = 'SCENE_1A_OBSERVE';
  // ... 其他场景检查
  
  // 确定使用哪个状态变量
  let level: number;
  if (sceneId.startsWith('SCENE_1A_')) {
    level = state.courage_level;
  } else if (sceneId.startsWith('SCENE_1B_')) {
    level = state.trust_level;
  } else if (sceneId.startsWith('SCENE_1C_')) {
    level = state.guilt_level;
  } else {
    return scene.narrative;
  }
  
  // 根据 level 返回 low (0-1) 或 high (2-3) 版本
  const variant = NARRATIVE_VARIANTS[sceneId];
  return level >= 2 ? variant.high : variant.low;
}
```

**设计目的**：集中管理所有场景的 narrative 变体，根据状态变量（courage_level/trust_level/guilt_level）返回不同版本，实现轻量级的场景呈现差异。

### 2. services/llmService.ts

**关键变更**：
- 导入 `getNarrativeVariant`
- 在 `getNextSceneByPath` 返回场景前应用 narrative 变体

**关键代码**：
```typescript
import { getNarrativeVariant } from "./narrativeVariants";

private getNextSceneByPath(): SceneData {
  // ... 场景匹配逻辑
  
  // 应用 narrative 变体（根据状态变量返回不同版本）
  const variantScene = { ...nextScene };
  variantScene.narrative = getNarrativeVariant(nextScene, this.state);
  return variantScene;
}
```

**设计目的**：在返回场景前动态应用 narrative 变体，不改变场景路由和结构，只修改 narrative 文本。

## 设计目的总结

1. **轻量级实现**：不重写剧情树、不动 matcher/earned/alias，只在返回 SceneData 前做 narrative 的变体选择
2. **可复用可维护**：使用映射表而非大量 if-else，集中管理所有变体
3. **不影响其他场景**：没有配置变体的场景直接返回原 narrative
4. **状态变量分段**：根据 courage_level/trust_level/guilt_level (0-1 vs 2-3) 返回不同版本

## Demo 示例（3 个场景）

### 1. SCENE_1A_CONFRONT (Branch A, courage_level)

**Low (0-1)**:
```
我深吸一口气，走了过去。每一步都像是踩在棉花上，软绵绵的，使不上力。

"你好……"我的声音有点颤抖，几乎听不见，"你还记得我吗？"
```

**High (2-3)**:
```
我深吸一口气，走了过去。每一步都像是踩在棉花上，软绵绵的，使不上力。

"你好……"我的声音虽然还有些紧张，但比之前坚定多了，"你还记得我吗？"

你感到一种前所未有的勇气，仿佛终于找到了改变的机会。
```

### 2. SCENE_1B_CHAT (Branch B, trust_level)

**Low (0-1)**:
```
那晚，我们聊了很久。从晚上11点聊到凌晨3点，手机屏幕的光在黑暗中发着光，像是两个孤独的灵魂在互相取暖。

她回复较冷淡，询问"你还好吗"更像是职业话术，对话简短，没有深入交流。
```

**High (2-3)**:
```
那晚，我们聊了很久。从晚上11点聊到凌晨3点，手机屏幕的光在黑暗中发着光，像是两个孤独的灵魂在互相取暖。

她告诉我，她叫琳，是个设计师。那段时间家里出了事，急需用钱，所以才接了那个单。但真到了那一刻，她也很害怕。

"其实，我也很庆幸你没来。"她说，声音很轻，"因为我不知道自己能不能真的做到。"

我们聊工作，聊生活，聊那些不敢对别人说的话。第一次，我感觉到有人真正理解我的孤独。那种感觉很奇怪，就像是在黑暗中突然看到了一束光。

她回复温暖，主动分享自己的故事，对话深入，建立情感连接。
```

### 3. SCENE_1C_4C_GUILT_DEEPEN (Branch C, guilt_level)

**Low (0-1)**:
```
内疚感在我心里越来越深。每次看到她的朋友圈，每次听到她的消息，我都会想起那个夜晚，想起那700块钱，想起我的逃避。

偶尔想起，不影响决策。

"我到底在害怕什么？"我问自己。
```

**High (2-3)**:
```
内疚感在我心里越来越深。每次看到她的朋友圈，每次听到她的消息，我都会想起那个夜晚，想起那700块钱，想起我的逃避。

我开始失眠，开始做噩梦。梦里，我总是站在那扇门前，但永远不敢敲门。

持续困扰，做噩梦，影响判断。

"我到底在害怕什么？"我问自己。
```

## 回归测试清单

### 1. 场景路由不变
- **测试**：所有场景的 ID、choices、isEnding 等属性保持不变
- **验证**：只有 `narrative` 字段被修改，其他字段完全不变

### 2. 状态变量范围仍 clamp 0..3
- **测试**：courage_level/trust_level/guilt_level 的值在 0-3 范围内
- **验证**：level >= 2 返回 high 版本，level < 2 返回 low 版本

### 3. 没配置的 scene narrative 不变
- **测试**：访问未在 `NARRATIVE_VARIANTS` 中配置的场景（如 `SCENE_0_PROLOGUE`）
- **验证**：返回原 narrative，不做任何修改

### 4. Branch A 场景使用 courage_level
- **测试**：`SCENE_1A_OBSERVE` 在 courage_level = 0 和 courage_level = 2 时返回不同 narrative
- **验证**：正确使用 `state.courage_level` 判断

### 5. Branch B 场景使用 trust_level
- **测试**：`SCENE_1B_CHAT` 在 trust_level = 0 和 trust_level = 2 时返回不同 narrative
- **验证**：正确使用 `state.trust_level` 判断

### 6. Branch C 场景使用 guilt_level
- **测试**：`SCENE_1C_4C_GUILT_DEEPEN` 在 guilt_level = 0 和 guilt_level = 2 时返回不同 narrative
- **验证**：正确使用 `state.guilt_level` 判断

### 7. 场景对象不污染
- **测试**：多次调用 `getNextSceneByPath` 返回同一场景
- **验证**：每次返回新的场景对象（使用 `{ ...nextScene }`），不会污染原始场景定义

### 8. 所有 24 个场景都有变体
- **测试**：访问所有配置的场景（8 个 Branch A + 8 个 Branch B + 8 个 Branch C）
- **验证**：所有场景都能正确返回对应的 low/high 版本

## 实现统计

- **配置的场景总数**：24 个
  - Branch A (courage_level)：8 个
  - Branch B (trust_level)：8 个
  - Branch C (guilt_level)：8 个
- **代码行数**：narrativeVariants.ts 约 261 行
- **修改文件数**：2 个（新建 1 个，修改 1 个）
- **构建状态**：✅ 成功，无 TypeScript 错误

