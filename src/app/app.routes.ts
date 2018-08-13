import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './core/auth.guard';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'user', component: UserComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(rootRouterConfig) ],
  exports: [ RouterModule ]
})
export class AppRouter {}
