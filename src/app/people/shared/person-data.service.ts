import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonDataService {
  private personSource = new BehaviorSubject({person: new Person(), key: ''});
  currentPerson = this.personSource.asObservable();

  constructor() { }

  changePerson(person: Person, key: string) {
    this.personSource.next(
      {person: person, key: key}
    );
  }

}
