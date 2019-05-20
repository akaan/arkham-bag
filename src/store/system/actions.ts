import { Bag, TokenEffects } from "arkham-odds";
import { SAVE_CONFIGURATION, SystemActionTypes } from "./types";

export function saveConfiguration(
  title: string,
  bagContents: Bag,
  tokenEffects: TokenEffects
): SystemActionTypes {
  return {
    configuration: {
      bagContents,
      title,
      tokenEffects
    },
    type: SAVE_CONFIGURATION
  };
}
