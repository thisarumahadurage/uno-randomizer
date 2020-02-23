import {Component, OnInit} from '@angular/core';
import {OutcomeService} from '../randomizer/services/outcome.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  outcomes: any[] = [];

  constructor(private outcomeService: OutcomeService) {
  }

  ngOnInit() {
    this.outcomeService.getOutcomes().subscribe(res => {
      this.outcomes = res as any[];
    });

  }

}
