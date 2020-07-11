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
  // tslint:disable-next-line:variable-name
  table_id = 'updateTable';

  response = {
    demands: [
      {
        planDate: '25/06/2020',
        independentDemand: 100,
        dependentDemand: 50,
        totalDemand: 150
      },
      {
        planDate: '26/06/2020',
        independentDemand: 100,
        dependentDemand: 50,
        totalDemand: 150
      }
    ]
  };

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
      if (change !== null) {
        const currentRow = change[0][0];
        const newValue = Number(change[0][3]);
        const cell = this.detailset[currentRow];
        this.updatePivotData(newValue, cell, currentRow);
        // const json = {
        //   planDate:'01-01-2020', independentDemand: newValue, dependentDemand: 200, totalDemand: 500
        // }
        // this.detailset[currentRow] = json;
        // this.hotRegisterer.getInstance(this.tableId).loadData(this.detailset);
      }
    }
  };

  constructor(private hotRegisterer: HotTableRegisterer) { }

  ngOnInit() {
    this.generateHandsonTable();
  }

  generateHandsonTable() {
    this.detailset = this.response.demands;
    // column implementation
    const example = document.getElementById('example');
    const hot1 = new Handsontable(example, {
      data: this.detailset,
      colWidths: 100,
      width: '100%',
      height: 320,
      rowHeights: 23,
      rowHeaders: true,
      colHeaders: true,
      columns: [
        { title: 'Date', data: 'planDate', readOnly: true, type: 'numeric' },
        { title: 'Forecast', data: 'independentDemand', readOnly: false, type: 'numeric' },
        { title: 'Distribution', data: 'dependentDemand', readOnly: true, type: 'numeric' },
        { title: 'Total', data: 'totalDemand', readOnly: true, type: 'numeric' },
      ],
      afterChange: (change, source) => {
        if (change !== null) {
          //  let currentColumn = change[0][1];
          //  let newValue = Number(change[0][3]);
          //  this.detailset.forEach((element, index) => {
          //     if(element.hasOwnProperty(currentColumn)) {
          //       this.detailset[index][currentColumn] = newValue;
          //     }
          //  });
          //  hot1.loadData(this.detailset);
        }
      }
    });
  }

  updatePivotData(newValue, cell, currentRow) {
    const json = {};
    // tslint:disable-next-line:no-string-literal
    json['planDate'] = cell['planDate'];
    // tslint:disable-next-line:no-string-literal
    json['independentDemand'] = newValue;
    // this.detailset[currentRow] = json;
    //  this.hotRegisterer.getInstance(this.tableId).loadData(this.detailset);
  }

  updateData() {
    this.displayUpdatedData = true;
  }

  onBlurMethod(value, index, newValue) {
    const currentRow = index;
    const updatedValue = Number(newValue);
    // const json = {
    //   planDate:'01-01-2020', independentDemand: updatedValue, dependentDemand: 200, totalDemand: 500
    // }
    // this.detailset[currentRow] = json;
  }
}
