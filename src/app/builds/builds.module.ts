import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { BuildsComponent } from './builds.component';
import { BuildsService } from './shared/builds.service';
import { BuildCollapsibleHeaderComponent } from './build-collapsible-header/build-collapsible-header.component';
import { BuildCollapsibleBodyComponent } from './build-collapsible-body/build-collapsible-body.component';
import { BuildResultContainerComponent } from './build-result-container/build-result-container.component';
import { ProgressBarComponent } from "../progress-bar/progress-bar.component";
import { MetricsArrowComponent } from "../metrics-arrow/metrics-arrow.component";
import { MetricsPieChartComponent } from "../metrics-pie-chart/metrics-pie-chart.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    MaterializeModule
  ],
  declarations: [
    BuildsComponent,
    BuildCollapsibleHeaderComponent,
    BuildCollapsibleBodyComponent,
    BuildResultContainerComponent,
    ProgressBarComponent,
    MetricsArrowComponent,
    MetricsPieChartComponent
  ],
  exports: [
    BuildsComponent
  ],
  providers: [
    BuildsService
  ]
})
export class BuildsModule { }
