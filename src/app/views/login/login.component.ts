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
