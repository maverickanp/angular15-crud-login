import { Component,OnInit } from '@angular/core';
import { Person } from '../shared/person';
import { PersonService } from '../shared/person.service';
import { Table } from 'primeng/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  persons: any[] = [] as any;


  loading: boolean = false;

  constructor(private customerService: PersonService) {}

  ngOnInit() {
    this.customerService.getAll().subscribe((persons) => {
      this.persons = persons.map((person) => {
        return {
          name: person.name,
          age: person.age,
          phone: person.phone,
        };
      });

      console.log(persons);
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
