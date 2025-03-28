import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {
  
  constructor(private router: Router) { }

  backInic(){
    this.router.navigate(['/menu']);
  }

}
