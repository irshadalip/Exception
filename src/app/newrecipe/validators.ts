import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
    static validRecipePreprationTime(control: AbstractControl): ValidationErrors | null {
        const preprationTimePattern = new RegExp(/(^[0-9]{1,2})\s*(?:minutes|mins?|days?|day?|hours?)?$/);
        if (!preprationTimePattern.test(control.value)) {
        return { validRecipePreprationTime: true };
        }
        return null;
        
        }
    static validNoOfServes(control: AbstractControl): ValidationErrors | null {
        const validServesData = [];
        for (let i = 0; i < 11; i++) {
            validServesData.push('' + i);
        }
        console.log(validServesData);
        
        if (control.value && !validServesData.includes(control.value)) {
            return { validNoOfServes: true };
        }
        return null;
    }

    static validYouTubeUrl(control: AbstractControl): ValidationErrors | null  {
        const validUrlPattern = new RegExp(/^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/);
        if (!validUrlPattern.test(control.value)) {
            return { validYouTubeUrl: true };
        }
        return null;
    }


}