import { Bag, Token, TokenEffect, TokenEffects } from "arkham-odds";
import { OutcomeFunction } from "arkham-odds/lib/OutcomeFunction";

// Bag state's slice of state
export interface BagState {
  contents: Bag;
  effects: TokenEffects;
  outcomeFunction: (diff: number) => OutcomeFunction;
}

// Action names
export const SET_BAG_CONTENTS = "SET_BAG_CONTENTS";
export const ADD_TOKEN = "ADD_TOKEN";
export const REMOVE_TOKEN = "REMOVE_TOKEN";
export const SET_TOKEN_EFFECT = "SET_TOKEN_EFFECT";

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

interface SetTokenEffectAction {
  type: typeof SET_TOKEN_EFFECT;
  token: Token;
  effect: TokenEffect;
}

export type BagActionTypes =
  | SetBagContentsAction
  | AddTokenAction
  | RemoveTokenAction
  | SetTokenEffectAction;
