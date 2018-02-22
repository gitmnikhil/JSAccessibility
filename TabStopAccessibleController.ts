import {AccessibilityController} from './AccessibilityController';

export class TabStopAccessibleController extends AccessibilityController{

    Initialize(element, metadata){
        
    }
    OnDOMUpdate(){

    }
    createTree(element,metadata){
        let tabItemList = element.find("[tabitem]");
        var childTabStopList = [];
        for(var i=0;i<tabItemList.length;i++){
            var tabItem = tabItemList[i];
            if(tabItem.closest(element).lemgth>0){
                childTabStopList.push(tabItem);
            }
        }
    }
    UpdateAria(element, attribute, value){

    }
    ProcessEvent(Event){

    }
}