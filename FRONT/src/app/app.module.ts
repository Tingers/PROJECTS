import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContentComponent } from './components/template/content/content.component';
import { HeaderComponent } from './components/template/header/header.component';

import { UsuarioCadastrarComponent} from './components/views/usuario/usuario-cadastrar/usuario-cadastrar.component'
import { UsuarioListarComponent } from './components/views/usuario/usuario-listar/usuario-listar.component';
import { UsuarioDeletarComponent } from './components/views/usuario/usuario-deletar/usuario-deletar.component';
import { UsuarioEditarComponent } from './components/views/usuario/usuario-editar/usuario-editar.component';
import { JogoListarComponent } from './components/views/jogo/jogo-listar/jogo-listar.component';
import { JogoDeletarComponent } from './components/views/jogo/jogo-deletar/jogo-deletar.component';
import { JogoEditarComponent } from './components/views/jogo/jogo-editar/jogo-editar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JogoCadastrarComponent } from './components/views/jogo/jogo-cadastrar/jogo-cadastrar.component';
import { PerfilMobaListarComponent } from './components/views/perfilMoba/perfil-moba-listar/perfil-moba-listar.component';
import { PerfilMobaCadastrarComponent } from './components/views/perfilMoba/perfil-moba-cadastrar/perfil-moba-cadastrar.component';
import { MatchComponent } from './components/views/match/match.component';
import { MatchViewComponent } from './components/views/match-view/match-view.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioCadastrarComponent,
    UsuarioListarComponent,
    UsuarioDeletarComponent,
    UsuarioEditarComponent,
    JogoListarComponent,
    JogoCadastrarComponent,
    JogoDeletarComponent,
    JogoEditarComponent,
    PerfilMobaListarComponent,
    PerfilMobaCadastrarComponent,
    ContentComponent,
    HeaderComponent,
    MatchComponent,
    MatchViewComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
