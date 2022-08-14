import { Component, OnInit } from '@angular/core';
import {BlogService} from "../services/blog.service";
import {MatDialog} from "@angular/material/dialog";
import {BlogDialogComponent} from "./blog-dialog/blog-dialog.component";

/*
interface Blog{
  title:string,
  body:string,
  imageId:number,
  userId:number,
  id:number
}
*/
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogData:Array<any> = [];
  page=13;
  pageSize=8;
  constructor(private blogService:BlogService,public dialog:MatDialog) { }

  ngOnInit(): void {
    this.getBlogList();
  }
  openDialog(element:any,update:any){
    const dialogRef = this.dialog.open(BlogDialogComponent,{
      //width:'450px',
      data:{blog:element,isUpdate:update}
    });
    dialogRef.afterClosed().subscribe(()=>{
      //this.getBlogList(); HEPSINI CEKMEK ISTERSEK
    });
  }
  getBlogList(){
    this.blogService.getPosts().subscribe((res) => {
      this.blogData=res;
    });
  }
}
