import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Mycomponents/login/login.component';
import { RegisterComponent } from './Mycomponents/register/register.component';
import { AuthComponent } from './Mycomponents/auth/auth.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }, // Route to your login page
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  // ...other routes
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
