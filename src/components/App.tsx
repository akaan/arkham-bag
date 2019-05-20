import { Token } from "arkham-odds";
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
import { AppHeader } from "./AppHeader";
import { ChaosBag } from "./chaosbag/ChaosBag";
import { ChaosBagSelector } from "./chaosbag/ChaosBagSelector";
import { OddsChart } from "./OddsChart";
import { OddsTable } from "./OddsTable";
import { TokenEffectEditor } from "./tokeneffects/TokenEffectEditor";

interface AppProps {
  bagAndEffects: BagState;
  setBagContents: typeof setBagContents;
  addToken: typeof addToken;
  removeToken: typeof removeToken;
  setTokenEffect: typeof setTokenEffect;
}

class App extends React.Component<AppProps> {
  public addToken(token: Token) {
    this.props.addToken(token);
  }

  public removeToken(token: Token) {
    this.props.removeToken(token);
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
            />
          </div>
          <div>
            <div>
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
}

const mapStateToProps = (state: AppState) => ({
  bagAndEffects: state.bag
});

export default connect(
  mapStateToProps,
  { setBagContents, addToken, removeToken, setTokenEffect }
)(App);
