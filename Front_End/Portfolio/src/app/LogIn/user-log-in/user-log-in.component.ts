import { Component, OnInit } from '@angular/core';
import { LogInService } from 'src/app/servicios/log-in.service';

@Component({
  selector: 'app-user-log-in',
  templateUrl: './user-log-in.component.html',
  styleUrls: ['./user-log-in.component.css']
})
export class UserLogInComponent implements OnInit {
  
  email= '';
  password= '';
  constructor(private logInService: LogInService) { }

  ngOnInit(): void { }
  
  login() {this.logInService.Login(this.email, this.password)
  }

}
  
