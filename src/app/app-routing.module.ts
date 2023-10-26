import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard' 
import { AlumnoComponent } from './components/alumno/alumno.component';
import { ProfesorComponent } from './components/profesor/profesor.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/main'},
  //Se hace un CanActivate para Redirigir desde el Main hacia register en caso de que el usuario no esté logeado
  {path: 'main', component: MainComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login']))},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'alumno', component: AlumnoComponent,...canActivate(()=> redirectUnauthorizedTo(['/login']))},
  {path: 'profesor', component: ProfesorComponent,...canActivate(()=> redirectUnauthorizedTo(['/login']))}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
