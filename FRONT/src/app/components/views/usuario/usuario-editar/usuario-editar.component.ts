import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent implements OnInit {

  usuario!: Usuario;
  id!: number;
  nome!: string;
  idade!: number;
  pais!: string;
  usuario2!: Usuario;

  constructor(
    private service: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
    private snack: MatSnackBar
  ) { }

  private routeSub: Subscription = new Subscription();

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.service.getById(this.id).subscribe((usuario)=>{
      this.usuario=usuario;
    })
  }

  editar(): void{
    // let jogo = new Jogo();
    this.usuario.id = this.id;
    this.usuario.nome = this.nome != null ? this.nome : this.usuario.nome;
    this.usuario.idade = this.idade != null ? this.idade : this.usuario.idade;
    this.usuario.pais = this.pais != null ? this.pais : this.usuario.pais;
    this.service.updateById(this.id, this.usuario).subscribe((usuario)=> {
      this.snack.open("Usuario editado", "Usuarios", {
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: "bottom"
      });
      this.router.navigate([""]);
    });
  }
}
