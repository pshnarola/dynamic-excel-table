import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  SpreadsheetComponent, CellEditEventArgs, PasteSpecialType,
  SortEventArgs, CellSaveEventArgs, SaveCompleteEventArgs, CellInfoEventArgs
} from '@syncfusion/ej2-angular-spreadsheet';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.scss']
})
export class ExcelComponent implements OnInit {
  @ViewChild('spreadsheetSync', { static: true }) spreadsheetObj: SpreadsheetComponent;
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
  errorMsg: any;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  created() {
    // this.spreadsheetObj.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:B1');
  }

  openSyncfusionTable(syncfusionContent) {
    this.modalService.open(syncfusionContent, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    }, (reason) => {
    });
  }

  beforeCellSave(args: CellEditEventArgs): void {
    const column = args.element.parentElement.firstChild.textContent;
    const value = args.value;
    // tslint:disable-next-line:no-string-literal
    const index = args.element.parentElement['rowIndex'];
    this.syncfusionData[index - 1].FORECAST = value;
  }

  actionComplete(args: SortEventArgs | CellSaveEventArgs | SaveCompleteEventArgs |
    PasteSpecialType | CellInfoEventArgs | CellEditEventArgs) {
  }

  getPasteData(event) {
    const pasteDetails = event.target.offsetParent.firstChild.ej2_instances[0].childSheets.children.first.propCollection.rows;
    console.log('paste details', pasteDetails);
    pasteDetails.forEach((element, index) => {
      if (index !== 0) {
        element.cells.forEach((cell, i) => {
          if (index <= this.syncfusionData.length) {
            if (i === 0 && cell.value !== this.syncfusionData[index - 1].PLANBUCKET) {
              this.errorMsg = 'Plan bucket is not as per required formate';
            } else if (i === 1) {
              this.syncfusionData[index - 1].FORECAST = cell.value;
            }
          } else {
            this.errorMsg = 'Extra Data has been Added Only ' + this.syncfusionData.length + 'Plan Buckets are available';
          }
          // if (index <= this.syncfusionData.length) {
          //   this.syncfusionData[index - 1].FORECAST = cell.value;
          // } else {
          //   this.errorMsg = 'Extra Forecast Data has been Added Only ' + this.syncfusionData.length + 'Plan Buckets are available';
          // }
        });
      }
    });
  }

  cellEdit(args: CellEditEventArgs): void {
    if (args.address.includes('A1') || args.address.includes('B1')) { args.cancel = true; }
  }

  getData(event) {
    console.log('open excel data', event);
  }

}
