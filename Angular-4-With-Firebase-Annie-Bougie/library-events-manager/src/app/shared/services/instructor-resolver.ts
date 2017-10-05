import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Rx";

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import { Instructor } from '../models';
import { InstructorsService } from './instructors.service';

@Injectable()
export class InstructorResolver implements Resolve<Instructor> {
  constructor(private instructorsService: InstructorsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Instructor>  {
    const username = route.params['username'];
    
    return this.instructorsService
    .getInstructorByUsername(route.params['username'])
    .first();
  }
}
