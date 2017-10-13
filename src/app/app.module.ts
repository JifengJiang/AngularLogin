import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule} from './app-routing.module';
import { AuthenticationService } from './login/authentication.service';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import {AlertService} from './_services/alert.service';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ResetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
