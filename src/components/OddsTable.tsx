import { Bag, odds, success, TokenEffects } from "arkham-odds";
import React = require("react");

interface OddsTableProps {
  bagContents: Bag;
  tokenEffects: TokenEffects;
}

const skillMinusDiff = [-4, -3, -2, -1, 0, 1, 2, 3, 4];

export class OddsTable extends React.Component<OddsTableProps> {
  public render() {
    return (
      <table className="table table-sm">
        <thead>
          <tr>
            <th>Skill value - difficulty</th>
            <th>Odds of success</th>
          </tr>
        </thead>
        <tbody>
          {skillMinusDiff.map(d => {
            return (
              <tr key={d}>
                <td>{d}</td>
                <td>
                  {(
                    100 *
                    odds(
                      1,
                      this.props.bagContents,
                      this.props.tokenEffects,
                      success(d)
                    )
                  ).toFixed(2)}
                  %
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
