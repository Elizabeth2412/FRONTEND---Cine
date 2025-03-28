import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-salacine',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class loginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {
    // this.username = '';
    // this.password = '';
  }

  login() {
    // Verificar si las credenciales son correctas
    if (this.username === 'admin' && this.password === '1234') {
      this.router.navigate(['/menu']); // Redirige a la página /menu
    } else {
      alert('Usuario o contraseña incorrectos'); // Alerta en caso de error
    }
  
  // login() {
  //   if (!this.username || !this.password) {  
  //     alert('Por favor, completa todos los campos'); 
  //     return; 
  //   }
  
  //   if (this.username === 'admin' && this.password === '1234') { 
  //     this.router.navigate(['/menu']); 
  //   } else {
  //     alert('Usuario o contraseña incorrectos');
  //   }
  }
  
}
