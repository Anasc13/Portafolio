import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { InfoPersonalComponent } from './componentes/info-personal/info-personal.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HttpClientModule } from '@angular/common/http';
import { LogInComponent } from './LogIn/log-in/log-in.component';
import { UserLogInComponent } from './LogIn/user-log-in/user-log-in.component';
import { EditarComponent } from './botones/editar/editar.component';
import { EditFormComponent } from './acerca/edit-form/edit-form.component';
import { AddLoginComponent } from "./LogIn/add-login/AddLoginComponent";
import { ItemsComponent } from './acerca/items/items.component';



@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    InfoPersonalComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    LogInComponent,
    AddLoginComponent,
    UserLogInComponent,
    EditarComponent,
    EditFormComponent,
    ItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
