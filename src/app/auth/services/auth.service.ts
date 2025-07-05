import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Usuario } from '../models/usuario.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl='http://localhost:9090/auth';

  constructor(private http:HttpClient) { }

  register(usuario:Usuario):Observable<any>{
    return this.http.post(`${this.baseUrl}/register`,usuario,{responseType:'text'});
  }

  login(credentials:{username:string, password:string}){
    return this.http.post<any>(`${this.baseUrl}/login`, credentials);
  }
}
