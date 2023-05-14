import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ListComponent } from './people/list/list.component';
import { EditComponent } from './people/edit/edit.component';
import { ProfileComponent } from './views/profile/profile.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'home',
    component:HomeComponent
  },
  { path: 'person', component: ListComponent, canActivate: [AuthGuard] },
  { path: 'person/edit', component: EditComponent, canActivate: [AuthGuard] },
  { path: 'person/edit/:key', component: EditComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]
 },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
