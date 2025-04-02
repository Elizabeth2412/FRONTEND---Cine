import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SalaService } from '../sala.service';
import { Sala, SalaCreacion } from '../../sala.models';

@Component({
  selector: 'app-sala',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {
  private readonly formBuilder = inject(FormBuilder)
  salaService = inject(SalaService);
  salas: Sala[] = []

  constructor(private router: Router) { }

  form = this.formBuilder.group({
    nombre:[''],
    estado: ['']
  })

  ngOnInit(): void{
    this.listarSala();
  }

  crearSala(){
    //console.log('Datos de la sala:', this.form.value);
    let sala = this.form.value as SalaCreacion;
    this.salaService.crear(sala).subscribe(()=>{
      this.listarSala();
      window.location.reload();
    });
  }

  editarSala(){

  }

  eliminarSala(id: number){
    this.salaService.eliminar(id).subscribe(()=>{
      this.listarSala();
      location.reload();
    })
  }

  listarSala(){
    this.salaService.obtener().subscribe(data => {
      this.salas = data; 
      console.log('Datos:', data);
    }, error => {
      console.error('Error al obtener salas', error);
    });
  }

  backInic(){
    this.router.navigate(['/menu']);
  }

}
