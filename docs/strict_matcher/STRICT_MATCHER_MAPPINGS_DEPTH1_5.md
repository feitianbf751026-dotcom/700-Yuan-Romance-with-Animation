# Strict Matcher Choice → Scene 映射表 (Depth 1-5)

## Branch A

**函数**: `match1ABranchStrict`  
**文件**: `services/pathMatcher/branch1A.ts`

| branch | depth | lastChoice | Scene 常量名 |
|--------|-------|------------|--------------|
| A | 1 | (无选择) | SCENE_1A_PANIC |
| A | 2 | 1a_1 | SCENE_1A_LIFE |
| A | 2 | 1a_1b | SCENE_1A_LIFE |
| A | 2 | 1a_1c | SCENE_1A_TRY_CHANGE |
| A | 3 | 1a_2 | SCENE_1A_DEEP_WORK |
| A | 3 | 1a_3 | SCENE_1A_TRY_CHANGE |
| A | 3 | 1a_2c | SCENE_1A_OBSERVE |
| A | 4 | 1a_2a | SCENE_1A_4A_WORK_COLLAPSE |
| A | 4 | 1a_2b | SCENE_1A_4B_TRY_SOCIAL |
| A | 4 | 1a_2d | SCENE_1A_4B_TRY_SOCIAL |
| A | 4 | 1a_3a | SCENE_1A_STRUGGLE |
| A | 4 | 1a_3b | SCENE_1A_OBSERVE |
| A | 4 | 1a_3c | SCENE_1A_OBSERVE |
| A | 4 | 1a_4 | SCENE_1A_CONFRONT |
| A | 4 | 1a_5 | SCENE_1A_OBSERVE |
| A | 4 | 1a_4a2 | SCENE_1A_4B_TRY_SOCIAL |
| A | 5 | 1a_4a | SCENE_1A_5A_COLLAPSE_HOSPITAL |
| A | 5 | 1a_4b | SCENE_1A_5B_SOCIAL_ATTEMPT |
| A | 5 | 1a_4c | SCENE_1A_5A_CAFETERIA_TALK |
| A | 5 | 1a_4d | SCENE_1A_5B_AVOID_AGAIN |
| A | 5 | 1a_6 | SCENE_1A_FIRST_MEET |
| A | 5 | 1a_6c | SCENE_1A_FIRST_MEET |
| A | 5 | 1a_7 | SCENE_1A_5B_AVOID_AGAIN |
| A | 5 | 1a_8 | SCENE_1A_ELEVATOR_TALK |
| A | 5 | 1a_8c | SCENE_1A_ELEVATOR_TALK |
| A | 5 | 1a_9 | SCENE_1A_STALKING |
| A | 5 | 1a_4c_a | SCENE_1A_5C_FIRST_CONTACT |
| A | 5 | 1a_4c_b | SCENE_1A_5D_MISSED_CHANCE |
| A | 5 | 1a_4c_c | SCENE_1A_5B_SOCIAL_ATTEMPT |
| A | 5 | 1a_5c_a | SCENE_1A_FIRST_MEET |
| A | 5 | 1a_5c_b | SCENE_1A_5D_MISSED_CHANCE |
| A | 5 | 1a_5d_a | SCENE_1A_ELEVATOR_TALK |
| A | 5 | 1a_5d_b | SCENE_1A_STALKING |
| A | 5 | 1a_4e_a | SCENE_1A_5E_OPPORTUNITY |
| A | 5 | 1a_5e_a | SCENE_1A_FIRST_MEET |
| A | 5 | 1a_5e_b | SCENE_1A_OBSERVE |

## Branch B

**函数**: `match1BBranchStrict`  
**文件**: `services/pathMatcher/branch1B.ts`

