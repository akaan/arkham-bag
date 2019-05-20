import { Bag, Token, TokenEffect, TokenEffects } from "arkham-odds";
import { OutcomeFunction } from "arkham-odds/lib/OutcomeFunction";

type OutcomeFunctionWithDifficulty = (diff: number) => OutcomeFunction;
export interface PullProtocol {
  id: string;
  description: string;
  numberOfTokensPulled: number;
  outcomeFunctionWithDifficulty: OutcomeFunctionWithDifficulty;
}

// Bag state's slice of state
export interface BagState {
  contents: Bag;
  effects: TokenEffects;
  pullProtocol: PullProtocol;
}

// Action names
export const SET_BAG_CONTENTS = "SET_BAG_CONTENTS";
export const ADD_TOKEN = "ADD_TOKEN";
export const REMOVE_TOKEN = "REMOVE_TOKEN";
export const SET_TOKEN_EFFECT = "SET_TOKEN_EFFECT";
export const SET_PULL_PROTOCOL = "SET_PULL_PROTOCOL";

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

interface SetPullProtocol {
  type: typeof SET_PULL_PROTOCOL;
  pullProtocol: PullProtocol;
}

export type BagActionTypes =
  | SetBagContentsAction
  | AddTokenAction
  | RemoveTokenAction
  | SetTokenEffectAction
  | SetPullProtocol;
