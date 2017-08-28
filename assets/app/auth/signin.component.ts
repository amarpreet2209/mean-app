import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent {
        myForm: FormGroup;
    
        onSubmit() {
         console.log(this.myForm);
         this.myForm.reset();
        }
    
        ngOnInit() {
            this.myForm = new FormGroup({
                email: new FormControl(null, [Validators.required, Validators.email]),
                password: new FormControl(null, Validators.required)
            });
        }
}