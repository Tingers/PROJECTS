import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from "src/app/services/usuario.service";
import { Usuario} from "src/app/models/usuario";

@Component({
  selector: 'app-usuario-cadastrar',
  templateUrl: './usuario-cadastrar.component.html',
  styleUrls: ['./usuario-cadastrar.component.css']
})
export class UsuarioCadastrarComponent implements OnInit {
  Id!: number;
  nome!: string;
  idade!: number;
  pais!: string;
  GoldData:any;

  constructor(
    private service: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {}

  cadastrar(): void{
    let usuario: Usuario={
        nome: this.nome,
        idade: this.idade,
        pais: this.pais
    };
    this.service.create(usuario).subscribe((usuario)=>{
      console.log(usuario)

      
        this.GoldData=usuario.Id
        console.log(this.GoldData)
      
      this.router.navigate(["usuario/listar"]);
    });
  }


  

}