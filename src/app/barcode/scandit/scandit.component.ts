import { OnInit, OnDestroy, AfterContentInit, Component } from '@angular/core';
import { ScanSettings, Barcode, ScanResult } from 'scandit-sdk';
import { ScanditService } from 'scandit-sdk-angular';
import { TouchSequence } from 'selenium-webdriver';

@Component({
    selector: 'app-scandit',
    templateUrl: './scandit.component.html',
})
export class ScanditComponent {
    public settings = new ScanSettings({ enabledSymbologies: [Barcode.Symbology.CODE39] });

    lastResult: any;
    message: any;
    error: any;


    constructor(private scaner: ScanditService) {

    }


    onScan($event: ScanResult) {
        if ($event.barcodes && $event.barcodes.length > 0) {
            this.lastResult = $event.barcodes[0].data;
            this.scaner.picker.pauseScanning(true);
        }
    }

    restart() {
        this.scaner.picker.pauseScanning(false);
    }

    onError($event) {
        console.log($event);
    }


}
