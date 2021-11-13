import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent implements OnInit {
  colunasUsuarios: string[] = ['id', 'nome', 'idade', 'pais', 'editar', 'deletar'];
  usuariosTable = new MatTableDataSource<Usuario>();
  usuarios: Usuario[] = [];

  id!: number;
  usuario!: Usuario;

  constructor(private service: UsuarioService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.list().subscribe((usuarios) => {
      this.usuarios = usuarios;
    });
  }

}
