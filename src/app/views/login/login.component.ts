import { Component, OnInit } from '@angular/core';
import { Validators,FormControl,FormGroup } from '@angular/forms';
import { Button } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { Panel } from 'primeng/panel';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  // isAuthenticated: {
  //   "uid": "iZWVQR9CpJaMl3MX7Sb80p041bp2",
  //   "email": "apedrosa.dev@gmail.com",
  //   "emailVerified": true,
  //   "displayName": "Artur Pedrosa",
  //   "isAnonymous": false,
  //   "photoURL": "https://lh3.googleusercontent.com/a/AGNmyxYdWnnLU9IBjbvWZ5dtCEEBx1l8CirswrzivuqE9RA=s96-c",
  //   "providerData": [
  //     {
  //       "providerId": "google.com",
  //       "uid": "102939012001837561133",
  //       "displayName": "Artur Pedrosa",
  //       "email": null,
  //       "phoneNumber": null,
  //       "photoURL": "https://lh3.googleusercontent.com/a/AGNmyxYdWnnLU9IBjbvWZ5dtCEEBx1l8CirswrzivuqE9RA=s96-c"
  //     }
  //   ],
  //   "stsTokenManager": {
  //     "refreshToken": "APZUo0SfqQRyWZpKjd_Wpo9RWChWlAy3m2syvhz9v5Ugx8lvnUWhE2sQ4bmXaGTtn9iIpLG9DcQto28t-aWfoR2si6FnxPKsQzV244mqeahkVEME1RrN19dnQgvnXANdsZuUmk329nTkL0x2XgvozJkUqu_y_nUMCwnVtuOHY7kuNe49Cb3S_X2L5GzX8Po5oj1Vfd2YwK0OGmds9aVwxyA8WVqlIAgS6vhf7Lo60PHiAqO5W5wcrp1fbdkKYHHof-0xM9zVZxsvS7AATwARoeCbkvimAKXVwYRGE8ziQ45AoaJ2MQDa4-UJLLKqFV_S4QiePnqT6PyEBuelQhsmRfvB7kqWVGnzJyTDvnhQzQuaKu3SJkHXmlJy9qmmG_0nzaxiMUHsch1xczi0oHpxjitegWt3qnHdFA",
  //     "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFiYjI2MzY4YTNkMWExNDg1YmNhNTJiNGY4M2JkYjQ5YjY0ZWM2MmYiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQXJ0dXIgUGVkcm9zYSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BR05teXhZZFdubkxVOUlCamJ2V1o1ZHRDRUVCeDFsOENpcnN3cnppdnVxRTlSQT1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9hbmd1bGFyLWNydWQtbG9naW4iLCJhdWQiOiJhbmd1bGFyLWNydWQtbG9naW4iLCJhdXRoX3RpbWUiOjE2ODM5NTk1NzIsInVzZXJfaWQiOiJpWldWUVI5Q3BKYU1sM01YN1NiODBwMDQxYnAyIiwic3ViIjoiaVpXVlFSOUNwSmFNbDNNWDdTYjgwcDA0MWJwMiIsImlhdCI6MTY4Mzk1OTU3MiwiZXhwIjoxNjgzOTYzMTcyLCJlbWFpbCI6ImFwZWRyb3NhLmRldkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwMjkzOTAxMjAwMTgzNzU2MTEzMyJdLCJlbWFpbCI6WyJhcGVkcm9zYS5kZXZAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.rtCnJ2IXemuIl95lq2gSshxo2nD8qe2yXzCs1tARUne6Xj9p3O6BcMYO2NZwjBJSe28IaX1K5T2lm2GajEThN1t5vo0jlPWczmmAFluF7K_JiEzSnkApbt858iAnUIwQq1LRbDxqm4hJAFprWlNmauP_jlC7RkcwM6wK0TP5xbHFzMuBKHwLts2yodY9ZqgWtAvRdm7735rj7Aso7UHbb-80v2LqYR1kabV5dkTPQFpl9JUX-gmWagKc0xfKJsVrDSFfqLY1p31OWPMTa31vr1iFQjYuqoW_BHckBqFX9caQzhd_4jqUAFcI_am07a76BYdIWLZW3gsCi9EhLzbhpw",
  //     "expirationTime": 1683963171780
  //   },
  //   "createdAt": "1683875721778",
  //   "lastLoginAt": "1683959572340",
  //   "apiKey": "AIzaSyDGlA5A-jGwqxJxOJKB6upZTju3NXk7JHs",
  //   "appName": "[DEFAULT]"
  // }

  isAuthenticated: any = false;
  userStatus: boolean = false;

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(public authService: AuthService, private router: Router) {
    this.authService.currentAuthStatus.subscribe(authStatus => this.isAuthenticated = authStatus)
  }

  ngOnInit(){
    console.log('isAuthenticated:',JSON.stringify(this.isAuthenticated,null,2));
    //this.userStatus = this.authService.getUser();
  }

  loginWithGoogle() {
    this.authService.signInWithGoogle().then((res: any) => {
    }).catch((error: any) => {
      console.log(error);
    });
  }
  logOut() {
    this.authService.logout().then((res: any) => {
      this.router.navigateByUrl('/login');
    }).catch((error: any) => {
      console.log(error);
    });
  }

}
