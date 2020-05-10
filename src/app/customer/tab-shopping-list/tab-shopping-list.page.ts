import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SessionService } from 'src/app/session.service';
import { Supermarket } from '../supermarket';
import { SupermarketService } from '../supermarket.service';
import { Item } from '../item';
import { ModalController, LoadingController } from '@ionic/angular';
import { ModelViewListItemPage } from '../model-view-list-item/model-view-list-item.page';
import { disableDebugTools } from '@angular/platform-browser';
import { ShortestPathService } from '../shortest-path.service';

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
    private shortestPathService: ShortestPathService,
    private supermarketService: SupermarketService,
    public loadingController: LoadingController) {

    this.resourcePath = sessionService.getImageResourcePath();
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.shoppingList = this.sessionService.getCurrentShoppingList();
    this.supermarket = this.sessionService.getCurrentSupermarket();
  }

  //   this.subscribe_table = this.com_table.Receive().subscribe(async res => {
  //     await this.SaveTableAsync(res.data);
  //     this.ReadTableAsync();
  // });

  shortestPath() {
    this.loadingPresent();

    this.shortestPathService.shortestPath(this.supermarket.supermarketId, this.shoppingList).subscribe(
      response => {
        this.loadingDismiss();

        var processedShoppingList: Item[] = [];
        
        response.items.forEach(x => {
          this.shoppingList.forEach(y => {
            if(x.itemId == y.itemId){
              processedShoppingList.push(y);
            }
          });
        });

        this.sessionService.setShoppingList(processedShoppingList);
        this.ionViewWillEnter();
        
      }, error => {
        
        this.loadingDismiss();
      }
    );
  }

  async viewModal(item: Item) {
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

  async loadingPresent(message: string = null, duration: number = null) {
    message = "Generating shortest shopping path for you..."
    const loading = await this.loadingController.create({ message, duration });
    return await loading.present();
  }

  async loadingDismiss() {
    setTimeout(() => {
      return this.loadingController.dismiss();
    }, 1000);
  }

}
