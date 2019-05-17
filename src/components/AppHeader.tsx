import * as React from "react";
import { Navbar } from "react-bootstrap";

export class AppHeader extends React.Component {
  public render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          Arkham Horror LCG :: Chaos Bag evaluation
        </Navbar.Brand>
      </Navbar>
    );
  }
}
