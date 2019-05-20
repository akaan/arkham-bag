// tslint:disable:object-literal-sort-keys
import { Bag, odds, success, TokenEffects } from "arkham-odds";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React = require("react");

interface OddsChartProps {
  bagContents: Bag;
  tokenEffects: TokenEffects;
}

const skillMinusDiff = [-4, -3, -2, -1, 0, 1, 2, 3, 4];

export class OddsChart extends React.Component<OddsChartProps> {
  public render() {
    const options: Highcharts.Options = {
      title: { text: "Odds of success" },
      yAxis: {
        title: { text: "Odds of success" },
        labels: { format: "{value:.2f}%" }
      },
      legend: { layout: "vertical", align: "right", verticalAlign: "middle" },
      plotOptions: {
        series: {
          label: { connectorAllowed: false },
          pointStart: -4
        }
      },
      series: [
        {
          name: "Odds",
          type: "line",
          data: skillMinusDiff.map(d =>
            odds(1, this.props.bagContents, this.props.tokenEffects, success(d))
          )
        } as Highcharts.SeriesLineOptions
      ],
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                layout: "horizontal",
                align: "center",
                verticalAlign: "bottom"
              }
            }
          }
        ]
      }
    };
    return <HighchartsReact highcharts={Highcharts} options={options} />;
  }
}
