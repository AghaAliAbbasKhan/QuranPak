import { Component } from '@angular/core';
import { NavController, Events, AlertController } from 'ionic-angular';
import { AudioProvider, ITrackConstraint } from 'ionic-audio';
import { SurahRecitor } from '../surahRecitor/recitor';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-mainpage',
  templateUrl: 'mainpage.html'
})
export class MainPage {
  myTracks: ITrackConstraint[];
  allTracks: any[];
  selectedTrack: any;

  constructor(private _audioProvider: AudioProvider,
    public inapp: InAppBrowser,
    public alertCtrl: AlertController,
    public event: Events,
    public navCtrl: NavController) {
    this.event.subscribe('notificationRecieved', (data) => {
      let alert = this.alertCtrl.create({
        title: 'NOTIFICATION',
        subTitle: "Please click the button to follow the link",
        buttons: [{
          text: 'Click me',
          handler: () => {
            this.inapp.create(data.url, '_system');
          }
        }]
      });
      alert.present();
    })
  }

  recite_surah(id) {
    this.navCtrl.push(SurahRecitor, { surahId: id })
  }


  ngAfterContentInit() {
    // get all tracks managed by AudioProvider so we can control playback via the API
    this.allTracks = this._audioProvider.tracks;
  }

  playSelectedTrack() {
    // use AudioProvider to control selected track
    this._audioProvider.play(this.selectedTrack);
  }

  pauseSelectedTrack() {
    this._audioProvider.pause(this.selectedTrack);
  }

  onTrackFinished(track: any) {

  }
}
