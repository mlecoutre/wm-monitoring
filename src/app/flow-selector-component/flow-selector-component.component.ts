import { Component, OnInit,  EventEmitter, Input, Output} from '@angular/core';
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

  /**
   * Emission d'event vers le composant parent (AppComponent) 
   */
  @Output() onPlatformName = new EventEmitter<string>();
  @Output() onDomainName = new EventEmitter<string>();
  @Output() onPeName = new EventEmitter<string>();
  @Output() onFlowName = new EventEmitter<string>();

  constructor( private platformsService: PlatformsService ) {
    console.log('FlowSelectorComponentComponent construct');
   }

   /**
    * Call platformsService during the init phase.
    */
  ngOnInit() {
    console.log("Init Flow-selector-component");
    this.platformsService.getPlatforms()
      .then(ro => this.platforms =  ro.platform);
  }

  onPlatformSelected(pf: model.Platform){
    console.log("selectedPlaform: "+ pf.name);
    this.onPlatformName.emit(pf.name);
    this.selectedPlatform = pf;
  }

  onDomainSelected(d: model.Domain){
    console.log("selectedDomain: "+ d.name);
    this.onDomainName.emit(d.name);
    this.selectedDomain = d;
  }

  onPeSelected(p: model.Pe){
    console.log("selectedPE: "+ p.name);
    this.onPeName.emit(p.name);
    this.selectedPE = p;
  }

  onFlowSelected(f: model.Flux){
    console.log("selectedFlux: "+ f.name);
    this.onFlowName.emit(f.name);
    this.selectedMd = f;
  }

}
