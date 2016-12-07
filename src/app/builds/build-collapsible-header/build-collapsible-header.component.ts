import { Component, Input, OnInit } from '@angular/core';
import { Build } from '../shared/build';

@Component({
  selector: 'app-build-collapsible-header',
  templateUrl: './build-collapsible-header.component.html',
  styleUrls: ['./build-collapsible-header.component.css']
})
export class BuildCollapsibleHeaderComponent implements OnInit {

  @Input() build: Build;

  private iconToShow: String = "";

  constructor() { }

  ngOnInit() {
    if(this.build && this.build.state){
      switch(this.build.state){
        case 'Complete':
        case 'Pending':
          this.iconToShow = 'desktop_windows';
          break;
        case 'Running':
        case 'Rejected':
        case 'Accepted':
          this.iconToShow = 'line_style';
          break;
      }
    }
  }

}
