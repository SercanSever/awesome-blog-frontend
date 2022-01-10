import { Component } from '@angular/core';

@Component({
  selector: 'app-google-combo-chart',
  templateUrl: './google-combo-chart.component.html',
  styleUrls: ['./google-combo-chart.component.css']
})
export class GoogleComboChartComponent {

  constructor() { }
  chartData: any = {
    type: 'ComboChart',
    data: [
      ["Apples", 3, 2, 2.5],
      ["Oranges", 2, 3, 2.5],
      ["Pears", 1, 5, 3],
      ["Bananas", 3, 9, 6],
      ["Plums", 4, 2, 3]
    ],
    columnNames: ['Fruits', 'Jane', 'Jone', 'Average'],
    options: {
      title: 'Box Office Earnings in First ',
      seriesType: 'bars',
      series: { 3: { type: 'line' } }
    },
    width: 450,
    height: 330
  }

}
