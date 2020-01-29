import { Component, ViewEncapsulation } from '@angular/core';
import { AnalyticsFirebase } from '@ionic-native/analytics-firebase';
import { PopoverController } from '@ionic/angular';

import { PopoverPage } from '../about-popover/about-popover';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['./about.scss'],
})
export class AboutPage {
  conferenceDate = '2047-05-17';

  constructor(
    public popoverCtrl: PopoverController,
    private analyticsFirebase: AnalyticsFirebase) { }

  ionViewWillEnter() {
    this.analyticsFirebase.setCurrentScreen('About');
  }

  async presentPopover(event: Event) {
    this.analyticsFirebase.logEvent('ShowPopover');
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event
    });
    await popover.present();
  }
}
