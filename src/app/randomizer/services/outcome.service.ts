import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OutcomeService {

  constructor(private http: HttpClient) { }

  getOutcomes() {
    return this.http.get('assets/json/outcomes.json');
  }
}
