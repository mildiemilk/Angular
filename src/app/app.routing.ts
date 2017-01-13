
/**
 * Created by mildiemilk on 12/19/2016 AD.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//
// import { PageListComponent } from './pages';
// import { HomeComponent } from './home'

const appRoutes: Routes = [
  // { path: '',      component: HomeComponent },
  // { path: 'pages', component: PageListComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
