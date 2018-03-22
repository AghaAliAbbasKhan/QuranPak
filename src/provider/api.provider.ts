import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

@Injectable()
export class ApiProvider {

    constructor(public http: Http) { }

    public checkBlockStatus() {
        var url = 'http://globisoft.net/app/android/arl.kuranishqip.com/v1.json';
        var response = this.http.get(url);
        return response;
    }
}