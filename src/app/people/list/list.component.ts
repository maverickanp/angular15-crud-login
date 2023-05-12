import { Component,OnInit } from '@angular/core';
import { Person } from '../shared/person';
import { PersonService } from '../shared/person.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  persons: Person[] = [];

  loading: boolean = false;

  constructor(private customerService: PersonService) {}

  ngOnInit() {
    this.customerService.getAll().subscribe((customers) => {
      console.log(customers);
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
