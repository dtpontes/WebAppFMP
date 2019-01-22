import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from './../paciente/paciente';
import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';


@Component({
  selector: 'app-paciente-add',
  templateUrl: './paciente-add.component.html',
  styleUrls: ['./paciente-add.component.scss']
})
export class PacienteAddComponent implements OnInit {
  private paciente : Paciente ;

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) {

    this.paciente = new Paciente();
    this.paciente.cidadeId = 1;
    this.paciente.dataCadastro = '01/01/2019';
    

   }

  ngOnInit() {
  }

  salvarPaciente() {
    //this.rest.addPaciente(this.paciente);
    this.rest.addPaciente(this.paciente).subscribe((result) => {
      console.log("Deu cero"); 
  });
  }

}
