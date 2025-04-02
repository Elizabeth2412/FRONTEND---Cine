import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculaService } from '../pelicula.service';
import { Pelicula, PeliculaCreacion } from '../pelicula.models';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//import { PeliculaService } from '../pelicula.service';

@Component({
  selector: 'app-pelicula',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css'
})
export class PeliculaComponent {
  private readonly formBuilder = inject(FormBuilder)
  peliService = inject(PeliculaService);
  peliculas: Pelicula[] = []

  constructor(private router: Router) { }

  form = this.formBuilder.group({
      nombre:[''],
      duracion: ['']
    })
  
    ngOnInit(): void{
      this.listarPeli();
    }
  
    crearPeli(){
      //console.log('Datos de la sala:', this.form.value);
      let peli = this.form.value as PeliculaCreacion;
      this.peliService.crear(peli).subscribe(()=>{
        this.listarPeli();
        location.reload();
      });
    }
  
    listarPeli(){
      this.peliService.obtener().subscribe(data => {
        this.peliculas = data; 
        console.log('Datos:', data);
      }, error => {
        console.error('Error al obtener salas', error);
      });
    }

    editarPeli(){

    }

    eliminarPeli(id: number){
      this.peliService.eliminar(id).subscribe(()=>{
        this.listarPeli();
        location.reload();
      })
    }
  

  backInic(){
    this.router.navigate(['/menu']);
  }

}


