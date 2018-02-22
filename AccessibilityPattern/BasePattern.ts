import {BaseAria} from "../Aria/BaseAria";
export class BasePattern{
    element;
    metadata;
    childPatternList;
    ariaIns;
    Initialize(element, metadata, childPatternList: Array<BasePattern>){
        this.element = element;
        this.metadata = metadata;
        this.childPatternList = childPatternList;
    }
    OnDOMUpdate(element, metadata, childPatternList: Array<BasePattern>){
        this.element = element;
        this.metadata = metadata;
        this.childPatternList = childPatternList;
    }
    BindEvents(){

    }
    ProcessEvent(event){

    }
    SetAriaInstance(ariaIns: BaseAria){
        this.ariaIns = ariaIns;
    }
}