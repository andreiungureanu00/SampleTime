import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RequestService } from 'src/app/services/RequestService/request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private requestService: RequestService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {}

  onFormSubmit() {
    if (this.loginForm.valid) {
      const postData: object = {
        user: {
          email: this.loginForm.value.email,
          password: this.loginForm.value.password,
        },
      };

      this.requestService.postRequest('users/sign_in', postData).subscribe({
        next: () => {
          this._snackBar.open('Successful Login', '', {
            horizontalPosition: 'center',
            verticalPosition: 'top',
            duration: 2000,
          });
        },
        error: (err) => {
          console.error(err);
          this._snackBar.open('Login Failed', '', {
            horizontalPosition: 'center',
            verticalPosition: 'top',
            duration: 2000,
          });
        },
      });

      this._snackBar.open('Successful Login', '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 2000,
      });

      setTimeout(() => {
        this.router.navigate(['/time']);
      }, 2000);
    }
  }

  getErrorMessage(field: string): string {
    if (field === 'email') {
      if (this.loginForm.controls['email'].hasError('required'))
        return 'Email is required';
      else if (this.loginForm.controls['email'].hasError('email'))
        return 'Invalid email';
    } else if (field === 'password') {
      if (this.loginForm.controls['password'].hasError('required'))
        return 'Password is required';

      return 'Password should have at least 5 characters';
    }
    return 'Invalid value';
  }
}
