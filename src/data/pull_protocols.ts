import { oliveMcBride, success } from "arkham-odds";
import { PullProtocol } from "../store/bag/types";

export const PULL_PROTOCOLS: PullProtocol[] = [
  {
    description: "Pull 1 token",
    id: "none",
    numberOfTokensPulled: 1,
    outcomeFunctionWithDifficulty: success
  },
  {
    description: "Use OliveMcBride (pull 3 tokens, choose best 2)",
    id: "oliveMcBride",
    numberOfTokensPulled: 3,
    outcomeFunctionWithDifficulty: oliveMcBride
  }
];
