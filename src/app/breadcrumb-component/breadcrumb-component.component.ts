import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb-component',
  templateUrl: './breadcrumb-component.component.html',
  styleUrls: ['./breadcrumb-component.component.css']
})
export class BreadcrumbComponentComponent implements OnInit {


selector = {
  "platform": "ESB_OPE",
  "domain": "ALISE",
  "pe": "PE46",
  "md": "MD320"
};

  constructor() { }

  ngOnInit() {
  }


  onReloadBreadcrumb(){
    console.log("onReloadBreadcrumb");
    this.selector.pe="PE94";
  }

}
