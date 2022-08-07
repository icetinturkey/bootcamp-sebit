import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = '';
  dt:string = '';
  height:number = 0;
  degistir(deger:string){
    this.name = deger;
  }
  tarih(deger:string){
    this.dt = deger;
  }
  boy(deger:string){
    this.height = parseFloat(deger);
  }
}
