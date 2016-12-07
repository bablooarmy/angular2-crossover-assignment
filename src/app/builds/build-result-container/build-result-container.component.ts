import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-build-result-container',
  templateUrl: './build-result-container.component.html',
  styleUrls: ['./build-result-container.component.css']
})
export class BuildResultContainerComponent implements OnInit {

  @Input('header') header: string = "Result:";
  @Input('bodySmall') bodySmall: string = "Change Accepted";
  @Input('bodyLarge') bodyLarge: string = "Auto Merge";
  @Input('buttonLabel') buttonLabel: string = "Merge Build";
  @Input('buttonIcon') buttonIcon: string = "search";

  constructor() { }

  ngOnInit() {
  }

}
