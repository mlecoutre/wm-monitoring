import { Injectable } from '@angular/core';
import * as modelp from '../processes-component/processes-model';
import {PROCESSES} from '../mocks/ProcessesMock';

@Injectable()
export class ProcessesService {

  constructor() { }

    getProcesses(){
     console.log("getPlatforms");
     return Promise.resolve(PROCESSES);
  }

}
