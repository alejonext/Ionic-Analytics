import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AnalyticsFirebase } from '@ionic-native/analytics-firebase/ngx';
import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {
  signup: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(
    public router: Router,
    public userData: UserData,
    private analyticsFirebase: AnalyticsFirebase
  ) {}

  ionViewWillEnter() {
    this.analyticsFirebase.setCurrentScreen('Signup');
  }

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.signup(this.signup.username);
      this.router.navigateByUrl('/app/tabs/schedule');
    }
  }
}
