import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainPage } from '../mainpage/mainpage';

@Component({
	selector: 'page-contact',
	templateUrl: 'contact.html'
})
export class ContactPage {

	color_info = Array();
	colors = Array();

	arabicCol = null;
	latinbCol = null;
	perCol = null;
	highCol = null;
	backCol = null;
	aStartFont = null;
	pStartFont = null;
	lStartFont = null;

	constructor(public navCtrl: NavController) {
		this.getColor();
	}

	fontSizeChange(color_info, typ, v) {

		if (typ == "A") {
			if (this.aStartFont == null) {
				this.aStartFont = v;
			}
			else {
				if (this.aStartFont > 0 || v > 0) {
					if (this.aStartFont >= 50 && v > 0) {
						//50 max limit
					}
					else {
						this.aStartFont = parseInt(this.aStartFont) + v;
					}
				}
			}
		}

		if (typ == "P") {
			if (this.pStartFont == null) {
				this.pStartFont = v;

			}
			else {
				if (this.pStartFont > 0 || v > 0) {
					if (this.pStartFont >= 50 && v > 0) {
						//50 max limit
					}
					else {
						this.pStartFont = parseInt(this.pStartFont) + v;
					}
				}
			}
		}
		if (typ == "L") {
			if (this.lStartFont == null) {
				this.lStartFont = v;
			}
			else {
				if (this.lStartFont > 0 || v > 0) {
					if (this.lStartFont >= 50 && v > 0) {
						//50 max limit
					}
					else {
						this.lStartFont = parseInt(this.lStartFont) + v;
					}
				}
			}
		}

	}



	setcolor(arabicCol, latinbCol, perCol, highCol, backCol) {

		// this.colors.push({'arabicCol':arabicCol,'latinbCol':latinbCol,'perCol':perCol,'highCol':highCol,'backCol':backCol})
		localStorage.setItem('arabicCol', JSON.stringify(this.arabicCol));
		localStorage.setItem('latinbCol', JSON.stringify(this.latinbCol));
		localStorage.setItem('perCol', JSON.stringify(this.perCol));
		localStorage.setItem('highCol', JSON.stringify(this.highCol));
		localStorage.setItem('backCol', JSON.stringify(this.backCol));
		localStorage.setItem('aStartFont', JSON.stringify(this.aStartFont));
		localStorage.setItem('pStartFont', JSON.stringify(this.pStartFont));
		localStorage.setItem('lStartFont', JSON.stringify(this.lStartFont));

		this.navCtrl.setRoot(MainPage);
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
			this.perCol = "#000000";

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
			this.backCol = "#ffffff";
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

}
