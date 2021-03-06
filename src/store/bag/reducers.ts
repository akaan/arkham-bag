import {
  Bag,
  Bags,
  DefaultTokenEffects,
  Modifier,
  Token,
  TokenEffects
} from "arkham-odds";
import { PULL_PROTOCOLS } from "../../data/pull_protocols";
import {
  ADD_TOKEN,
  BagActionTypes,
  BagState,
  REMOVE_TOKEN,
  SET_BAG_CONTENTS,
  SET_PULL_PROTOCOL,
  SET_TOKEN_EFFECT
} from "./types";

const initialState: BagState = {
  contents: new Bag(Bags.TheDunwichLegacy.Standard),
  effects: DefaultTokenEffects.merge(
    new TokenEffects([
      [Token.SKULL, new Modifier(-1)],
      [Token.CULTIST, new Modifier(-2)],
      [Token.TABLET, new Modifier(-2)],
      [Token.ELDER_THING, new Modifier(-2)],
      [Token.ELDER_SIGN, new Modifier(2)]
    ])
  ),
  pullProtocol: PULL_PROTOCOLS.find(p => p.id === "none")
};

export function bagReducer(
  state = initialState,
  action: BagActionTypes
): BagState {
  switch (action.type) {
    case SET_BAG_CONTENTS:
      return Object.assign({}, state, {
        contents: new Bag(action.tokens)
      });
    case ADD_TOKEN:
      return Object.assign({}, state, {
        contents: state.contents.addTokens([action.token])
      });
    case REMOVE_TOKEN:
      return Object.assign({}, state, {
        contents: state.contents.removeToken(action.token)
      });
    case SET_TOKEN_EFFECT:
      return Object.assign({}, state, {
        effects: state.effects.setEffect(action.token, action.effect)
      });
    case SET_PULL_PROTOCOL:
      return Object.assign({}, state, {
        pullProtocol: action.pullProtocol
      });
    default:
      return state;
  }
}
