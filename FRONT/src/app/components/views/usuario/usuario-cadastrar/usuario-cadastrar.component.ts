import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from "src/app/services/usuario.service";
import { Usuario} from "src/app/models/usuario";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class JogoComponent implements OnInit {
  idusuario!: number;
  nome!: string;
  idade!: number;
  pais!: string;

  constructor(
    private service: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.idusuario= params.idusuario;
      if(this.idusuario!= undefined){
        this.service.getById(this.idusuario).subscribe((usuario)=>{
          this.nome = usuario.nome;
          this.idade = usuario.idade;
          this.pais = usuario.pais;
        });
      }
    });
  }

  cadastrar(): void{
    let usuario: Usuario={
        nome: this.nome,
        idade: this.idade,
        pais: this.pais
    };
    this.service.create(usuario).subscribe((usuario)=>{
      console.log(usuario);
      this.router.navigate(["usuario/listar"]);
    });
  }

    editar(): void{
      let usuario: Usuario= {
        idusuario: this.idusuario,
        nome: this.nome,
        idade: this.idade,
        pais: this.pais,
      }
    }
}
