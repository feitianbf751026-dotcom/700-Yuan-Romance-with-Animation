# 背景：为什么要改
- 上次审计指出背景刷新依赖错误，可能导致背景与剧情描述不一致。
- 上次审计指出第三方背景服务无降级，断网或服务异常时背景会空白。
- 上次审计指出背景请求无缓存，重复进入相同描述时会反复请求。

# 变更摘要
- 修正背景刷新依赖为 `backgroundDescription`。
- 为背景请求增加超时与失败回退，避免空白背景。
- 增加背景缓存与上限淘汰，避免重复请求。
- 通过稳定 seed 与请求取消机制，避免缓存失效与异步串场景。

# 影响范围
- `components/GameUI.tsx`：背景请求逻辑、缓存、超时、竞态防护。
- `components/StartScreen.tsx`：背景加载失败/超时回退逻辑。

# 关键实现点
- refresh 依赖修复（backgroundDescription）
- fallback（超时/失败）
- cache（上限、淘汰策略、key、稳定 seed）
- 防串场（cancelled/requestId）

# 手动验证清单
- 背景描述变更必刷新
- 断网 fallback
- 快速切场景不串背景
- 重复描述不重复请求（可观察 Network）

# 回滚方案
- 若需回滚本次改动，使用 `git revert` 或 `git checkout --` 恢复 `components/GameUI.tsx` 与 `components/StartScreen.tsx` 的变更。
