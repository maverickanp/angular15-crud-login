import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Person } from '../shared/person';
import { PersonService } from '../shared/person.service';
import { PersonDataService } from '../shared/person-data.service';
import { ActivatedRoute, ParamMap, Router  } from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit{
private fb: FormBuilder  = new FormBuilder();

  personForm = this.fb.group({
    name: ['', Validators.required],
    age: [0],
    phone: [''],
  });

  person: Person = {
    name: '',
    age: 0,
    phone: '',
    key: '',
  };
  key: string = '';

  constructor(
    private personService: PersonService,
    private personDataService: PersonDataService,
    private route: ActivatedRoute,
    private router: Router
    ) { }


  ngOnInit(): void {
    this.person = new Person();
    this.person = this.personService.getOne(this.key) as any;
    console.log('this.person:',this.person);
    this.personDataService.currentPerson.subscribe(data => {
      if(data.person && data.key){
        this.person = new Person();
        this.person.name = data.person.name;
        this.person.age = data.person.age;
        this.person.phone = data.person.phone;
        this.key = data.key;
      }
    })
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log('params:',params)
      this.key = this.route.snapshot.paramMap.get('key') || '';
    })
  }

  onSubmit(){
    console.log('this.key:',this.key)

    const person = new Person();
    person.name = this.personForm.value.name!;
    person.age = this.personForm.value.age!;
    person.phone = this.personForm.value.phone!;
    person.key = this.key;

    console.log('Cadastro de pessoa');
    if(this.key){
      this.personService.update(person, this.key);
      this.router.navigateByUrl('/person');
    } else  {
      this.personService.insert(person);
      //console.log(this.personForm.value);
    }
  }

}
