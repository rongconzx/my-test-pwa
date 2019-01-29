import { Component, OnInit, ViewEncapsulation, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { Tesseract } from 'tesseract.ts';



@Component({
  selector: 'app-vin-scanner',
  templateUrl: './orc-component.component.html',
  styleUrls: ['./orc-component.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OrcComponentComponent implements OnInit, OnDestroy {

  lastResult: any;
  message: any;
  error: any;
  isPause = true;
  backAction: Subject<void> = new Subject();
  isLoading = true;
  @ViewChild('video') videoTag: ElementRef;



  constructor(
  ) {

  }


  ngOnInit() {
    const canvas = document.getElementById('canvas') as HTMLImageElement;
    canvas.hidden = true;
    this.isLoading = false;

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.enumerateDevices()
        .then(deviceInfos => {

          navigator.mediaDevices.getUserMedia({
            video: {
              deviceId: deviceInfos.length > 1 ? deviceInfos[1].deviceId : deviceInfos[0].deviceId,
            },
          })
            .then(function (stream) {
              const video = document.getElementById('video');
              (<any>video).srcObject = stream;
            })
            .catch(function (err0r) {
            });

        });


    }

  }



  ngOnDestroy(): void {
  }


  startScanner() {
    this.isPause = !this.isPause;
  }

  onError($event) {
  }

  onReady() {
    this.isLoading = false;
  }

  capture() {

    const scandid = document.getElementById('scanditpickercontainer') as HTMLDivElement;
    const image = document.getElementById('video') as HTMLVideoElement;
    const x = (image.clientWidth * 10) / 100;
    const y = (image.clientHeight * 25) / 100;
    const width = (image.clientWidth * 80) / 100;
    const height = (image.clientHeight * 5) / 100;

    // tslint:disable-next-line:max-line-length
    const clip = this.getClippedRegion(image, x, y, width, height);
    const canvas = document.getElementById('canvas') as HTMLImageElement;
    canvas.setAttribute('width', width + 'px');
    canvas.setAttribute('height', height + 'px');

    alert(`top left ${x} --- ${(y) / 100}`);
    alert(`width height ${width} --- ${height}`);

    // const image1 = new Image();
    // image1.src = clip.toDataURL('image/webp');
    // const w = window.open(clip.toDataURL('image/webp'), '_blank');

    canvas.src = clip.toDataURL('image/webp');
    image.hidden = true;
    canvas.hidden = false;


    Tesseract.recognize(clip.toDataURL('image/webp'), {
      lang: 'eng',
      tessedit_char_whitelist: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }).then(function (result) {
      const re = new RegExp('^[A-HJ-NPR-Z\\d]{8}[\\dX][A-HJ-NPR-Z\\d]{2}\\d{6}$');
      let final = '';
      let isFound = false;
      const text = result.text.replace(/\s+/g, '').trim();
      alert('draw:' + result.text + ' - ' + 'replaced: ' + text);
      if (text.length > 17) {
        let count = 0;
        for (let i = 17; i < text.length + 1; i++) {
          final = text.slice(count, i);

          alert(`checked:[${count}] text[${final}]`);

          if (final.match(re)) {
            isFound = true;
            alert('found:' + final);
            break;
          }
          count = count + 1;
        }
      }
      if (!isFound) {
        final = text;
      }

      alert(final);
    }).catch((error) => {
      console.log(error);
    });
  }
  getClippedRegion(image, x, y, width, height) {

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = width;
    canvas.height = height;

    //                   source region         dest. region
    ctx.drawImage(image, x + 30, y, width, height, 0, 0, width, height);
    return canvas;
  }

  validateVin(vin) {
    const re = new RegExp('^[A-HJ-NPR-Z\\d]{8}[\\dX][A-HJ-NPR-Z\\d]{2}\\d{6}$');
    return vin.match(re);
  }
}

