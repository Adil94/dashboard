import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRouter } from './app.routes';
import { AuthService } from './core/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouter,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  exports: [
    // RouterModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
