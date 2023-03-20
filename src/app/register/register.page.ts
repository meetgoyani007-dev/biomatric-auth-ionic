import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  credential = {
    username: '',
    password: '',
  };

  constructor(private authService: AuthService, private route: Router) {}

  ngOnInit() {}

  signup() {
    let register = this.authService.register(this.credential);
    if (register) {
      this.route.navigate(['login']);
    } else {
      alert('Something went wrong while register');
    }
  }
}
