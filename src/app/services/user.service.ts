import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'https://jsonplaceholder.cypress.io/'
  listUsers(){
    return this.http.get(this.baseUrl + 'users'); //calls this API end point and return the data
  }
  viewuser(id: string){
    return this.http.get(this.baseUrl + 'users/' + id);
  }

  addUser(userObj: any){
    return this.http.post(this.baseUrl + 'users', userObj) //send userObj object to the method which is sent to API
  }
  deleteUser(id:any){
     return this.http.delete(this.baseUrl + 'users/' + id)
  }
}
