import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Jogo } from 'src/app/models/jogo';
import { JogoService } from 'src/app/services/jogo.service';

@Component({
  selector: 'app-jogo-deletar',
  templateUrl: './jogo-deletar.component.html',
  styleUrls: ['./jogo-deletar.component.css']
})
export class JogoDeletarComponent implements OnInit {

  id!: number;
  jogo!: Jogo;

  private routeSub: Subscription = new Subscription();

  constructor(private service: JogoService, private route: ActivatedRoute) { }

  // constructor() { }

  ngOnInit(): void {
   console.log(this.id);
    this.routeSub = this.route.params.subscribe(params =>{
      this.id = params['id'];
    });
   this.service.getById(this.id).subscribe((jogo) =>{
   this.jogo = jogo;
  });
}

  deletarJogo(): void{
    console.log(this.id);
    this.service.deleteById(this.id).subscribe((jogo) =>{
      this.jogo = jogo;
    })
  }
}