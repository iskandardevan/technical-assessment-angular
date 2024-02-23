import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: any[] = [
    { username: 'devan', password: 'Qinetics100%' },
    { username: 'admin', password: 'admin' }
  ];

  session: any;
  constructor(private router: Router) {
    let session: any = localStorage.getItem('session');
    if (session) {
      this.session = JSON.parse(session);
    }
    // this.session ? swal.fire('Welcome', this.session.username , 'success') : swal.fire('Not Authorized', 'You need to login first', 'info')

  }

  login(username: string, password: string) {
    let user = this.users.find(
      (u)=> u.username === username && u.password === password
    );

    if (user) {
      this.session = user;
      localStorage.setItem('session', JSON.stringify(this.session));
    }
    return user;
  }

  logout() {
    this.session = null;
    localStorage.removeItem('session');
    this.router.navigateByUrl('/');
  }
}
