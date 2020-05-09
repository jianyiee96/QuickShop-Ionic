import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-shopping-list',
  templateUrl: './tab-shopping-list.page.html',
  styleUrls: ['./tab-shopping-list.page.scss'],
})
export class TabShoppingListPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back(): void {
    this.router.navigate(['/view-all-supermarkets']);
  }

}
