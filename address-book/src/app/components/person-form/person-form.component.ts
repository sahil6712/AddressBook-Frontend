import { Component } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-person-form',
  standalone: true,
  templateUrl: './person-form.component.html',
  styleUrl: './person-form.component.css'
})
export class PersonFormComponent {
  person: Person = { fullName: '', address: '', city: '', state: '', zipCode: '', phoneNumber: '' };

  constructor(private personService: PersonService) {}

  addPerson() {
    this.personService.addPerson(this.person).subscribe(() => {
      alert('Person added successfully');
      this.person = { fullName: '', address: '', city: '', state: '', zipCode: '', phoneNumber: '' };
    });
  }
}
