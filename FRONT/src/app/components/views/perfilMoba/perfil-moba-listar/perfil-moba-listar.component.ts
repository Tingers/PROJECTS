import { Component, OnInit } from '@angular/core';
import { PerfilMobaService } from "src/app/services/perfil-moba.service";
import { PerfilMoba} from "src/app/models/perfilMoba";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-moba-listar',
  templateUrl: './perfil-moba-listar.component.html',
  styleUrls: ['./perfil-moba-listar.component.css']
})
export class PerfilMobaListarComponent implements OnInit {

  // colunasPerfil: string[] = ['eloLOL', 'ChampFav', 'LaneMain', 'LaneSec'];
  // jogosTable = new MatTableDataSource<Jogo>();
  // jogos: Jogo[] = [];

  // id!: number;
  // jogo!: Jogo;

  constructor(private service: PerfilMobaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
