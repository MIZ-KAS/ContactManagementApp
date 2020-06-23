import { Injectable } from '@angular/core';
import { StorageProvider } from '../storage/storage';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  _contactServices: any;
  indexOf(contacts: any) {
    throw new Error("Method not implemented.");
  }


  contacts: any = [];
  constructor(
    private _storageServices: StorageProvider
  ) { }

  async getAllContacts() {
    return await new Promise(async (resolve, reject) => {
      try {
        const contacts: any = await this._storageServices.getItem("contacts")
        this.contacts = this.objectToArray(contacts);
        resolve(this.contacts || [])
      }catch(ex) {
        reject(ex.message || ex.error || ex)
      }
    });
  }

  async addContact(form: any) {
    return await new Promise(async (resolve, reject) => {
      try {
        this.contacts.push(form)
        const contacts: any = await this._storageServices.saveItem("contacts", this.arrayToObject(this.contacts))
        resolve("contact saved")
      }catch(ex) {
        reject(ex.message || ex.error || ex)
      }
    });
  }

  // async deleteContact(id: any) {
  //   return await new Promise(async (resolve, reject) => {
  //     try {
  //       const contacts: any = await this.getAllContacts()
  //       console.log(contacts);
  //     }catch(ex) {
  //       reject(ex.message || ex.error || ex)
  //     }
  //   });
  // }

  async deleteContact() {
    return await new Promise(async (resolve, reject) => {
      try {
        const contacts: any = await this._storageServices.removeItem("contacts")
        this.contacts = this.objectToArray(contacts);
        resolve(this.contacts || [])
      }catch(ex) {
        reject(ex.message || ex.error || ex)
      }
    });
  }


  editContact() {

  }

  

  arrayToObject = (arr = []) =>
  {
      var rv = {};
      for (var i = 0; i < arr.length; ++i)
        rv[i] = arr[i];
      return rv;
  }

  objectToArray = (obj: object) => {
    var array = [], tempObject;
    let i = 0;
    for (var key in obj) 
    {
      tempObject = obj[key];
      // if (typeof obj[key] == "object") {
      //   tempObject = this.objectToArray(obj[key]);
      // }
      array[key] = tempObject;
      i++;
    }
    array['length'] = i;
    return array;
  }
}
