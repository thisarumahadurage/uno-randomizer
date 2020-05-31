import {Component, Inject, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {RandomizerComponent} from '../randomizer/randomizer.component';
import {OutcomesComponent} from '../outcomes/outcomes.component';
import {OutcomeModel} from '../randomizer/models/outcome.model';
import {LOCAL_STORAGE} from '@ng-toolkit/universal';
import {OutcomeService} from '../randomizer/services/outcome.service';
import {version} from '../../../package.json';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public version: string = version;
  modalRef: BsModalRef;
  outcome: any = {title: '', description: ''};
  outcomes: OutcomeModel[];
  i = -1;

  constructor(private modalService: BsModalService,
              @Inject(LOCAL_STORAGE) private localStorage: any,
              private outcomeService: OutcomeService) {
  }

  ngOnInit() {
    this.getOutcomes();
  }

  // Open Start Randomizer
  openStartModal() {
    const initialState = {
      outcome: this.chooseOutcome()
    };
    this.modalRef = this.modalService.show(RandomizerComponent, {initialState});
  }

  // Open Add/View Outcome Modal
  openOutcomeDialog() {
    this.modalRef = this.modalService.show(OutcomesComponent);
  }

  // Retrieve all Outcomes from the JSON file
  getOutcomes() {
    this.outcomeService.getOutcomes().subscribe(res => {
      this.outcomes = res as OutcomeModel[];
      this.getOutcomesFromLocalStorage();
    });
  }

  // Retrieve all Outcomes from the user's local storage
  getOutcomesFromLocalStorage() {
    if (JSON.parse(this.localStorage.getItem('outcomes'))) {
      this.localStorage = JSON.parse(this.localStorage.getItem('outcomes'));
      for (const outcome of this.localStorage) {
        this.outcomes.push(outcome);
      }
      this.shuffle();
    } else {
      this.shuffle();
    }
  }

  // Put all outcomes after shuffling positions into an array
  shuffle() {
    for (let i = this.outcomes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.outcomes[i], this.outcomes[j]] = [this.outcomes[j], this.outcomes[i]];
    }
    console.log(this.outcomes);
  }

  // Choose outcome from the shuffled outcomes
  chooseOutcome() {
    if (this.outcomes.length - 1 <= this.i) {
      this.i = -1;
      this.shuffle();
    }
    this.i++;
    return this.outcomes[this.i];
  }

}
