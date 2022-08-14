import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { ArticleService} from "../services/article.service";
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {
  articleId:any;
  articleData:Array<any> = [];
  kadi:string='';
  yorum:string='';
  constructor(private mesajKutusu:MatSnackBar,private route:ActivatedRoute,private articleService:ArticleService) { }

  ngOnInit(): void {
    this.articleId = this.route.snapshot.paramMap.get('articleIndex');
    this.articleService.getArticles().subscribe((res)=>{
      this.articleData = res;
    });
  }
  yorumEkle(){
    if(this.kadi == '' || this.yorum == ''){
      this.mesajKutusu.open('Lütfen tüm alanları doldurunuz.','Kapat');
    }else{
      let obje = {
        username:this.kadi,
        comment:this.yorum
      };
      this.articleData[this.articleId].comments.push(obje);
      this.articleService.updateArticle(this.articleData[this.articleId]).subscribe((res)=>{
        this.kadi = '';
        this.yorum = '';
      });
    }
  }

}
