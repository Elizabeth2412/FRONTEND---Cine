import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
  constructor(private router: Router) { }

  into(){
      this.router.navigate(['/dashboard']);
  }

  backInic(){
    this.router.navigate(['/menu']);
  }

}
