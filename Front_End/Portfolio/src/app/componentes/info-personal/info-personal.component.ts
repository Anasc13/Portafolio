import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Subscription } from 'rxjs';
import { ButtonService } from 'src/app/servicios/buttons.service';


@Component({
  selector: 'app-info-personal',
  templateUrl: './info-personal.component.html',
  styleUrls: ['./info-personal.component.css']
})

export class InfoPersonalComponent implements OnInit {

  miPortfolio:any;
  editbutton: boolean = true;
  subscription?: Subscription;

  constructor(
    private datosPortfolio:PortfolioService,
    private buttonService: ButtonService) {
    this.subscription = this.buttonService.onToggle()
    .subscribe((value) => this.editbutton = value ) 
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      this.miPortfolio=data;
    });
  }

  toggleEdit (){
    this.buttonService.toggleEdit();
  }

}