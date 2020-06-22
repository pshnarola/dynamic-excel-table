import { Component, OnInit } from '@angular/core';
import Handsontable from 'handsontable';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  rowData = [
    {
      "rowHeader": "Opening Stock",
      "unit": "EA",
      "wk_01": 100,
      "wk_02": 100,
      "wk_03": 100,
      "wk_04": 100,
      "wk_05": 100,
      "wk_06": 100,
      "wk_07": 100,
      "wk_08": 800
    },
    {
      "rowHeader": "Demand Elements",
      "unit": "",
      "wk_01": "",
      "wk_02": "",
      "wk_03": "",
      "wk_04": "",
      "wk_05": "",
      "wk_06": "",
      "wk_07": "",
      "wk_08": ""
    },
    {
      "rowHeader": "Forecast",
      "unit": "EA",
      "wk_01": 97,
      "wk_02": 97,
      "wk_03": 97,
      "wk_04": 97,
      "wk_05": 97,
      "wk_06": 97,
      "wk_07": 97,
      "wk_08": 97
    },
    {
      "rowHeader": "Sales Order",
      "unit": "EA",
      "wk_01": 13,
      "wk_02": 13,
      "wk_03": 13,
      "wk_04": 13,
      "wk_05": 13,
      "wk_06": 13,
      "wk_07": 13,
      "wk_08": 13
    },
    {
      "rowHeader": "Total Customer Demand",
      "unit": "EA",
      "wk_01": 110,
      "wk_02": 110,
      "wk_03": 110,
      "wk_04": 110,
      "wk_05": 110,
      "wk_06": 110,
      "wk_07": 110,
      "wk_08": 110
    },
    {
      "rowHeader": "Distribution Demand",
      "unit": "EA",
      "wk_01": 57,
      "wk_02": 57,
      "wk_03": 57,
      "wk_04": 57,
      "wk_05": 57,
      "wk_06": 57,
      "wk_07": 57,
      "wk_08": 57
    },
    {
      "rowHeader": "Bom Demand",
      "unit": "EA",
      "wk_01": 0,
      "wk_02": 0,
      "wk_03": 0,
      "wk_04": 0,
      "wk_05": 0,
      "wk_06": 0,
      "wk_07": 0,
      "wk_08": 0
    },
    {
      "rowHeader": "Dependent Demand",
      "unit": "EA",
      "wk_01": 57,
      "wk_02": 57,
      "wk_03": 57,
      "wk_04": 57,
      "wk_05": 57,
      "wk_06": 57,
      "wk_07": 57,
      "wk_08": 57
    },
    {
      "rowHeader": "Total Demand",
      "unit": "EA",
      "wk_01": 167,
      "wk_02": 167,
      "wk_03": 167,
      "wk_04": 167,
      "wk_05": 167,
      "wk_06": 167,
      "wk_07": 167,
      "wk_08": 167
    },
    {
      "rowHeader": "Supply Elements",
      "unit": "",
      "wk_01": "",
      "wk_02": "",
      "wk_03": "",
      "wk_04": "",
      "wk_05": "",
      "wk_06": "",
      "wk_07": "",
      "wk_08": ""
    },
    {
      "rowHeader": "Planned Production Receipts",
      "unit": "EA",
      "wk_01": 0,
      "wk_02": 0,
      "wk_03": 0,
      "wk_04": 0,
      "wk_05": 0,
      "wk_06": 0,
      "wk_07": 0,
      "wk_08": 0
    },
    {
      "rowHeader": "Confirmed Production Receipts",
      "unit": "EA",
      "wk_01": 100,
      "wk_02": 100,
      "wk_03": 100,
      "wk_04": 100,
      "wk_05": 100,
      "wk_06": 100,
      "wk_07": 100,
      "wk_08": 100
    },
    {
      "rowHeader": "Planned Distribution Receipts",
      "unit": "EA",
      "wk_01": 0,
      "wk_02": 0,
      "wk_03": 0,
      "wk_04": 0,
      "wk_05": 0,
      "wk_06": 0,
      "wk_07": 0,
      "wk_08": 0
    },
    {
      "rowHeader": "Confirmed Distribution Receipts",
      "unit": "EA",
      "wk_01": 0,
      "wk_02": 0,
      "wk_03": 0,
      "wk_04": 0,
      "wk_05": 0,
      "wk_06": 0,
      "wk_07": 0,
      "wk_08": 0
    },
    {
      "rowHeader": "Total Receipts",
      "unit": "EA",
      "wk_01": 100,
      "wk_02": 100,
      "wk_03": 100,
      "wk_04": 100,
      "wk_05": 100,
      "wk_06": 100,
      "wk_07": 100,
      "wk_08": 100
    },
    {
      "rowHeader": "Safety Stock",
      "unit": "EA",
      "wk_01": 484,
      "wk_02": 484,
      "wk_03": 484,
      "wk_04": 484,
      "wk_05": 484,
      "wk_06": 484,
      "wk_07": 484,
      "wk_08": 484
    },
    {
      "rowHeader": "Net Requirement",
      "unit": "EA",
      "wk_01": 700,
      "wk_02": 700,
      "wk_03": 700,
      "wk_04": 700,
      "wk_05": 700,
      "wk_06": 700,
      "wk_07": 700,
      "wk_08": 700
    }
  ]

  columnData = [
    {
      "key": "rowHeader",
      "data": "rowHeader",
      "title": "Key Figure",
      "isBold": true,
      "textAlign": "left",
      "isEditable": false
    },
    {
      "key": "unit",
      "data": "unit",
      "title": "Unit",
      "isBold": true,
      "textAlign": "left",
      "isEditable": false
    },
    {
      "key": "wk_01",
      "data": "wk_01",
      "title": "Week 01",
      "textAlign": "right",
      "isEditable": true
    },
    {
      "key": "wk_02",
      "data": "wk_02",
      "title": "Week 02",
      "textAlign": "right",
      "isEditable": true
    },
    {
      "key": "wk_03",
      "data": "wk_03",
      "title": "Week 03",
      "textAlign": "right",
      "isEditable": true
    },
    {
      "key": "wk_04",
      "data": "wk_04",
      "title": "Week 04",
      "textAlign": "right",
      "isEditable": true
    },
    {
      "key": "wk_05",
      "data": "wk_05",
      "title": "Week 05",
      "textAlign": "right",
      "isEditable": true
    },
    {
      "key": "wk_06",
      "data": "wk_06",
      "title": "Week 06",
      "textAlign": "right",
      "isEditable": true
    },
    {
      "key": "wk_07",
      "data": "wk_07",
      "title": "Week 07",
      "textAlign": "right",
      "isEditable": true
    },
    {
      "key": "wk_08",
      "data": "wk_08",
      "title": "Week 08",
      "textAlign": "right",
      "isEditable": true
    }
  ]

  constructor() { }


  ngOnInit() {
    console.log('---', this.rowData)  
    console.log('---', this.columnData)
    var example2 = document.getElementById('example2');

    var data = [
      {
        startDate: '1/5/2015',
        endDate: '1/20/2015',
        additionalData: {label: 'Opening Stock', quantity: '100'}
      },
      {
        startDate: '1/5/2015',
        endDate: '1/20/2015',
        additionalData: {label: 'Opening Stock 1', quantity: '200'}
      },
      {
        startDate: '1/11/2015',
        endDate: '1/29/2015',
        additionalData: {label: 'Demand Elements', quantity: '200'}
      }
    ];
    var hot2 = new Handsontable(example2, {
      data: [],
      hiddenColumns: true,
      colHeaders: true,
      ganttChart: {
        dataSource: data, // an object, containing information about the data source (see below)
        firstWeekDay: 'monday', // sets the first day of the week to either 'monday' or 'sunday'
        startYear: 2015 // sets the displayed year to the provided value
      },
      width: '100%',
      height: 255
    });

  }

}
