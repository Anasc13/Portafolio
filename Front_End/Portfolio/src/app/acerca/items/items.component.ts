import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Acerca } from 'src/app/acerca/acerca';
import { ACERCAS } from 'src/app/acerca/ListAcerca';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {
  @Input() acerca: Acerca = ACERCAS[0]
  @Output() OndeleteAcerca: EventEmitter<Acerca> = new EventEmitter()

    faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteAcerca(acerca:Acerca) {
    this.OndeleteAcerca.emit(acerca);
  }

}
