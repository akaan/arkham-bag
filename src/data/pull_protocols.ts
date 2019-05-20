import {
  darkProphecy,
  oliveMcBride,
  oliveMcBrideWithSkull,
  recallTheFuture,
  success,
  successChoosingBest
} from "arkham-odds";
import { PullProtocol } from "../store/bag/types";

export const PULL_PROTOCOLS: PullProtocol[] = [
  {
    description: "Pull 1 token",
    id: "none",
    numberOfTokensPulled: 1,
    outcomeFunctionWithDifficulty: success
  },
  {
    description: "Use Grotesque Statue (pull 2 tokens, choose best)",
    id: "grotesqueStatue",
    numberOfTokensPulled: 2,
    outcomeFunctionWithDifficulty: successChoosingBest
  },
  {
    description: "Use OliveMcBride (pull 3 tokens, choose best 2)",
    id: "oliveMcBride",
    numberOfTokensPulled: 3,
    outcomeFunctionWithDifficulty: oliveMcBride
  },
  {
    description: "Use OliveMcBride but choose Skull if possible",
    id: "oliveMcBrideSkull",
    numberOfTokensPulled: 3,
    outcomeFunctionWithDifficulty: oliveMcBrideWithSkull
  },
  {
    description: "Use Dark Prophecy (pull 5, choose bad token)",
    id: "darkProphecy",
    numberOfTokensPulled: 5,
    outcomeFunctionWithDifficulty: darkProphecy
  },
  {
    description: "Use Recall the Future",
    id: "recallTheFuture",
    numberOfTokensPulled: 1,
    outcomeFunctionWithDifficulty: recallTheFuture
  }
];
