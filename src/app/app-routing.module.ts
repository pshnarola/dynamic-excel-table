import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForecastComponent } from './forecast/forecast.component';
import { PivotComponent } from './pivot/pivot.component';
import { GraphComponent } from './graph/graph.component';
import { PlanviewComponent } from './planview/planview.component';
import { SpreadsheetDataSampleComponent } from './forecast/datasample.component';
import { PlanviewAlternativeComponent } from './planview-alternative/planview-alternative.component';
import { ExcelComponent } from './excel/excel.component';


const routes: Routes = [
    {
        path: 'forecast',
        component: ForecastComponent
    },
    {
        path: 'pivot',
        component: PivotComponent
    },
    {
        path: 'plan-view-approach-1',
        component: PlanviewComponent
    },
    {
        path: 'plan-view-approach-2',
        component: PlanviewAlternativeComponent
    },
    {
        path: 'gantt-chart',
        component: GraphComponent
    },
    {
        path: 'dhx-forecast',
        component: SpreadsheetDataSampleComponent
    },
    {
        path: 'excel',
        component: ExcelComponent
    },
    {
        path: '',
        redirectTo: 'excel',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
