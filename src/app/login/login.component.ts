import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login(): void {
    if (this.username === 'user' && this.password === 'password') {
      localStorage.setItem('currentUser', JSON.stringify({ username: this.username }));
      this.router.navigate(['/chat']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
