import { Token, TokenEffect } from "arkham-odds";
import React = require("react");
import { setTokenEffect } from "../store/bag/actions";
import { TokenEffectSelector } from "./TokenEffectSelector";

interface TokenEffectEditorLineProps {
  token: Token;
  tokenEffect: TokenEffect;
  setTokenEffect: typeof setTokenEffect;
}

export class TokenEffectEditorLine extends React.Component<
  TokenEffectEditorLineProps
> {
  constructor(props: TokenEffectEditorLineProps) {
    super(props);
    this.tokenEffectChanded = this.tokenEffectChanded.bind(this);
  }

  public render() {
    return (
      <tr>
        <td>{this.props.token}</td>
        <td>
          <TokenEffectSelector
            selectedTokenEffect={this.props.tokenEffect}
            onTokenEffectChanged={this.tokenEffectChanded}
          />
        </td>
      </tr>
    );
  }

  private tokenEffectChanded(newTokenEffect: TokenEffect) {
    this.props.setTokenEffect(this.props.token, newTokenEffect);
  }
}
