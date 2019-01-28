import { Cidade } from './../paciente/cidade';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from './../paciente/paciente';
import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Estado } from '../paciente/estado';
import {MatGridListModule} from '@angular/material/grid-list';



@Component({
  selector: 'app-paciente-add',
  templateUrl: './paciente-add.component.html',
  styleUrls: ['./paciente-add.component.scss']
})
export class PacienteAddComponent implements OnInit {
  private paciente : Paciente ;
  private estados : Estado[] ;
  private cidades : Cidade[] ;

  private estadoSelecionado: any;
  private cidadeSelecionada: any;


  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) {

    this.paciente = new Paciente();
    this.paciente.cidadeId = 1;
    this.paciente.dataCadastro = '01/01/2019';   

   }

  ngOnInit() {
   this.getEstados();
  }

  salvarPaciente() {
    //this.rest.addPaciente(this.paciente);
    this.rest.addPaciente(this.paciente).subscribe((result) => {
      this.router.navigate(['/paciente']);
  });
  }

  getEstados() {
    this.estados = [];
    this.rest.getEstados().subscribe((data: []) => {
      console.log(data);
      this.estados = data;          
      
    });    
  }

  carregarEstados()
  {
    if(this.estadoSelecionado != null){
      this.getCidadesPorIdEstado();
    }
    else{
      this.cidades = [];
    }
    
  }

  getCidadesPorIdEstado() {
    this.cidades = [];
    this.rest.getCidadePorIdEstado(this.estadoSelecionado).subscribe((data: []) => {
      console.log(data);
      this.cidades = data;          
      
    });    
  }

  voltar() {
    //this.rest.addPaciente(this.paciente);
    
      this.router.navigate(['/paciente']);
  
  }


}
