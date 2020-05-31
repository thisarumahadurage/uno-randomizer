import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LOCAL_STORAGE} from '@ng-toolkit/universal';

@Injectable({
  providedIn: 'root'
})
export class OutcomeService {

  constructor(private http: HttpClient, @Inject(LOCAL_STORAGE) public localStorage: any) {
  }

  getOutcomes() {
    return this.http.get('assets/json/outcomes.json');
  }

  getLocalOutcomes() {
    return JSON.parse(this.localStorage.getItem('outcomes'));
  }
}
