import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { EquipoService } from './equipo.service';
import { EquipoComponent } from './equipo/equipo.component';
import { CardPokeComponent } from './card-poke/card-poke.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { MonkeyStyleGuideModule } from 'monkey-style-guide';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UppercasePipe } from './pipes/uppercase.pipe';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'equipo/:id', component: EquipoComponent },
  { path: 'us', component: NosotrosComponent },
  // { path: 'home', component: InicioComponent },
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    InicioComponent,
    NosotrosComponent,
    EquipoComponent,
    CardPokeComponent,
    UppercasePipe
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    MonkeyStyleGuideModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  providers: [EquipoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
