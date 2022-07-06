import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { ButtonService } from 'src/app/servicios/buttons.service';
import { Acerca } from 'src/app/acerca/acerca';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})

export class EditFormComponent implements OnInit {
  @Output() OnAddAcerca: EventEmitter<Acerca> =new EventEmitter();

  about: string = '';
  editbutton: boolean = true;
  subscription?: Subscription;
 
   constructor (private buttonService: ButtonService) {      
    this.subscription = this.buttonService.onToggle()
                            .subscribe((value) => this.editbutton= value )}

  ngOnInit() : void{ }

  onSubmit(){
    if(this.about.length == 0){
      alert('Agrega una descripción!');
      return; 
    }
    const {about} = this;
    const newAcerca = {about};
  
    this.OnAddAcerca.emit(newAcerca);
  }
}