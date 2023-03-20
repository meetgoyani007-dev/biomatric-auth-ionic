import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credential = {
    username: '',
    password: '',
  };

  constructor(
    private authService: AuthService,
    private route: Router,
    private faio: FingerprintAIO
  ) {}

  ngOnInit() {}

  login() {
    if (this.credential.username == '' || this.credential.password == '') {
      alert(' Username or Password missing');
    } else {
      let loginSuccess = this.authService.login(this.credential);
      if (loginSuccess) {
        this.faio
          .isAvailable()
          .then((result: any) => {
            console.log(result);

            this.faio
              .show({
                cancelButtonTitle: 'Cancel',
                description: 'Some biometric description',
                disableBackup: true,
                title: 'Scanner Title',
                fallbackButtonTitle: 'FB Back Button',
                subtitle: 'This SubTitle',
              })
              .then((result: any) => {
                alert(result);
                this.route.navigate(['dashboard']);
              })
              .catch((error: any) => {
                console.log(error);
                alert('Match not found!');
              });
          })
          .catch((error: any) => {
            console.log(error);
          });
      } else {
        alert('Invalid Username or Password');
      }
    }
  }
}
