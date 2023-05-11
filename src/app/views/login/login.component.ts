import { Component, OnInit } from '@angular/core';
import { Validators,FormControl,FormGroup } from '@angular/forms';
import { Button } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { Panel } from 'primeng/panel';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  loginWithGoogle() {
    this.authService.signInWithGoogle().then((res: any) => {
      this.router.navigateByUrl('/home');
    }).catch((error: any) => {
      console.log(error);
    });
  }

}