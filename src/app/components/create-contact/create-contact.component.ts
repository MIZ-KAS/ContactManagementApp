import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router'
import { ContactsService } from 'src/app/providers/contacts/contacts.service';

@Component({
  selector: 'create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss'],
})
export class CreateContactComponent implements OnChanges {
  errorMessage: string = '';
  successMessage: string = '';

  @Input() contactId: string;
  contact_form: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    number: new FormControl('', Validators.required)
  })

  //declare a variable to show validation_messages
  validation_messages = {
    'firstName': [
      { type: 'required', message: 'first Name is required' }
    ],
    'lastName': [
      { type: 'required', message: 'last Name is required' }
    ]
  }


  constructor(
    public _contactServices: ContactsService
  ) { }

  ngOnChanges() {
    if(this.contactId) {
      this.contact_form.patchValue(
        this._contactServices.contacts[this.contactId]
      )
    }
  }
    
  async createContact(form: any) {
    const response = await this._contactServices.addContact(form)
    console.log(response);
  }
    
  async updateContact(form: any) {
    const response = await this._contactServices.addContact(form)
    alert(response);
  }

}
