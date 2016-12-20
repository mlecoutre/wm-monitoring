
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

}
