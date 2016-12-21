import { Component,  Input, Output, EventEmitter  } from '@angular/core';
import * as model from '../model/model'

@Component({
  selector: 'app-breadcrumb-component',
  templateUrl: './breadcrumb-component.component.html',
  styleUrls: ['./breadcrumb-component.component.css']
})
export class BreadcrumbComponentComponent  {

  // Linked to the selector in the AppComponent
selector: model.Selector = new  model.Selector() ;

@Input()
set platformName(platformName: string) {
    console.log("breadcrumb - Set platformName :"+ platformName);
    this.selector.platformName = platformName;
}

get platformName(): string { return this.selector.platformName; }

@Input()
set domainName(domainName: string) {
    console.log("breadcrumb - Set domaineName :"+ domainName);
    this.selector.domainName = domainName;
}
get domainName(): string { return this.selector.domainName; }


@Input()
set flowName(flowName: string) {
    console.log("breadcrumb - Set flowName :"+ flowName);
    this.selector.flowName= flowName;
}
get flowName(): string { return   this.selector.flowName; }

@Input()
set peName(peName: string) {
    console.log("breadcrumb - Set peName :"+ peName);
    this.selector.peName = peName;
}
get peName(): string { return   this.selector.peName; }




  // Send an event to the AppComponent
  @Output() onReloadBreadcrumbRequest = new EventEmitter<boolean>();

  constructor() { }

  onReloadBreadcrumb(){
    console.log("onReloadBreadcrumb");
    this.selector.platformName = null;
    this.selector.domainName = null;
    this.selector.peName = null;
    this.selector.flowName = null;

    //  @TODO send an event to the parent component
  }


}
