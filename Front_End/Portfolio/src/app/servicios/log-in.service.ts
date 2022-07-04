import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class LogInService {
  
  private apiUrl = 'http://localhost:5001/logIn'
  token: any;


  constructor(private http: HttpClient, private router: Router) { }
  
Login(email:string, password:string) {
  this.http.post(this.apiUrl +'/authenticate', {email: email, password: password})
  .subscribe((resp:any) => {
    this.router.navigate(['']);
    localStorage.setItem('auth_token', resp.token);
  });
  } 

 Logout() {
  localStorage.removeItem('token');
}
public get logIn():boolean {
  return (localStorage.getItem('token') !== null);
}

}
