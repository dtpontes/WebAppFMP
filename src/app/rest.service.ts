import { Paciente } from './paciente/paciente';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

//const endpoint = 'http://webapi.marianapontes.com.br/api/';
const endpoint = 'https://localhost:44385/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})



export class RestService {

  constructor(private http: HttpClient) { }

  mostrarMenuEmitter = new EventEmitter<boolean>();

  private extractData(res: Response) {
    let body = res;
    return body;
  }

  
  
  getProduct(id): Observable<any> {
    return this.http.get(endpoint + 'values/' + id).pipe(
      map(this.extractData));
  }
  
  addProduct (product): Observable<any> {        
      return this.http.post<any>(endpoint + 'products', JSON.stringify(product), httpOptions).pipe(
      tap((product) => console.log(`added product w/ id=${product.id}`)),
      catchError(this.handleError<any>('addProduct'))
    );
  }
  
  updateProduct (id, product): Observable<any> {      
    return this.http.put(endpoint + 'values/' + id, JSON.stringify(product), httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }
  
  deleteProduct (id): Observable<any> {
    return this.http.delete<any>(endpoint + 'products/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<any>('deleteProduct'))
    );
  }

  //USUARIO
  getUsuario(login, senha): boolean {
    var retornoGet : boolean ;
    this.http.get(endpoint + 'usuario/getLoginSenha?login=' + login +'&senha='+senha).subscribe((x : boolean)=> retornoGet = x);
    console.log(retornoGet);
    return null;
  }

  //PAciente

  utilizarCredito (paciente): Observable<any> {  
    console.log('paciente') ;
    console.log(paciente) ;   
    return this.http.put(endpoint + 'paciente/UtilizarCredito/' + paciente.pacienteId, JSON.stringify(paciente), httpOptions).pipe(
      tap(_ => console.log(`Crédito atualizado id=${paciente.pacienteId}`)),
      catchError(this.handleError<any>('updatePaciente'))
    );
  }

  getPacientes(): Observable<any> {
    return this.http.get(endpoint + 'paciente').pipe(
      map(this.extractData));
  }

  addPaciente (paciente: Paciente): Observable<any> { 
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');   
    console.log(JSON.stringify(paciente));    
    console.log(endpoint + 'values');   
    return this.http.post<Paciente>(endpoint + 'paciente', JSON.stringify(paciente), httpOptions).pipe(
    tap((paciente) => console.log(`added paciente w/ id=${paciente.pacienteId}`)),
    catchError(this.handleError<any>('addPaciente'))
  );
}

getPacientePorId(id): Observable<any> {
  return this.http.get(endpoint + 'paciente/' + id).pipe(
    map(this.extractData));
}

updatePaciente (id, paciente): Observable<any> {      
  return this.http.put(endpoint + 'paciente/' + id, JSON.stringify(paciente), httpOptions).pipe(
    tap(_ => console.log(`updated paciente id=${id}`)),
    catchError(this.handleError<any>('updatePaciente'))
  );
}

getEstados(): Observable<any> {
  return this.http.get(endpoint + 'paciente/ObterEstados').pipe(
    map(this.extractData));
}

getCidadePorIdEstado(id): Observable<any> {
  return this.http.get(endpoint + 'paciente/ObterCidadesPorIdEstado/' + id).pipe(
    map(this.extractData));
}

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log("passei aqui");
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
