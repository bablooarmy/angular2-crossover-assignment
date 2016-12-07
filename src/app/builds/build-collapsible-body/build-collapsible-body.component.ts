import { Component, Input, OnInit } from '@angular/core';
import { Build } from '../shared/build';
import { ProgressBarData } from "../../progress-bar/shared/progressBarData";

@Component({
  selector: 'app-build-collapsible-body',
  templateUrl: './build-collapsible-body.component.html',
  styleUrls: ['./build-collapsible-body.component.css']
})
export class BuildCollapsibleBodyComponent implements OnInit {

  @Input() build: Build;
  private unitTestProgressBarData: ProgressBarData;
  private functionalTestProgressBarData: ProgressBarData;

  private metricsTestRotation: string;
  private metricsTestText: string;
  private metricsTestFillColor: string;
  private metricsTestStrokeColor: string;
  private metricsTestFont: string = "15px verdana";
  private metricsTestFontColor: string = "#FFFFFF";

  private metricsMaintainRotation: string;
  private metricsMaintainText: string;
  private metricsMaintainFillColor: string;
  private metricsMaintainStrokeColor: string;
  private metricsMaintainFont: string = "15px verdana";
  private metricsMaintainFontColor: string = "#FFFFFF";

  private metricsSecurityRotation: string;
  private metricsSecurityText: string;
  private metricsSecurityFillColor: string;
  private metricsSecurityStrokeColor: string;
  private metricsSecurityFont: string = "15px verdana";
  private metricsSecurityFontColor: string = "#000000";

  private metricsWorkmanRotation: string;
  private metricsWorkmanText: string;
  private metricsWorkmanFillColor: string;
  private metricsWorkmanStrokeColor: string;
  private metricsWorkmanFont: string = "15px verdana";
  private metricsWorkmanFontColor: string = "#000000";

  //unit test bindings
  private unitTestPieData;
  private unitTestPieLabels;
  private unitTestPieColors = ["#72AC4D", "#EB7D3B"];
  private unitTestPieStrokeColors = ["#CACACF", "#CACACF"];
  private unitTestData;

  //functional test bindings
  private functionalTestPieData;
  private functionalTestPieLabels;
  private functionalTestPieColors = ["#72AC4D", "#EB7D3B"];
  private functionalTestPieStrokeColors = ["#CACACF", "#CACACF"];
  private functionalTestData;

  private buildResultHeader:string;
  private buildResultBodySmall:string;
  private buildResultBodyLarge:string;
  private buildResultButtonLabel:string;
  private buildResultButtonIcon:string;

  constructor() { }

  getPieChartTestData(passed, failed, percent) {
    let total:number = passed + failed;
    let passedPercent:number = Math.floor((passed/total) * percent);
    let failedPercent:number = Math.floor((failed/total) * percent);
    let pieData:Array<number> = [passedPercent, failedPercent];
    return pieData;
  }

  ngOnInit() {
    if(this.build && this.build.unitTest && this.build.unitTest.coverage){
      this.unitTestProgressBarData = {'percent': this.build.unitTest.coverage, 'text': "code covered"};
    }

    if(this.build && this.build.functionalTest && this.build.functionalTest.coverage){
      this.functionalTestProgressBarData = {'percent': this.build.functionalTest.coverage, 'text': "code covered"};
    }

    this.metricsTestText = this.build.metrics.test + "";
    if(this.build.metrics.test > 50){
      this.metricsTestRotation = "upward";
      this.metricsTestFillColor = "#548039";
      this.metricsTestStrokeColor = "#548039";
    }
    else{
      this.metricsTestRotation = "downward";
      this.metricsTestFillColor = "#BE0712";
      this.metricsTestStrokeColor = "#BE0712";
    }

    this.metricsMaintainText = this.build.metrics.maintainability + "";
    if(this.build.metrics.maintainability > 50){
      this.metricsMaintainRotation = "upward";
      this.metricsMaintainFillColor = "#548039";
      this.metricsMaintainStrokeColor = "#548039";
    }
    else{
      this.metricsMaintainRotation = "downward";
      this.metricsMaintainFillColor = "#BE0712";
      this.metricsMaintainStrokeColor = "#BE0712";
    }

    this.metricsSecurityText = this.build.metrics.security + "";
    this.metricsSecurityRotation = "forward";
    this.metricsSecurityFillColor = "#FED86E";
    this.metricsSecurityStrokeColor = "#FED86E";

    this.metricsWorkmanText = this.build.metrics.workmanship + "";
    this.metricsWorkmanRotation = "forward";
    this.metricsWorkmanFillColor = "#FED86E";
    this.metricsWorkmanStrokeColor = "#FED86E";

    if(this.build.unitTest.passed && this.build.unitTest.failed){
      this.unitTestPieData = this.getPieChartTestData(this.build.unitTest.passed, this.build.unitTest.failed, 360);
      this.unitTestData = this.getPieChartTestData(this.build.unitTest.passed, this.build.unitTest.failed, 100);
      this.unitTestPieLabels = [this.build.unitTest.passed, this.build.unitTest.failed];
    }

    if(this.build.functionalTest.passed && this.build.functionalTest.failed){
      this.functionalTestPieData = this.getPieChartTestData(this.build.functionalTest.passed, this.build.functionalTest.failed, 360);
      this.functionalTestData = this.getPieChartTestData(this.build.functionalTest.passed, this.build.functionalTest.failed, 100);
      this.functionalTestPieLabels = [this.build.functionalTest.passed, this.build.functionalTest.failed];
    }

    switch(this.build.state){
      case 'Accepted':
        this.buildResultHeader = 'Result:';
        this.buildResultBodySmall = 'Change Accepted';
        this.buildResultBodyLarge = 'Auto-Merged';
        this.buildResultButtonIcon = 'search';
        this.buildResultButtonLabel = 'Merged Build';
      break;

      case 'Rejected':
        this.buildResultHeader = 'Result:';
        this.buildResultBodySmall = 'Change Rejected';
        this.buildResultBodyLarge = 'Metrics Reduction';
        this.buildResultButtonIcon = 'search';
        this.buildResultButtonLabel = 'Find Issues';
      break;

      case 'Complete':
        this.buildResultHeader = 'Result:';
        this.buildResultBodySmall = '';
        this.buildResultBodyLarge = 'Complete';
        this.buildResultButtonIcon = '';
        this.buildResultButtonLabel = 'Deploy';
      break;

      case 'Running':
        this.buildResultHeader = 'Result:';
        this.buildResultBodySmall = 'Change Running';
        this.buildResultBodyLarge = 'In Progress';
        this.buildResultButtonIcon = '';
        this.buildResultButtonLabel = 'Check Status';
      break;

      case 'Pending':
        this.buildResultHeader = 'Result:';
        this.buildResultBodySmall = '';
        this.buildResultBodyLarge = 'Pending';
        this.buildResultButtonIcon = '';
        this.buildResultButtonLabel = 'Initiate';
      break;

      default:
        this.buildResultHeader = 'Result:';
        this.buildResultBodySmall = 'Change Accepted';
        this.buildResultBodyLarge = 'Auto-Merged';
        this.buildResultButtonLabel = 'search';
        this.buildResultButtonIcon = 'Merged Build';
      break;
    }
  }

}
