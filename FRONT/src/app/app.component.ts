import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: [],
})
export class AppComponent implements OnInit{

  produtos: Produto[] = [];

  constructor(private service: ProdutoService){}

  ngOnInit(): void{
    this.service.list()
  }
}
