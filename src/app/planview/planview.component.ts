import { Component, OnInit } from '@angular/core';
import Handsontable from 'handsontable';
import { HotTableRegisterer } from '@handsontable/angular';

@Component({
  selector: 'app-planview',
  templateUrl: './planview.component.html',
  styleUrls: ['./planview.component.scss']
})
export class PlanviewComponent implements OnInit {
  displayUpdatedData = false;
  detailset = [];
  tableId = 'updateTable';

  updateSettings: Handsontable.GridSettings = {
      colHeaders: true,
      rowHeaders: true,
      selectionMode: 'single',
      autoColumnSize: false,
      colWidths: (index) => {
        if (index === 0) {
            return '150px';
        }
        return '100px';
    },
      cells: (row, column, prop) => {
          const cellProperties: any = {};
          cellProperties.renderer = function (instance, td, rowIndex, colIndex, property, value) {
              Handsontable.renderers.TextRenderer.apply(this, arguments);
          };
          return cellProperties;
      },
      afterChange: (change, source) => {
        console.log('updated data-->', JSON.stringify({data: change}))
      }
  };
  constructor() { }

  ngOnInit() {
    this.generateHandsonTable()
  }

  generateHandsonTable() {
    this.detailset = [
      {date:'01-01-2020', forecast: 200, distribution: 195, total: 395},
      {date:'02-01-2020', forecast: 171, distribution: 180, total: 351},
      {date:'03-01-2020', forecast: 300, distribution: 140, total: 440},
      {date:'04-01-2020', forecast: 100, distribution: 100, total: 200},
      {date:'05-01-2020', forecast: 200, distribution: 300, total: 500},
    ]
  }
}
