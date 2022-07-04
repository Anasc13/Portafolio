import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { ButtonService } from 'src/app/servicios/buttons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})

export class EncabezadoComponent implements OnInit {
  miPortfolio:any;
  showLogIn: boolean = false;
  subscription?: Subscription;
  

  constructor(
    private datosPortfolio:PortfolioService,
    private buttonService: ButtonService,) {      
      this.subscription = this.buttonService.onToggle()
                              .subscribe((value) => this.showLogIn = value )
  }
    
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      console.log(data);
      this.miPortfolio=data;
    });
  }

    togglelogIn (){
      this.buttonService.togglelogIn();
    }

}