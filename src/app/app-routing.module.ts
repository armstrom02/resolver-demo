import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ResolverNameService } from './resolver-name.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Dashboard' }
  },
  {
    path: 'users',
    component: UserComponent,
    resolve: {
      users: ResolverNameService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
