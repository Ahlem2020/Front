
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SubjectComponent } from './subject/subject.component';
import { TraningComponent } from './traning/traning.component';
import { UniversitiesComponent } from './universities/universities.component';
import { JobComponent } from './job/job.component';
import { EventDonnationComponent } from './Event/event-donnation/event-donnation.component';
import { JackpotDonnationComponent } from './Event/jackpot-donnation/jackpot-donnation.component';
import { EventComponent } from './Event/event/event.component';
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    SubjectComponent,
    TraningComponent,
    UniversitiesComponent,
    JobComponent,
    EventDonnationComponent,
    JackpotDonnationComponent,
    EventComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
