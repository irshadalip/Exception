
import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[mouseOver]',
})

export class HighLightCard{
    @HostBinding('style.backgroundColor') backgroundColor: string;
    
    @HostListener('mouseover') onMouseOver() {
        this.backgroundColor = '#C7FFCD';
    }    

    @HostListener('mouseout') onMouseOut() {
        this.backgroundColor = '';
    }

}