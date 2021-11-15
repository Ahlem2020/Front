import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import{ RouterModule , Routes} from '@angular/router';
const appRoutes: Routes = [
  { 
   path:'home',
   component: HomeComponent,
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