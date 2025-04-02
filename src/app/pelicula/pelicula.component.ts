import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculaService } from '../pelicula.service';

@Component({
  selector: 'app-pelicula',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css'
})
export class PeliculaComponent {
  //peliculaService = inject(PeliculaService);
  //peliculas: any[] = [];
  constructor(private router: Router) { }

    // this.peliculaService.obtenerPeliculas().subscribe((pelicula) => {

    //   this.peliculas = pelicula;
    // });


  backInic(){
    this.router.navigate(['/menu']);
  }

}


