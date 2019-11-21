import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AgendarcitaComponent } from './components/agendarcita/agendarcita.component';
import { NovedadescitaComponent } from './components/novedadescita/novedadescita.component';
import { HistoriacitaComponent } from './components/historiacita/historiacita.component';
import { EditarnovedadescitaComponent } from './components/editarnovedadescita/editarnovedadescita.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';

//services
import { DataApiService } from './services/data-api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AgendarcitaComponent,
    NovedadescitaComponent,
    HistoriacitaComponent,
    EditarnovedadescitaComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    Page404Component
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
