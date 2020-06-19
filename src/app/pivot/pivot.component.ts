import { Component, OnInit } from '@angular/core';
import { PLAN_ROWS, PLAN_COLUMNS, unitRes, tableDetails, rowHeader } from '../plan-row.config';
import Handsontable from 'handsontable';
import { resolve } from 'url';

@Component({
    selector: 'app-pivot',
    templateUrl: './pivot.component.html',
    styleUrls: ['./pivot.component.scss']
})
export class PivotComponent implements OnInit {
    tableDetails: any = tableDetails;
    planRowsConfig = PLAN_ROWS;
    columnConfig = JSON.parse(JSON.stringify(PLAN_COLUMNS));
    editableCell = {};
    editableRows = [];
    columnIndexAPI = {};

    //handson
    columns = [];
    dataset = [];
    hotSettings: Handsontable.GridSettings = {
        colHeaders: true,
        rowHeaders: false,
        selectionMode: 'single',
        cells: (row, column, prop) => {
            const cellProperties: any = {};
            console.log(this.editableRows);
            if (this.editableRows.indexOf(row) > -1 && column > 1) {
                console.log('Helllo');
                cellProperties.readOnly = false;
            }
            return cellProperties;
        }
    };
    constructor() { }

    ngOnInit() {
        this.tableDetails.unshift(unitRes);
        this.tableDetails.forEach((element, index) => {
            this.columnIndexAPI[element[this.columnConfig.columnIdentifier]] = index;
        });
        this.generateHandsonTable();
    }

    async generateHandsonTable() {
        this.columns = [];
        this.columnConfig.columns.forEach(element => {
            this.columns.push({ data: element.key, text: element.key, title: element.text, readOnly: true })
        });
        this.dataset = [];
        await this.createeDataSet();
    }

    createeDataSet() {
        this.editableRows = [];
        return new Promise((resolve, reject) => {
            this.planRowsConfig.forEach((row, index) => {
                if (row.isEditable) {
                    this.editableRows.push(index);
                }
                const rowObj: any = {};
                this.columnConfig.columns.forEach(column => {

                    if (column.key === 'rowHeader') {
                        rowObj[column.key] = row.text;
                    } else {
                        const recordIndex = this.columnIndexAPI[column.key];
                        rowObj[column.key] = '';
                        if (!row.noValue) {
                            if (!row.isChild) {
                                rowObj[column.key] = this.tableDetails[recordIndex][row.key];
                            } else {
                                rowObj[column.key] = this.tableDetails[recordIndex][row.parent][row.key];
                            }
                        }
                    }
                });
                this.dataset.push(rowObj);
            });
            resolve();
        });
    }

    makeEditable(rowConfig, columnConfig, rowIndex, index) {
        this.editableCell = {};
        if (rowConfig.isEditable && columnConfig.isEditable) {
            this.editableCell[rowIndex + '_' + index] = true;
        }
    }

    onBlurMethod(rowIndex, index) {
        this.editableCell[rowIndex + '_' + index] = false;
    }

}
