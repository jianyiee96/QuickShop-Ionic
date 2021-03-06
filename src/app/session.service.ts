import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Supermarket } from './customer/supermarket';
import { Item } from './customer/item';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private platform: Platform) { }

  getRootPath(): string {

    if (this.platform.is('hybrid')) {
      return "http://192.168.137.1:8080/Quickshop-war/Resources/";
    }
    else {
      return "/api/";
    }
  }

  getImageResourcePath(): string {
    if (this.platform.is('hybrid')) {
      return "http://192.168.137.1:8080/QuickShop-war/Images/";
    }
    else {
      return "http://localhost:8080/QuickShop-war/Images/";
    }
  }

  setCurrentSupermarket(currentSupermarket: Supermarket): void {
    sessionStorage.currentSupermarket = JSON.stringify(currentSupermarket);
  }

  getCurrentSupermarket(): Supermarket {
    if (sessionStorage.currentSupermarket != null) {
      return JSON.parse(sessionStorage.currentSupermarket);
    } else {
      null;
    }
  }

  setShoppingList(shoppingList: Item[]): void {
    sessionStorage.shoppingList = JSON.stringify(shoppingList);
  }

  getCurrentShoppingList(): Item[] {
    if (sessionStorage.shoppingList != null) {
      return JSON.parse(sessionStorage.shoppingList);
    } else {
      null;
    }
  }

}
