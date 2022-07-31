import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() PersonelEvent=new EventEmitter<string>();
  AddPersonel(name:string):void{
    if(name)
     this.PersonelEvent.emit(name);
    else
      alert("Boş bırakılamaz !");
    (<HTMLInputElement>document.getElementById("ad")).value="";
  }
}
