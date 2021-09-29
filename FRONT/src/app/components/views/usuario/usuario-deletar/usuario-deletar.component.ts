import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private service: UsuarioService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    console.log(this.Id);
      this.routeSub = this.route.params.subscribe(params =>{
        this.Id = params['id'];
      });
    this.service.getById(this.Id).subscribe((usuario) =>{
    this.usuario = usuario;
    });
  }

  deletarUsuario(): void{
    console.log(this.Id);
    this.service.deleteById(this.Id).subscribe((usuario) =>{
      this.usuario = usuario;
      this.router.navigate(["usuario/listar"]);
    })
  }
}
