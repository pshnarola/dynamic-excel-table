import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Handsontable from 'handsontable';
import * as jexcel from "jexcel";

@Component({
    selector: 'app-forecast',
    templateUrl: './forecast.component.html',
    styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
    @ViewChild("spreadsheet", { static: true }) spreadsheet: ElementRef;
    forecastData = [
        // {
        //     bucket: 'PLANBUCKET',
        //     forecast: 'FORECAST'
        // },
        {
            bucket: 'wk01',
            forecast: ''
        },
        {
            bucket: 'wk02',
            forecast: ''
        },
        {
            bucket: 'wk03',
            forecast: ''
        },
        {
            bucket: 'wk04',
            forecast: ''
        }
    ];
    hotSettings: Handsontable.GridSettings = {
        data: this.forecastData,
        colHeaders: true,
        rowHeaders: true,
        columns: [
            {
                data: 'bucket',
                readOnly: true
            },
            {
                data: 'forecast',
                type: 'numeric'
            },
        ],
        maxRows: this.forecastData.length,
        cells: (row, column, prop) => {
            const cellProperties: any = {};
            if (row === 0) {
                cellProperties.readOnly = true;
            }
            return cellProperties;
        }
    };
    columnObj = [];

    constructor() { }

    ngOnInit() {
        this.columnObj = [
            { width: 100, name: 'bucket', title: 'Bucket', readOnly: true },
            { width: 100, name: 'forecast', title: 'Forecast', type: 'numeric', decimal: ',' }
        ];

        jexcel(this.spreadsheet.nativeElement, {
            data: this.forecastData,
            columns: this.columnObj,
            minDimensions: [2, 2],
            totalRows: this.forecastData.length,
            contextMenu: false,
            updateTable: function (el, cell, x, y, source, value, id, ) {
                // if (x == 1 && y == 0) {
                //     cell.classList.add('readonly');
                // }
            },
            onchange: (instance, cell, colIndex, rowIndex, value, oldValue) => {
                if (this.columnObj[colIndex] && this.forecastData[rowIndex]) {
                    if (rowIndex < this.forecastData.length) {
                        console.log('rowIndex = ', value);
                        const columnName = this.columnObj[colIndex].name;
                        this.forecastData[rowIndex][columnName] = value;
                    }
                }
            },
            onbeforeinsertrow: function (rowIndex, colIndex, rowHeaders) {
                // console.log('length', this.forecastData.length)
            },
        });
    }

    onPaste(event: ClipboardEvent, index) {
        const temp = JSON.parse(JSON.stringify(this.forecastData));
        this.forecastData = [];
        const clipboardData = event.clipboardData || (window as any).clipboardData;
        const pastedText = clipboardData.getData('text');
        const textArr = pastedText.split(/\s+/);
        let textIndex = 0;
        const totalRows = this.forecastData.length;
        temp.forEach((element, rowIndex) => {
            if (rowIndex >= index) {
                element.forecast = textArr[textIndex];
                textIndex++;
            }
            this.forecastData.push(element);
        });
    }
}
