import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import Handsontable from 'handsontable';
import * as Chart from 'chart.js'
import "dhtmlx-gantt";
import { gantt } from 'dhtmlx-gantt';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  @ViewChild("gantt_here", {static: true}) ganttContainer: ElementRef;

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

  //syncfusion
  public data: Object[];
  public taskfield: Object;

  //google charts
  type = 'Timeline';
  googleChartData = [
    ['Firefox', 45, 100],
    ['IE', 26, 100],
    ['Chrome', 12, 100],
    ['Safari', 8, 100],
    ['Opera', 6, 100],
    ['Others', 0, 100]
  ];
  columnNames = ['Browser', 'Percentage', 'name'];
  options = {
  };
  width = 550;
  height = 400;
  timelineChartData: any;
  column = [];
  details = [];

  //chart.js
  canvas: any;
  ctx: any;

  //dhtmlx
  dhtmlxData = [];

  constructor() { }

  ngAfterViewInit() {

    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'horizontalBar',
      data: {
        labels: this.column,
        datasets: [{
          label: 'Pivot Data',
          data: this.details[16],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 99, 132, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,
        display: true
      }
    });
  }

  ngOnInit() {
    var example2 = document.getElementById('example2');

    var data = [
      {
        startDate: '1/5/2015',
        endDate: '1/20/2015',
        additionalData: { label: 'Opening Stock', quantity: '100' }
      },
      {
        startDate: '1/5/2015',
        endDate: '1/20/2015',
        additionalData: { label: 'Opening Stock 1', quantity: '200' }
      },
      {
        startDate: '1/11/2015',
        endDate: '1/29/2015',
        additionalData: { label: 'Demand Elements', quantity: '200' }
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
    this.chartDetails();
    this.angularGoogleCharts();
    this.dhtmlxChart();
  }

  dhtmlxChart() {
    gantt.init(this.ganttContainer.nativeElement);
    let data = [{ id: 1, text: "Task #1", start_date: "2017-04-15 00:00", duration: 3, progress: 0.6 },
    { id: 2, text: "Task #2", start_date: "2017-04-18 00:00", duration: 3, progress: 0.4 }
    ];
    gantt.parse({data});
  }

  chartDetails() {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Product Concept',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
          { TaskID: 2, TaskName: 'Defining the product and its usage', StartDate: new Date('04/02/2019'), Duration: 3, Progress: 30 },
          { TaskID: 3, TaskName: 'Defining target audience', StartDate: new Date('04/02/2019'), Duration: 3 },
          {
            TaskID: 4, TaskName: 'Prepare product sketch and notes', StartDate: new Date('04/02/2019'),
            Duration: 3, Predecessor: '2', Progress: 30
          },
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Concept Approval',
        StartDate: new Date('04/02/2019'),
        Duration: 0,
        Predecessor: '3,4'
      },
    ];
    this.taskfield = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      child: 'subtasks'
    };
  }

  angularGoogleCharts() {
    this.rowData.forEach(element => {
      let value = Object.keys(element)
      this.column = value;
    });
    const mappedToArray = this.rowData.map(d => Array.from(Object.values(d)))
    this.details = mappedToArray;
  }
}
