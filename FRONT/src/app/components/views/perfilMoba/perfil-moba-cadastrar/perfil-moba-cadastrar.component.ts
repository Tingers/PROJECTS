import { Component, ElementRef, OnInit, ViewChild, NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilMobaService } from "src/app/services/perfil-moba.service";
import { PerfilMoba} from "src/app/models/perfilMoba";
import { Jogo } from 'src/app/models/jogo';
import { JogoService } from 'src/app/services/jogo.service';

@Component({
  selector: 'app-perfil-moba-cadastrar',
  templateUrl: './perfil-moba-cadastrar.component.html',
  styleUrls: ['./perfil-moba-cadastrar.component.css']
})
export class PerfilMobaCadastrarComponent implements OnInit {
//   // idJogador!: number;
//   // idJogo!: number;
//   // Id!: number;
//   nomeJogo!: string;
//   eloLOL!: string;
//   champ!: string;
//   laneMain!: string;
//   LaneSec!: string;

//   jogos: Jogo[] = [];
//   perfil!: PerfilMoba;

// constructor(
//     private service: PerfilMobaService,
//     private jogoService: JogoService,
//     private router: Router,
//     private route: ActivatedRoute
//   ) { }

//   ngOnInit(): void {
//     this.jogoService.list().subscribe((jogos) => {
//       this.jogos = jogos;
//       console.log(jogos)
//     });
//   }

//   cadastrar(): void{
      

    
//     this.service.create(this.perfil).subscribe((perfil)=>{
//       console.log(perfil);
//     });

  Id!: number;
  eloLOL!: string;
  Champ!: string;
  LaneMain!: string;
  LaneSecundaria!: string;
  idJogo!: number; 
  nomeJogo!: string;
  jogos: Jogo[] = [];

  jogo!: Jogo;
  plataforma: string | undefined;
  genero: string | undefined;
  nome: string | undefined;
  perfilmoba = [];

    constructor(
      private service: PerfilMobaService,
      private jogoService: JogoService,
      private router: Router,
      private route: ActivatedRoute
    ) { }

    ngOnInit(): void {

      this.jogoService.list().subscribe((jogos: Jogo[]) => {
        this.jogos = jogos;
        console.log(jogos)
      });
      this.route.params.subscribe((params)=>{
        this.Id = params.id;
        if(this.Id != undefined){
          this.service.getById(this.Id).subscribe((PerfilMoba)=>{
            this.eloLOL = PerfilMoba.eloLOL;
            this.Champ = PerfilMoba.Champ;
            this.LaneMain = PerfilMoba.LaneMain;
            this.LaneSecundaria = PerfilMoba.laneSecundaria;
          });
        }
      });
    }

    cadastrar(): void{

      this.jogoService.getById(this.idJogo).subscribe((jogo)=>{
        this.jogo = jogo;
        console.log(this.jogo);
        // this.jogoTeste = this.jogo;
      });

    
      let perfilmoba: PerfilMoba ={
          jogo: this.jogo,
          eloLOL: this.eloLOL,
          Champ: this.Champ,
          LaneMain: this.LaneMain,
          laneSecundaria: this.LaneSecundaria
      };

      //  this.jogoService.getById(this.idJogo).subscribe((jogo)=>{
      //     let perfilmoba: PerfilMoba ={
      //       jogo: jogo,
      //       eloLOL: this.eloLOL,
      //       Champ: this.Champ,
      //       LaneMain: this.LaneMain,
      //       laneSecundaria: this.LaneSecundaria
      //     };
          
      // });

      this.service.create(perfilmoba).subscribe((perfilmoba)=>{
        console.log(perfilmoba);
        // this.router.navigate(["perfilMoba/listar"]);
      });

      
    }
}
