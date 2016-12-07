import {Metrics} from './metrics';
import {Release} from './release';
import {UnitTest} from './unitTest';
import {FunctionalTest} from './functionalTest';

export class Build {
  id: number;
  name: string;
  userName: string;
  timestarted: string;
  state: string;
  metrics: Metrics = new Metrics();
  release: Release = new Release();
  unitTest: UnitTest = new UnitTest();
  functionalTest: FunctionalTest = new FunctionalTest();
}
