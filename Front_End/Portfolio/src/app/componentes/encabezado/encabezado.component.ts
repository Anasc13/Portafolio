import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})

export class EncabezadoComponent implements OnInit {
  miPortfolio:any;

  title:string = 'Log in';
  showLogIn: boolean = false;
  subscription?: Subscription;  

  constructor(private datosPortfolio:PortfolioService, private AuthService: AuthService, private router: Router) { 
    this.subscription = this.AuthService.logIn()
                              .subscribe((value: boolean) => this.showLogIn = value )
  }
     
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortfolio=data;
    });
  }

  togglelogIn (){
    this.AuthService.togglelogIn();
  }

  hasRoute(router: string){
    return this.router.url === router
  }
 
}
