import { Token } from 'arkham-odds';
import { ADD_TOKEN } from './types';

export function addToken(token: Token) {
  return {
    token,
    type: ADD_TOKEN,
  };
}
