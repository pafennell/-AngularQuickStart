import { Component } from '@angular/core';
import { PersonService } from '../services/person.service';


@Component({
    moduleId: module.id,
    selector: 'contact',
    templateUrl: './contact.component.html',

    providers: [PersonService]
})
export class ContactComponent {
    person: Person [] ;

    constructor(private service: PersonService) { }
    ngOnInit() {
        this.service.getPerson().subscribe(person => this.person = person),
            () => console.log("getAllItems() complete from init");
    }
}

interface Person {
    Address: string; 
    City : string;
    County : string;
    Email  : string;
    FirstName : string;  
    LastName : string;
    PersonID : number;
    State : string;
    Zip: string;
}
