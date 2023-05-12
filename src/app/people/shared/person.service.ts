import { Injectable } from '@angular/core';
import { Person } from './person';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private db: AngularFireDatabase) { }

  insert(person: Person){
    console.log('insert', 'add a new person');
    console.log(person);
    this.db.list('person').push(person)
      .then((result: any) => {
        console.log(result.key); //recover the key after insert
      });
  }

  update(person: Person, key: string){
    this.db.list('person').update(key, person)
      .catch((error: any) => {
        console.error(error);
      });
  }

  getAll(){
    return this.db.list('person')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(_ => ({ key: _.payload.key, ..._.payload.val() as {
            name: string;
            age: number;
            phone: string;
          } }));
        })
      );
  }

  delete(key: string){
    this.db.object(`person/${key}`).remove();
  }
}
