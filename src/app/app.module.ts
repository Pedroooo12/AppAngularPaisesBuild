import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importamos el servicio http
import { HttpClientModule } from '@angular/common/http'

//importamos los modulos
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { PaisModule } from './pais/pais.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    PaisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
