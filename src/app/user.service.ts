import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  registerUserFromRemote(user: User): Observable<object> {
  return this._http.post<object>("http://localhost:8080/register",user)
    // throw new Error('Method not implemented.');
  }

  constructor(private _http: HttpClient) { }

  public loginUserFromRemote(user :User):Observable<any>{
    return this._http.post("http://localhost:8080/login",user)

  }

}
