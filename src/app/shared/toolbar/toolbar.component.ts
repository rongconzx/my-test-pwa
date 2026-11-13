import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styles: [],
})
export class ToolbarComponent {
  @Input() title: string;

}
