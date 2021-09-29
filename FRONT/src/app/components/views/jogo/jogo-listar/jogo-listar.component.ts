import { Component, OnInit } from '@angular/core';
import { JogoService } from 'src/app/services/jogo.service';
import { Jogo } from 'src/app/models/jogo';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jogo-listar',
  templateUrl: './jogo-listar.component.html',
  styleUrls: ['./jogo-listar.component.css']
})
export class JogoListarComponent implements OnInit {

  colunasJogos: string[] = ['id', 'nome', 'genero', 'plataforma', 'editar', 'deletar'];
  jogosTable = new MatTableDataSource<Jogo>();
  jogos: Jogo[] = [];

  id!: number;
  jogo!: Jogo;

  constructor(private service: JogoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.list().subscribe((jogos) => {
      this.jogos = jogos;
    });
  }

}
