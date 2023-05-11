import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonDataService {
  private peopleSource = new BehaviorSubject({person: new Person(), key: ''});
  currentPerson = this.peopleSource.asObservable();

  constructor() { }

  changePerson(person: Person, key: string) {
    this.peopleSource.next(
      {person: person, key: key}
    );
  }

}
