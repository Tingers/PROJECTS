import { Usuario } from './../../../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { PerfilMobaService } from "src/app/services/perfil-moba.service";
import { PerfilMoba} from "src/app/models/perfilMoba";
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Jogo } from 'src/app/models/jogo';
import { JogoService } from 'src/app/services/jogo.service';

@Component({
  selector: 'app-perfil-moba-listar',
  templateUrl: './perfil-moba-listar.component.html',
  styleUrls: ['./perfil-moba-listar.component.css']
})
export class PerfilMobaListarComponent implements OnInit {

  colunasPerfil: string[] = ['idJogo', 'idUsuario', 'eloLOL', 'Champ', 'LaneMain', 'LaneSecundaria'];
  perfilsTable = new MatTableDataSource<PerfilMoba>();
  perfils: PerfilMoba[] = [];
  jogos: Jogo[] = [];
  usuarios: Usuario[] =[];

  id!: number;
  perfil!: PerfilMoba;

  constructor(
    private service: PerfilMobaService, 
    private route: ActivatedRoute, 
    private jogoService: JogoService
  ) { }

  ngOnInit(): void {
     this.service.list().subscribe((perfils) => {
      this.perfils = perfils;
    });

  }

}
