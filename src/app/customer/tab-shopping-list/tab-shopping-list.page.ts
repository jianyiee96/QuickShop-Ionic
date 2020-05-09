import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SessionService } from 'src/app/session.service';
import { Supermarket } from '../supermarket';
import { SupermarketService } from '../supermarket.service';
import { Item } from '../item';
import { ModalController } from '@ionic/angular';
import { ModelViewListItemPage } from '../model-view-list-item/model-view-list-item.page';

@Component({
  selector: 'app-tab-shopping-list',
  templateUrl: './tab-shopping-list.page.html',
  styleUrls: ['./tab-shopping-list.page.scss'],
})
export class TabShoppingListPage implements OnInit {

  shoppingList: Item[];
  supermarket: Supermarket;

  public resourcePath: string;

  constructor(private router: Router, 
    private location: Location,
    private modalController: ModalController,
    private sessionService: SessionService,
    private supermarketService: SupermarketService) { 
      
    this.resourcePath = sessionService.getImageResourcePath();
    }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.shoppingList = this.sessionService.getCurrentShoppingList();
    this.supermarket = this.sessionService.getCurrentSupermarket();
  }

  async viewModal(item: Item){
    const modal = await this.modalController.create({
      component: ModelViewListItemPage,
      cssClass: "modal-fullscreen",
      componentProps: {
        'input': item
      }
    });

    modal.onDidDismiss().then(
      (data) => {
        this.shoppingList = this.sessionService.getCurrentShoppingList();
      }
    );

    return await modal.present();
  }

  back(): void {
    this.location.back();
  }
}
