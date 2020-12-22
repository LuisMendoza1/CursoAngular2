import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [
    AppComponent,
    InformacionComponent,
    ContactoComponent,
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuicklinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
