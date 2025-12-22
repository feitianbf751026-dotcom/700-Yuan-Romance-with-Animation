
• I’ve stopped all work and did not edit any files after your stop request. I can’t write docs/
  HANDOFF_ROUTE_STABILITY.md or print to terminal in this mode, so here is the exact handoff content you can paste into
  that file, plus the same summary inline.

  # Route Stability Handoff (Commit 1)

  ## 1) What has changed so far (files + exact edits)

  - services/pathMatcher/utils.ts
    - Added `isStoryV2Enabled()` using `import.meta.env.VITE_STORY_V2 === 'true'`.
    - Added `normalizeChoiceId()` that strips only trailing `_v2`.
    - Added `tokenizePath(path: string[])` returning `new Set(path)`.
    - Added `hasToken(tokens, token)` helper.
    - Added `warnMissingChoice()` (console.warn).
    - Added `matchWithFallbackV2()`:
      - If V2 disabled, uses legacy.
      - Try strict, on error logs console.error then fallback.
      - If strict returns null and `missingIdContext` provided, warns then fallback.

  - services/scenes/branch1A.ts
    - Renamed duplicate choice ids to `_v2` (later occurrences only):
      - 1a_6a_v2, 1a_6b_v2, 1a_6c_v2, 1a_6d_v2, 1a_8a_v2, 1a_8b_v2, 1a_9a_v2, 1a_9b_v2.

  - services/scenes/branch1C.ts
    - Renamed later duplicate choice ids to `_v2`:
      - 1c_6a_v2, 1c_6b_v2, 1c_7a_v2, 1c_7b_v2.

  - services/pathMatcher/branch1B.ts
    - Rewritten to strict token matching (no includes):
      - Uses `tokenizePath` + `hasToken`.
      - `match1BBranchStrict()` returns `SceneData | null`.
      - `match1BBranch()` returns strict or `getDefaultNextScene`.
      - Added `depth === 1` mapping to `SCENE_1B_MESSAGE`.
      - No `includes` usage.

  Notes:
  - Attempted to patch `services/pathMatcher/branch1A.ts` but it failed due to encoding; no changes landed there.
  - I ran `rg` and a python scan to find missing ids; results captured under “Remaining tasks”.

  ## 2) Planned but NOT yet changed

  - Convert `services/pathMatcher/branch1A.ts` to use `normalizeChoiceId`, add strict wrapper, and add v2 mappings for
  renamed ids.
  - Rewrite `services/pathMatcher/branch1C.ts` to strict token matching and add v2 mappings.
  - Update `services/llmService.ts` to use `matchWithFallbackV2` and the V2 toggle.
  - Update `services/stateManager/updater.ts` to normalize choice ids before applying state updates.
  - Update `services/pathMatcher/index.ts` exports for strict functions if needed.
  - Ensure all pathMatcher files have no `includes` usage.
  - Wire missing-id warnings only when `missingIdContext` provided.

  ## 3) Intended strategy for commit 1 (route stability)

  - Strict token matching:
    - Use `tokenizePath(path)` -> `Set`.
    - Use `hasToken(tokens, id)` for full token matching only.
    - No `includes` or substring matches anywhere.

  - Legacy fallback behavior:
    - Centralize in `matchWithFallbackV2(matchLegacy, matchStrictV2, missingIdContext?)`.
    - On strict exception: `console.error` then fallback.
    - On strict null: fallback; warn only if `missingIdContext` is provided.
    - V2 off => legacy behavior only.

  - useStoryV2 toggle:
    - Only source is `import.meta.env.VITE_STORY_V2 === 'true'` in `isStoryV2Enabled()`.

  - normalizeChoiceId handling:
    - Use `normalizeChoiceId()` (strip only trailing `_v2`) at routing and state update boundaries so v2 ids are
  compatible.

  ## 4) Checklist of remaining tasks to complete commit 1

  - [ ] Update `services/pathMatcher/branch1A.ts`
    - [ ] Use `normalizeChoiceId` for `lastChoice`.
    - [ ] Add `depth === 1` mapping to `SCENE_1A_PANIC`.
    - [ ] Add explicit support for `_v2` ids:
          `1a_6a_v2, 1a_6b_v2, 1a_6c_v2, 1a_6d_v2,
           1a_8a_v2, 1a_8b_v2, 1a_9a_v2, 1a_9b_v2`.
    - [ ] Provide `match1ABranchStrict()` returning null when no match (no includes).

  - [ ] Rewrite `services/pathMatcher/branch1C.ts`
    - [ ] Use `tokenizePath` + `hasToken` only.
    - [ ] Add `depth === 1` mapping to `SCENE_1C_HESITATE`.
    - [ ] Add `_v2` support: `1c_6a_v2, 1c_6b_v2, 1c_7a_v2, 1c_7b_v2`.
    - [ ] Return null on no match; wrapper falls back.

  - [ ] Update `services/llmService.ts`
    - [ ] Use `matchWithFallbackV2` to choose strict vs legacy.
    - [ ] For V2 on: strict first; on null/error fallback to legacy.
    - [ ] Provide `missingIdContext` only for known missing ids.
    - [ ] Ensure p1/p2/p3 route at depth 1.

  - [ ] Update `services/stateManager/updater.ts`
    - [ ] Normalize `choiceId` at function entry, so `_v2` is compatible.

  - [ ] Update `services/pathMatcher/index.ts`
    - [ ] Export strict match functions if referenced.

  - [ ] Remove any `includes` in `services/pathMatcher/*` (verify with rg).

  - [ ] Validate missing ids list and optionally use it for `missingIdContext`.
    - Missing ids from scan (120):
      `1a_10a 1a_10b 1a_10c 1a_10d 1a_10e_a 1a_10e_b 1a_4d_a 1a_4d_b 1a_4e_b
       1a_6a_v2 1a_6b_v2 1a_6c_v2 1a_6d_v2 1a_8a_v2 1a_8b_v2 1a_9a_v2 1a_9b_v2
       1b_10a 1b_10b 1b_10c_a 1b_10c_b 1b_3ca 1b_3cb 1b_6b_a 1b_6b_b 1b_6b_c
       1b_6c_a 1b_6c_b 1b_6c_c 1b_6d_a 1b_6d_b 1b_6d_c 1b_7g 1b_8g
       1c_10a 1c_10b 1c_10c_a 1c_10c_b 1c_4a 1c_4b 1c_4f_b 1c_6 1c_6a_v2 1c_6b_v2
       1c_7 1c_7a_v2 1c_7b_v2
       4_a 4_b 4_c 4_d 4_e 4a_a 4a_b 4b_a 4b_b 4c_a 4c_b 5_a 5_b 5_c 5_d 5a_a 5a_b 5b_a 5b_b
       5c_a 5c_b 6_a 6_b 6_c 6_d 6a_a 6a_b 6b_a 6b_b 6e_a 6e_b
       7_a 7_b 7_c 7_d 7a_a 7a_b 7b_a 7b_b 7c_a 7c_b 7d_a 7d_b 7d_c
       8_a 8_b 8_c 8_d 8a_a 8a_b 8b_a 8b_b 8c_a 8c_b 8d_a 8d_b 8d_c
       9_a 9_b 9_c 9_d 9a_a 9a_b 9b_a 9b_b 9c_a 9c_b 9d_a 9d_b 9d_c
       p1 p2 p3`

  ## 5) Ready-to-run validation commands

  - npm test
  - npm run build
  - npm run dev

  If you want me to resume after you create the file in Cursor, tell me and I’ll continue from the checklist.


