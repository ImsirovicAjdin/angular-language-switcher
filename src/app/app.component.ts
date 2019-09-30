import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public lang = localStorage.setItem('lang', 'en');

  public getLang = localStorage.getItem('lang');

  getTheLang() {
    alert(`the lang is: ${this.getLang}`);
    return this.getLang;
  }

}