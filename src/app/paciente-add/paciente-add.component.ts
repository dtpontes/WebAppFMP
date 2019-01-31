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

    
    
  }

  ngOnInit() {
   
  }

  salvarPaciente() {
    //this.rest.addPaciente(this.paciente);
    this.rest.addPaciente(this.paciente).subscribe((result) => {
      this.router.navigate(['/paciente']);
  });
  }

  

  voltar() {
    //this.rest.addPaciente(this.paciente);
    
      this.router.navigate(['/paciente']);
  
  }


}
