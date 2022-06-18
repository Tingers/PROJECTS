import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JogoCadastrarComponent } from './components/views/jogo/jogo-cadastrar/jogo-cadastrar.component';
import { JogoDeletarComponent } from './components/views/jogo/jogo-deletar/jogo-deletar.component';
import { JogoEditarComponent } from './components/views/jogo/jogo-editar/jogo-editar.component';
import { JogoListarComponent } from './components/views/jogo/jogo-listar/jogo-listar.component';
//Usuario
import { UsuarioCadastrarComponent } from './components/views/usuario/usuario-cadastrar/usuario-cadastrar.component';
import { UsuarioDeletarComponent } from './components/views/usuario/usuario-deletar/usuario-deletar.component';
import { UsuarioEditarComponent } from './components/views/usuario/usuario-editar/usuario-editar.component';
import { UsuarioListarComponent } from './components/views/usuario/usuario-listar/usuario-listar.component';
import { PerfilMobaListarComponent } from './components/views/perfilMoba/perfil-moba-listar/perfil-moba-listar.component';
import { PerfilMobaCadastrarComponent } from './components/views/perfilMoba/perfil-moba-cadastrar/perfil-moba-cadastrar.component';
import { MatchComponent } from './components/views/match/match.component';
import { MatchViewComponent } from './components/views/match-view/match-view.component';
//Jogo

const routes: Routes = [

    //match
    {
      path: "match",
      component: MatchComponent,
    },
    {
      path: "match/listar/:elo",
      component: MatchViewComponent,
    },
    //USUARIO
    {
      path: "usuario/listar",
      component: UsuarioListarComponent,
    },
    {
        path: "usuario/editar/:id",
        component: UsuarioEditarComponent,
    },
    {
        path: "usuario/cadastrar",
        component: UsuarioCadastrarComponent,
    },
    {
      path: "usuario/deletar/:id",
      component: UsuarioDeletarComponent,
    },

    //JOGO
    {
      path: "jogo/listar",
      component: JogoListarComponent,
    },
    {
        path: "jogo/editar/:id",
        component: JogoEditarComponent,
    },
    {
        path: "jogo/cadastrar",
        component: JogoCadastrarComponent,
    },
    {
      path: "jogo/deletar/:id",
      component: JogoDeletarComponent,
    },

     //PERFIL
    {
      path: "perfilMoba/listar",
      component: PerfilMobaListarComponent,
    },
    {
      path: "perfilMoba/cadastrar",
      component: PerfilMobaCadastrarComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
