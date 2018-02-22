import {BaseAria} from "./BaseAria";
import { LinkPattern } from "../AccessibilityPattern/LinkPattern";

export class LinkAria extends BaseAria{
    
    Initialize(linkPattern:LinkPattern){
        this.UpdateInitialAria(linkPattern);  
    }
    OnDOMUpdate(linkPattern:LinkPattern){
        this.UpdateInitialAria(linkPattern); 
    }
    UpdateInitialAria(linkPattern:LinkPattern){
        linkPattern.element.attr("role","link");
    }
}