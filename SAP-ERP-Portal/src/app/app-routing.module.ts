import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './customer/login/login.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'clogin', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
