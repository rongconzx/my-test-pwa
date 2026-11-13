import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  isDarkTheme = false;
  title = 'Angular Barcode Scanner and Validator Using Observable (RxJS)';
  fork = 'FORK ME!';

  constructor() {
    this.isDarkTheme = false;
  }

}
