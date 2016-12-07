import { Component, Input, OnInit } from '@angular/core';
import { ProgressBarData } from "./shared/progressBarData";

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  @Input('progressBarData') progressBarData:ProgressBarData = {'percent':0, 'text':''};

  constructor() { }

  ngOnInit() {

  }

}
