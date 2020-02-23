import { Component, OnInit } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {RandomizerComponent} from '../randomizer/randomizer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openStartModal() {
    this.modalRef = this.modalService.show(RandomizerComponent);
  }
}
