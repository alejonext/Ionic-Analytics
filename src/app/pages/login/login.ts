import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AnalyticsFirebase } from '@ionic-native/analytics-firebase/ngx';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(
    public userData: UserData,
    public router: Router,
    private analyticsFirebase: AnalyticsFirebase
  ) { }

  ionViewWillEnter() {
    this.analyticsFirebase.setCurrentScreen('Login');
  }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username);
      this.router.navigateByUrl('/app/tabs/schedule');
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
