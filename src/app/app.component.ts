import { Component } from '@angular/core';
import { PLAN_ROWS } from './plan-row.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'basic-table';
  tableDetails: any;
  tableHeader = [];
  // keys: any;
  keys = [];
  tableData = [];
  planRowsConfig = PLAN_ROWS;
  headers = ['key'];
  editableCell = {};

  constructor() { }

  ngOnInit() {
    this.tableDetails = [
      {
        "columnName": "wk. 01",
        "openingStock": 100,
        "demandElements": {
          "forecast": 97,
          "salesOrder": 13
        },
        "totalCustomerDemandValue": 110,
        "totalCustomerDemand": {
          "distributionDemand": 57,
          "bomDemand": 0
        },
        "dependentDemand": 57,
        "totalDemand": 167,
        "supplyElements": {
          "plannedProductionReceipts": 0,
          "confirmedProductionReceipts": 100,
          "plannedDistributionReceipts": 0,
          "confirmedDistributionReceipts": 0
        },
        "totalReceipts": 100,
        "safetyStock": 484,
        "netRequirement": 700
      },
      {
        "columnName": "wk. 02",
        "openingStock": 100,
        "demandElements": {
          "forecast": 97,
          "salesOrder": 13
        },
        "totalCustomerDemandValue": 110,
        "totalCustomerDemand": {
          "distributionDemand": 57,
          "bomDemand": 0
        },
        "dependentDemand": 57,
        "totalDemand": 167,
        "supplyElements": {
          "plannedProductionReceipts": 0,
          "confirmedProductionReceipts": 100,
          "plannedDistributionReceipts": 0,
          "confirmedDistributionReceipts": 0
        },
        "totalReceipts": 100,
        "safetyStock": 484,
        "netRequirement": 700
      },
      {
        "columnName": "wk. 03",
        "openingStock": 100,
        "demandElements": {
          "forecast": 97,
          "salesOrder": 13
        },
        "totalCustomerDemandValue": 110,
        "totalCustomerDemand": {
          "distributionDemand": 57,
          "bomDemand": 0
        },
        "dependentDemand": 57,
        "totalDemand": 167,
        "supplyElements": {
          "plannedProductionReceipts": 0,
          "confirmedProductionReceipts": 100,
          "plannedDistributionReceipts": 0,
          "confirmedDistributionReceipts": 0
        },
        "totalReceipts": 100,
        "safetyStock": 484,
        "netRequirement": 700
      },
      {
        "columnName": "wk. 04",
        "openingStock": 100,
        "demandElements": {
          "forecast": 97,
          "salesOrder": 13
        },
        "totalCustomerDemandValue": 110,
        "totalCustomerDemand": {
          "distributionDemand": 57,
          "bomDemand": 0
        },
        "dependentDemand": 57,
        "totalDemand": 167,
        "supplyElements": {
          "plannedProductionReceipts": 0,
          "confirmedProductionReceipts": 100,
          "plannedDistributionReceipts": 0,
          "confirmedDistributionReceipts": 0
        },
        "totalReceipts": 100,
        "safetyStock": 484,
        "netRequirement": 700
      }
    ]
    this.createTableJson();
  }

  createTableJson() {
    console.log('table data-->', this.tableDetails)
    this.tableDetails.forEach(element => {
      const json = {}
      json['header'] = element.columnName
      this.tableHeader.push(json);
      this.headers.push(element.columnName);
    });

    this.tableDetails.forEach((element, index) => {
      if (index == 0) {
        Object.keys(element).forEach(key => {
          if (Object.keys(element[key]).length !== 0 && key !== 'columnName') {
            const json = {};
            json['key'] = key;
            json['isBold'] = true;
            json['isParent'] = true;
            json['isChild'] = false;
            this.keys.push(json)
            Object.keys(element[key]).forEach(child_key => {
              const json = {};
              json['key'] = child_key
              json['isBold'] = false;
              json['isParent'] = false;
              json['isChild'] = true;
              this.keys.push(json)
            });
          } else {
            const json = {};
            json['key'] = key;
            json['isBold'] = true;
            json['isParent'] = true;
            json['isChild'] = false;
            this.keys.push(json)
          }
        });
      }
    });

    this.tableDetails.forEach(details => {
      Object.keys(details).forEach(data => {
        this.keys.forEach(key => {
          if (Object.keys(details[data]).length !== 0 && data !== 'columnName') {
            Object.keys(details[data]).forEach(child_key => {
              if (child_key === key.key) {
                key['value' + details.columnName] = details[data][child_key]
              }
            });
          } else {
            if (data === key.key) {
              key['value' + details.columnName] = details[data]
            }
          }
        });
      })
    });
  }

  makeEditable(rowConfig, rowIndex, index) {
    this.editableCell = {};
    if (rowConfig.isEditable && index > 0) {
      this.editableCell[rowIndex + '_'+ index] = true;
    }
    console.log(this.editableCell);
  }

  onBlurMethod(){
    console.log('blur data-->', this.tableDetails)
   }
}
