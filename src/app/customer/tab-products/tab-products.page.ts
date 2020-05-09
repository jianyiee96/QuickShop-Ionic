import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Supermarket } from '../supermarket';
import { SessionService } from 'src/app/session.service';
import { SupermarketService } from '../supermarket.service';
import { Item } from '../item';
import { CurrencyPipe } from '@angular/common';
import { Location } from '@angular/common';
import { Category } from '../category';

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

  public resourcePath: string;

  constructor(
    private router: Router,
    private supermartketService: SupermarketService,
    private sessionService: SessionService,
    private location: Location,
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

        let currCat: Category = this.items[0].category;
        this.categories.push(currCat);
        currCat.items = [];
        this.items.forEach(x => {


          if (x.category.categoryId != currCat.categoryId) {

            currCat = x.category;
            currCat.items = [];
            this.categories.unshift(currCat);
            currCat.items.unshift(x);
          }  else {
            currCat.items.unshift(x);
          }

        });

        console.log("total categories: " +this.categories.length);
        
        console.log("Category.item: " + this.categories[0].items);


      },
      error => {
        console.log(error);
      }
    )

  }

  getCurrency(amount: number): string {
    return this.currencyPipe.transform(amount);
  }

  categoryView(){
    this.searchViewMode = false;
  }


  searchView(){
    this.searchViewMode = true;

  }

  back(): void {
    this.location.back();
  }


}
