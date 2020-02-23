import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-outcomes',
  templateUrl: './outcomes.component.html',
  styleUrls: ['./outcomes.component.scss']
})
export class OutcomesComponent implements OnInit {
  outcomeForm: FormGroup;
  outcomes: any[] = [];

  constructor(public bsModalRef: BsModalRef, private fb: FormBuilder) {
  }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('outcomes'))) {
      this.outcomes = JSON.parse(localStorage.getItem('outcomes'));
    }

    this.outcomeForm = this.fb.group({
      title: ['', [Validators.required, Validators.max(20)]],
      description: ['', [Validators.required, Validators.max(50)]],
    });
  }

  submit() {
    this.outcomes.push(this.outcomeForm.value);
    this.outcomeForm.reset();
    localStorage.setItem('outcomes', JSON.stringify(this.outcomes));
  }

  delete(id) {
    this.outcomes.splice(id, 1);
    localStorage.setItem('outcomes', JSON.stringify(this.outcomes));
  }
}
