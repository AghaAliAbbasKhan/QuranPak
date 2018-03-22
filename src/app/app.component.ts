import { Component } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MainPage } from '../pages/mainpage/mainpage';
import { OneSignal } from '@ionic-native/onesignal';
import { AdMobFree } from '@ionic-native/admob-free';
import { Insomnia } from '@ionic-native/insomnia';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = MainPage;

  constructor(platform: Platform,
    public oneSignal: OneSignal,
    private admobFree: AdMobFree,
	private insomnia: Insomnia,
    public event: Events,
	
    splashScreen: SplashScreen, statusBar: StatusBar) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
	  
	  
      if (platform.is('cordova')) {
        var admobid = {
          banner: 'ca-app-pub-7968543012907582/6276559891', //ca-app-pub-7968543012907582/9205975566
          interstitial: 'ca-app-pub-7968543012907582/3023710596'  //ca-app-pub-7968543012907582/1229560423
        };
        const bannerConfig = {
          id: admobid.banner,
          isTesting: false,
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
          id: admobid.interstitial,
          isTesting: false,
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
		this.insomnia.keepAwake();
      }
    });
  }


  oneSignalInitialization() {
    //first parameter is one signal app id
    //second parameter is google project number i.e SenderId
    this.oneSignal.startInit('822ec41d-fb5a-4cf1-8300-818c65fea129', '299385601672');
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
