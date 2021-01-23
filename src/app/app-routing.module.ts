import { SignInComponent } from './sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuardGuard } from './auth-guard.guard';


const routes: Routes = [
  {
    path: 'home', 
    component: HomeComponent,
    canActivate:[AuthGuardGuard]
  },
  {
    path:'',
    redirectTo: 'sign-in', 
    pathMatch: 'full', 
  },
  {
    path:'sign-in',
    component: SignInComponent,
  }  
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
