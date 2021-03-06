import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Jogo } from 'src/app/models/jogo';
import { Subscription } from 'rxjs';
import { JogoService } from 'src/app/services/jogo.service';

@Component({
  selector: 'app-jogo-editar',
  templateUrl: './jogo-editar.component.html',
  styleUrls: ['./jogo-editar.component.css']
})
export class JogoEditarComponent implements OnInit {

  jogo!: Jogo;
  Id!: number;
  nome!: string;
  genero!: string;
  plataforma!: string;
  jogo2!: Jogo;

  constructor(
    private service: JogoService,
    private router: Router,
    private route: ActivatedRoute,
    private snack: MatSnackBar
  ) { }

  private routeSub: Subscription = new Subscription();

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.Id = params['id'];
    });
    this.service.getById(this.Id).subscribe((jogo)=>{
      this.jogo=jogo;
    })
  }

  editar(): void{
    // let jogo = new Jogo();
    this.jogo.id = this.Id;
    this.jogo.nome = this.nome != null ? this.nome : this.jogo.nome;
    this.jogo.genero = this.genero != null ? this.genero : this.jogo.genero;
    this.jogo.plataforma = this.plataforma != null ? this.plataforma : this.jogo.plataforma;
    this.service.updateById(this.Id, this.jogo).subscribe((jogo)=> {
      this.snack.open("Jogo editado", "Jogos", {
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: "bottom"
      });
      this.router.navigate([""]);
    });
  }

}
