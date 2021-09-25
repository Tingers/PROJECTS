import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JogoService } from "src/app/services/jogo.service";
import { Jogo } from "src/app/models/jogo";

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {
  idjogo!: number;
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
      this.idjogo = params.idjogo;
      if(this.idjogo != undefined){
        this.service.getById(this.idjogo).subscribe((jogo)=>{
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

    editar(): void{
      let jogo: Jogo = {
        idjogo: this.idjogo,
        nome: this.nome,
        genero: this.genero,
        plataforma: this.plataforma,
      }
    }
}
