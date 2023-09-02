import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  constructor(private router: Router) { }


  login() {
    // Implement your login logic here
    console.log('working');
    this.router.navigate(['/login']);
    console.log('again working');
  }

  register() {
    // Implement your register logic here
    this.router.navigate(['/register']);
    console.log('Register button clicked');
  }
}
