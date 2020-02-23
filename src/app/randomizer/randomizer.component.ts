import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {OutcomeService} from './services/outcome.service';
import {OutcomeModel} from './models/outcome.model';

@Component({
  selector: 'app-randomizer',
  templateUrl: './randomizer.component.html',
  styleUrls: ['./randomizer.component.scss']
})
export class RandomizerComponent implements OnInit {
  outcome: any = {title: '', description: ''};
  outcomes: OutcomeModel[];

  constructor(public bsModalRef: BsModalRef, private outcomeService: OutcomeService) {
  }

  ngOnInit() {
    console.log();
    this.getOutcomes();
  }

  // Retrieve all Outcomes from the JSON file
  getOutcomes() {
    this.outcomeService.getOutcomes().subscribe(res => {
      this.outcomes = res as OutcomeModel[];
      this.randomize();
    });
  }

  // Randomize the list and choose one outcome
  randomize() {
    const randomizeUntil = this.outcomes.length;
    const outcomeIndex = Math.floor(Math.random() * randomizeUntil);
    this.outcome = this.outcomes[outcomeIndex];
  }

}
