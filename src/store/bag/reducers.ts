import { Bag, Bags } from 'arkham-odds';
import { ADD_TOKEN, BagActionTypes, BagState, REMOVE_TOKEN } from './types';

const initialState: BagState = {
  contents: new Bag(Bags.TheDunwichLegacy.Standard),
};

export function bagReducer(
  state = initialState,
  action: BagActionTypes,
): BagState {
  switch (action.type) {
    case ADD_TOKEN:
      return {
        contents: state.contents.addTokens([action.token]),
      };
    case REMOVE_TOKEN:
      return {
        contents: state.contents.removeToken(action.token),
      };
    default:
      return state;
  }
}
