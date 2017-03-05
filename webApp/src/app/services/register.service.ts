import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import { Person } from '../app.person';

@Injectable()

export class RegisterService
{
    person: Person;
    http: Http;
    constructor(private _http: Http)
    {
        this.http = _http;
        console.log('Service Running');
    }

    register(person: Person)
    {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('http://localhost:2744/api/Person/AddUser', { person: JSON.stringify(person) },
            {headers: headers,
        }).map(res => res.json()); 
    }

}