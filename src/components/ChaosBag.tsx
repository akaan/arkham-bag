import * as React from "react";
import { Bag, Token } from "arkham-odds";
import { ChaosBagLine } from "./ChaosBagLine";
import { addToken } from "../store/bag/actions";

interface ChaosBagProps {
  bagContents: Bag;
  addToken: typeof addToken;
}

const availableTokens: Token[] = [
  Token.ELDER_SIGN,
  Token.PLUS_ONE,
  Token.ZERO,
  Token.MINUS_ONE,
  Token.MINUS_TWO,
  Token.MINUS_THREE,
  Token.MINUS_FOUR,
  Token.MINUS_FIVE,
  Token.MINUS_SIX,
  Token.MINUS_EIGHT,
  Token.SKULL,
  Token.CULTIST,
  Token.TABLET,
  Token.ELDER_THING,
  Token.AUTOFAIL
];

export class ChaosBag extends React.Component<ChaosBagProps> {
  public render() {

      let countBy = (grouped: Map<Token, number>, item: Token) => {
        if (grouped.has(item)) {
          return grouped.set(item, grouped.get(item) + 1);
        } else {
          return grouped.set(item, 1);
        }
      };
      let tokenNumbers = this.props.bagContents.getTokens().reduce(countBy, new Map());

      let lines: JSX.Element[] = [];
      availableTokens.forEach(token => {
        let tokenNumber = 0;
        if (tokenNumbers.has(token)) {
          tokenNumber = tokenNumbers.get(token);
        }
        lines.push(
          <ChaosBagLine
            key={token}
            token={token}
            count={tokenNumber}
            onAdd={this.props.addToken.bind(this, token)} />);
      });

      return (
        <table className="table">
          <tbody>
            {lines}
          </tbody>
        </table>
      );
    }
}
