import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private builder: FormBuilder, private service: AuthService, private router: Router,
    private toastr: ToastrService) {}

  registerform = this.builder.group({
    id: ['', [Validators.required, Validators.minLength(5)]],
    name: ['', Validators.required],
    password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    email: ['', [Validators.required, Validators.email]],
    gender: ['male'],
    role: ['user'],
    isactive: [true]
  });

  proceedregister() {
    if (this.registerform.valid) {
      this.service.RegisterUser(this.registerform.value).subscribe({
        next: () => {
          this.toastr.success('Registered successfully. Please login.', 'Success');
          this.router.navigate(['/login']);
        },
        error: () => {
          this.toastr.error('Registration failed.');
        }
      });
    } else {
      this.toastr.warning('Please enter valid data.');
    }
  }
}
