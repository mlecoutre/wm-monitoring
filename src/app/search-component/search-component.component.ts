import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  search ={
    "nbElements": 200,
    "status":"",
    "correlationID": "",
    "functionalId": ""
  };


  constructor() { }

  ngOnInit() {
  }

  onReset(){
    console.log("Reset search panel: "+this.diagnostic());
    this.search ={
      "nbElements": 200,
      "status":"",
      "correlationID": "",
      "functionalId": ""
    };
  }

   // TODO: Remove this when we're done
  private diagnostic():string {
     return JSON.stringify(this.search); ;
  }

}
