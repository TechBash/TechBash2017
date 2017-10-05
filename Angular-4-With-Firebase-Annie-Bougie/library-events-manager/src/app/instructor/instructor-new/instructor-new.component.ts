import { Component, OnInit } from '@angular/core';
import { InstructorsService } from '../../shared/services/instructors.service';
import { MdSnackBar } from '@angular/material';
import {Observable} from "rxjs/Rx";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'instructor-new',
  templateUrl: './instructor-new.component.html',
  styleUrls: ['./instructor-new.component.scss']
})
export class InstructorNewComponent implements OnInit {

  constructor(
    private instructorsService: InstructorsService,
    private snackbar: MdSnackBar,
    private location: Location
  ) { }

  ngOnInit() {
    
  }

  save(form) {
    this.instructorsService.addNewInstructor(form.value)
      .subscribe(() => 
      {
        form.reset();
        this.snackbar.open('New instructor saved', 'Ok', {
          duration: 3000
        });
      });
  }

  goBack() {
    this.location.back();
  }

}
