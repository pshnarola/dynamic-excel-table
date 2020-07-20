import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {
  SpreadsheetComponent, CellEditEventArgs, PasteSpecialType,
  SortEventArgs, CellSaveEventArgs, SaveCompleteEventArgs, CellInfoEventArgs, CellStyleModel
} from '@syncfusion/ej2-angular-spreadsheet';
import * as jexcel from 'jexcel';

@Component({
  selector: 'app-excel',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.scss']
})
export class ExcelComponent implements OnInit {
  @ViewChild('spreadsheetSync', { static: true }) spreadsheetObj: SpreadsheetComponent;
  // @ViewChild('sheet', { static: false }) sheet: ElementRef;

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
  planDetails = [
    {
      PLANBUCKET: 'wk01',
      FORECAST: '',
      LOCATION: '',
      MATERIAL: ''
    },
    {
      PLANBUCKET: 'wk02',
      FORECAST: '',
      LOCATION: '',
      MATERIAL: ''
    },
    {
      PLANBUCKET: 'wk03',
      FORECAST: '',
      LOCATION: '',
      MATERIAL: ''
    },
    {
      PLANBUCKET: 'wk04',
      FORECAST: '',
      LOCATION: '',
      MATERIAL: ''
    }
  ];
  excelData = [
    {
      bucket: 'BUCKET',
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
  private modalRef: NgbModalRef;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
  }

  created() {
    //  this.spreadsheetObj.cellFormat({ fontWeight: 'bold', fontSize: '12pt' }, 'A1:B1');
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
    console.log('local uploaded data', args);
  }

  getPasteData(event) {
    console.log('paste', event);
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

  openSyncfusionSpreadSheet(syncfusionDetails) {
    this.modalService.open(syncfusionDetails, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    }, (reason) => {
    });
  }

  openCustomExcel(excelContent) {
    this.modalRef = this.modalService.open(excelContent);
    this.createExcel();
    this.modalRef.result.then((result) => {
    }, (reason) => {
    });
  }

  createExcel() {
    jexcel(document.getElementById('excel'), {
      data: this.excelData,
      minDimensions: [30, 20],
      columns: [
        { width: 200 },
        { width: 200 }
      ],
    });
  }

}
