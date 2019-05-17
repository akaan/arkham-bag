import { Token, TokenEffect } from "arkham-odds";
import {
  ADD_TOKEN,
  BagActionTypes,
  REMOVE_TOKEN,
  SET_BAG_CONTENTS,
  SET_TOKEN_EFFECT
} from "./types";

export function setBagContents(tokens: Token[]): BagActionTypes {
  return {
    tokens,
    type: SET_BAG_CONTENTS
  };
}

export function addToken(token: Token): BagActionTypes {
  return {
    token,
    type: ADD_TOKEN
  };
}

export function removeToken(token: Token): BagActionTypes {
  return {
    token,
    type: REMOVE_TOKEN
  };
}

export function setTokenEffect(
  token: Token,
  effect: TokenEffect
): BagActionTypes {
  return {
    effect,
    token,
    type: SET_TOKEN_EFFECT
  };
}
