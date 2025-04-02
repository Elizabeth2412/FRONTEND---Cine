import { Routes } from '@angular/router';
import { loginComponent } from './Login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { SalaComponent } from './sala/sala.component';

export const routes: Routes = [
    { path: '', component: loginComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'pelicula', component: PeliculaComponent },
    { path: 'sala', component: SalaComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
