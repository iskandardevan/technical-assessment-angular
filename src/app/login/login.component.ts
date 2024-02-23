import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup = this.fb.group({
    username: ['',  Validators.required],
    password: ['',  Validators.required]
  });
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
    ) { }
  login(){
    let user = this.authService.login(this.form.value.username, this.form.value.password);
    if (!user) {
      swal.fire('Not Authorized', 'username or password is incorrect', 'error');
      this.form.reset();
    } else {
      this.router.navigate(['/admin']);
    }
  }
}
