import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { Instructor } from "../../shared/models";
import { InstructorsService } from "../../shared/services/";
import { DataSource } from '@angular/cdk/collections';
import { CollectionViewer } from '@angular/cdk/collections';

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.css']
})
export class InstructorListComponent implements OnInit {

  instructors$ : Observable<Instructor[]>

  constructor(private instructorService: InstructorsService) { }

  ngOnInit() {
    this.instructors$ = this.instructorService.getAllInstructors();
    
  }

}

export class InstructorDataTableSource extends DataSource<Instructor> {
  connect(collectionViewer: CollectionViewer): Observable<Instructor[]> {
    throw new Error("Method not implemented.");
  }
  disconnect(collectionViewer: CollectionViewer): void {
    throw new Error("Method not implemented.");
  }

}