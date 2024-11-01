import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 

  constructor(private http:HttpClient) { }
  getApi(){
    return this.http.get(' https://jsonplaceholder.typicode.com/todos');

  }
  updateUser(userData:any){
    return this.http.put('https://jsonplaceholder.typicode.com/todos/${userData.id}',userData);
  }
}
