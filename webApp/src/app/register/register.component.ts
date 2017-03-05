import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Component, OnInit, Input } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Person } from '../app.person';

@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: './register.component.html',
    providers: [RegisterService]
})
export class RegisterComponent implements OnInit
{
   @Input() person: Person;
   responseStatus: Object = [];
    constructor(private service: RegisterService) { }

    ngOnInit()
    {
        this.person = new Person();
        this.person.FirstName = "";
        this.person.LastName = "";
        this.person.Address = "";
        this.person.City = "";
        this.person.State = "";
        this.person.County = "";
        this.person.Email = "";
        this.person.PersonID = 0;
        this.person.Zip = "";
    }

    registerUser()
    {
        this.service.register(this.person).subscribe(
            data => console.log(this.responseStatus = data),
            err => console.log(err),
            () => console.log('Request Completed')
        );  
    }
    
   

}

//this.person.FirstName = this.FirstName;
//this.person.LastName = this.LastName;
//this.person.Address = this.Address;
//this.person.City = this.City;
//this.person.County = this.County;
//this.person.Email = this.Email;
//this.person.State = this.State;
//this.person.Zip = this.Zip;
