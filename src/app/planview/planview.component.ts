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
  dataSet = [];
  table_id = 'updateTable'

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
        if(change !== null) {
          let currentRow = change[0][0];
          let newValue = Number(change[0][3]);
          let cell = this.detailset[currentRow];
          const json = {
            date:'01-01-2020', forecast: newValue, distribution: 200, total: 500
          }
          this.detailset[currentRow] = json;
          this.hotRegisterer.getInstance(this.tableId).loadData(this.detailset);
        }
      }
  };

  constructor(private hotRegisterer: HotTableRegisterer) { }

  ngOnInit() {
    this.generateHandsonTable();
  }

  generateHandsonTable() {
    this.detailset = [
      {date:'01-01-2020', forecast: 200, distribution: 195, total: 395},
      {date:'02-01-2020', forecast: 171, distribution: 180, total: 351},
      {date:'03-01-2020', forecast: 300, distribution: 140, total: 440},
      {date:'04-01-2020', forecast: 100, distribution: 100, total: 200},
      {date:'05-01-2020', forecast: 200, distribution: 300, total: 500},
    ]

    //column implementation
    var example = document.getElementById('example');
    var hot1 = new Handsontable(example, {
      data: this.detailset,
      colWidths: 100,
      width: '100%',
      height: 320,
      rowHeights: 23,
      rowHeaders: true,
      colHeaders: true,
      columns: [
        {title: 'Date', data: 'date', readOnly: true, type: 'numeric'},
        {title: 'Forecast', data: 'forecast', readOnly: false, type: 'numeric'},
        {title: 'Distribution', data: 'distribution', readOnly: true, type: 'numeric'},
        {title: 'Total', data: 'total', readOnly: true, type: 'numeric'},
      ],
      afterChange: (change, source) => {
        if(change !== null) {
           let currentColumn = change[0][1];
           let newValue = Number(change[0][3]);
           this.detailset.forEach((element, index) => {
              if(element.hasOwnProperty(currentColumn)) {
                this.detailset[index][currentColumn] = newValue;
              }
           });
           hot1.loadData(this.detailset);
        }
      }
    });
  }

  updateData() {
    this.displayUpdatedData = true;
  }

  onBlurMethod(value, index, newValue) {
    let currentRow = index;
    let updatedValue = Number(newValue);
    const json = {
      date:'01-01-2020', forecast: updatedValue, distribution: 200, total: 500
    }
    this.detailset[currentRow] = json;
  }
}
