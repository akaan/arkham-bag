import { Token } from "arkham-odds";
import * as React from "react";
import "./ChaosBagLine.scss";

interface ChaosBagLineProps {
  token: Token;
  count: number;
  onAdd: () => void;
  onRemove: () => void;
}

export class ChaosBagLine extends React.Component<ChaosBagLineProps> {
  public render() {
    return (
      <tr className="chaos-bag-line">
        <td>{this.props.token}</td>
        <td>{this.props.count}</td>
        <td>
          <button
            type="button"
            className="add-token"
            onClick={this.props.onAdd}
          >
            +
          </button>
          <button
            type="button"
            className="remove-token"
            onClick={this.props.onRemove}
          >
            -
          </button>
        </td>
      </tr>
    );
  }
}
