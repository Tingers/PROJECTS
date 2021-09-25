import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './components/views/usuario/usuario.component';
import { JogoComponent } from './components/views/jogo/jogo.component';
import { ListarUsuarioComponent } from './components/views/usuario/listar-usuario/listar-usuario.component';
import { CadastrarUsuarioComponent } from './components/views/usuario/cadastrar-usuario/cadastrar-usuario.component';
import { DeletarUsuarioComponent } from './components/views/usuario/deletar-usuario/deletar-usuario.component';
import { EditarUsuarioComponent } from './components/views/usuario/editar-usuario/editar-usuario.component';
import { ListarJogoComponent } from './components/views/jogo/listar-jogo/listar-jogo.component';
import { CadastrarJogoComponent } from './components/views/jogo/cadastrar-jogo/cadastrar-jogo.component';
import { DeletarJogoComponent } from './components/views/jogo/deletar-jogo/deletar-jogo.component';
import { EditarJogoComponent } from './components/views/jogo/editar-jogo/editar-jogo.component';
import { UsuarioListarComponent } from './components/views/usuario/usuario-listar/usuario-listar.component';
import { UsuarioCadastrarComponent } from './components/views/usuario/usuario-cadastrar/usuario-cadastrar.component';
import { UsuarioDeletarComponent } from './components/views/usuario/usuario-deletar/usuario-deletar.component';
import { UsuarioEditarComponent } from './components/views/usuario/usuario-editar/usuario-editar.component';
import { JogoListarComponent } from './components/views/jogo/jogo-listar/jogo-listar.component';
import { JogoCadastrarComponent } from './components/views/jogo/jogo-cadastrar/jogo-cadastrar.component';
import { JogoDeletarComponent } from './components/views/jogo/jogo-deletar/jogo-deletar.component';
import { JogoEditarComponent } from './components/views/jogo/jogo-editar/jogo-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    JogoComponent,
    ListarUsuarioComponent,
    CadastrarUsuarioComponent,
    DeletarUsuarioComponent,
    EditarUsuarioComponent,
    ListarJogoComponent,
    CadastrarJogoComponent,
    DeletarJogoComponent,
    EditarJogoComponent,
    UsuarioListarComponent,
    UsuarioCadastrarComponent,
    UsuarioDeletarComponent,
    UsuarioEditarComponent,
    JogoListarComponent,
    JogoCadastrarComponent,
    JogoDeletarComponent,
    JogoEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
