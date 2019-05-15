import { Token } from 'arkham-odds';
import * as React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { addToken, removeToken } from '../store/bag/actions';
import { BagState } from '../store/bag/types';
import { AppHeader } from './AppHeader';
import { ChaosBag } from './ChaosBag';

interface AppProps {
  bag: BagState;
  addToken: typeof addToken;
  removeToken: typeof removeToken;
}

class App extends React.Component<AppProps> {
  public addToken(token: Token) {
    this.props.addToken(token);
  }

  public removeToken(token: Token) {
    this.props.removeToken(token);
  }

  public render() {
    return <div>
      <AppHeader />
      <Container>
        <ChaosBag
          bagContents={this.props.bag.contents}
          addToken={this.props.addToken}
          removeToken={this.props.removeToken} />
      </Container>
    </div>;
  }
}

const mapStateToProps = (state: AppState) => ({
  bag: state.bag,
});

export default connect(
  mapStateToProps,
  { addToken, removeToken },
)(App);
