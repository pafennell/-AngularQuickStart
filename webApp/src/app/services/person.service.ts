import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';

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
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError)
            ;
           
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}