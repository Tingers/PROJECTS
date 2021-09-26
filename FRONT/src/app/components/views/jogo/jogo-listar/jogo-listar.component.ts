import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/app/models/Jogo';
import { JogoService } from 'src/app/services/jogo.service';

@Component({
  selector: 'app-jogo-listar',
  templateUrl: './jogo-listar.component.html',
  styleUrls: ['./jogo-listar.component.css']
})
export class JogoListarComponent implements OnInit {
  jogos: Jogo[] = [];

  constructor(private service: JogoService) { }

  ngOnInit(): void {
    this.service.list().subscribe((jogos)=>{
      this.jogos = jogos;
    });
  }

}
