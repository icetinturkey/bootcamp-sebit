import { Component } from '@angular/core';
import {Person} from "./person";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
employees : Person[] = [];
AddPersonel(n:string):void{
  let np : Person = {name:n};
  this.employees.push(np);
  console.log(this.employees);
}
}
