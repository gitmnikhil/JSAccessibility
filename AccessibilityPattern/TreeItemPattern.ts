import {BasePattern} from './BasePattern';
declare var jQuery;

export class TreeItemPattern extends BasePattern{
    groupElement;
    Initialize(element, metadata, childPatternList: Array<TreeItemPattern>){
        this.element = element;
        this.childPatternList = childPatternList;
        this.groupElement = element.find(metadata.identifier.group);
    }
    OnDOMUpdate(element, metadata, childPatternList: Array<TreeItemPattern>){
        this.element = element;
        this.childPatternList = childPatternList;
        this.groupElement = element.find(metadata.identifier.group);
    }
    BindEvents(){

    }
    ProcessEvent(event){
        let focussedElement = jQuery(document.activeElement);
        for(let i=0;i<this.childPatternList.length;i++){
            let childEle = this.childPatternList[i].element;
            if(childEle.is(focussedElement) || childEle.has(focussedElement).length>0){
                if(this.childPatternList[i].ProcessEvent(event)){
                    return true;
                }
            }
        }
        if(event.type==="click"){
            if(this.elementIsExpandable()){
                if(this.elementIsExpanded()){
                    this.ariaIns.UpdateAria(this,"expanded",true)
                }else{
                    this.ariaIns.UpdateAria(this,"expanded",false)
                }
            }
            return;
        }
        switch(event.keyCode){
            case 13:
                    if(this.elementIsExpandable()){
                        if(this.elementIsExpanded()){
                            this.ariaIns.UpdateAria(this,"expanded",false)
                        }else{
                            this.ariaIns.UpdateAria(this,"expanded",true)
                        }
                    }
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
                    if(this.elementIsExpanded() && this.childPatternList.length > 0){
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
    elementIsExpandable(){
        if(this.childPatternList && this.childPatternList.length>0){
            return true;
        }
    }
    elementIsExpanded(){
        if(this.groupElement.is(":visible")){
            return true;
        }
    }
}