import {BaseAria} from "./BaseAria";
import {TreePattern} from '../AccessibilityPattern/TreePattern';

export class TreeAria extends BaseAria{
    
    Initialize(treePattern:TreePattern){
        this.UpdateInitialAria(treePattern);  
    }
    OnDOMUpdate(treePattern:TreePattern){
        this.UpdateInitialAria(treePattern);
    }

    UpdateInitialAria(treePattern:TreePattern){
        treePattern.element.attr("role","tree");
        this.UpdateAriaTreeItem(treePattern);
    }
    UpdateAriaTreeItem(treePattern:TreePattern){
        for(let i=0;i<treePattern.childPatternList.length;i++){
            var treeItem = treePattern.childPatternList[i];
            treeItem.element.attr("role","treeitem");
            if(treeItem.groupElement){
                treeItem.groupElement.attr("role","group");
                if(treeItem.groupElement.is(":visible")){
                    treeItem.element.attr("aria-expanded","true")
                }else{
                    treeItem.element.attr("aria-expanded","false")
                }
            }
        }        
    }
}