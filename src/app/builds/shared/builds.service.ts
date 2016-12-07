import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class BuildsService {

  private url: string = "./changelist.json";

  constructor(private http: Http) { }

  getBuilds(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getBuild(id){
    return this.http.get(this.getBuildUrl(id))
      .map(res => res.json());
  }

  addBuild(build){
    return this.http.post(this.url, JSON.stringify(build))
      .map(res => res.json());
  }

  updateBuild(build){
    return this.http.put(this.getBuildUrl(build.id), JSON.stringify(build))
      .map(res => res.json());
  }

  deleteBuild(id){
    return this.http.delete(this.getBuildUrl(id))
      .map(res => res.json());
  }

  private getBuildUrl(id){
    return this.url + "/" + id;
  }
}
