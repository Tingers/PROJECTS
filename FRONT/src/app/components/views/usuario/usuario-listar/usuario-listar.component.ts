import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private service: UsuarioService) { }

  ngOnInit(): void {
    this.service.list().subscribe((usuarios)=>{
      this.usuarios = usuarios;
    });
  }

}
