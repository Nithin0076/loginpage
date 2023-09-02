import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  model: any = {}; // This object will hold the form data
  constructor(private router: Router) { }

  onSubmit() {
    // Here, you can handle form submission
    // You can access the form data in this.model
    // For example, you can send it to a backend API for registration
    console.log('Registration form submitted:', this.model);
  }
  back(){
    this.router.navigate(['/auth']);
  }
}
