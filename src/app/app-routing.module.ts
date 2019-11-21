import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AgendarcitaComponent } from './components/agendarcita/agendarcita.component';
import { HistoriacitaComponent } from './components/historiacita/historiacita.component';
import { NovedadescitaComponent } from './components/novedadescita/novedadescita.component';
import { EditarnovedadescitaComponent } from './components/editarnovedadescita/editarnovedadescita.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';


const routes: Routes = [
  { path: 'user/login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'agendarcita/:id', component: AgendarcitaComponent },
  { path: 'historiacita/:id', component: HistoriacitaComponent },
  { path: 'novedadescita/:id', component: NovedadescitaComponent },
  { path: 'editarnovedadescita/:id', component: EditarnovedadescitaComponent },
  { path: 'user/register', component: RegisterComponent },
  { path: 'user/profile', component: ProfileComponent },
  { path: '**', component: Page404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
