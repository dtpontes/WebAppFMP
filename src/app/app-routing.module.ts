import { PacienteComponent } from './paciente/paciente.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [ 
  { path: 'login', component: LoginComponent },
  {path : '', component : LoginComponent},
  { path: 'product', component: ProductComponent },
  { path: 'paciente', component: PacienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
