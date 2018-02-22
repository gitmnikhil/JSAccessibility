import {BasePattern} from './BasePattern';
import {TreeItemPattern} from './TreeItemPattern';
declare var jQuery;

export class TreePattern extends BasePattern{
    
    BindEvents(){
        this.element.bind("keydown",(event) =>{
            let focussedElement = jQuery(document.activeElement);
            let eventHandled = false;
            for(let i=0;i<this.childPatternList.length;i++){
                let childEle = this.childPatternList[i].element;
                if(childEle.is(focussedElement) || childEle.has(focussedElement).length>0){
                    eventHandled = this.childPatternList[i].ProcessEvent(event);
                }
                if(!eventHandled){
                    eventHandled = this.ProcessEvent(event);
                }
                if(eventHandled){
                    event.stopPropagation();
                    break;
                }
            }
        })
    }
    ProcessEvent(event){
        switch(event.keyCode){
            case 13:
                    this.element.find(this.metadata.identifier.click)[0].click();
                    return true;
            case 40:
                    //Get current Element focussed
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
                    //If focus is with parent then focus first child
                    if(this.childPatternList.length > 0){
                        //Go to child
                        this.childPatternList[0].element.trigger("focus");
                        this.childPatternList[0].element.trigger("AFocus");
                        return true;
                    } 
                    return false;
            case 38:
                    //Get current Element focussed
                    {
                        let focussedElement = jQuery(document.activeElement);
                        for(let i=0;i<this.childPatternList.length;i++){
                            let childEle = this.childPatternList[i].element;
                            if(childEle.is(focussedElement) || childEle.has(focussedElement).length>0){
                                let prevEle = this.childPatternList[i - 1].element;
                                //If it is child then check go to next child
                                if(prevEle && prevEle.length>0){
                                    prevEle.trigger("focus");
                                    prevEle.trigger("AFocus");
                                    return true;
                                }else{
                                    this.element.trigger("focus");
                                    this.element.trigger("AFocus");
                                    return true;
                                }
                            }
                        }
                        return false;
                    }
            default:return;
        }
    }
}