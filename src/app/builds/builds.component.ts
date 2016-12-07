import { Component, OnInit, AfterViewInit } from '@angular/core';
import {BuildsService} from "./shared/builds.service";
import {Build} from "./shared/build";
import { MaterializeDirective } from 'angular2-materialize';

@Component({
  selector: 'app-builds',
  templateUrl: './builds.component.html',
  styleUrls: ['./builds.component.css']
})
export class BuildsComponent implements OnInit, AfterViewInit {

  private builds: Build[] = [];

  constructor(private buildsService: BuildsService) { }

  ngOnInit() {
    this.buildsService.getBuilds()
      .subscribe(data => this.builds = data);
  }

  ngAfterViewInit() {
    console.log("after child view initialized");
  }

}
