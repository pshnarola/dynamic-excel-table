import { Component, OnInit } from '@angular/core';
import Handsontable from 'handsontable';

@Component({
    selector: 'app-forecast',
    templateUrl: './forecast.component.html',
    styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

    forecastData = [
        {
            bucket: 'PLANBUCKET',
            forecast: 'FORECAST'
        },
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
    constructor() { }

    ngOnInit() {
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
