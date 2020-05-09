import { Component, OnInit } from '@angular/core';

import { ModalController, NavParams } from '@ionic/angular';
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

  shoppingList: Item[];

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private sessionService: SessionService) {


    this.currentItem = navParams.get('input');
    this.resourcePath = sessionService.getImageResourcePath();
    this.shoppingList = sessionService.getCurrentShoppingList();

    this.shoppingList.forEach(x => {

      if(x.itemId == this.currentItem.itemId){
        this.currentItem = x;
      }

    });
    
  }

  nextItem(){


    let idx: number  = 0
    this.shoppingList.forEach(x => {


      if(x.itemId == this.currentItem.itemId){
        if(idx+1 < this.shoppingList.length){
          this.currentItem = this.shoppingList[idx+1];
          return;
        } else {
          console.log("No more next item.")
        }
      }
      idx++;
      
    });

  }

  checkCurrentItem(){
    this.currentItem.checked = true;

    this.sessionService.setShoppingList(this.shoppingList);
  }

  prevItem(){

    let idx: number  = 0
    this.shoppingList.forEach(x => {


      if(x.itemId == this.currentItem.itemId){
        if(idx != 0){
          this.currentItem = this.shoppingList[idx-1];
          return;
        } else {
          console.log("No more prev item.")
        }
      }
      idx++;
      
    });
    

  }

  ngOnInit() {
    console.log("Init");
  }






  dismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }


}
