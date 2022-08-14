import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import { FormGroup, Validators, FormControl } from '@angular/forms';
import {BlogService} from "../../services/blog.service";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-blog-dialog',
  templateUrl: './blog-dialog.component.html',
  styleUrls: ['./blog-dialog.component.css']
})
export class BlogDialogComponent implements OnInit {
  isUpdate:boolean=false;
  blogElement:any;
  resimUrl:string='';
  baslik:string='';
  icerik:string='';
  commentDta:any;

  form = new FormGroup({
    title:new FormControl(null,[Validators.required]),
    body:new FormControl(null,[Validators.required])
  });
  constructor(
    private blogService:BlogService,
    private commentService:CommentService,
    @Inject(MAT_DIALOG_DATA) private data:any,
    private dialogRef:MatDialogRef<BlogDialogComponent>
  ){
    if(data.isUpdate){
      this.isUpdate = data.isUpdate;
      this.form.patchValue({
        title:data.blog.title,
        body:data.blog.body
      });
      this.blogElement = data.blog;
    }else{
      this.resimUrl = data.blog.imageId.toString();
      this.baslik = data.blog.title;
      this.icerik = data.blog.body;
    }
  }

  ngOnInit(): void {
    this.commentService.getComments().subscribe((res)=>{
      this.commentDta = res.filter((x:{postId:any;}) => x.postId == this.data.blog.id)
    });
  }
  close(){
    this.dialogRef.close();
  }
  onSubmit(){
    const req = {
      title:this.form.get('title')?.value,
      body:this.form.get('body')?.value,
      imageId:this.data.blog.imageId,
      userId:this.data.blog.userId
    };
    this.blogService.updatePost(this.data.blog.id,req).subscribe((res) =>{
      this.blogElement.title = res.title;
      this.blogElement.body = res.body;
      this.close();
    });
  }
}
