import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-supermarket-layout',
  templateUrl: './tab-supermarket-layout.page.html',
  styleUrls: ['./tab-supermarket-layout.page.scss'],
})
export class TabSupermarketLayoutPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back(): void {
    this.router.navigate(['/view-all-supermarkets']);
  }


}
