
import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[mouseOver]',
})

export class HighLightCard{
    @HostBinding('style.backgroundColor') backgroundColor: string;
    
    @HostListener('mouseover') onMouseOver() {
        this.backgroundColor = '#AB779D ';

    }    

    @HostListener('mouseout') onMouseOut() {
        this.backgroundColor = '';
    }

}