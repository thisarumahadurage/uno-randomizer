import {Component, OnInit, Inject} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {OutcomeService} from './services/outcome.service';
import {OutcomeModel} from './models/outcome.model';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';

@Component({
  selector: 'app-randomizer',
  templateUrl: './randomizer.component.html',
  styleUrls: ['./randomizer.component.scss']
})
export class RandomizerComponent implements OnInit {
  outcome: any = {title: '', description: ''};
  outcomes: OutcomeModel[];

  constructor(@Inject(LOCAL_STORAGE) private localStorage: any, public bsModalRef: BsModalRef, private outcomeService: OutcomeService) {
  }

  ngOnInit() {
    console.log(this.outcome);
  }

}
