import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/providers/contacts/contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss'],
})
export class ViewContactComponent implements OnInit {
  Contacts: any;
  _storageService: any;
  constructor(
    public _contacServices: ContactsService,
    public router: Router
  ) { }

  async ngOnInit() {
    this._contacServices.contacts = await this._contacServices.getAllContacts();
    console.log(this._contacServices.contacts);
  }

  getToDetails(contactId: any) {
    localStorage.clear();
    this.router.navigateByUrl(`/home/${contactId}`)
  }

  delectContact(index: any){
    this._contacServices.contacts.splice(index, 1);
  }

  async updateContact(form: any) {
    const response = await this._contacServices.editContact(this.ContactId, form)
    console.log(response);
  }
  ContactId(ContactId: any, form: any) {
    throw new Error("Method not implemented.");
  }

}
