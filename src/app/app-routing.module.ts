import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JoinComponent } from './components/share/join/join.component';
import { DriverComponent } from './components/share/driver/driver.component';
import { DonateComponent } from './components/share/donate/donate.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'join', component: JoinComponent },
  { path: 'driver', component: DriverComponent },
  { path: 'donate', component: DonateComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
