import {AfterViewInit, Component, Renderer2} from '@angular/core';
import { version } from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'uno-randomizer';
  public version: string = version;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const loader = this.renderer.selectRootElement('#loader');
    loader.style.display = 'none';
  }
}
