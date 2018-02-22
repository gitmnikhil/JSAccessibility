import {BasePattern} from './BasePattern';
declare var jQuery;

export class LinkPattern extends BasePattern{
    
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
            case 13:
            case 32:
                this.element.trigger("focus");
                this.element.trigger("AFocus");
                return true;
            default:return;
        }
    }
}