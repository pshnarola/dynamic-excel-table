import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForecastComponent } from './forecast/forecast.component';
import { PivotComponent } from './pivot/pivot.component';
import { GraphComponent } from './graph/graph.component';


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
        path: 'gantt-chart',
        component: GraphComponent
    },
    {
        path: '',
        redirectTo: 'forecast',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
