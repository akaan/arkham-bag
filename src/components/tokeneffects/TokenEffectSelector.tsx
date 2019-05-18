// tslint:disable:object-literal-sort-keys
import {
  Autofail,
  Autosuccess,
  Modifier,
  TokenEffect,
  TokenEffectType
} from "arkham-odds";
import React = require("react");

interface TokenEffectSelectorProps {
  selectedTokenEffect: TokenEffect;
  onTokenEffectChanged: (newTokenEffect: TokenEffect) => void;
}

interface TokenEffectSelectorState {
  selectedTokenEffect: TokenEffect;
}

const labelToTokenEffect: { [index: string]: TokenEffect } = {
  Autosuccess: new Autosuccess(),
  "+2": new Modifier(2),
  "+1": new Modifier(1),
  "0": new Modifier(0),
  "-1": new Modifier(-1),
  "-2": new Modifier(-2),
  "-3": new Modifier(-3),
  "-4": new Modifier(-4),
  "-5": new Modifier(-5),
  "-6": new Modifier(-6),
  "-7": new Modifier(-7),
  "-8": new Modifier(-8),
  Autofail: new Autofail()
};

const areTokenEffectsEqual = (effect1: TokenEffect, effect2: TokenEffect) => {
  if (effect1.getOutcome() !== effect2.getOutcome()) {
    return false;
  } else {
    if (
      effect1.getOutcome() === TokenEffectType.MODIFIER &&
      effect2.getOutcome() === TokenEffectType.MODIFIER
    ) {
      return (
        (effect1 as Modifier).getValue() === (effect2 as Modifier).getValue()
      );
    }
  }
  return true;
};

const getLabelForTokenEffect = (tokenEffect: TokenEffect) => {
  console.log(`getLabelForTokenEffect ${tokenEffect}`);
  return Object.keys(labelToTokenEffect).find(label =>
    areTokenEffectsEqual(labelToTokenEffect[label], tokenEffect)
  );
};

export class TokenEffectSelector extends React.Component<
  TokenEffectSelectorProps,
  TokenEffectSelectorState
> {
  constructor(props: TokenEffectSelectorProps) {
    super(props);
    this.selectedEffectChanged = this.selectedEffectChanged.bind(this);
    this.state = {
      selectedTokenEffect: this.props.selectedTokenEffect
    };
  }

  public render() {
    return (
      <select
        onChange={this.selectedEffectChanged}
        value={getLabelForTokenEffect(this.state.selectedTokenEffect)}
      >
        {Array.from(
          Object.keys(labelToTokenEffect).map(k => (
            <option key={k} value={k}>
              {k}
            </option>
          ))
        )}
      </select>
    );
  }

  private selectedEffectChanged(event: React.ChangeEvent<HTMLSelectElement>) {
    const newEffect = labelToTokenEffect[event.currentTarget.value];
    this.setState({
      selectedTokenEffect: newEffect
    });
    this.props.onTokenEffectChanged(newEffect);
  }
}
