
import { Component, OnInit } from '@angular/core';
import * as model from './model/model'
import {PlatformsService} from './services/platforms.service'
import * as breadcrumbEvent from './breadcrumb-component/breadcrumb-event'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PlatformsService]
})
export class AppComponent implements OnInit {
 
  //These fields are binded to the breadcrumb
  platformName: string ="";
  domainName: string="";
  peName: string="";
  flowName: string="";

  breadcrumbEvent: breadcrumbEvent.EventType;

  ngOnInit() {
    console.log("init APP!");
  } 

/********************************************
 *  Retrieve events from Flow Selector panel
 ********************************************/ 
  onPlatformName(platformName: string){
    console.log("AppComponent: get event onPlatformName :"+platformName);
    this.platformName = platformName;
  }

  onDomainName(domainName: string){
    console.log("AppComponent: get event onDomainName :"+domainName);
    this.domainName = domainName;
  }

  onPeName(peName: string){
    console.log("AppComponent: get event onPeName :"+peName);
    this.peName = peName;
  }

  onFlowName(flowName: string){
    console.log("AppComponent: get event onFlowName :"+flowName);
    this.flowName = flowName;
  }

/********************************************
 *  Retrieve events from BreadCrumb panel
 ********************************************/ 
  onBreadcrumbEvent(breadcrumbEvent: breadcrumbEvent.EventType){
    console.log("AppComponent: get event on BreadCrumb "+ JSON.stringify(breadcrumbEvent));
    this.breadcrumbEvent = breadcrumbEvent;
  }
}
