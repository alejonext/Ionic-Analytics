import { Component } from '@angular/core';

import { PopoverController } from '@ionic/angular';

@Component({
  template: `
    <ion-list>
      <ion-item button (click)="close('https://console.firebase.google.com/')">
        <ion-label>Firebase</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://analytics.google.com/')">
        <ion-label>Analytics Google</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://ionicframework.com/docs/native/analytics-firebase')">
        <ion-label>Ionic Documentation</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://github.com/appfeel/analytics-google')">
        <ion-label>Events</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://github.com/alejonext/ionic-analytics')">
        <ion-label>GitHub Repo</ion-label>
      </ion-item>
    </ion-list>
  `
})
export class PopoverPage {
  constructor(public popoverCtrl: PopoverController) {}

  close(url: string) {
    window.open(url, '_blank');
    this.popoverCtrl.dismiss();
  }
}
