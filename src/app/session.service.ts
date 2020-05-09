import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

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


}
