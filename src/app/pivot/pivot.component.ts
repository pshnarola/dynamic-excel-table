import { Component, OnInit } from '@angular/core';
import { PLAN_ROWS, PLAN_COLUMNS, unitRes, tableDetails, rowHeader } from '../plan-row.config';
import Handsontable from 'handsontable';
import { HotTableRegisterer } from '@handsontable/angular';

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
            cellProperties.renderer = function (instance, td, rowIndex, colIndex, property, value) {
                Handsontable.renderers.TextRenderer.apply(this, arguments);
                const rowConfig = PLAN_ROWS[rowIndex];
                const columnConfig = PLAN_COLUMNS.columns[colIndex];
                td.style.textAlign = columnConfig.textAlign;
                if (rowConfig.isBold && columnConfig.isBold) {
                    td.style.fontWeight = 'bold';
                }
                if (rowConfig.isChild && column === 0) {
                    td.style.paddingLeft = '20px';
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

    //handson update implemetation
    displayUpdatedData = false;
    detailset = [];
    tableId = 'updateTable';

    updateSettings: Handsontable.GridSettings = {
        colHeaders: true,
        rowHeaders: true,
        selectionMode: 'single',
        autoColumnSize: false,
        cells: (row, column, prop) => {
            const cellProperties: any = {};
            cellProperties.renderer = function (instance, td, rowIndex, colIndex, property, value) {
                Handsontable.renderers.TextRenderer.apply(this, arguments);
            };
            return cellProperties;
        },
        afterChange: (change, source) => {
            this.saveUpdatedData();
        }
    };

    constructor(
        private hotRegisterer: HotTableRegisterer
    ) { }

    ngOnInit() {
        this.tableDetails.unshift(unitRes);
        this.tableDetails.forEach((element, index) => {
            this.columnIndexAPI[element[this.columnConfig.columnIdentifier]] = index;
        });
        this.detailset = this.getNewDataSet();
        this.generateHandsonTable();
    }

    getNewDataSet() {
        return [
            {
                a_value: Math.floor(Math.random() * (999 - 100 + 1) + 100),
                b_value: Math.floor(Math.random() * (999 - 100 + 1) + 100),
                c_value: Math.floor(Math.random() * (999 - 100 + 1) + 100)
            },
            {
                a_value: Math.floor(Math.random() * (999 - 100 + 1) + 100),
                b_value: Math.floor(Math.random() * (999 - 100 + 1) + 100),
                c_value: Math.floor(Math.random() * (999 - 100 + 1) + 100)
            }
        ];
    }

    updateDataSet() {
        this.detailset = this.getNewDataSet();
        // this.hotRegisterer.getInstance(this.tableId).loadData();
    }

    async generateHandsonTable() {
        this.columns = this.columnConfig.columns;
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

    saveUpdate() {
        this.displayUpdatedData = true;
    }

    saveUpdatedData() {

    }
}
