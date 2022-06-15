import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable, Subject} from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  uri = 'http://localhost:3000/api';
  token = 'token';

  private showLogIn:boolean = false;
  private subject = new Subject<any>();

  constructor(private http: HttpClient, private router: Router) { }
   
  login(email:string, password:string) {
    this.http.post(this.uri + '/authenticate', {email:email, password:password})
        .subscribe((resp:any) => {
          this.router.navigate(['profile']);
          localStorage.setItem('auth_token', resp.token);
        });
  } 
  
  logout () {
    localStorage.removeItem('token');
}

public get logIn(): boolean {
  return (localStorage.getItem('token') !== null);
}

  togglelogIn(): void {
    this.showLogIn = !this.showLogIn;
    this.subject.next(this.showLogIn);
  }
 
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
    
}
