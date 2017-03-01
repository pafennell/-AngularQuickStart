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
<<<<<<< HEAD
        return this.http.get('http://localhost:2744/api/Person/')
            .map((res: Response) => res.json());
           
=======
        return this.http.get('http://localhost:4080/Services/PersonService.asmx/GetPeople')
            .map(res => res.json().catch((error: any) => Observable.throw(error.json().error || 'Server error'));     
>>>>>>> e23eb2371dd21d9e89e36721a8f3a1f64c083498
    }
}