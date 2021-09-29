import { Component, OnInit } from '@angular/core';
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
  // idJogador!: number;
  // idJogo!: number;
  // Id!: number;
  eloLOL!: string;
  champ!: string;
  laneMain!: string;
  laneSecundaria!: string;

   jogos: Jogo[] = [];

  constructor(
    private service: PerfilMobaService,
    private jogoService: JogoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.jogoService.list().subscribe((jogos) => {
      this.jogos = jogos;
      console.log(jogos)
    });
  }
    
}
