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

  Id!: number;
  eloLOL!: string;
  Champ!: string;
  LaneMain!: string;
  LaneSecundaria!: string;
  idJogo!: number; 
  jogos: Jogo[] = [];
  IdUsuario!: number;

    constructor(
      private service: PerfilMobaService,
      private jogoService: JogoService,
      private router: Router,
      private route: ActivatedRoute
    ) { }

    private routeSub: Subscription = new Subscription();

    ngOnInit(): void {
      this.route.params.subscribe((params)=>{
          this.IdUsuario = params.id;
      });
      this.jogoService.list().subscribe((jogos: Jogo[]) => {
        this.jogos = jogos;
      });
    }

    cadastrar(): void{

      this.IdUsuario = 1;

      let perfilmoba: PerfilMoba ={
          idUsuario: this.IdUsuario,
          idJogo: this.idJogo,
          eloLOL: this.eloLOL,
          Champ: this.Champ,
          LaneMain: this.LaneMain,
          laneSecundaria: this.LaneSecundaria
      };

      this.service.create(perfilmoba).subscribe((perfilmoba)=>{
        console.log(perfilmoba);
        this.router.navigate(["perfilMoba/listar"]);
      });

      
    }
}
