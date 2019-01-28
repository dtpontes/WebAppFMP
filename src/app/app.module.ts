import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { CustomMaterialModule } from './core/material.module';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { LoginComponent } from './login/login.component';
import { PacienteComponent } from './paciente/paciente.component';
import { PacienteAddComponent } from './paciente-add/paciente-add.component';
import { PacienteEditComponent } from './paciente-edit/paciente-edit.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

const appRoutes: Routes = [
  {
    path: 'products',
    component: ProductComponent,
    data: { title: 'Product List' }
  },  
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent,
    data: { title: 'Product Details' }
  },
  {
    path: 'product-add',
    component: ProductAddComponent,
    data: { title: 'Product Add' }
  },
  {
    path: 'product-edit/:id',
    component: ProductEditComponent,
    data: { title: 'Product Edit' }
  },
  { path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'paciente',
    component: PacienteComponent,
    data: { title: 'Paciente' }
  },
  {
    path: 'paciente-edit/:id',
    component: PacienteEditComponent,
    data: { title: 'Edição de paciente' }
  },
  {
    path: 'paciente-add',
    component: PacienteAddComponent,
    data: { title: 'Inserir Paciente' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductAddComponent,
    ProductDetailComponent,
    ProductEditComponent,    
    LoginComponent,
    PacienteComponent,
    PacienteAddComponent,
    PacienteEditComponent,
    ConfirmDialogComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents :[ConfirmDialogComponent]
})
export class AppModule { }
