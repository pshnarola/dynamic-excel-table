import { Component, OnInit } from '@angular/core';
import { PLAN_ROWS, tableDetails } from './plan-row.config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'basic-table';
    tableDetails = tableDetails;
    tableHeader = [];
    // keys: any;
    keys = [];
    tableData = [];
    planRowsConfig = PLAN_ROWS;
    headers = ['Key Figure'];
    editableCell = {};

    constructor() { }

    ngOnInit() {
        this.createTableJson();
    }

    createTableJson() {
        this.tableDetails.forEach(element => {
            const json = {
                header: element.columnName
            };
            this.tableHeader.push(json);
            this.headers.push(element.columnName);
        });

        this.tableDetails.forEach((element, index) => {
            if (index === 0) {
                Object.keys(element).forEach(key => {
                    if (Object.keys(element[key]).length !== 0 && key !== 'columnName') {
                        const json = {
                            key,
                            isBold: true,
                            isParent: true,
                            isChild: false
                        };
                        this.keys.push(json);
                        Object.keys(element[key]).forEach(childKey => {
                            const childJson = {
                                key: childKey,
                                isBold: false,
                                isParent: false,
                                isChild: true
                            };
                            this.keys.push(childJson);
                        });
                    } else {
                        const json = {
                            key,
                            isBold: true,
                            isParent: true,
                            isChild: false
                        };
                        this.keys.push(json);
                    }
                });
            }
        });

        this.tableDetails.forEach(details => {
            Object.keys(details).forEach(data => {
                this.keys.forEach(key => {
                    if (Object.keys(details[data]).length !== 0 && data !== 'columnName') {
                        Object.keys(details[data]).forEach(childKey => {
                            if (childKey === key.key) {
                                key['value' + details.columnName] = details[data][childKey]
                            }
                        });
                    } else {
                        if (data === key.key) {
                            key['value' + details.columnName] = details[data]
                        }
                    }
                });
            });
        });
    }

    makeEditable(rowConfig, rowIndex, index) {
        console.log('hello');
        this.editableCell = {};
        if (rowConfig.isEditable && index > 0) {
            this.editableCell[rowIndex + '_' + index] = true;
        }
    }
}
