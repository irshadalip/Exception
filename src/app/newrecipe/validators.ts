import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {

    //Custom Validator for PreprationTime
    static validRecipePreprationTime(control: AbstractControl): ValidationErrors | null {
        const preprationTimePattern = new RegExp(/(^[0-9]{1,2})\s*(?:minutes|mins?|days?|day?|hours?)$/);
        if (!preprationTimePattern.test(control.value)) {
        return { validRecipePreprationTime: true };
        }
        return null;
        
        }

    //Custom Validator for No Of Serves    
    static validNoOfServes(control: AbstractControl): ValidationErrors | null {
        const validServesData = [];
        let j =0;
        for (let i = 0; i < 11; i++) {
            validServesData.push(i);
        }
        console.log(validServesData);
        
        if (control.value ) {
            validServesData.forEach((data) => {
                if(data == control.value){
                    j++;
                }
            });
            
        }
        if(j > 0 && j < 11){
            return { validNoOfServes: true };
        }
        else{
            return { validNoOfServes: false };
        }
        
    }

    //Custom Validator for Youtube URL
    static validYouTubeUrl(control: AbstractControl): ValidationErrors | null  {
        const validUrlPattern = new RegExp(/^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/);
        if (!validUrlPattern.test(control.value)) {
            return { validYouTubeUrl: true };
        }
        return null;
    }


}