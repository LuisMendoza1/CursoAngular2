import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { AtributosyeventosComponent } from './components/atributosyeventos/atributosyeventos.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { InputoutputComponent } from './components/inputoutput/inputoutput.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { FormulariosComponent } from './components/formularios/formularios.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    AtributosyeventosComponent,
    LoginComponent,
    InputoutputComponent,
    UsuarioComponent,
    FormulariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
