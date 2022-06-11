import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-add-login',
  templateUrl: './add-login.component.html',
  styleUrls: ['./add-login.component.css']
})
export class AddLoginComponent implements OnInit {
  @Output() onLogin: EventEmitter<any> =new EventEmitter();

  email = '';
  password = '';

  constructor(private authService: AuthService) { }

  Login() {
    this.authService.login(this.email, this.password)
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.email.length == 0){
      alert('Please add email!');
      return
    }
    const {email, password} = this
    const newlogIn = {email, password}
  
    this.onLogin.emit(newlogIn);
  }
}