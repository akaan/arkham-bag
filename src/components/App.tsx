import * as React from "react";
import { Container } from "react-bootstrap";
import { AppHeader } from "./AppHeader";
import { connect } from "react-redux";
import { BagState } from "../store/bag/types";
import { AppState } from "../store";
import { ChaosBag } from "./ChaosBag";
import { addToken } from "../store/bag/actions";
import { Token } from "arkham-odds";

interface AppProps {
  bag: BagState;
  addToken: typeof addToken;
}

class App extends React.Component<AppProps> {
  public addToken(token: Token) {
    this.props.addToken(token);
  }
  public render() {
    return <div>
      <AppHeader />
      <Container>
        <ChaosBag bagContents={this.props.bag.contents} addToken={this.props.addToken} />
      </Container>
    </div>;
  }
}

const mapStateToProps = (state: AppState) => ({
  bag: state.bag
});

export default connect(
  mapStateToProps,
  { addToken }
)(App);
