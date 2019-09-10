import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { MentorComponent } from './mentor/mentor.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule, MatButtonModule, MatInputModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    StudentComponent,
    MentorComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent
    
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/