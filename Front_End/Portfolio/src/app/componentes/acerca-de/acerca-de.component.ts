import { Component, OnInit } from '@angular/core';
import { ButtonService } from 'src/app/servicios/buttons.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Subscription } from 'rxjs';
import { Acerca } from 'F:/GIT/Portafolio/Front_End/Portfolio/src/app/acerca/acerca';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
 
  acercas: Acerca[] = [];
  miPortfolio:any;
  subscription?: Subscription;
  editbutton: boolean = true;

  constructor(
    private datosPortfolio:PortfolioService,
    private buttonService: ButtonService) {      
    this.subscription = this.buttonService.onToggle()
      .subscribe((value) => this.editbutton= value)
    }

  ngOnInit(): void {
  // Like Promise
     this.datosPortfolio.obtenerDatos().subscribe((data) => {
      this.miPortfolio=data;
    });
  }
                        
  AddAcerca(acerca:Acerca){
    this.datosPortfolio.agregarDatos().subscribe((acerca) =>( 
        this.acercas.push(acerca))
        );
  }
                          
  deleteAcerca(acerca:Acerca){
    this.datosPortfolio.borrarDatos()
        .subscribe(()=>(
        this.acercas = this.acercas.filter( t => t.about !== acerca.about )
  ))
  }
                          
  toggleEditbutton (){
    this.buttonService.toggleEdit();
  }
}