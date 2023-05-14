import { Component,OnInit } from '@angular/core';
import { Person } from '../shared/person';
import { PersonService } from '../shared/person.service';
import { Table } from 'primeng/table';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  isAuthenticated: any = false;

  persons: any[] = [];

  loading: boolean = false;

  constructor(public authService: AuthService, private personService: PersonService, private router: Router) {}

  ngOnInit() {
    this.authService.currentAuthStatus.subscribe(authStatus => this.isAuthenticated = authStatus);
    this.personService.getAll().subscribe((persons) => {
      this.persons = persons.map((person) => {
        return {
          name: person.name,
          age: person.age,
          phone: person.phone,
          key: person.key,
        };
      });

      console.log('list people:',persons);
    });
  }
  clear(table: Table) {
    table.clear();
  }

  load() {
      this.loading = true;

      setTimeout(() => {
          this.loading = false
      }, 2000);
  }
}
