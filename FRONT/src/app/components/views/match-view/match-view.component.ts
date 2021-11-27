import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PerfilMoba } from 'src/app/models/perfilMoba';
import { Usuario } from 'src/app/models/usuario';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-view',
  templateUrl: './match-view.component.html',
  styleUrls: ['./match-view.component.css']
})
export class MatchViewComponent implements OnInit {

  colunasPerfil: string[] = ['nome', 'idade', 'pais', 'eloLOL', 'Champ', 'LaneMain', 'LaneSecundaria'];
  perfilsTable = new MatTableDataSource<PerfilMoba>();

  elo!: string;
  perfils: PerfilMoba[] = [];
  usuarios: Usuario[] = [];
  perfil!: PerfilMoba;

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
    this.service.getAll(this.elo).subscribe((perfils)=>{
      this.perfils = perfils;
    });

  }
}
