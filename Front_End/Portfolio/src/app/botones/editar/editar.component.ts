import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  @Input() color: string = "";
  @Output() btnClick = new EventEmitter()
  
  
  constructor() { }

  ngOnInit(): void {
  }
  
  onClick(){
    this.btnClick.emit();
  }

}
