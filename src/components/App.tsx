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
import { ConfigurationSaver } from "./chart/ConfigurationSaver";
import { OddsChart } from "./chart/OddsChart";
import { TokenEffectEditor } from "./tokeneffects/TokenEffectEditor";

interface AppProps {
  bag: BagState;
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
  }

  public render() {
    return (
      <div>
        <AppHeader />
        <div className="app">
          <div>
            <OddsChart
              bagState={this.props.bag}
              savedConfigurations={this.props.system.savedConfigs}
            />
          </div>
          <div>
            <div>
              <ConfigurationSaver
                bagState={this.props.bag}
                saveConfiguration={this.props.saveConfiguration}
              />
              <ChaosBagSelector setBagContents={this.props.setBagContents} />
              <ChaosBag
                bagContents={this.props.bag.contents}
                addToken={this.props.addToken}
                removeToken={this.props.removeToken}
              />
            </div>
            <div>
              <TokenEffectEditor
                tokenEffects={this.props.bag.effects}
                setTokenEffect={this.props.setTokenEffect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  bag: state.bag,
  system: state.system
});

export default connect(
  mapStateToProps,
  { setBagContents, addToken, removeToken, setTokenEffect, saveConfiguration }
)(App);
