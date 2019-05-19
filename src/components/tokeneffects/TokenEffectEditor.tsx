import { Token, TokenEffects } from "arkham-odds";
import React = require("react");
import { setTokenEffect } from "../../store/bag/actions";
import { TokenEffectEditorLine } from "./TokenEffectEditorLine";

interface TokenEffectEditorProps {
  tokenEffects: TokenEffects;
  setTokenEffect: typeof setTokenEffect;
}

const relevantTokens = [
  Token.ELDER_SIGN,
  Token.SKULL,
  Token.CULTIST,
  Token.TABLET,
  Token.ELDER_THING
];

export class TokenEffectEditor extends React.Component<TokenEffectEditorProps> {
  constructor(props: TokenEffectEditorProps) {
    super(props);
  }

  public render() {
    return (
      <div className="container p-3">
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Token</th>
              <th>Effect</th>
            </tr>
          </thead>
          <tbody>
            {relevantTokens.map((token: Token) => {
              return (
                <TokenEffectEditorLine
                  key={token}
                  token={token}
                  tokenEffect={this.props.tokenEffects.getEffect(token)}
                  setTokenEffect={this.props.setTokenEffect}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
