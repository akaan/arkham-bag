import { Bag, TokenEffects } from "arkham-odds";
import { PullProtocol } from "../bag/types";

export interface SavedConfiguration {
  title: string;
  bagContents: Bag;
  tokenEffects: TokenEffects;
  pullProtocol: PullProtocol;
}

export interface SystemState {
  savedConfigs: SavedConfiguration[];
}

export const SAVE_CONFIGURATION = "SAVE_CONFIGURATION";

interface SaveConfigurationAction {
  type: typeof SAVE_CONFIGURATION;
  configuration: SavedConfiguration;
}

export type SystemActionTypes = SaveConfigurationAction;
