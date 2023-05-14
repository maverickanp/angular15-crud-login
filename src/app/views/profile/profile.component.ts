import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  isAuthenticated: any = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.currentAuthStatus.subscribe(authStatus => this.isAuthenticated = authStatus)
  }

}
