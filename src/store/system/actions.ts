import { Bag, TokenEffects } from "arkham-odds";
import { PullProtocol } from "../bag/types";
import { SAVE_CONFIGURATION, SystemActionTypes } from "./types";

export function saveConfiguration(
  title: string,
  bagContents: Bag,
  tokenEffects: TokenEffects,
  pullProtocol: PullProtocol
): SystemActionTypes {
  return {
    configuration: {
      bagContents,
      pullProtocol,
      title,
      tokenEffects
    },
    type: SAVE_CONFIGURATION
  };
}
