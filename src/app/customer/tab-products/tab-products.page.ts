import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Supermarket } from '../supermarket';
import { SessionService } from 'src/app/session.service';
import { SupermarketService } from '../supermarket.service';
import { Item } from '../item';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tab-products',
  templateUrl: './tab-products.page.html',
  styleUrls: ['./tab-products.page.scss'],
})
export class TabProductsPage implements OnInit {

  public currentSupermarket: Supermarket;
  public items: Item[];

  constructor(
    private router: Router,
    private supermartketService: SupermarketService,
    private sessionService: SessionService,
    private location: Location
  ) {
    this.items = [];
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    if (this.sessionService.getCurrentSupermarket() != null) {
      this.currentSupermarket = this.sessionService.getCurrentSupermarket();
      console.log("Current supermarket: ", this.currentSupermarket.supermarketName);
    } else {
      console.log("No supermarket in session!");
      this.back();
    }

    this.supermartketService.retrieveAllItemsFromSupermarkets(this.currentSupermarket.supermarketId).subscribe(
      response => {
        this.items = response.items;

        this.items.forEach(e => {
          console.log(e);
        });
      },
      error => {
        console.log(error);
      }
    )

  }

  back(): void {
    this.location.back();
  }


}
