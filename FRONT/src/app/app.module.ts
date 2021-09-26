import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './components/views/usuario/usuario.component';
import { JogoComponent } from './components/views/jogo/jogo.component';
import { UsuarioListarComponent } from './components/views/usuario/usuario-listar/usuario-listar.component';
import { UsuarioDeletarComponent } from './components/views/usuario/usuario-deletar/usuario-deletar.component';
import { UsuarioEditarComponent } from './components/views/usuario/usuario-editar/usuario-editar.component';
import { JogoListarComponent } from './components/views/jogo/jogo-listar/jogo-listar.component';
import { JogoDeletarComponent } from './components/views/jogo/jogo-deletar/jogo-deletar.component';
import { JogoEditarComponent } from './components/views/jogo/jogo-editar/jogo-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    JogoComponent,
    UsuarioListarComponent,
    UsuarioDeletarComponent,
    UsuarioEditarComponent,
    JogoListarComponent,
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
