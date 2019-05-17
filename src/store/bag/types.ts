import { Bag, Token, TokenEffects } from "arkham-odds";

// Bag state's slice of state
export interface BagState {
  contents: Bag;
  effects: TokenEffects;
}

// Action names
export const SET_BAG_CONTENTS = "SET_BAG_CONTENTS";
export const ADD_TOKEN = "ADD_TOKEN";
export const REMOVE_TOKEN = "REMOVE_TOKEN";

interface SetBagContentsAction {
  type: typeof SET_BAG_CONTENTS;
  tokens: Token[];
}

interface AddTokenAction {
  type: typeof ADD_TOKEN;
  token: Token;
}

interface RemoveTokenAction {
  type: typeof REMOVE_TOKEN;
  token: Token;
}

export type BagActionTypes =
  | SetBagContentsAction
  | AddTokenAction
  | RemoveTokenAction;
