import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { ButtonService } from 'src/app/servicios/buttons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
 
  miPortfolio:any; 
  subscription?: Subscription;
  editbutton: boolean = true;

  constructor(private datosPortfolio:PortfolioService,
    private buttonService: ButtonService) {      
    this.subscription = this.buttonService.onToggle()
                            .subscribe((value) => this.editbutton= value)}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      console.log(data);
      this.miPortfolio = data;
    });
  } 
  
   AddEdit(miPortfolio:any){
    this.datosPortfolio.agregarDatos().subscribe((data) =>( 
      this.miPortfolio.push(data))
    )
  }

  toggleEditbutton (){
    this.buttonService.toggleEdit();
  }
 }