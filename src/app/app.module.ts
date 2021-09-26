import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider'
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import { HomeComponent } from './views/home/home.component';
import { StatsComponent } from './views/stats/stats.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BarComponent } from './components/chart/bar/bar.component';
import { ChartsModule } from 'ng2-charts';
import { PieComponent } from './components/chart/pie/pie.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatsComponent,
    ToolbarComponent,
    BarComponent,
    PieComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ChartsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
