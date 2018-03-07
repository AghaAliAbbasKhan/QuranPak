import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
import { S3Page }  from '../s3/s3';
import { S4Page }  from '../s4/s4';
import { S5Page }  from '../s5/s5';
import { S6Page }  from '../s6/s6';
import { S7Page }  from '../s7/s7';
import { S8Page }  from '../s8/s8';
import { S9Page }  from '../s9/s9';
import { S10Page }  from '../s10/s10';
import { S11Page }  from '../s11/s11';
import { S12Page }  from '../s12/s12';
import { S13Page }  from '../s13/s13';
import { S14Page }  from '../s14/s14';
import { S15Page }  from '../s15/s15';
import { S16Page }  from '../s16/s16';
import { S17Page }  from '../s17/s17';
import { S18Page }  from '../s18/s18';
import { S19Page }  from '../s19/s19';
import { S20Page }  from '../s20/s20';
import { S21Page }  from '../s21/s21';
import { S22Page }  from '../s22/s22';
import { S23Page }  from '../s23/s23';
import { S24Page }  from '../s24/s24';
import { S25Page }  from '../s25/s25';
import { S26Page }  from '../s26/s26';
import { S27Page }  from '../s27/s27';
import { S28Page }  from '../s28/s28';
import { S29Page }  from '../s29/s29';
import { S30Page }  from '../s30/s30';
import { S31Page }  from '../s31/s31';
import { S32Page }  from '../s32/s32';
import { S33Page }  from '../s33/s33';
import { S34Page }  from '../s34/s34';
import { S35Page }  from '../s35/s35';
import { S36Page }  from '../s36/s36';
import { S37Page }  from '../s37/s37';
import { S38Page }  from '../s38/s38';
import { S39Page }  from '../s39/s39';
import { S40Page }  from '../s40/s40';
import { S41Page }  from '../s41/s41';
import { S42Page }  from '../s42/s42';
import { S43Page }  from '../s43/s43';
import { S44Page }  from '../s44/s44';
import { S45Page }  from '../s45/s45';
import { S46Page }  from '../s46/s46';
import { S47Page }  from '../s47/s47';
import { S48Page }  from '../s48/s48';
import { S49Page }  from '../s49/s49';
import { S50Page }  from '../s50/s50';
import { S51Page }  from '../s51/s51';
import { S52Page }  from '../s52/s52';
import { S53Page }  from '../s53/s53';
import { S54Page }  from '../s54/s54';
import { S55Page }  from '../s55/s55';
import { S56Page }  from '../s56/s56';
import { S57Page }  from '../s57/s57';
import { S58Page }  from '../s58/s58';
import { S59Page }  from '../s59/s59';
import { S60Page }  from '../s60/s60';
import { S61Page }  from '../s61/s61';
import { S62Page }  from '../s62/s62';
import { S63Page }  from '../s63/s63';
import { S64Page }  from '../s64/s64';
import { S65Page }  from '../s65/s65';
import { S66Page }  from '../s66/s66';
import { S67Page }  from '../s67/s67';
import { S68Page }  from '../s68/s68';
import { S69Page }  from '../s69/s69';
import { S70Page }  from '../s70/s70';
import { S71Page }  from '../s71/s71';
import { S72Page }  from '../s72/s72';
import { S73Page }  from '../s73/s73';
import { S74Page }  from '../s74/s74';
import { S75Page }  from '../s75/s75';
import { S76Page }  from '../s76/s76';
import { S77Page }  from '../s77/s77';
import { S78Page }  from '../s78/s78';
import { S79Page }  from '../s79/s79';
import { S80Page }  from '../s80/s80';
import { S81Page }  from '../s81/s81';
import { S82Page }  from '../s82/s82';
import { S83Page }  from '../s83/s83';
import { S84Page }  from '../s84/s84';
import { S85Page }  from '../s85/s85';
import { S86Page }  from '../s86/s86';
import { S87Page }  from '../s87/s87';
import { S88Page }  from '../s88/s88';
import { S89Page }  from '../s89/s89';
import { S90Page }  from '../s90/s90';
import { S91Page }  from '../s91/s91';
import { S92Page }  from '../s92/s92';
import { S93Page }  from '../s93/s93';
import { S94Page }  from '../s94/s94';
import { S95Page }  from '../s95/s95';
import { S96Page }  from '../s96/s96';
import { S97Page }  from '../s97/s97';
import { S98Page }  from '../s98/s98';
import { S99Page }  from '../s99/s99';
import { S100Page }  from '../s100/s100';
import { S101Page }  from '../s101/s101';
import { S102Page }  from '../s102/s102';
import { S103Page }  from '../s103/s103';
import { S104Page }  from '../s104/s104';
import { S105Page }  from '../s105/s105';
import { S106Page }  from '../s106/s106';
import { S107Page }  from '../s107/s107';
import { S108Page }  from '../s108/s108';
import { S109Page }  from '../s109/s109';
import { S110Page }  from '../s110/s110';
import { S111Page }  from '../s111/s111';
import { S112Page }  from '../s112/s112';
import { S113Page }  from '../s113/s113';
import { S114Page }  from '../s114/s114';
*/
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

		// this.navCtrl.getRootNav().setRoot();
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

}
