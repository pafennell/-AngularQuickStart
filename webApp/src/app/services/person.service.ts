import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';
import {Person} from '../app.person';

@Injectable()

export class PersonService
{
    constructor(private http: Http){
        console.log('Service Running');
    }

    getPerson()
    {
        return this.http.get('http://localhost:2744/api/Person')
            .map((response: Response) => <any[]>response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));         
    }

    addPerson(body: Person, options: Headers) {
        return this.http.post('http://localhost:2744/api/Person', body, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }   


  
}