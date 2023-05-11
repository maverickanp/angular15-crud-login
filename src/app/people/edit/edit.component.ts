import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/person';
import { PersonService } from '../shared/person.service';
import { PersonDataService } from '../shared/person-data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit{
  person: Person = new Person();
  key: string = '';

  constructor(private personService: PersonService, private personDataService: PersonDataService) { }

  ngOnInit(): void {
    this.person = new Person();
  }

  onSubmit(){
    console.log('this.key:',this.key)
    if(this.key){
      this.personService.update(this.person, this.key);
    }else {
      this.personService.insert(this.person);
    }

    this.person = new Person();
    console.log('Cadastro de pessoa');
    console.log(this.person);
  }

}
