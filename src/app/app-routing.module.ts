import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import{ RouterModule , Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component'
import { SubjectComponent } from './subject/subject.component';
import { TraningComponent } from './traning/traning.component';
import { UniversitiesComponent } from './universities/universities.component';
import { JobComponent } from './job/job.component';
import { EventComponent } from './Event/event/event.component';
import { EventDonnationComponent } from './Event/event-donnation/event-donnation.component';
import { JackpotDonnationComponent } from './Event/jackpot-donnation/jackpot-donnation.component';
const appRoutes: Routes = [
  { 
   path:'Home',
   component: HomeComponent,
  },
  { 
    path:'login',
    component: LoginComponent,
   },
   { 
    path:'Signup',
    component: SignUpComponent,
   },
   { 
    path:'Subject',
    component: SubjectComponent,
   },
   { 
    path:'Training',
    component: TraningComponent,
   },
   { 
    path:'Universities',
    component: UniversitiesComponent,
   },
   { 
    path:'Job',
    component: JobComponent,
   },
   { 
    path:'Event',
    component: EventComponent,
   },
   { 
    path:'EventDonation',
    component: EventDonnationComponent,
   },
   { 
    path:'JackPot',
    component: JackpotDonnationComponent,
   },
  

];

@NgModule({
 declarations: [],
 imports: [
     RouterModule.forRoot(appRoutes),
         ],
  exports: [RouterModule]
})
export class AppRoutingModule { }