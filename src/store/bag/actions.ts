import { Token } from 'arkham-odds';
import { ADD_TOKEN, REMOVE_TOKEN } from './types';

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
