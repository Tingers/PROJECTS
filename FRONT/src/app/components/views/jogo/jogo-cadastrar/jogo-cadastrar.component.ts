import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jogo } from 'src/app/models/jogo';
import { JogoService } from "src/app/services/jogo.service";

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo-cadastrar.component.html',
  styleUrls: ['./jogo-cadastrar.component.css']
})

export class JogoCadastrarComponent implements OnInit {
  Id!: number;
  nome!: string;
  genero!: string;
  plataforma!: string;


    constructor(
      private service: JogoService,
      private router: Router,
      private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
      this.route.params.subscribe((params)=>{
        this.Id = params.id;
        if(this.Id != undefined){
          this.service.getById(this.Id).subscribe((jogo)=>{
            this.nome = jogo.nome;
            this.genero = jogo.genero;
            this.plataforma = jogo.plataforma;
          });
        }
      });
    }

    cadastrar(): void{
      let jogo: Jogo ={
          nome: this.nome,
          genero: this.genero,
          plataforma: this.plataforma
      };
      this.service.create(jogo).subscribe((jogo)=>{
        console.log(jogo);
        this.router.navigate(["jogo/listar"]);
      });
    }

    
}
