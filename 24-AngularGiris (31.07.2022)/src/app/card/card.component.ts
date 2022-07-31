import { Component, OnInit, Input } from '@angular/core';
import {ICARD} from "../ICARD";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() post: ICARD = {
  title:'',
  imageUrl:'',
  username:'',
  content:''
}
  constructor() { }

  ngOnInit(): void {
  }

}
