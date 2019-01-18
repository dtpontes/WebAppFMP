import { Component } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FMP';

  mostrarMenu : boolean = false;

  constructor(private restService:RestService){

  }

  ngOnInit(){
    console.log(this.restService.mostrarMenuEmitter);
    this.restService.mostrarMenuEmitter.subscribe(
      mostrar => {this.mostrarMenu = mostrar}
    );
  }

}
