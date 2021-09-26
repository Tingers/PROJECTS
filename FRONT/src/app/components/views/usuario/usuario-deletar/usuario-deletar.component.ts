import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-usuario-deletar',
  templateUrl: './usuario-deletar.component.html',
  styleUrls: ['./usuario-deletar.component.css']
})
export class UsuarioDeletarComponent implements OnInit {

  Id!: number;
  usuario!: Usuario;

  private routeSub: Subscription = new Subscription();

  constructor(private service: UsuarioService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params =>{
      this.Id = params['id'];
    });
    this.service. getById(this.Id).subscribe((usuario) =>{
      this.usuario = usuario;
    });
  }

  deletarUsuario(): void{
    this.service.deleteById(this.Id).subscribe((usuario) =>{
      this.usuario = usuario;
    })
  }
}
