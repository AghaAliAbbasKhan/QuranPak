import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MainPage } from '../mainpage/mainpage';
import { ContactPage } from '../contact/contact';
import { ITrackConstraint } from 'ionic-audio';
import { NavController, NavParams, Content } from 'ionic-angular';
import { Surahs } from '../../provider/surah.provider';

@Component({
    selector: 'surah-recitor',
    templateUrl: 'recitor.html'
})

export class SurahRecitor {
    @ViewChild(Content) content: Content;
    myTracks: any[] = []
    playlist: any[] = [];
    surahId: number = 0;
    selectedLanguage = "ARAL";
    currentIndex: number = -1;
    currentTrack: any;
    mainpage: any = MainPage;
    contactpage: any = ContactPage;
    color_info = Array();
    loading: boolean = true;

    arabicCol = null;
    latinbCol = null;
    perCol = null;
    highCol = null;
    backCol = null;
    aStartFont = null;
    pStartFont = null;
    lStartFont = null;

    constructor(
        params: NavParams,
        private _cdRef: ChangeDetectorRef,
        public surahs: Surahs) {
        this.surahId = params.get('surahId');
        this.getColor();
    }

    ionViewDidLoad() {
        setTimeout(() => {
            this.myTracks = this.surahs.allSurahs[this.surahId];
            this.playlist = JSON.parse(JSON.stringify(this.myTracks));
            this.loading = false;
        }, 500);
    }

    getColor() {
        this.arabicCol = JSON.parse(localStorage.getItem("arabicCol"));
        this.latinbCol = JSON.parse(localStorage.getItem("latinbCol"));
        this.perCol = JSON.parse(localStorage.getItem("perCol"));
        this.highCol = JSON.parse(localStorage.getItem("highCol"));
        this.backCol = JSON.parse(localStorage.getItem("backCol"));
        this.aStartFont = JSON.parse(localStorage.getItem("aStartFont"));
        this.pStartFont = JSON.parse(localStorage.getItem("pStartFont"));
        this.lStartFont = JSON.parse(localStorage.getItem("lStartFont"));

        if (this.arabicCol == null) {

            this.arabicCol = "#ef2424";

        }
        else {
            this.arabicCol = this.arabicCol;
        }

        if (this.latinbCol == null) {
            this.latinbCol = "#09af3d";

        }
        else {
            this.latinbCol = this.latinbCol;
        }

        if (this.perCol == null) {
            this.perCol = "#a21160";

        } else {
            this.perCol = this.perCol;
        }

        if (this.highCol == null) {
            this.highCol = "#f5e5d2";
        }
        else {
            this.highCol = this.highCol;
        }

        if (this.backCol == null) {
            this.backCol = "#fgddd";
        }
        else {
            this.backCol = this.backCol;
        }

        if (this.aStartFont == null) {

            this.aStartFont = 20;
        } else {
            this.aStartFont = this.aStartFont;
        }

        if (this.lStartFont == null) {

            this.lStartFont = 20;

        }
        else {
            this.lStartFont = this.lStartFont;
        }
        if (this.pStartFont == null) {

            this.pStartFont = 20;
        }

        else {
            this.pStartFont = this.pStartFont;

        }
    }

    playthis(track: ITrackConstraint, index: number) {
        this.currentTrack = track;
        this.currentIndex = index;

        jQuery(".rowclass").removeClass("addbackgeound");
        jQuery(".rowclass").css("background-color", this.backCol);

        if (track != null) {
            if (track.id != null) {
                jQuery("#p" + track.id).addClass("addbackgeound");
                jQuery("#p" + track.id).css("background-color", this.highCol);

                //
                let topp = jQuery("#l" + track.id).offset().top;
                let hit = jQuery("#l" + track.id).outerHeight();
                //alert (topp+hit);
                this.content.scrollTo(0, 0, 0);
                this.content.scrollTo(0, (topp - hit), 1000);
            }
        }
    }

    add(track: ITrackConstraint) {
        this.playlist.push(track);
    }

    play(track: ITrackConstraint, index: number) {
        this.currentTrack = track;
        this.currentIndex = index;

        jQuery(".rowclass").removeClass("addbackgeound");
        jQuery(".rowclass").css("background-color", this.backCol);

        if (track != null) {
            if (track.id != null) {
                jQuery("#p" + track.id).addClass("addbackgeound");
                jQuery("#p" + track.id).css("background-color", this.highCol);
                //
                let element = document.getElementById('l' + track.id);
                let parent = document.getElementById('p' + track.id);
                let yOffset = element.offsetTop;
                let yOffset_parent = parent.offsetTop;
                let total_offset = yOffset + yOffset_parent;
                if (total_offset > 0)
                    total_offset -= 20;
                this.content.scrollTo(0, total_offset, 1000);
            }
        }
    }

    next() {
        // if there is a next track on the list play it
        if (this.playlist.length > 0 && this.currentIndex >= 0 && this.currentIndex < this.playlist.length - 1) {
            let i = this.currentIndex + 1;
            let track = this.playlist[i];
            this.play(track, i);
            this._cdRef.detectChanges();  // needed to ensure UI update
        } else if (this.currentIndex == -1 && this.playlist.length > 0) {
            // if no track is playing then start with the first track on the list
            this.play(this.playlist[0], 0);
        }
    }

    previous() {
        // if there is a previous track on the list play it
        if (this.playlist.length > 0 && this.currentIndex > 0) {
            let i = this.currentIndex - 1;
            let track = this.playlist[i];
            this.play(track, i);
            this._cdRef.detectChanges();  // needed to ensure UI update
        }
        else if (this.currentIndex == -1 && this.playlist.length > 0) {
            // if no track is playing then start with the first track on the list
            this.play(this.playlist[0], 0);
        }
    }

    onTrackFinished(track: any) {
        this.next();
    }

    clear() {
        this.playlist = [];
    }

    changeLanguage(btn, lng) {
        if (jQuery("#" + btn).hasClass("active_lang"))
            return false;
        jQuery(".lang_btn").removeClass("active_lang");
        jQuery("#" + btn).addClass("active_lang");
        jQuery(".lang_btn_ar").removeClass("active_lang");
        jQuery("#" + btn).addClass("active_lang");
        jQuery(".lang_btn_al").removeClass("active_lang");
        jQuery("#" + btn).addClass("active_lang");
        jQuery(".lang_btn_aral").removeClass("active_lang");
        jQuery("#" + btn).addClass("active_lang");
        this.selectedLanguage = lng;
        for (var i = 0; i < this.myTracks.length; i++) {
            if (lng == "AR") {
                this.myTracks[i].src = this.myTracks[i].src_ar;
            }
            if (lng == "AL") {
                this.myTracks[i].src = this.myTracks[i].src_al;
            }

            if (lng == "ARAL") {
                this.myTracks[i].src = this.myTracks[i].src_aral;
            }


            this.playlist[i].src = this.myTracks[i].src;
        }
        this.currentTrack = this.playlist[this.currentIndex];
        this.playthis(this.currentTrack, this.currentIndex);
    }
}
