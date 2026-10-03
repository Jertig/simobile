import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: false,
})
export class SettingsPage implements OnInit {
  darkMode = false;

  constructor() { }

  ngOnInit() {
    this.darkMode = document.documentElement.classList.contains('ion-palette-dark');
  }

  ionViewWillEnter() {
    this.darkMode = document.documentElement.classList.contains('ion-palette-dark');
  }

  changeTheme() {
    document.documentElement.classList.toggle('ion-palette-dark', this.darkMode);
  }

}
