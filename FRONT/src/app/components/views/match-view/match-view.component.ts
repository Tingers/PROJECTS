import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PerfilMoba } from 'src/app/models/perfilMoba';
import { Usuario } from 'src/app/models/usuario';
import { MatchService } from 'src/app/services/match.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-match-view',
  templateUrl: './match-view.component.html',
  styleUrls: ['./match-view.component.css']
})
export class MatchViewComponent implements OnInit {

  elo!: string;
  PerfilMoba: PerfilMoba[] = [];

  constructor(
    private service: MatchService,
    private router: Router,
    private route: ActivatedRoute,
    private snack: MatSnackBar
  ) { }

  
  private routeSub: Subscription = new Subscription();

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.elo = params['elo'];
    });
    this.service.getAll(this.elo).subscribe((perfilMoba: PerfilMoba[])=>{
      this.PerfilMoba = perfilMoba;
      console.log(this.PerfilMoba)
    });
  }

}
