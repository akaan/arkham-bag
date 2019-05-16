import { Token } from 'arkham-odds';
import { ADD_TOKEN, REMOVE_TOKEN, SET_BAG_CONTENTS } from './types';

export function setBagContents(tokens: Token[]) {
  return {
    tokens,
    type: SET_BAG_CONTENTS,
  };
}

export function addToken(token: Token) {
  return {
    token,
    type: ADD_TOKEN,
  };
}

export function removeToken(token: Token) {
  return {
    token,
    type: REMOVE_TOKEN,
  };
}
