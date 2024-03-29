import { Component, NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Console } from 'console';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,MatButtonModule,FormsModule,CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css',
})

export class TemplateDrivenFormComponent {

isFormSubmitted: boolean =false;

// Store all variables of every form field used inside form tag
  userObj:any = {
    firstName:'',
    lastName:'',
    userName:'',
    gender:'',
    phone:'',
    cnic:'',
    city:'',
    country:'',
    file:'',
    isAgree: false,
  }
// Once user clicked on submit form 
  OnSubmit(form:NgForm){
    const isFormValid=form.form.valid;
this.isFormSubmitted=true;
// if(form.valid){

// }
console.log( alert('Form Submitted'));

  }
}
