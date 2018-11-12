import { TreeviewItem, TreeItem } from "ngx-treeview";

export class TreeViewCustomModel extends TreeviewItem {

    constructor(item: TreeItem, autoCorrectChecked?: boolean) {
        super(item, autoCorrectChecked);
    }
    genArts: string[];
    isParent: boolean = false;
    displayFilterName: string;
    childrenCustom: TreeViewCustomModel[] = [];
    parentId: string;
}