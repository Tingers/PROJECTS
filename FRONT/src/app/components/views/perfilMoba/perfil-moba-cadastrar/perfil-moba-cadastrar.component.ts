import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from './../../../../models/usuario';
import { Component, ElementRef, OnInit, ViewChild, NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilMobaService } from "src/app/services/perfil-moba.service";
import { PerfilMoba} from "src/app/models/perfilMoba";
import { Jogo } from 'src/app/models/jogo';
import { JogoService } from 'src/app/services/jogo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-perfil-moba-cadastrar',
  templateUrl: './perfil-moba-cadastrar.component.html',
  styleUrls: ['./perfil-moba-cadastrar.component.css']
})
export class PerfilMobaCadastrarComponent implements OnInit {

  //perfil
  Id!: number;
  eloLOL!: string;
  Champ!: string;
  LaneMain!: string;
  LaneSecundaria!: string;
  idJogo!: number; 
  idUsuario!: number;

  //jogo
  jogos: Jogo[] = [];

  //usuario
  usuarios: Usuario[] = [];


    constructor(
      private service: PerfilMobaService,
      private jogoService: JogoService,
      private UsuarioService: UsuarioService,
      private router: Router,
      private route: ActivatedRoute
    ) { }

    private routeSub: Subscription = new Subscription();

    ngOnInit(): void {
      this.jogoService.list().subscribe((jogos: Jogo[]) => {
        this.jogos = jogos;
      });
      this.UsuarioService.list().subscribe((usuarios: Usuario[]) => {
        this.usuarios = usuarios;
      });
    }

    cadastrar(): void{
      let perfilmoba: PerfilMoba ={
          idUsuario: this.idUsuario,
          idJogo: this.idJogo,
          eloLOL: this.eloLOL,
          Champ: this.Champ,
          LaneMain: this.LaneMain,
          laneSecundaria: this.LaneSecundaria
      };

      this.service.create(perfilmoba).subscribe((perfilmoba)=>{
        this.router.navigate(["perfilMoba/listar"]);
      });

      
    }
}
