import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { loginComponent } from "./Login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MenuComponent } from './menu/menu.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { SalaComponent } from './sala/sala.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [
    RouterOutlet, 
    loginComponent, 
    DashboardComponent, 
    MenuComponent,
    PeliculaComponent,
    SalaComponent,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'salacine';
}
