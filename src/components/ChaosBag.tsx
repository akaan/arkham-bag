import { Bag, Token } from "arkham-odds";
import * as React from "react";
import { Container } from "react-bootstrap";
import { addToken, removeToken } from "../store/bag/actions";
import { ChaosBagLine } from "./ChaosBagLine";

interface ChaosBagProps {
  bagContents: Bag;
  addToken: typeof addToken;
  removeToken: typeof removeToken;
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
    const countBy = (grouped: Map<Token, number>, item: Token) => {
      if (grouped.has(item)) {
        return grouped.set(item, grouped.get(item) + 1);
      } else {
        return grouped.set(item, 1);
      }
    };
    const tokenNumbers = this.props.bagContents
      .getTokens()
      .reduce(countBy, new Map());

    const lines: JSX.Element[] = [];
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
          onAdd={this.props.addToken.bind(this, token)}
          onRemove={this.props.removeToken.bind(this, token)}
        />
      );
    });

    return (
      <Container className="p-3">
        <table className="table table-sm">
          <tbody>{lines}</tbody>
        </table>
      </Container>
    );
  }
}
