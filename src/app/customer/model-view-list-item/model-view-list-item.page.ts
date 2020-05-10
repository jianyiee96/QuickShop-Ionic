import { Component, OnInit } from '@angular/core';

import { ModalController, NavParams, ToastController } from '@ionic/angular';
import { Item } from '../item';
import { SessionService } from 'src/app/session.service';

@Component({
  selector: 'app-model-view-list-item',
  templateUrl: './model-view-list-item.page.html',
  styleUrls: ['./model-view-list-item.page.scss'],
})
export class ModelViewListItemPage implements OnInit {

  public currentItem: Item;
  public resourcePath: string;
  public imagePath: string;

  shoppingList: Item[];

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private toastController: ToastController,
    private sessionService: SessionService) {

    this.currentItem = navParams.get('input');
    this.resourcePath = sessionService.getImageResourcePath() + "Maps/";
    this.shoppingList = sessionService.getCurrentShoppingList();

    this.shoppingList.forEach(x => {
      if (x.itemId == this.currentItem.itemId) {
        this.currentItem = x;
      }
    });

    this.imagePath = this.resourcePath + this.currentItem.itemId + ".png";
  }

  nextItem() {
    let idx: number = 0
    this.shoppingList.forEach(x => {

      if (x.itemId == this.currentItem.itemId) {
        if (idx + 1 < this.shoppingList.length) {
          this.currentItem = this.shoppingList[idx + 1];
          return;
        } else {
          console.log("No more next item.");
          this.toast("End of the list!");
        }
      }
      idx++;
    });
    this.resourcePath = this.sessionService.getImageResourcePath() + "Maps/";
    this.imagePath = this.resourcePath + this.currentItem.itemId + ".png";
  }

  checkCurrentItem() {
    this.currentItem.checked = true;
    this.toast("Checked item!");
    this.sessionService.setShoppingList(this.shoppingList);
    
  }

  prevItem() {
    let idx: number = 0
    this.shoppingList.forEach(x => {

      if (x.itemId == this.currentItem.itemId) {
        if (idx != 0) {
          this.currentItem = this.shoppingList[idx - 1];
          return;
        } else {
          console.log("No more prev item.");
          this.toast("Head of the list!");
        }
      }
      idx++;
    });
    this.resourcePath = this.sessionService.getImageResourcePath() + "Maps/";
    this.imagePath = this.resourcePath + this.currentItem.itemId + ".png";
  }

  ngOnInit() {
  }

  dismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async toast(toastMessage: string) {
    const toast = await this.toastController.create({
      message: toastMessage,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }
}