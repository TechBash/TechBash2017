import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Instructor } from '../../shared/models';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InstructorsService } from '../../shared/services';
import { MdSnackBar, MdDialog } from '@angular/material';
import {Location} from '@angular/common';

@Component({
  selector: 'app-instructor-edit',
  templateUrl: './instructor-edit.component.html',
  styleUrls: ['./instructor-edit.component.scss']
})
export class InstructorEditComponent implements OnInit {
  instructor: Instructor;

  constructor(
      private route: ActivatedRoute,
      private instructorsService: InstructorsService,
      private snackbar: MdSnackBar,
      private location: Location
    ) { 

    route.data
        .subscribe(
        data => this.instructor = data['instructor']
    );
  }

  ngOnInit() {
    
  }

  save(instructor) {
    this.instructorsService.updateInstructor(this.instructor.$key, instructor)
      .subscribe(() => {
        this.snackbar.open('Instructor saved', 'Ok', {
          duration: 3000
         });
      });
  }

  goBack() {
    this.location.back();
  }
    
}
