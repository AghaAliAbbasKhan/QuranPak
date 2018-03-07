import { Component } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MainPage } from '../pages/mainpage/mainpage';
import { OneSignal } from '@ionic-native/onesignal';
import { AdMobFree } from '@ionic-native/admob-free';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = MainPage;

  constructor(platform: Platform,
    public oneSignal: OneSignal,
    private admobFree: AdMobFree,
    public event: Events,
    splashScreen: SplashScreen, statusBar: StatusBar) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      if (platform.is('cordova')) {
        var admobid = {
          banner: 'ca-app-pub-7968543012907582/5460791386',
          interstitial: 'ca-app-pub-7968543012907582/2701506929'
        };
        const bannerConfig = {
          // id: admobid.banner,
          isTesting: true,
          autoShow: true
        };
        this.admobFree.banner.config(bannerConfig);

        this.admobFree.banner.prepare().then((success) => {
          this.admobFree.banner.show();
          splashScreen.hide();
        }).catch((error) => {
          splashScreen.hide();
        })

        const interstitialConfig = {
          // id: admobid.interstitial,
          isTesting: true,
          autoShow: true
        };

        this.admobFree.interstitial.config(interstitialConfig);
        this.admobFree.interstitial.prepare().then((success) => {
          this.admobFree.interstitial.show();
        }).catch((error) => {
        })
        setInterval(() => {
          this.admobFree.interstitial.prepare().then((success) => {
            this.admobFree.interstitial.show();
          }).catch((error) => {
          })
        }, 180000);
        this.oneSignalInitialization();
      }
    });
  }

  oneSignalInitialization() {
    //first parameter is one signal app id
    //second parameter is google project number i.e SenderId
    this.oneSignal.startInit('2f63ff14-23e6-49ec-82f3-d249d2637faa', '781950723575');
    this.oneSignal.setSubscription(true);
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
    this.oneSignal.handleNotificationReceived().subscribe((push) => {
      // do something when notification is received and app is open
      this.event.publish('notificationRecieved', { url: push.payload.additionalData.url })
    });
    this.oneSignal.handleNotificationOpened().subscribe((push) => {
      // do something when a notification is opened and app is not running
      this.event.publish('notificationRecieved', { url: push.notification.payload.additionalData.url })
    });
    this.oneSignal.endInit();
  }
}
