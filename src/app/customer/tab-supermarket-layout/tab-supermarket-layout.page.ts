import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supermarket } from '../supermarket';
import { SessionService } from 'src/app/session.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-tab-supermarket-layout',
  templateUrl: './tab-supermarket-layout.page.html',
  styleUrls: ['./tab-supermarket-layout.page.scss'],
})
export class TabSupermarketLayoutPage implements OnInit {

  supermarket: Supermarket;

  resourcePath: string;
  fullImagePath: string;

  constructor(private router: Router, private sessionService: SessionService, private location: Location) {
    this.resourcePath = sessionService.getImageResourcePath() + "Maps/map"
  }

  ionViewDidEnter(){
    this.supermarket = this.sessionService.getCurrentSupermarket();
    this.fullImagePath = this.resourcePath+this.supermarket.supermarketId+".png";
  }

  ngOnInit() {
  }

  back(): void {
    this.location.back();
  }


}
