import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Edit } from 'src/app/acerca/edit';
import { EDITBD } from 'src/app/acerca/EDITBD';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {
  @Input() edit: Edit = EDITBD[0]
  @Output() OnDeleteEdit: EventEmitter<Edit["about"]> = new EventEmitter()

  faTimes = faTimes;
  
  constructor() { }

  ngOnInit(): void {}
  
  onDelete(edit: Edit) {
    this.OnDeleteEdit.emit(edit.about);
  }
}
