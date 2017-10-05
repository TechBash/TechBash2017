import { Component, OnInit, SimpleChanges, OnChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'instructor-form',
  templateUrl: './instructor-form.component.html',
  styleUrls: ['./instructor-form.component.scss']
})
export class InstructorFormComponent implements OnInit, OnChanges {

  form: FormGroup;

  @Input()
  initialValue:any;

  constructor(private formBuilder: FormBuilder ) {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      name: ['', Validators.required],
      imageUrl: [''],
      bio: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required]
    });
   }

  ngOnInit() {
    
  }

  ngOnChanges(changes:SimpleChanges) {
    if (changes['initialValue']) {
        this.form.patchValue(changes['initialValue'].currentValue);
    }
  }

  reset() {
    this.form.reset();
  }


  get valid() {
    return this.form.valid;
  }

  get value() {
    return this.form.value;
  }

}
