import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'buokulcalismasi3';
  isimler:string[]=[
    "Ali Başarır", "Musa Dağ", "Ayşe Yılmaz", "Can Tosun"
  ];
}
