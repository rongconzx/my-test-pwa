import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  isDarkTheme = false;
  title = 'Angular Barcode Scanner and Validator Using Observable (RxJS)';
  fork = 'FORK ME!';

  constructor(private router: Router) {
    this.isDarkTheme = false;
  }

  ngOnInit() {
    this.router.navigateByUrl('/barcode');
  }

}
