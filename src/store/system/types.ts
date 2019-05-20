import { Bag, TokenEffects } from "arkham-odds";

interface SavedConfiguration {
  title: string;
  bagContents: Bag;
  tokenEffects: TokenEffects;
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
