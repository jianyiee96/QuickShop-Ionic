import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-supermarkets',
  templateUrl: './view-all-supermarkets.page.html',
  styleUrls: ['./view-all-supermarkets.page.scss'],
})
export class ViewAllSupermarketsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back(): void {
    this.router.navigate(['/home']);
  }

}
