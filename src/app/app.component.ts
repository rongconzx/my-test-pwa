import { Component, ViewChild, ElementRef, OnInit, Injectable, OnDestroy } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from './data.service';
import { TreeviewItem } from 'ngx-treeview/src/treeview-item';
import { DownlineTreeviewItem, TreeviewEventParser, TreeviewConfig, DownlineTreeviewEventParser, TreeviewComponent, TreeviewHelper } from 'ngx-treeview';
import { isNil, remove, reverse } from 'lodash';
import { TreeViewCustomModel } from './tree-view-custom.model';
import { Category } from './catergory.model';
import { strictEqual } from 'assert';
import { FormControl } from '@angular/forms';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { observable, Observable, of } from 'rxjs';
import { disableDebugTools } from '@angular/platform-browser';
import { debug } from 'util';
import { ScanSettings, Barcode, ScanResult } from 'scandit-sdk';
import { ScanditService } from 'scandit-sdk-angular';



@Injectable()
export class ProductTreeviewConfig extends TreeviewConfig {
  hasAllCheckBox = false;
  hasFilter = false;
  hasCollapseExpand = false;

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit, OnDestroy {

  title = 'app';
  searchInput: FormControl = new FormControl();
  update: boolean = false;
  joke: any;
  items: TreeViewCustomModel[];
  leafNode: TreeViewCustomModel[];
  rows: any;
  options: any[] = [];
  @ViewChild('Treeview')
  treeview: TreeviewComponent;
  public settings = new ScanSettings({ enabledSymbologies: [Barcode.Symbology.CODE39] });
  mayData: any = null;

  config = {
    hasAllCheckBox: false,
    hasFilter: true,
    hasCollapseExpand: true,
    decoupleChildFromParent: false,


  };

  constructor(updates: SwUpdate, private data: DataService, private scaner: ScanditService) {
    updates.available.subscribe(event => {
      // console.log("ehllo");
      updates.activateUpdate().then(() => document.location.reload());

    });
  }



  ngOnInit() {
    this.scaner.picker.pauseScanning(true);

  }
  ngOnDestroy(): void {
  }

  onSubmitFrame($event) {
    this.mayData = 'onSubmitFrame=>' + JSON.stringify($event);

  }

  onScan($event: ScanResult) {
    if ($event.barcodes && $event.barcodes.length > 0) {

      $event.barcodes.forEach(element => {
        this.mayData += this.mayData + ' ===== sucess=>' + element.data;

      });

    }
  }

  start() {
    this.scaner.picker.pauseScanning(false);
  }
  stop() {
    this.scaner.picker.pauseScanning(false);
  }
  clear() {
    this.mayData = '';
  }


  onError($event) {
    this.mayData = 'error=>' + JSON.stringify($event);
  }


  // onSelectedChange(downlineItems: DownlineTreeviewItem[]) {
  // }

  // onFilterChange(value: string) {
  //   console.log('filter:', value);
  // }

  // onSelectedFilterChanged(id: string) {
  //   let item = this.findItemInList(this.items, id);
  //   let parent = this.findItemInList(this.items, item.parentId);
  //   while (parent) {
  //     parent.collapsed = false;
  //     if (parent && parent.children.length == 1) {
  //       parent.checked = true;
  //     }
  //     parent = this.findItemInList(this.items, parent.parentId);
  //   }
  //   item.checked = true;
  //   item.collapsed = false;
  // }


  // private search(inputText: string) {
  //   let result = this.leafNode.filter(x => x.text.search(new RegExp(inputText, 'i')) >= 0);
  //   return of(result);
  // }

  // private buildTreeViewCustom(catergories: Category[], name: string): TreeViewCustomModel[] {
  //   let result = [];
  //   if (catergories) {
  //     for (let item of catergories) {
  //       let treeview = new TreeViewCustomModel({
  //         text: item.description,
  //         value: item.id,
  //         collapsed: true,
  //         checked: false,
  //         children: []
  //       });
  //       if (name) {
  //         treeview.displayFilterName = `${name} > ${item.description}`;
  //       }

  //       let childs = this.buildTreeViewCustom(item.children, treeview.displayFilterName);
  //       if (childs.length > 0) {
  //         treeview.children = childs;
  //         treeview.childrenCustom = childs;
  //       }

  //       treeview.genArts = item.genArts;
  //       result.push(treeview);
  //     }
  //   }
  //   return result;
  // }

  // private getLeafNode(items: TreeViewCustomModel[]) {
  //   let leafNode = [];
  //   let stacks = [...items];
  //   let item = stacks.pop();
  //   while (item) {
  //     if (item.children && item.children.length > 0) {
  //       for (let childItem of item.childrenCustom) {
  //         childItem.parentId = item.value;
  //         stacks.push(childItem);
  //       }
  //     }
  //     else {
  //       leafNode.push(item);
  //     }
  //     item = stacks.pop();
  //   }
  //   return leafNode;
  // }

  // private findItemInList(items: TreeViewCustomModel[], value: any) {
  //   for (let index of items) {
  //     if (index.value === value) {
  //       return index;
  //     }
  //     else if (index.children && index.children.length > 0) {
  //       let dataResult = this.findItemInList(index.childrenCustom, value);
  //       if (dataResult) {
  //         return dataResult;
  //       }
  //     }
  //   }
  //   return null;
  // }
}

