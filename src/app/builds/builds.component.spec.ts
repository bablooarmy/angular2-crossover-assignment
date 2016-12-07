/* tslint:disable:no-unused-variable */

import { TestBed, inject, async } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions } from '@angular/http';
import { BuildsComponent } from './builds.component';
import { BuildsService } from './shared/builds.service';


describe('Component: Builds', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BuildsService,

        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ],
      imports: [
        HttpModule
      ]
    });
  });
  it('should construct', async(inject(
    [BuildsService, MockBackend], (buildsService, mockBackend) => {
    expect(buildsService).toBeDefined();
  })));
  it('should create an instance', async(inject(
    [BuildsService, MockBackend], (buildsService, mockBackend) => {
    let component = new BuildsComponent(buildsService);
    expect(component).toBeTruthy();
  })));
});
