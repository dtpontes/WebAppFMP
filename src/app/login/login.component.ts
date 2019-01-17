import { Component, OnInit } from '@angular/core';
import { isLoweredSymbol } from '@angular/compiler';
import { RestService } from '../rest.service';

import {Router} from '@angular/router';
import {MatDialog} from '@angular/material'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLogin:boolean;

  constructor(private router: Router,public rest:RestService,) { }

  logado :boolean;
  login: string;
  senha: string;

  ngOnInit() {
    
  }  

  Login() : void {
    this.logado = false;
    this.rest.getUsuario(this.login, this.senha).subscribe((data: boolean) => {
      
      this.logado = data;
      console.log(data);

      if(this.logado)
      {        
        this.router.navigate(["products"]);
      }else {
        alert(this.login + ' '+ this.senha);
      }
    });
  }

  

}
