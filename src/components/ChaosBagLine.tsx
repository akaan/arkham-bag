import { Token } from 'arkham-odds';
import * as React from 'react';

interface ChaosBagLineProps {
  token: Token;
  count: number;
  onAdd: () => void;
}

export class ChaosBagLine extends React.Component<ChaosBagLineProps> {
  public render() {
    return <tr>
      <td>{this.props.token}</td>
      <td>{this.props.count}</td>
      <td>
        <button type='button' className='btn btn-success' onClick={this.props.onAdd}>+</button>
      </td>
    </tr>;
  }
}
