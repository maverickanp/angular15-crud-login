import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private authService: AuthService, private router: Router) { }


  signOut() {
    this.authService.logout().then((res: any) => {
      this.router.navigateByUrl('/login');
    }).catch((error: any) => {
      console.log(error);
    });
  }

}
