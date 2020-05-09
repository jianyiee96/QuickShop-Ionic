import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supermarket } from '../supermarket';
import { SupermarketService } from '../supermarket.service';

@Component({
  selector: 'app-view-all-supermarkets',
  templateUrl: './view-all-supermarkets.page.html',
  styleUrls: ['./view-all-supermarkets.page.scss'],
})
export class ViewAllSupermarketsPage implements OnInit {

  supermarkets: Supermarket[];
  selectedSupermarket: Supermarket;

  constructor(private router: Router,
    private supermarketService: SupermarketService) {
    this.supermarkets = new Array();
  }

  ngOnInit() {
    this.supermarketService.retrieveAllSupermarkets().subscribe(
      response => {
        this.supermarkets = response.supermarkets;
      },
      error => {
        console.log(error);
      }
    )
  }

  selectSupermarket(supermarket: Supermarket): void {
    this.selectedSupermarket = supermarket;
  }

  confirm(): void {
    this.router.navigate(['/tabs']);
  }

  back(): void {
    this.router.navigate(['/home']);
  }



}
