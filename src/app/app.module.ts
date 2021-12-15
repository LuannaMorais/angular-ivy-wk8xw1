import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    InicioComponent,
    CarrinhoComponent,
    QuemSomosComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
