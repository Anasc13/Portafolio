import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private showLogIn:boolean = false;
  url = 'https://localhost:3000/api';
  token: any; 

  constructor(private http:HttpClient, private router: Router) { }

  login(email: string, password: string) {
    this.http.post(this.url + '/authenticate', {email: email, password: password})
        .subscribe(( resp: any ) => {
          this.router.navigate(['profile']);
           localStorage.setItem('auth_token', resp.token);
         })
    ;
  }
        
  logout() {
    localStorage.removeItem('token');
  }

  public get logIn(): boolean{
    return (localStorage.getItem('token') !== null);
  }
  
  togglelogIn(): void {
    this.showLogIn = !this.showLogIn;
    this.token.next(this.showLogIn);
  }

  
}
