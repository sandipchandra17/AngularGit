import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';


import 'rxjs/add/operator/map';

@Injectable({
    providedIn: 'root'
})


export class LoginService {

    Base_URL: string = "http://3.85.7.128:3000/array";

    constructor(private httpClient: HttpClient) { }



    GetData() {
        return this.httpClient.get<any[]>(this.Base_URL,
            {
                observe: 'body',
                responseType: 'json'
            }
        )
            .map((response) => {
                return response;
            })
    }
}



