// tslint:disable:object-literal-sort-keys
import { odds } from "arkham-odds";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React = require("react");
import { BagState } from "../../store/bag/types";
import { SavedConfiguration } from "../../store/system/types";

interface OddsChartProps {
  bagState: BagState;
  savedConfigurations: SavedConfiguration[];
}

const skillMinusDiff = [-4, -3, -2, -1, 0, 1, 2, 3, 4];

export class OddsChart extends React.Component<OddsChartProps> {
  public render() {
    const series: Highcharts.SeriesLineOptions[] = [];
    this.props.savedConfigurations.forEach(config => {
      series.push({
        name: config.title,
        type: "line",
        tooltip: {
          valueDecimals: 2,
          valueSuffix: "%"
        },
        data: skillMinusDiff.map(
          d =>
            100 *
            odds(
              1,
              config.bagContents,
              config.tokenEffects,
              config.outcomeFunction(d)
            )
        )
      });
    });
    series.push({
      name: "Unsaved configuration",
      type: "line",
      tooltip: {
        valueDecimals: 2,
        valueSuffix: "%"
      },
      data: skillMinusDiff.map(
        d =>
          100 *
          odds(
            1,
            this.props.bagState.contents,
            this.props.bagState.effects,
            this.props.bagState.outcomeFunction(d)
          )
      )
    });

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
          dataLabels: { enabled: true, format: "{point.y:.2f}%" },
          pointStart: -4
        }
      },
      series,
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
