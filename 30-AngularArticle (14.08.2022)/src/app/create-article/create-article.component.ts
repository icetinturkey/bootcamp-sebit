import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ArticleService} from "../services/article.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  kadi:string='';
  baslik:string='';
  icerik:string='';
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '250px',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: false,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };
  constructor(private mesajKutusu:MatSnackBar,private articleService:ArticleService,private router:Router) { }

  ngOnInit(): void {
  }
  post(){
    if(this.kadi == '' || this.baslik == '' || this.icerik == ''){
      this.mesajKutusu.open('Lütfen tüm alanları doldurunuz.','Kapat');
    }else{
      let postObj={
        author:this.kadi,
        title:this.baslik,
        content:this.icerik,
        comments:[]
      };
      this.articleService.postArticle(postObj).subscribe((res) =>{
        //this.router.navigate(['/home']);
        this.router.navigateByUrl('home');
      });
    }
  }
}
