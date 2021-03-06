import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Handsontable from 'handsontable';
import * as jexcel from 'jexcel';
import { SpreadsheetComponent, CellEditEventArgs } from '@syncfusion/ej2-angular-spreadsheet';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-forecast',
    templateUrl: './forecast.component.html',
    styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
    @ViewChild('spreadsheet', { static: true }) spreadsheet: ElementRef;
    @ViewChild('spreadsheetSync', { static: true })spreadsheetObj: SpreadsheetComponent;
    forecastData = [
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
        },
        {
            bucket: 'wk05',
            forecast: ''
        },
        {
            bucket: 'wk06',
            forecast: ''
        },
        {
            bucket: 'wk07',
            forecast: ''
        },
        {
            bucket: 'wk08',
            forecast: ''
        }
    ];
    syncfusionData = [
        {
            PLANBUCKET: 'wk01',
            FORECAST: ''
        },
        {
            PLANBUCKET: 'wk02',
            FORECAST: ''
        },
        {
            PLANBUCKET: 'wk03',
            FORECAST: ''
        },
        {
            PLANBUCKET: 'wk04',
            FORECAST: ''
        }
    ];
    hotSettings: Handsontable.GridSettings = {
        data: this.forecastData,
        colHeaders: true,
        rowHeaders: true,
        columns: [
            {
                data: 'bucket',
                title: 'PLANBUCKET',
                readOnly: true
            },
            {
                data: 'forecast',
                title: 'FORECAST',
                type: 'numeric'
            },
        ],
        maxRows: this.forecastData.length,
        cells: (row, column, prop) => {
            const cellProperties: any = {};
            // if (row === 0) {
            //     cellProperties.readOnly = true;
            // }
            return cellProperties;
        }
    };
    columnObj = [];
    allowUpdate = true;

    constructor(private modalService: NgbModal) { }

    ngOnInit() {
        this.columnObj = [
            { width: 100, name: 'bucket', title: 'PLANBUCKET', readOnly: true },
            { width: 100, name: 'forecast', title: 'FORECAST', type: 'numeric', decimal: ',' }
        ];

        jexcel(this.spreadsheet.nativeElement, {
            data: this.forecastData,
            columns: this.columnObj,
            minDimensions: [2, 2],
            totalRows: this.forecastData.length,
            contextMenu: false,
            updateTable: (el, cell, x, y, source, value, id,) => {
                // if (x == 1 && y == 0) {
                //     cell.classList.add('readonly');
                // }
            },
            onchange: (instance, cell, colIndex, rowIndex, value, oldValue) => {
                if (this.allowUpdate && this.columnObj[colIndex] && this.forecastData[rowIndex]) {
                    if (rowIndex < this.forecastData.length) {
                        const columnName = this.columnObj[colIndex].name;
                        this.forecastData[rowIndex][columnName] = value;
                    }
                }
            },
            onbeforeinsertrow: (rowIndex, colIndex, rowHeaders) => {
                this.allowUpdate = false;
                // return false;
            },
            onbeforepaste: (data, a, b, c) => {
                this.allowUpdate = true;
            }
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

    beforeCellSave(args: CellEditEventArgs): void {
        const column = args.element.parentElement.firstChild.textContent;
        const index = args.element['cellIndex'];
    }

    openCustomTable(customContent) {
        this.modalService.open(customContent, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        }, (reason) => {
        });
    }

    openHandsonTable(handsonContent) {
        this.modalService.open(handsonContent, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        }, (reason) => {
        });
    }

    openJexcelTable(jexcelContent) {
        this.modalService.open(jexcelContent, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        }, (reason) => {
        });
    }

    openSyncfusionTable(syncfusionContent) {
        this.modalService.open(syncfusionContent, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        }, (reason) => {
        });
    }
}
