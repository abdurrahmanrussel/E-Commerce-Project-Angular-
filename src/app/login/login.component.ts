import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router
  ) {
    sessionStorage.clear();
  }

  loginform = this.builder.group({
    id: ['', Validators.required],
    password: ['', Validators.required]
  });

  proceedlogin() {
    if (this.loginform.valid) {
      const userId = this.loginform.value.id;
      this.service.GetUserbyCode(userId).subscribe({
        next: (data: any) => {
          if (data.length > 0) {
            const user = data[0];
            if (user.password === this.loginform.value.password) {
              if (user.isactive) {
                sessionStorage.setItem('username', user.id);
                sessionStorage.setItem('role', user.role);
                this.router.navigate(['']);
              } else {
                this.toastr.error('Please contact Admin', 'Inactive User');
              }
            } else {
              this.toastr.error('Invalid credentials');
            }
          } else {
            this.toastr.error('User not found');
          }
        },
        error: () => {
          this.toastr.error('Server error or user not found');
        }
      });
    } else {
      this.toastr.warning('Please enter valid data.');
    }
  }
}
