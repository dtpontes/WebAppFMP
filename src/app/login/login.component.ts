import { Component, OnInit, EventEmitter } from '@angular/core';
import { isLoweredSymbol } from '@angular/compiler';
import { RestService } from '../rest.service';

import {Router} from '@angular/router';
import {MatDialog} from '@angular/material'
import { Usuario } from './usuario';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private usuario:Usuario = new Usuario();
  private usuarioAutenticado:boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router,public rest:RestService,) { }  

  ngOnInit() {
    
  }  

  // Login() : void {
  //   this.usuarioAutenticado = false;
  //   this.rest.getUsuario(this.usuario.login, this.usuario.senha).subscribe((data: boolean) => {
      
  //     this.usuarioAutenticado = data;      
      
  //     if(this.usuarioAutenticado)
  //     {             
  //       this.router.navigate(['products']);
  //     }else {
  //       this.usuarioAutenticado = false;        
  //       alert("Login ou senha inválidos");
  //     }
  //   });
  // }

  

}
