import {BasePattern} from './BasePattern';
import { LinkPattern } from './LinkPattern';
declare var jQuery;

export class TabStopPattern extends BasePattern{
    BindEvents(){
        this.element.bind("keydown",(event) =>{
            let focussedElement = jQuery(document.activeElement);
            let eventHandled = this.ProcessEvent(event);
            if(eventHandled){
                event.stopPropagation();
                event.preventDefault();
            }
        })
    }
    ProcessEvent(event){
        switch(event.keyCode){
            case 9:
                let focussedElement = jQuery(document.activeElement);
                for(let i=0;i<this.childPatternList.length;i++){
                    let childEle = this.childPatternList[i].element;
                    if(childEle.is(focussedElement) || childEle.has(focussedElement).length>0){
                        let nextEle = this.childPatternList[i + 1].element;
                        //If it is child then check go to next child
                        if(nextEle && nextEle.length>0){
                            nextEle.trigger("focus");
                            nextEle.trigger("AFocus");
                            return true;
                        }
                        //If next child is not available then leave the key
                        return false;
                    }
                }  
                return false;
            default:return;
        }
    }
}