import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Supermarket } from '../supermarket';
import { SessionService } from 'src/app/session.service';
import { SupermarketService } from '../supermarket.service';
import { Item } from '../item';
import { CurrencyPipe } from '@angular/common';
import { Location } from '@angular/common';
import { Category } from '../category';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab-products',
  templateUrl: './tab-products.page.html',
  styleUrls: ['./tab-products.page.scss'],
})
export class TabProductsPage implements OnInit {

  public currentSupermarket: Supermarket;
  public items: Item[];
  public searchViewMode: boolean;
  public categories: Category[] = [];

  public keyword: string;
  public filteredItems: Item[];

  public resourcePath: string;

  constructor(
    private router: Router,
    private supermartketService: SupermarketService,
    private sessionService: SessionService,
    private location: Location,
    private toastController: ToastController,
    private currencyPipe: CurrencyPipe
  ) {
    this.items = [];
    this.resourcePath = sessionService.getImageResourcePath();
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
        this.filteredItems = response.items;

        let currCat: Category = this.items[0].category;
        this.categories.push(currCat);
        currCat.items = [];
        this.items.forEach(x => {

          if (x.category.categoryId != currCat.categoryId) {

            currCat = x.category;
            currCat.items = [];
            this.categories.unshift(currCat);
            currCat.items.unshift(x);
          } else {
            currCat.items.unshift(x);
          }

        });
      },
      error => {
        console.log(error);
      }
    )
  }

  onSearchChange(event: CustomEvent): void {
    this.filteredItems = [];

    this.items.forEach(i => {
      if (i.itemName.toUpperCase().indexOf(event.detail.value.toUpperCase()) > -1) {
        this.filteredItems.push(i);
      }
    });

    // console.log(event.detail.value);
  }

  addItemToShoppingList(item: Item): void {
    let shoppingList: Item[] = this.sessionService.getCurrentShoppingList();

    if (shoppingList == null) {
      shoppingList = [];
    }
    item.category = new Category(item.category.categoryId, item.category.categoryName);

    let exists: boolean = false;

    shoppingList.forEach(x => {
      if (x.itemId == item.itemId) {
        console.log("Item already exists in the list");
        this.toast("Item already exists in the list.")
        exists = true;
      }
    });

    if (!exists) {
      shoppingList.unshift(item);
      console.log("Added item. Current total items: " + shoppingList.length);
      this.toast("Added item into shopping list!");
      this.sessionService.setShoppingList(shoppingList);
    }
  }

  async toast(toastMessage: string) {
    const toast = await this.toastController.create({
      message: toastMessage,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }

  getCurrency(amount: number): string {
    return this.currencyPipe.transform(amount);
  }

  categoryView() {
    this.searchViewMode = false;
  }
  
  searchView() {
    this.searchViewMode = true;
  }

  back(): void {
    this.location.back();
  }
}
