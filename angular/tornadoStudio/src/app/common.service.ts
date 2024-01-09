import { Injectable } from '@angular/core';
import { Gender } from './common/models/gender.model';
import { Observable ,tap } from 'rxjs';
//for using http
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }


  getAll(data: string): Observable<Gender> {
    //var url = '/Inventory/Gender/Index/' + data; 
    var url ='http://localhost:57685/user/Index'+ data;
    return this.http.get<Gender>(url)
        .pipe(
            tap(res => console.log('fetched Gender'))
        );
  }
}
