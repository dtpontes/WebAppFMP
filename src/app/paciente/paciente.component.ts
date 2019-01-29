import { DialogService } from './../Shared/dialog.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';
import { Paciente } from './paciente';
import { MatSort, MatTableDataSource , MatPaginator,  } from '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip';



@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent implements OnInit {

  pacientes : MatTableDataSource<Paciente> ;
  displayedColumns: string[] = ['pacienteId','nome','endereco','cpf','creditos','actionsColumn']; 
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  constructor(public rest:RestService, 
    private route: ActivatedRoute, 
    private router: Router,
    private dialogService: DialogService)  {
  }

  ngOnInit() {
    this.getPacientes();
  }

  getPacientes() {
    this.rest.getPacientes().subscribe(
      list => {
        console.log(list);
        let array = list;
        this.pacientes = new MatTableDataSource(array);
        this.pacientes.sort = this.sort;
        this.pacientes.paginator = this.paginator;
        this.pacientes.filterPredicate = (data, filter) => {
          return this.displayedColumns.some(ele => {
            console.log(data[ele]);
            console.log(ele);

            return ele != 'actions' &&  data[ele] !=null && data[ele].toString().toLowerCase().indexOf(filter) != -1;
          });
        };
      });
  }
  

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {    
    this.pacientes.filter = this.searchKey;
  }

  inserirPaciente() {
    this.router.navigate(['/paciente-add']);
  }

  editarPaciente(paciente:Paciente) {
    console.log(paciente.pacienteId);
    this.router.navigate(['/paciente-edit/'+paciente.pacienteId]);
  }

  utilizarCredito(paciente:Paciente) {
    
    

    this.dialogService.openConfirmDialog("Deseja utilizar o crédito do paciente?").
    afterClosed().subscribe(res=> {
      if(res){
        this.rest.utilizarCredito(paciente).subscribe((result) => {
          //this.router.navigate(['/paciente']);
          this.getPacientes();
        }, (err) => {
          console.log(err);
        });
      }
    });
  }

}
