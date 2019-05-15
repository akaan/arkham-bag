import { Token } from 'arkham-odds';
import * as React from 'react';
import { Button } from 'react-bootstrap';

interface ChaosBagLineProps {
  token: Token;
  count: number;
  onAdd: () => void;
  onRemove: () => void;
}

export class ChaosBagLine extends React.Component<ChaosBagLineProps> {
  public render() {
    return <tr>
      <td>{this.props.token}</td>
      <td>{this.props.count}</td>
      <td>
        <Button variant='success' onClick={this.props.onAdd}>+</Button>
        <Button variant='danger' onClick={this.props.onRemove}>-</Button>
      </td>
    </tr>;
  }
}
