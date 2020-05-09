import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Supermarket } from '../supermarket';
import { SupermarketService } from '../supermarket.service';
import { SessionService } from 'src/app/session.service';

@Component({
  selector: 'app-view-all-supermarkets',
  templateUrl: './view-all-supermarkets.page.html',
  styleUrls: ['./view-all-supermarkets.page.scss'],
})
export class ViewAllSupermarketsPage implements OnInit {

  supermarkets: Supermarket[];
  selectedSupermarket: Supermarket;

  constructor(private router: Router,
    private supermarketService: SupermarketService,
    private sessionService: SessionService) {
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
    this.sessionService.setCurrentSupermarket(this.selectedSupermarket);
    console.log(this.selectedSupermarket)
    this.router.navigate(['/tabs']);
  }

  back(): void {
    this.router.navigate(['/home']);
  }
}
