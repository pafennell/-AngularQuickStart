import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Component } from '@angular/core';
import { PersonService } from '../services/person.service';
import {Person} from '../app.person';

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

    addContact(person: Person) {
       
        this.service.addPerson(person, new Headers({ 'Content-Type': 'application/json' }));
    }

}


