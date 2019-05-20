import { Bag, TokenEffects } from "arkham-odds";
import { OutcomeFunction } from "arkham-odds/lib/OutcomeFunction";
import { SAVE_CONFIGURATION, SystemActionTypes } from "./types";

export function saveConfiguration(
  title: string,
  bagContents: Bag,
  tokenEffects: TokenEffects,
  outcomeFunction: (diff: number) => OutcomeFunction
): SystemActionTypes {
  return {
    configuration: {
      bagContents,
      outcomeFunction,
      title,
      tokenEffects
    },
    type: SAVE_CONFIGURATION
  };
}
