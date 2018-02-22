import { BasePattern } from "../AccessibilityPattern/BasePattern";

export class BaseAria{
    
    constructor(){
        
    }
    Initialize(basePattern:BasePattern){
        this.UpdateInitialAria(basePattern); 
    }
    OnDOMUpdate(basePattern:BasePattern){
        this.UpdateInitialAria(basePattern); 
    }

    UpdateInitialAria(basePattern:BasePattern){
        
    }

    UpdateAria(patternIns: BasePattern, attribute, value){
        patternIns.element.attr(attribute,value);
    }
}