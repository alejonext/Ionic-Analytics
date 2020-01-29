import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnalyticsFirebase } from '@ionic-native/analytics-firebase';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-speaker-detail',
  templateUrl: 'speaker-detail.html',
  styleUrls: ['./speaker-detail.scss'],
})
export class SpeakerDetailPage {
  speaker: any;

  constructor(
    private dataProvider: ConferenceData,
    private router: Router,
    private route: ActivatedRoute,
    private analyticsFirebase: AnalyticsFirebase
  ) {}

  ionViewWillEnter() {
    this.dataProvider.load().subscribe((data: any) => {
      const speakerId = this.route.snapshot.paramMap.get('speakerId');
      this.analyticsFirebase.setCurrentScreen('Speaker:'  +  speakerId );
      if (data && data.speakers) {
        for (const speaker of data.speakers) {
          if (speaker && speaker.id === speakerId) {
            this.speaker = speaker;
            break;
          }
        }
      }
    });
  }
}
