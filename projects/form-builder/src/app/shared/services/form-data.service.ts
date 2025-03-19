import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor() { }

  getFormConfig() {
    return {
      "fields": [
        {
          "type": "text",
          "label": "Name",
          "name": "name",
          "value": "",
          "validation": {
            "required": true,
            "minlength": 3
          }
        },
        {
          "type": "email",
          "label": "Email",
          "name": "email",
          "value": "",
          "validation": {
            "required": true,
            "email": true
          }
        },
        {
          "type": "password",
          "label": "Password",
          "name": "password",
          "value": "",
          "validation": {
            "required": true,
            "minlength": 6
          }
        }
      ]
    };
  }
}
