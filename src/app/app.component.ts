
import { Component, OnInit } from '@angular/core';
import * as model from './model/model'
import {PlatformsService} from './services/platforms.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PlatformsService]
})
export class AppComponent implements OnInit {
 

  ngOnInit() {
    console.log("init APP!");
  } 

/**************
 *  Retrieve events from Flow Selector panel
 **************/ 

  onPlatformName(platformName: string){
    console.log("AppComponent: get event onPlatformName :"+platformName);
  }

  onDomainName(domainName: string){
    console.log("AppComponent: get event onDomainName :"+domainName);
  }

  onPeName(peName: string){
    console.log("AppComponent: get event onPeName :"+peName);
  }

  onFlowName(flowName: string){
    console.log("AppComponent: get event onFlowName :"+flowName);
  }

}