| branch | depth | lastChoice | Scene 常量名 |
|--------|-------|------------|--------------|
| B | 1 | (无选择) | SCENE_1B_MESSAGE |
| B | 2 | 1b_1 | SCENE_1B_DELETED |
| B | 2 | 1b_2 | SCENE_1B_CHAT |
| B | 2 | 1b_3 | SCENE_1B_COFFEE |
| B | 3 | 1b_1a | SCENE_1B_APOLOGY |
| B | 3 | 1b_1b | SCENE_1B_REGRET |
| B | 3 | 1b_2a | SCENE_1B_PLAN_MEET |
| B | 3 | 1b_2b | SCENE_1B_DEEP_CHAT |
| B | 3 | 1b_2ae | SCENE_1B_4C_HESITATION |
| B | 3 | 1b_3a | SCENE_1B_COFFEE_TALK |
| B | 3 | 1b_3b | SCENE_2_REUNION |
| B | 4 | 1b_1aa | SCENE_1B_4A_DELETED_REGRET |
| B | 4 | 1b_1ab | SCENE_1B_4A_DELETED_REGRET |
| B | 4 | 1b_1ac | SCENE_2_REUNION |
| B | 4 | 1b_1ad | SCENE_1B_4A_DELETED_REGRET |
| B | 4 | 1b_2aa | SCENE_1B_5A_MEET_PLAN |
| B | 4 | 1b_2ab | SCENE_1B_4B_CHAT_DEEPEN |
| B | 4 | 1b_2ac | SCENE_1B_6A_COFFEE_CONVERSATION |
| B | 4 | 1b_2ad | SCENE_2_REUNION |
| B | 4 | 1b_2ae | SCENE_1B_4C_HESITATION |
| B | 4 | 1b_2af | SCENE_1B_4D_TRUST_BUILD |
| B | 4 | 1b_3c | SCENE_1B_REGULAR_MEET |
| B | 4 | 1b_3d | SCENE_2_REUNION |
| B | 4 | 2_1 | SCENE_2_1_AWKWARD |
| B | 4 | 2_2 | SCENE_2_2_RECOGNITION |
| B | 4 | 2_3 | SCENE_2_3_ESCAPE |
| B | 4 | 3_1 | SCENE_3_1_LUNCH_TALK |
| B | 4 | 3_2 | SCENE_3_2_REJECTION |
| B | 4 | 3_3 | SCENE_3_3_APOLOGY |
| B | 5 | 1b_4a | SCENE_1B_APOLOGY |
| B | 5 | 1b_4b | SCENE_1B_4A_DELETED_REGRET |
| B | 5 | 1b_4c | SCENE_1B_5A_MEET_PLAN |
| B | 5 | 1b_4d | SCENE_1B_4B_CHAT_DEEPEN |
| B | 5 | 1b_4c_a | SCENE_1B_5C_DAILY_TALK |
| B | 5 | 1b_4c_b | SCENE_1B_5E_DOUBT |
| B | 5 | 1b_4c_c | SCENE_1B_5D_SHARED_MOMENT |
| B | 5 | 1b_4d_a | SCENE_1B_5A_MEET_PLAN |
| B | 5 | 1b_4d_b | SCENE_1B_5E_DOUBT |
| B | 5 | 1b_4d_c | SCENE_1B_5C_DAILY_TALK |
| B | 5 | 1b_5a | SCENE_1B_6A_COFFEE_CONVERSATION |
| B | 5 | 1b_5b | SCENE_1B_6A_COFFEE_CONVERSATION |
| B | 5 | 2_1a | SCENE_2_1A_CONFESSION |
| B | 5 | 2_1b | SCENE_2_1B_CONTINUE_ESCAPE |
| B | 5 | 2_2a | SCENE_2_2A_COFFEE_INVITATION |
| B | 5 | 2_2b | SCENE_2_2B_HESITATE |
| B | 5 | 2_3a | SCENE_2_3A_TURN_BACK |
| B | 5 | 2_3b | SCENE_2_3B_FINAL_ESCAPE |
| B | 5 | 3_1a | SCENE_3_1A_AGREE |
| B | 5 | 3_1b | SCENE_3_1B_HESITATE |
| B | 5 | 3_2a | SCENE_3_2A_REGRET |
| B | 5 | 3_2b | SCENE_3_2B_FINAL_ESCAPE |
| B | 5 | 3_3a | SCENE_3_3A_NEW_START |
| B | 5 | 3_3b | SCENE_3_3B_FEAR |

## Branch C

**函数**: `match1CBranchStrict`  
**文件**: `services/pathMatcher/branch1C.ts`

| branch | depth | lastChoice | Scene 常量名 |
|--------|-------|------------|--------------|
| C | 1 | (无选择) | SCENE_1C_HESITATE |
| C | 2 | 1c_1 | SCENE_1C_GUILT |
| C | 2 | 1c_1b | SCENE_1C_GUILT |
| C | 2 | 1c_1c | SCENE_1C_GUILT |
| C | 3 | 1c_2 | SCENE_1C_FIRST_MESSAGE |
| C | 3 | 1c_3 | SCENE_1C_STALKING |
| C | 4 | 1c_2a | SCENE_1C_MEETING |
| C | 4 | 1c_2b | SCENE_1C_4A_GUILT_OBSERVE |
| C | 4 | 1c_3a | SCENE_1B_APOLOGY |
| C | 4 | 1c_3b | SCENE_1C_4A_GUILT_OBSERVE |
| C | 4 | 1c_4 | SCENE_1C_MEETING |
| C | 4 | 1c_5 | SCENE_1C_4A_GUILT_OBSERVE |
| C | 4 | 1c_4c_a | SCENE_1C_4D_SEEK_FORGIVE |
| C | 4 | 1c_4c_b | SCENE_1C_4E_ACCEPTANCE |
| C | 4 | 1c_4c_c | SCENE_1C_4C_GUILT_DEEPEN |
| C | 4 | 1c_4d_a | SCENE_1C_5A_FIRST_MEETING |
| C | 4 | 1c_4d_b | SCENE_1C_5B_SLOW_APPROACH |
| C | 4 | 1c_4e_a | SCENE_1C_5A_FIRST_MEETING |
| C | 4 | 1c_4e_b | SCENE_1C_4C_GUILT_DEEPEN |
| C | 5 | 1c_4c | SCENE_1C_5A_FIRST_MEETING |
| C | 5 | 1c_4d | SCENE_1C_4B_FIRST_MESSAGE |
| C | 5 | 1c_5a | SCENE_1C_6A_DEEP_TALK |
| C | 5 | 1c_5b | SCENE_1C_FRIENDSHIP |
| C | 5 | 1c_5b_a | SCENE_1C_5B_SLOW_APPROACH |
| C | 5 | 1c_5b_b | SCENE_1C_5C_BARRIER |
| C | 5 | 1c_5c_a | SCENE_1C_5D_BREAKTHROUGH |
| C | 5 | 1c_5c_b | SCENE_1C_5C_BARRIER |
| C | 5 | 1c_5d_a | SCENE_1C_6A_DEEP_TALK |
| C | 5 | 1c_5d_b | SCENE_1C_FRIENDSHIP |
| C | 5 | 1c_4f_a | SCENE_1C_5E_GROWING_CLOSER |
| C | 5 | 1c_5e_a | SCENE_1C_6A_DEEP_TALK |
| C | 5 | 1c_5e_b | SCENE_1C_FRIENDSHIP |


