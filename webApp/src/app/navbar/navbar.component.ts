import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: './navbar.component.html',
}) 
export class NavComponent
{
    website = 'iSolution';

    constructor(private router: Router , private route: ActivatedRoute)
    {

    }
}
