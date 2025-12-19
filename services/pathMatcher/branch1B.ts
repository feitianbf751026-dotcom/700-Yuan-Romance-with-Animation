import { SceneData } from "../../types";
import * as Scenes from "../scenes";
import { getDefaultNextScene, hasToken, tokenizePath } from "./utils";

export function match1BBranch(path: string[], depth: number): SceneData {
  const strict = match1BBranchStrict(path, depth);
  return strict ?? getDefaultNextScene(path, depth);
}

export function match1BBranchStrict(path: string[], depth: number): SceneData | null {
  const tokens = tokenizePath(path);

  if (depth === 1) {
    return Scenes.SCENE_1B_MESSAGE;
  }

  if (depth === 2) {
    if (path[1] === "1b_1") return Scenes.SCENE_1B_DELETED;
    if (path[1] === "1b_2") return Scenes.SCENE_1B_CHAT;
    if (path[1] === "1b_3") return Scenes.SCENE_1B_COFFEE;
  }

  if (depth === 3) {
    if (hasToken(tokens, "1b_1a")) return Scenes.SCENE_1B_APOLOGY;
    if (hasToken(tokens, "1b_1b")) return Scenes.SCENE_1B_REGRET;
    if (hasToken(tokens, "1b_2a")) return Scenes.SCENE_1B_PLAN_MEET;
    if (hasToken(tokens, "1b_2b")) return Scenes.SCENE_1B_DEEP_CHAT;
    if (hasToken(tokens, "1b_2ae")) return Scenes.SCENE_1B_4C_HESITATION;
    if (hasToken(tokens, "1b_3a")) return Scenes.SCENE_1B_COFFEE_TALK;
    if (hasToken(tokens, "1b_3b")) return Scenes.SCENE_2_REUNION;
  }

  if (depth === 4) {
    if (hasToken(tokens, "1b_1aa")) return Scenes.SCENE_1B_4A_DELETED_REGRET;
    if (hasToken(tokens, "1b_1ab")) return Scenes.SCENE_1B_4A_DELETED_REGRET;
    if (hasToken(tokens, "1b_1ac")) return Scenes.SCENE_2_REUNION;
    if (hasToken(tokens, "1b_1ad")) return Scenes.SCENE_1B_4A_DELETED_REGRET;
    if (hasToken(tokens, "1b_2aa")) return Scenes.SCENE_1B_5A_MEET_PLAN;
    if (hasToken(tokens, "1b_2ab")) return Scenes.SCENE_1B_4B_CHAT_DEEPEN;
    if (hasToken(tokens, "1b_2ac")) return Scenes.SCENE_1B_6A_COFFEE_CONVERSATION;
    if (hasToken(tokens, "1b_2ad")) return Scenes.SCENE_2_REUNION;
    if (hasToken(tokens, "1b_2ae")) return Scenes.SCENE_1B_4C_HESITATION;
    if (hasToken(tokens, "1b_2af")) return Scenes.SCENE_1B_4D_TRUST_BUILD;
    if (hasToken(tokens, "1b_3c")) return Scenes.SCENE_1B_REGULAR_MEET;
    if (hasToken(tokens, "1b_3d")) return Scenes.SCENE_2_REUNION;
    if (hasToken(tokens, "2_1")) return Scenes.SCENE_2_1_AWKWARD;
    if (hasToken(tokens, "2_2")) return Scenes.SCENE_2_2_RECOGNITION;
    if (hasToken(tokens, "2_3")) return Scenes.SCENE_2_3_ESCAPE;
    if (hasToken(tokens, "3_1")) return Scenes.SCENE_3_1_LUNCH_TALK;
    if (hasToken(tokens, "3_2")) return Scenes.SCENE_3_2_REJECTION;
    if (hasToken(tokens, "3_3")) return Scenes.SCENE_3_3_APOLOGY;
  }

  if (depth === 5) {
    if (hasToken(tokens, "1b_4a")) return Scenes.SCENE_1B_APOLOGY;
    if (hasToken(tokens, "1b_4b")) return Scenes.SCENE_1B_4A_DELETED_REGRET;
    if (hasToken(tokens, "1b_4c")) return Scenes.SCENE_1B_5A_MEET_PLAN;
    if (hasToken(tokens, "1b_4d")) return Scenes.SCENE_1B_4B_CHAT_DEEPEN;
    if (hasToken(tokens, "1b_4c_a")) return Scenes.SCENE_1B_5C_DAILY_TALK;
    if (hasToken(tokens, "1b_4c_b")) return Scenes.SCENE_1B_5E_DOUBT;
    if (hasToken(tokens, "1b_4c_c")) return Scenes.SCENE_1B_5D_SHARED_MOMENT;
    if (hasToken(tokens, "1b_4d_a")) return Scenes.SCENE_1B_5A_MEET_PLAN;
    if (hasToken(tokens, "1b_4d_b")) return Scenes.SCENE_1B_5E_DOUBT;
    if (hasToken(tokens, "1b_4d_c")) return Scenes.SCENE_1B_5C_DAILY_TALK;
    if (hasToken(tokens, "1b_5a")) return Scenes.SCENE_1B_6A_COFFEE_CONVERSATION;
    if (hasToken(tokens, "1b_5b")) return Scenes.SCENE_1B_6A_COFFEE_CONVERSATION;
    if (hasToken(tokens, "2_1a")) return Scenes.SCENE_2_1A_CONFESSION;
    if (hasToken(tokens, "2_1b")) return Scenes.SCENE_2_1B_CONTINUE_ESCAPE;
    if (hasToken(tokens, "2_2a")) return Scenes.SCENE_2_2A_COFFEE_INVITATION;
    if (hasToken(tokens, "2_2b")) return Scenes.SCENE_2_2B_HESITATE;
    if (hasToken(tokens, "2_3a")) return Scenes.SCENE_2_3A_TURN_BACK;
    if (hasToken(tokens, "2_3b")) return Scenes.SCENE_2_3B_FINAL_ESCAPE;
    if (hasToken(tokens, "3_1a")) return Scenes.SCENE_3_1A_AGREE;
    if (hasToken(tokens, "3_1b")) return Scenes.SCENE_3_1B_HESITATE;
    if (hasToken(tokens, "3_2a")) return Scenes.SCENE_3_2A_REGRET;
    if (hasToken(tokens, "3_2b")) return Scenes.SCENE_3_2B_FINAL_ESCAPE;
    if (hasToken(tokens, "3_3a")) return Scenes.SCENE_3_3A_NEW_START;
    if (hasToken(tokens, "3_3b")) return Scenes.SCENE_3_3B_FEAR;
  }

  if (depth === 6) {
    if (hasToken(tokens, "1b_6a")) return Scenes.SCENE_1B_7A_REGULAR_MEETINGS;
    if (hasToken(tokens, "1b_6b")) return Scenes.SCENE_1B_7A_REGULAR_MEETINGS;
    if (hasToken(tokens, "1b_6e_a")) return Scenes.SCENE_1B_7A_REGULAR_MEETINGS;
    if (hasToken(tokens, "1b_6e_b")) return Scenes.SCENE_1B_7C_FRIENDSHIP_CONFIRM;
    if (hasToken(tokens, "1b_5c_a")) return Scenes.SCENE_1B_6B_DEEP_UNDERSTANDING;
    if (hasToken(tokens, "1b_5c_b")) return Scenes.SCENE_1B_6C_CONFLICT;
    if (hasToken(tokens, "1b_5c_c")) return Scenes.SCENE_1B_6D_RECONCILIATION;
    if (hasToken(tokens, "1b_5d_a")) return Scenes.SCENE_1B_6A_COFFEE_CONVERSATION;
    if (hasToken(tokens, "1b_5d_b")) return Scenes.SCENE_1B_6C_CONFLICT;
    if (hasToken(tokens, "1b_5d_c")) return Scenes.SCENE_1B_6B_DEEP_UNDERSTANDING;
    if (hasToken(tokens, "1b_5e_a")) return Scenes.SCENE_1B_6D_RECONCILIATION;
    if (hasToken(tokens, "1b_5e_b")) return Scenes.SCENE_1B_6A_COFFEE_CONVERSATION;
    if (hasToken(tokens, "1b_5e_c")) return Scenes.SCENE_1B_6C_CONFLICT;
    if (hasToken(tokens, "1b_4e_a")) return Scenes.SCENE_1B_5F_EMOTIONAL_TURMOIL;
    if (hasToken(tokens, "1b_4e_b")) return Scenes.SCENE_1B_4B_CHAT_DEEPEN;
    if (hasToken(tokens, "1b_5f_a")) return Scenes.SCENE_1B_6A_COFFEE_CONVERSATION;
    if (hasToken(tokens, "1b_5f_b")) return Scenes.SCENE_1B_5F_EMOTIONAL_TURMOIL;
    if (hasToken(tokens, "1b_4c_a")) return Scenes.SCENE_1B_5C_DAILY_TALK;
    if (hasToken(tokens, "1b_4c_b")) return Scenes.SCENE_1B_5E_DOUBT;
    if (hasToken(tokens, "1b_4c_c")) return Scenes.SCENE_1B_5D_SHARED_MOMENT;
    if (hasToken(tokens, "1b_4d_a")) return Scenes.SCENE_1B_5A_MEET_PLAN;
    if (hasToken(tokens, "1b_4d_b")) return Scenes.SCENE_1B_5E_DOUBT;
    if (hasToken(tokens, "1b_4d_c")) return Scenes.SCENE_1B_5C_DAILY_TALK;
    if (hasToken(tokens, "2_1aa")) return Scenes.SCENE_1B_9A_FIRST_DATE;
    if (hasToken(tokens, "2_1ab")) return Scenes.SCENE_1B_9B_FEAR_CONFRONTATION;
    if (hasToken(tokens, "2_1ba")) return Scenes.SCENE_2_3A_TURN_BACK;
    if (hasToken(tokens, "2_1bb")) return Scenes.SCENE_2_3B_FINAL_ESCAPE;
    if (hasToken(tokens, "2_2aa")) return Scenes.SCENE_1B_9A_FIRST_DATE;
    if (hasToken(tokens, "2_2ab")) return Scenes.SCENE_1B_9B_FEAR_CONFRONTATION;
    if (hasToken(tokens, "2_2ba")) return Scenes.SCENE_1B_9C_FULL_CONFESSION;
    if (hasToken(tokens, "2_2bb")) return Scenes.SCENE_2_3B_FINAL_ESCAPE;
    if (hasToken(tokens, "2_3aa")) return Scenes.SCENE_1B_9A_FIRST_DATE;
    if (hasToken(tokens, "2_3ab")) return Scenes.SCENE_2_2B_HESITATE;
    if (hasToken(tokens, "2_3ba")) return Scenes.SCENE_1A_10C_ACCEPTANCE;
    if (hasToken(tokens, "2_3bb")) return Scenes.SCENE_1A_10D_FINAL_SEARCH;
    if (hasToken(tokens, "3_1aa")) return Scenes.SCENE_1B_9A_FIRST_DATE;
    if (hasToken(tokens, "3_1ab")) return Scenes.SCENE_1B_9B_FEAR_CONFRONTATION;
    if (hasToken(tokens, "3_1ba")) return Scenes.SCENE_1B_9C_FULL_CONFESSION;
    if (hasToken(tokens, "3_1bb")) return Scenes.SCENE_2_3B_FINAL_ESCAPE;
    if (hasToken(tokens, "3_2aa")) return Scenes.SCENE_1B_9C_FULL_CONFESSION;
    if (hasToken(tokens, "3_2ab")) return Scenes.SCENE_2_3B_FINAL_ESCAPE;
    if (hasToken(tokens, "3_2ba")) return Scenes.SCENE_1A_10C_ACCEPTANCE;
    if (hasToken(tokens, "3_2bb")) return Scenes.SCENE_1A_10D_FINAL_SEARCH;
    if (hasToken(tokens, "3_3aa")) return Scenes.SCENE_1B_9A_FIRST_DATE;
    if (hasToken(tokens, "3_3ab")) return Scenes.SCENE_1B_9B_FEAR_CONFRONTATION;
    if (hasToken(tokens, "3_3ba")) return Scenes.SCENE_1B_9C_FULL_CONFESSION;
    if (hasToken(tokens, "3_3bb")) return Scenes.SCENE_1B_10B_FRIENDSHIP_CHOICE;
  }

  if (depth === 7) {
    if (hasToken(tokens, "1b_7a")) return Scenes.SCENE_1B_8A_RELATIONSHIP_DEFINE;
    if (hasToken(tokens, "1b_7b")) return Scenes.SCENE_1B_8A_RELATIONSHIP_DEFINE;
    if (hasToken(tokens, "1b_7c")) return Scenes.SCENE_1B_7B_CONFESSION_MOMENT;
    if (hasToken(tokens, "1b_7d")) return Scenes.SCENE_1B_7C_FRIENDSHIP_CONFIRM;
    if (hasToken(tokens, "1b_7e")) return Scenes.SCENE_1B_7D_DISTANCE_KEEP;
    if (hasToken(tokens, "1b_7f")) return Scenes.SCENE_1B_7E_COMPLICATED_FEEL;
    if (hasToken(tokens, "1b_7g_a")) return Scenes.SCENE_1B_8G_PROMISE_MADE;
    if (hasToken(tokens, "1b_7g_b")) return Scenes.SCENE_1B_8A_RELATIONSHIP_DEFINE;
    if (hasToken(tokens, "1b_7h")) return Scenes.SCENE_1B_8A_RELATIONSHIP_DEFINE;
    if (hasToken(tokens, "1b_7i")) return Scenes.SCENE_1B_7D_DISTANCE_KEEP;
    if (hasToken(tokens, "1b_7j")) return Scenes.SCENE_1B_8A_RELATIONSHIP_DEFINE;
    if (hasToken(tokens, "1b_7k")) return Scenes.SCENE_1B_7E_COMPLICATED_FEEL;
  }

  if (depth === 8) {
    if (hasToken(tokens, "1b_8a")) return Scenes.SCENE_1B_9A_FIRST_DATE;
    if (hasToken(tokens, "1b_8b")) return Scenes.SCENE_1B_9B_FEAR_CONFRONTATION;
    if (hasToken(tokens, "1b_8c")) return Scenes.SCENE_1B_9C_FULL_CONFESSION;
    if (hasToken(tokens, "1b_8d")) return Scenes.SCENE_1B_8B_FEAR_FACE;
    if (hasToken(tokens, "1b_8e")) return Scenes.SCENE_1B_8C_PAST_CONFESS;
    if (hasToken(tokens, "1b_8f")) return Scenes.SCENE_1B_8D_FUTURE_PLAN;
    if (hasToken(tokens, "1b_8g_a")) return Scenes.SCENE_1B_9K_FUTURE_VISION;
    if (hasToken(tokens, "1b_8g_b")) return Scenes.SCENE_1B_9A_FIRST_DATE;
    if (hasToken(tokens, "1b_8h")) return Scenes.SCENE_1B_9A_FIRST_DATE;
    if (hasToken(tokens, "1b_8i")) return Scenes.SCENE_1B_9B_FEAR_CONFRONTATION;
    if (hasToken(tokens, "1b_8j")) return Scenes.SCENE_1B_9A_FIRST_DATE;
    if (hasToken(tokens, "1b_8k")) return Scenes.SCENE_1B_9B_FEAR_CONFRONTATION;
  }

  if (depth === 9) {
    if (hasToken(tokens, "1b_9a")) return Scenes.SCENE_1B_10A_RELATIONSHIP_GROWTH;
    if (hasToken(tokens, "1b_9b")) return Scenes.SCENE_1B_10A_RELATIONSHIP_GROWTH;
    if (hasToken(tokens, "1b_9c")) return Scenes.SCENE_1B_10A_RELATIONSHIP_GROWTH;
    if (hasToken(tokens, "1b_9d")) return Scenes.SCENE_1B_10B_FRIENDSHIP_CHOICE;
    if (hasToken(tokens, "1b_9e")) return Scenes.SCENE_1B_10A_RELATIONSHIP_GROWTH;
    if (hasToken(tokens, "1b_9f")) return Scenes.SCENE_1B_10B_FRIENDSHIP_CHOICE;
    if (hasToken(tokens, "1b_9k_a")) return Scenes.SCENE_1B_10C_RELATIONSHIP_FINAL;
    if (hasToken(tokens, "1b_9k_b")) return Scenes.SCENE_1B_10A_RELATIONSHIP_GROWTH;
    if (hasToken(tokens, "1b_9g")) return Scenes.SCENE_1B_9D_RELATIONSHIP_DECISION;
    if (hasToken(tokens, "1b_9h")) return Scenes.SCENE_1B_9E_FINAL_CHOICE;
    if (hasToken(tokens, "1b_9i")) return Scenes.SCENE_1B_9F_NEW_BEGINNING;
    if (hasToken(tokens, "1b_9j")) return Scenes.SCENE_1B_9E_FINAL_CHOICE;
    if (hasToken(tokens, "1b_9k")) return Scenes.SCENE_1B_10A_RELATIONSHIP_GROWTH;
    if (hasToken(tokens, "1b_9l")) return Scenes.SCENE_1B_10B_FRIENDSHIP_CHOICE;
  }

  if (depth > 10) {
    return getDefaultNextScene(path, depth);
  }

  return null;
}
