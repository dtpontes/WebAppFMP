import { Paciente } from './../paciente/paciente';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paciente-edit',
  templateUrl: './paciente-edit.component.html',
  styleUrls: ['./paciente-edit.component.scss']
})
export class PacienteEditComponent implements OnInit {

  paciente : any ;

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.paciente ={};
    this.rest.getPacientePorId(this.route.snapshot.params['id']).subscribe((data: {}) => {
       this.paciente = data;
    });
  }

  updatePaciente() {
    this.rest.updatePaciente(this.route.snapshot.params['id'], this.paciente).subscribe((result) => {
      this.router.navigate(['/paciente']);
    }, (err) => {
      console.log(err);
    });
  }

  voltar() {
    //this.rest.addPaciente(this.paciente);
    
      this.router.navigate(['/paciente']);
  
  }

}
