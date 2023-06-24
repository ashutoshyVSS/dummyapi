import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http:HttpClient) { }
  user(){
    return this.http.get('https://dummyjson.com/users');
  }

  // userid(){
  //   return this.http.get('https://dummyjson.com/users/$id');
  // }
}
