import { Component, ElementRef, Input, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Spreadsheet } from 'dhx-spreadsheet';

@Component({
    selector: 'app-spreadsheet',
    template: `<div #widget class='widget-box-wide'></div>`
})
export class SpreadsheetComponent implements OnInit, OnDestroy {
    @ViewChild('widget', { static: true }) container: ElementRef;
    spreadsheet: Spreadsheet;

    ngOnInit() {
        this.spreadsheet = new Spreadsheet(this.container.nativeElement, {
            toolbarBlocks: [],
            toolbar: [],
            menu: false,
            editLine: false,
            rowsCount: 10,
            colsCount: 2,
        });

        this.spreadsheet.events.on("afterValueChange", (cell, value) => {
            console.log(`Value in cell ${cell} changed to ${value}`);
            // this.cd.detectChanges();
        });
        this.spreadsheet.parse([
            { cell: "A1", value: 1000 },
            { cell: "B1", value: 5300 }
        ]);

        this.spreadsheet.event.attachEvent("onEditCell", function(stage, id, index){
            console.log('id', id);
            console.log('stage', stage)
            if (id == 1) return false; //block edit operations
            return true; 
       });
        this.spreadsheet.setStyle("A1", { background: "#F4D679" });
    }

    ngOnDestroy() {
        this.spreadsheet.destructor();
    }
}
