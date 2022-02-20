import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  contactForm = new FormGroup({
    'firstname': new FormControl('', [Validators.required, Validators.minLength(10)]),
    'lastname': new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]),
    // email: new FormControl('', [Validators.email, Validators.required]),
    'primaryEmail': new FormControl('', [Validators.required,
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    'gender': new FormControl('', [Validators.required]),
  })

  get firstname() {
    return this.contactForm.get('firstname');
  }
  get lastname() {
    return this.contactForm.get('lastname');
  }
  get primaryEmail() {
    return this.contactForm.get('primaryEmail')
  }
  //  get gender() {
  //   return this.contactForm.get('gender');
  // } 
  onSubmit() {
    console.log(this.contactForm.value);
  }

}

