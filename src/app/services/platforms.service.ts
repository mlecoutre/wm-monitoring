import { Injectable } from '@angular/core';
import * as model from '../model/model';
import {PLATFORMS} from '../mocks/PlatformsMock'

@Injectable()
export class PlatformsService {

  constructor() { }

  getPlatforms(){
     console.log("getPlatforms");
     return Promise.resolve(PLATFORMS);
  }

}
