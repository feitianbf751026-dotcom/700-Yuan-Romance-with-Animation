# 概要结论
本次背景系统修复后，可用性与性能风险已有实质性下降，但外部背景服务仍在请求，隐私与外部依赖风险仅得到缓解而非消除；整体工程健康度：6.8/10。

# 上次 Findings 对照表
| 原问题 | 当前状态 | 证据（文件路径 + 关键点） | 剩余风险 |
| --- | --- | --- | --- |
| 第三方背景服务无降级 | Mitigated | `components/GameUI.tsx`：新增超时与失败回退；`components/StartScreen.tsx`：新增图片加载失败/超时回退 | 仍向第三方请求背景图；断网时虽不空白，但仍依赖外部服务成功率 |
| 背景刷新依赖错误（依赖 narrative 而非 backgroundDescription） | Resolved | `components/GameUI.tsx`：`useEffect` 依赖已改为 `scene.backgroundDescription` | 若 description 为空则走 fallback，不生成外部背景 |
| 背景请求缺少缓存（重复请求） | Mitigated | `components/GameUI.tsx`：新增 `backgroundCache` + `CACHE_LIMIT` + FIFO 淘汰；同一描述复用缓存值 | 缓存仅在会话内有效；外部服务仍可按描述推断内容 |
| 异步加载导致串场景（race） | Resolved | `components/GameUI.tsx`：使用 `requestId` 与 `cancelled`，仅允许当前描述写入状态与缓存 | 极端高频切换下仍会发起多个请求，但不会覆盖当前背景 |
| GameUI 背景随机 seed 破坏缓存 | Resolved | `components/GameUI.tsx`：seed 使用稳定 hash，确保相同描述生成同一 URL | hash 冲突概率低但存在；视觉上可能共享同一图 |

# 本次新增风险检查
- 缓存上限为 100 且 FIFO 淘汰，若长期会话且频繁切换背景描述，旧背景会被回收，可能导致重复请求（可接受的性能折中）。`components/GameUI.tsx`
- 稳定 seed 使同一描述在同一会话内固定图像，提升一致性但可能降低“多样性”。`components/GameUI.tsx`

# 下一步建议
1) 明确第三方背景服务的隐私政策与数据流说明，在 `docs` 中标注“背景描述会发送到第三方”。
2) 为背景图提供本地静态资源兜底（可选），减少外部服务依赖。
3) 为背景请求添加可配置开关（环境变量），便于受限网络环境直接走 fallback。
4) 为背景缓存添加命中/淘汰统计日志（可选，开发环境）以验证效果。
5) 补充 README 中的运行注意事项（断网/受限网络的表现与应对）。
