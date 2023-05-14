import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];
  isAuthenticated: any = false;

  json: any = {};
  constructor(public authService: AuthService, private router: Router) { }


  ngOnInit() {
    this.authService.currentAuthStatus.subscribe(authStatus => this.isAuthenticated = authStatus)
    this.items = [
      {
        label: 'Pessoas',
        icon: 'pi pi-fw pi-users',
        items: [
          {
            label: 'Novo',
            icon: 'pi pi-fw pi-user-plus',
            command: () => {this.router.navigateByUrl('/person/edit');},
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-user-minus'
          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'List',
                command: () => {this.router.navigateByUrl('/person');},
              }
            ]
          }
        ]
      },
      {
        label: 'User',
        icon: 'pi pi-fw pi-user',
        command: () => {this.router.navigateByUrl('/profile');},
      }
    ];
  }

  signOut() {
    this.authService.logout();
  }

  checkLoggedIn() {
    if (this.isAuthenticated) {
      return () => {
        return {
          label: 'User',
          icon: 'pi pi-fw pi-user',
          command: () => {this.router.navigateByUrl('/profile');},
        }

      }

    }
    return{};
  }

  ngOnDestroy() {
  }

}
