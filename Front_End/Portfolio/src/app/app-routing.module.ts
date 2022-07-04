import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoginComponent } from "./LogIn/add-login/AddLoginComponent";
import { EditFormComponent } from "./acerca/edit-form/edit-form.component";
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';

const routes: Routes = [

  { path: 'login', component: AddLoginComponent, pathMatch: 'full' },
  { path: 'editar', component: EditFormComponent, pathMatch: 'full' },
]


@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
