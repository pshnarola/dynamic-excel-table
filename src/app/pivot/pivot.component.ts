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

    // handson
    columns = [];
    dataset = [];
    hotSettings: Handsontable.GridSettings = {
        colHeaders: true,
        rowHeaders: false,
        selectionMode: 'single',
        colWidths: (index) => {
            if (index === 0) {
                return '350px';
            }
            return '100px';
        },
        autoColumnSize: false,
        cells: (row, column, prop) => {
            const cellProperties: any = {};
            // cellProperties.renderer = this.firstRowRenderer; // uses function directly
            cellProperties.renderer = function (instance, td, row, col, prop, value, cellProperties) {
                Handsontable.renderers.TextRenderer.apply(this, arguments);
                td.style.textAlign = PLAN_COLUMNS.columns[col].textAlign;
                if (column < 2) {
                    const rowConfig = PLAN_ROWS[row];
                    if (rowConfig.isBold) {
                        td.style.fontWeight = 'bold';
                    }
                    if (rowConfig.isChild && column === 0) {
                        td.style.paddingLeft = '20px';
                    }
                }
            };
            cellProperties.readOnly = true;
            if (this.editableRows.indexOf(row) > -1 && column > 1) {
                cellProperties.readOnly = false;
                cellProperties.type = 'numeric';
                cellProperties.allowEmpty = false;
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
        this.columns = this.columnConfig.columns;
        // this.columnConfig.columns.forEach(element => {
        //     this.columns.push({ data: element.key, title: element.title, readOnly: true });
        // });
        this.dataset = [];
        await this.createeDataSet();
    }

    createeDataSet() {
        this.editableRows = [];
        return new Promise((resolve, reject) => {
            try {
                this.planRowsConfig.forEach((row, index) => {
                    if (row.isEditable) {
                        this.editableRows.push(index);
                    }
                    const rowObj: any = {};
                    this.columnConfig.columns.forEach(column => {
                        if (column.key === 'rowHeader') {
                            rowObj[column.key] = row.title;
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
                resolve(true);
            } catch (error) {
                resolve(false);
            }
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

    firstRowRenderer(instance, td, row, col, prop, value, cellProperties) {
        Handsontable.renderers.TextRenderer.apply(this, arguments);
        td.style.fontWeight = 'bold';
        td.style.color = 'green';
        td.style.background = '#CEC';
    }

}
