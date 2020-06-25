import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-data-sample',
    template: `
<div class='app-box'>
  <p>Data and events</p>
  <app-spreadsheet #spreadsheet class='wide-size'></app-spreadsheet>
  <hr>
  <div class='line'>
    {{event}}
  </div>
  <div class='line'>
    <input type="button" (click)="parseData()" value="Parse data">
    <input type="button" (click)="clearAll()" value="Clear all">
  </div>
</div>`
})
export class SpreadsheetDataSampleComponent {
    event: string;
    constructor(private cd: ChangeDetectorRef) {
    }
    
    // parseData() {
    //     this.spreadsheet.spreadsheet.parse([
    //         { cell: "A1", value: 1000 },
    //         { cell: "B1", value: 5300 },
    //         { cell: "C1", value: 2900 },
    //     ]);
    // }

    // ngOnDestroy() {
    //     this.spreadsheet.destructor();
    // }
}
