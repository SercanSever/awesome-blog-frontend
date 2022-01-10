import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-pie-chart',
  templateUrl: './google-pie-chart.component.html',
  styleUrls: ['./google-pie-chart.component.css']
})
export class GooglePieChartComponent {

  constructor() { }

  chartData: any = {
    type: 'PieChart',
    data: [
      ['Firefox', 45.0],
      ['IE', 26.8],
      ['Chrome', 12.8],
      ['Safari', 8.5],
      ['Opera', 6.2],
      ['Others', 0.7]

    ],
    columnNames: ['Browser', 'Percentage'],
    options: {
      title: 'Box Office Earnings in First Two Weeks of Opening'
    },
    width: 700,
    height: 400
  };

}
