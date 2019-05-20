import { SAVE_CONFIGURATION, SystemActionTypes, SystemState } from "./types";

const initialState: SystemState = {
  savedConfigs: []
};

export function systemReducer(
  state = initialState,
  action: SystemActionTypes
): SystemState {
  switch (action.type) {
    case SAVE_CONFIGURATION:
      return Object.assign({}, state, {
        savedConfigs: [...state.savedConfigs, action.configuration]
      });
    default:
      return state;
  }
}
