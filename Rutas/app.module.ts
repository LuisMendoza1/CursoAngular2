import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations/';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { DashboardUsersComponent } from './components/dashboard-users/dashboard-users.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/inicio/inicio.component'

const rutas: Routes = [
  {
    path: '',
    pathMatch: 'full', // path principal
    redirectTo: 'inicio'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
/*       {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'users'
      }, */
      {
        path: 'users',
        component: DashboardUsersComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DashboardComponent,
    DashboardUsersComponent,
    HeaderComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(rutas, {
      enableTracing: true,
      paramsInheritanceStrategy: 'always',
      useHash: true
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
