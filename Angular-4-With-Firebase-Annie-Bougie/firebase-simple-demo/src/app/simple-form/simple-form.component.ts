import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  form: FormGroup;
  event: any;
  pathToObject = '/events/0';


  constructor(
    private formBuilder: FormBuilder,
    private db: AngularFireDatabase
  ) {
    this.db.object(this.pathToObject).subscribe(x => {
      this.event = x;
      console.log(x);
    });


    this.form = this.formBuilder.group({
      name: ['']
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.updateEvent(this.form.value);
  }

  updateEvent(event) {
    this.db.object(this.pathToObject).set(event);
  }

  like() {
    this.db.object(this.pathToObject).update({like: 'someone likes this'});
  }
}
