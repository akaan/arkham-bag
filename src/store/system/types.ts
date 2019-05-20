import { Bag, TokenEffects } from "arkham-odds";
import { OutcomeFunction } from "arkham-odds/lib/OutcomeFunction";

export interface SavedConfiguration {
  title: string;
  bagContents: Bag;
  tokenEffects: TokenEffects;
  outcomeFunction: (diff: number) => OutcomeFunction;
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
