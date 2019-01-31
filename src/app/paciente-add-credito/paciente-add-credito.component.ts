import { Paciente } from './../paciente/paciente';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';
import { PacienteCredito } from '../paciente/pacientecredito';

@Component({
  selector: 'app-paciente-add-credito',
  templateUrl: './paciente-add-credito.component.html',
  styleUrls: ['./paciente-add-credito.component.scss']
})
export class PacienteAddCreditoComponent implements OnInit {

  pacienteCredito : any ;
  paciente : any ;
  checkedTipoPagamento : boolean = true;

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.pacienteCredito = new PacienteCredito();
    this.paciente = new Paciente();
      this.rest.getPacientePorId(this.route.snapshot.params['id']).subscribe((data: {}) => {
        this.paciente = data;   

    });
    
  }

  adicionarCredito() {  
    this.pacienteCredito.compensado = this.checkedTipoPagamento;  
    
    console.log(this.pacienteCredito);
  //   this.rest.addPacienteCredito(this.pacienteCredito).subscribe((result) => {
  //     this.router.navigate(['/paciente']);
  // });
  }

  
  voltar() {
    //this.rest.addPaciente(this.paciente);
    
      this.router.navigate(['/paciente']);
  
  }

  OnChange($event){    
    this.checkedTipoPagamento =  $event.checked;
}

}
