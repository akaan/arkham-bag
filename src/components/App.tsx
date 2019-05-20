import { Bag, Token, TokenEffects } from "arkham-odds";
import * as React from "react";
import { connect } from "react-redux";
import { AppState } from "../store";
import {
  addToken,
  removeToken,
  setBagContents,
  setTokenEffect
} from "../store/bag/actions";
import { BagState } from "../store/bag/types";
import { saveConfiguration } from "../store/system/actions";
import { SystemState } from "../store/system/types";
import { AppHeader } from "./AppHeader";
import { ChaosBag } from "./chaosbag/ChaosBag";
import { ChaosBagSelector } from "./chaosbag/ChaosBagSelector";
import { OddsChart } from "./OddsChart";
import { TokenEffectEditor } from "./tokeneffects/TokenEffectEditor";
import { ConfigurationSaver } from "./ConfigurationSaver";

interface AppProps {
  bagAndEffects: BagState;
  system: SystemState;
  setBagContents: typeof setBagContents;
  addToken: typeof addToken;
  removeToken: typeof removeToken;
  setTokenEffect: typeof setTokenEffect;
  saveConfiguration: typeof saveConfiguration;
}

class App extends React.Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
    this.onSaveConfig = this.onSaveConfig.bind(this);
  }

  public render() {
    return (
      <div>
        <AppHeader />
        <div className="app">
          <div>
            <OddsChart
              bagContents={this.props.bagAndEffects.contents}
              tokenEffects={this.props.bagAndEffects.effects}
              savedConfigurations={this.props.system.savedConfigs}
            />
          </div>
          <div>
            <div>
              <ConfigurationSaver
                bagState={this.props.bagAndEffects}
                saveConfiguration={this.props.saveConfiguration}
              />
              <ChaosBagSelector setBagContents={this.props.setBagContents} />
              <ChaosBag
                bagContents={this.props.bagAndEffects.contents}
                addToken={this.props.addToken}
                removeToken={this.props.removeToken}
              />
            </div>
            <div>
              <TokenEffectEditor
                tokenEffects={this.props.bagAndEffects.effects}
                setTokenEffect={this.props.setTokenEffect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  private onSaveConfig() {
    this.props.saveConfiguration(
      "Saved configuration",
      new Bag(this.props.bagAndEffects.contents.getTokens()),
      new TokenEffects().merge(this.props.bagAndEffects.effects)
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  bagAndEffects: state.bag,
  system: state.system
});

export default connect(
  mapStateToProps,
  { setBagContents, addToken, removeToken, setTokenEffect, saveConfiguration }
)(App);
