import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AddLoginComponent } from 'src/app/componentes/add-login/add-login.component';


const routes: Routes = [
  {path: ' ', component:AppComponent},
  {path: 'Addlogin', component:AddLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
