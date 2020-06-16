import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PivotComponent } from './pivot/pivot.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HotTableModule } from '@handsontable/angular';

@NgModule({
  declarations: [
    AppComponent,
    PivotComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HotTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
