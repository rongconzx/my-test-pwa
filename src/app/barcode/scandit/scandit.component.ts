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
    isPause = false;


    constructor(private scaner: ScanditService) {

    }


    onScan($event: ScanResult) {
        if ($event.barcodes && $event.barcodes.length > 0) {
            this.lastResult = $event.barcodes[$event.barcodes.length - 1].data;
            alert(this.lastResult);
            this.isPause = true;
        }
        else{
            alert(this.lastResult);

        }
    }

    restart() {
        this.isPause = false;
    }

    onError($event) {
        alert( $event.message );
        console.log($event);
    }


}
