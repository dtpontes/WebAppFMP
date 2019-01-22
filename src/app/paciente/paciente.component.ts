import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';
import { Paciente } from './paciente';


@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent implements OnInit {

  private pacientes : Paciente[] ;
  displayedColumns: string[] = ['pacienteId','nome','endereco','cpf','actionsColumn'];  

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router)  {

  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.pacientes = [];
    this.rest.getPacientes().subscribe((data: []) => {
      console.log(data);
      this.pacientes = data; 
      console.log(this.pacientes[0].endereco);    
      
    });    
  }

  inserirPaciente() {
    this.router.navigate(['/paciente-add']);
  }

  editarPaciente(paciente:Paciente) {
    console.log(paciente.pacienteId);
    this.router.navigate(['/paciente-edit/'+paciente.pacienteId]);
  }

}
