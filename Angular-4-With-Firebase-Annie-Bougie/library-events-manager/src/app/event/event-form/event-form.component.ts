import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit, OnChanges {

  form: FormGroup;
  @Input()
  initialValue:any;
  
    constructor(private formBuilder: FormBuilder) {
      this.form = this.formBuilder.group({
        name: ['', Validators.required],
        url: ['', Validators.required],
        imageUrl: [''],
        description: ['', Validators.required]
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
