import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PivotComponent } from './pivot/pivot.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HotTableModule } from '@handsontable/angular';
import { PivotViewModule } from '@syncfusion/ej2-angular-pivotview';
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet';
import { GraphComponent } from './graph/graph.component';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { GoogleChartsModule } from 'angular-google-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PivotComponent,
    ForecastComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HotTableModule.forRoot(),
    PivotViewModule,
    SpreadsheetAllModule,
    GanttModule,
    GoogleChartsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
