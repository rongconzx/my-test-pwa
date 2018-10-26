import { Component, ViewChild, ElementRef } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  update: boolean = false;
  joke: any;
  @ViewChild('myCanvas') myCanvas: ElementRef;
  public context: CanvasRenderingContext2D;

  ngAfterViewInit(): void {
    this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
  }


  constructor(updates: SwUpdate, private data: DataService) {
    console.log("ehllo 00000");
    updates.available.subscribe(event => {
      console.log("ehllo");
      //this.update = true;
      updates.activateUpdate().then(() => document.location.reload());

    })
  }

  ngOnInit() {
    this.data.gimmeJokes().subscribe(res => {
      this.joke = res;
    })
  }

  onCapture(e) {
    let reader = new FileReader();
    let f = e.target.files[0];
    let contextData = this.context;
    reader.onload = (function (theFile) {
      return function (e) {
        var img = new Image();
        img.onload = () => {
          contextData.drawImage(img, 0, 0);
        }
        img.src = e.target.result;

      };
    })(f);
    reader.readAsDataURL(f);


  }

}
