import * as React from "react";

export class AppHeader extends React.Component {
  public render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">
          Arkham Horror LCG :: Chaos Bag evaluation
        </span>
      </nav>
    );
  }
}
