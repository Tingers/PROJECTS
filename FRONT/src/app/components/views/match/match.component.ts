import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { MatchService } from 'src/app/services/match.service';
import { PerfilMobaService } from 'src/app/services/perfil-moba.service';
import { PerfilMoba } from 'src/app/models/perfilMoba';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  //usuario
  idUsuario!: number;
  elo!: string;

  //usuario
  usuarios: Usuario[] = [];

  PerfilMoba: PerfilMoba[] = [];
  // perfil!: PerfilMoba;


    constructor(
      private service: MatchService,
      private UsuarioService: UsuarioService,
      private perfilMobaService: PerfilMobaService,
      private router: Router,
      private route: ActivatedRoute
    ) { }

    private routeSub: Subscription = new Subscription();

    ngOnInit(): void {
      this.UsuarioService.list().subscribe((usuarios: Usuario[]) => {
        this.usuarios = usuarios;
      });
    }


    getById(): void{
    
      this.service.getById(this.idUsuario).subscribe((perfilMoba: PerfilMoba[])=>{
        this.PerfilMoba = perfilMoba;
        this.elo = perfilMoba[0].eloLOL;
        this.router.navigate(["match/listar/" + this.elo]);
      });
    }

}
