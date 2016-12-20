import { Component, OnInit } from '@angular/core';
import {PlatformsService} from '../services/platforms.service'
import * as model from '../model/model'

@Component({
  selector: 'app-flow-selector-component',
  templateUrl: './flow-selector-component.component.html',
  styleUrls: ['./flow-selector-component.component.css']
})
export class FlowSelectorComponentComponent implements OnInit {

  platforms: model.Platform[];

  selectedPlatform: model.Platform ;
  selectedDomain: model.Domain;
  selectedPE: model.Pe;
  selectedMd: model.Flux;


  constructor(
    private platformsService: PlatformsService
  ) {
    console.log('FlowSelectorComponentComponent construct');

   }

   /**
    * Call platformsService
    */
  ngOnInit() {
    console.log("Init Flow-selector-component");
    this.platformsService.getPlatforms()
      .then(ro => this.platforms =  ro.platform);
  }

  onPlatformSelected(pf: model.Platform){
    console.log("selectedPlaform: "+ pf.name);
    this.selectedPlatform = pf;
  }

  onDomainSelected(d: model.Domain){
    console.log("selectedDomain: "+ d.name);
    this.selectedDomain = d;
  }

  onPeSelected(p: model.Pe){
    console.log("selectedPE: "+ p.name);
    this.selectedPE = p;
  }

  onFlowSelected(f: model.Flux){
    console.log("selectedFlux: "+ f.name);
    this.selectedMd = f;
  }

}
