import { Component, OnInit } from '@angular/core';
import { PLAN_ROWS, PLAN_COLUMNS, unitRes, tableDetails } from './plan-row.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'basic-table';
  tableDetails: any = tableDetails;
  planRowsConfig = PLAN_ROWS;
  columnConfig = JSON.parse(JSON.stringify(PLAN_COLUMNS));
  editableCell = {};
  columnIndexAPI = {};

  constructor() { }

  ngOnInit() {
    this.tableDetails.unshift(unitRes);
    this.tableDetails.forEach((element, index) => {
      this.columnIndexAPI[element[this.columnConfig.columnIdentifier]] = index;
    });
  }

  makeEditable(rowConfig, columnConfig, rowIndex, index) {
    console.log('hello');
    this.editableCell = {};
    if (rowConfig.isEditable && columnConfig.isEditable) {
      this.editableCell[rowIndex + '_' + index] = true;
    }
  }

  onBlurMethod( rowIndex, index) {
    this.editableCell[rowIndex + '_' + index] = false;
    console.log('blur data-->', this.tableDetails)
  }
}
