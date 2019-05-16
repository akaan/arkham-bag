import { Token } from 'arkham-odds';
import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { addToken, removeToken, setBagContents } from '../store/bag/actions';
import { BagState } from '../store/bag/types';
import { AppHeader } from './AppHeader';
import { ChaosBag } from './ChaosBag';
import { ChaosBagSelector } from './ChaosBagSelector';

interface AppProps {
  bag: BagState;
  setBagContents: typeof setBagContents;
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
        <Row>
          <Col>
            <ChaosBagSelector setBagContents={this.props.setBagContents} />
            <ChaosBag
              bagContents={this.props.bag.contents}
              addToken={this.props.addToken}
              removeToken={this.props.removeToken} />
          </Col>
          <Col><p>Chart here</p></Col>
        </Row>
      </Container>
    </div>;
  }
}

const mapStateToProps = (state: AppState) => ({
  bag: state.bag,
});

export default connect(
  mapStateToProps,
  { setBagContents, addToken, removeToken },
)(App);
