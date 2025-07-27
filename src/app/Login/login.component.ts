import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-salacine',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class loginComponent implements AfterViewInit {
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

  }

  register(){

  }

  ngAfterViewInit(): void {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    if (signUpButton && container) {
      signUpButton.addEventListener('click', () => container.classList.add("right-panel-active"));
    }
    if (signInButton && container) {
      signInButton.addEventListener('click', () => container.classList.remove("right-panel-active"));
    }
  }

}
