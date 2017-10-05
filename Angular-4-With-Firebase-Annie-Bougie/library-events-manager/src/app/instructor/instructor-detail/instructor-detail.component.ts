import { Component, OnInit } from '@angular/core';
import { Instructor } from '../../shared/models';
import { ActivatedRoute } from '@angular/router';
import { MdDialog, MdSnackBar } from '@angular/material';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { InstructorsService } from '../../shared/services';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-instructor-detail',
  templateUrl: './instructor-detail.component.html',
  styleUrls: ['./instructor-detail.component.scss']
})
export class InstructorDetailComponent implements OnInit {
  instructor$: Observable<Instructor>;
  instructor: Instructor;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      public dialog: MdDialog,
      private instructorsService: InstructorsService,
      private snackbar: MdSnackBar
    ) { 
      this.instructor = this.route.snapshot.data['instructor'];
      this.instructor$ = this.instructorsService.getInstructorByUsername(this.instructor.username);
      this.instructor$.subscribe(ins => this.instructor = ins);
    }

  ngOnInit() {
  }

  delete() {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { title: 'Delete Instructor', message: 'Do you want to delete this instructor?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.instructorsService.deleteInstructor(this.instructor.$key)
         .subscribe(
            () => {
              this.snackbar.open('Instructor was deleted', 'Ok', {
                duration: 3000
            });
            this.router.navigateByUrl('/home');
          },
            console.error
        );
      }
    });

  }

  like() {
    //this.instructorsService.like(this.instructor.$key, this.instructor.likes);
    this.instructorsService.addLike(this.instructor.$key);
  }
}
