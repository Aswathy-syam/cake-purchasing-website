import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {

  Highcharts=Highcharts
  chartOptions={}
  constructor(){
    this.chartOptions=

    {
      chart: {
          type: 'column'
      },
      title: {
          text: 'Total Profit of the Year',
          align: 'left'
      },
      // subtitle: {
      //     text:
      //         'Source: <a target="_blank" ' +
      //         'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>',
      //     align: 'left'
      // },
      xAxis: {
          categories: ['2019', '2020', '2021', '2022', '2023', '2024'],
          crosshair: true,
          accessibility: {
              description: 'Countries'
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: ''
          }
      },
      tooltip: {
          valueSuffix: ' (1000 MT)'
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },
      series: [
          {
              name: 'sale',
              data: [14500,68300 , 107000, 68300, 260000,406292 ]
          },
          {
              name: 'product',
              data: [51086, 136000, 55000, 181000, 167180, 377000]
          }
      ]
    }

  }





}


