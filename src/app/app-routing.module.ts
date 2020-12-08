import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { AuthGuardService } from './auth-guard.service';
import { CanDeactivateGuardService } from './can-deactivate-guard.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent}
  ]},
  { path: 'servers', canActivateChild: [AuthGuardService] ,component: ServersComponent, children: [
    { path: ':id', component: ServerComponent},
    { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuardService]}
  ]},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
