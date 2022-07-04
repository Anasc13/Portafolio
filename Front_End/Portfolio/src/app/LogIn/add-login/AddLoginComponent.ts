import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ButtonService } from 'src/app/servicios/buttons.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-login',
  templateUrl: './add-login.component.html',
  styleUrls: ['./add-login.component.css']
})

export class AddLoginComponent implements OnInit {
form: FormGroup;
showLogIn: boolean = false;
subscription?: Subscription;
 
  constructor (private buttonService: ButtonService, 
    private formBuilder: FormBuilder) {      
    this.subscription = this.buttonService.onToggle()
                            .subscribe((value) => this.showLogIn = value );
    this.form= this.formBuilder.group({
      password:['',[Validators.required, Validators.minLength(8)]],
      email:['', [Validators.required, Validators.email]],
    })
    }

  ngOnInit() {}
  
  get Password(){
    return this.form.get("password");
  }
 
  get Mail(){
   return this.form.get("email");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return false
  }


  onSubmit (event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
 
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
   }
 }
