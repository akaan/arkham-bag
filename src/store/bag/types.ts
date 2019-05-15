import { Bag, Token } from 'arkham-odds';

// Bag state's slice of state
export interface BagState {
  contents: Bag;
}

// Action names
export const ADD_TOKEN = 'ADD_TOKEN';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';

interface AddTokenAction {
  type: typeof ADD_TOKEN;
  token: Token;
}

interface RemoveTokenAction {
  type: typeof REMOVE_TOKEN;
  token: Token;
}

export type BagActionTypes = AddTokenAction | RemoveTokenAction;
