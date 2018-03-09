import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BrowserModule } from '@angular/platform-browser';
import { MyApp } from './app.component';
import { MainPage } from '../pages/mainpage/mainpage';
import { ContactPage } from '../pages/contact/contact';
import { IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory } from 'ionic-audio';
import { Surahs } from '../provider/surah.provider';
import { SurahRecitor } from '../pages/surahRecitor/recitor';
import { OneSignal } from '@ionic-native/onesignal';
import { AdMobFree } from '@ionic-native/admob-free';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ApiProvider } from '../provider/api.provider';
import { HttpModule } from '@angular/http';

let pages = [
  MyApp,
  MainPage,
  ContactPage,
  SurahRecitor
];

/**
 * Sample custom factory function to use with ionic-audio
 */
export function myCustomAudioProviderFactory() {
  return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
}

export function providers() {
  return [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SplashScreen,
    IonicAudioModule,
    Surahs,
    StatusBar,
    OneSignal,
    AdMobFree,
    InAppBrowser,
    ApiProvider
  ];
}
export function entryComponents() {
  return pages;
}
export function declarations() {
  return pages;
}

@NgModule({
  declarations: declarations(),
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicAudioModule.forRoot(defaultAudioProviderFactory),
    // or use a custom provided function shown above myCustomAudioProviderFactory
  ],
  bootstrap: [IonicApp],
  entryComponents: entryComponents(),
  providers: providers(),
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
