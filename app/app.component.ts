import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['Male', 'Female'];
  signUpForm: FormGroup;

  ngOnInit():void{
    this.signUpForm = new FormGroup({
      'userData': new FormGroup(
                                {'username':new FormControl('minou',Validators.required),
                                 'email':new FormControl('minou@cat-tv.ca',Validators.required)
                                }),
      'gender': new FormControl('Male'),
      'hobbies': new FormArray([])
    });
  }

  onSubmit(){
    console.log(this.signUpForm);
  }

  onAddHobby(){
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  getControls(){
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }
}
