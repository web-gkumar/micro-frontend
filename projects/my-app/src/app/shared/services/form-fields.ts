import { Injectable } from '@angular/core';
import {IForm} from '../interface/form-interface';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor() { }

  getFormConfig(): IForm {
    return {
      "formName": "",
      "formicon": "settings",
      "isFormCreations": true,
      "gridUpdateMode": true,
      "pojo": '',
      "isPopup": false,
      "isImport": false,
      "isPDFDownload": false,
      "gridButtons": [],
      "formsButtons": [
        {
          "btnname": "Save",
          "btnicon": "save",
          "useto": "addNewformbtn",
          "isdisabled": false
        },
        {
          "btnname": "Update",
          "btnicon": "update",
          "useto": "gridbtn",
          "isdisabled": false
        }
      ],
      "formControls": [
        {
          "fieldIcons": "text_fields",
          "name": "text",
          "label": "Text",
          "value": "",
          "placeholder": "",
          "class": "",
          "disabled": false,
          "hideGridFields": false,
          "isShowIf": false,
          "showField": "",
          "showFieldItems": "",
          "hideFieldOnConditions": false,
          "type": "text",
          "isMandatory" : false,
          "validators": [
            {
              "validatorName": "required",
              "required": false,
              "message": "Text is Required",
            },
            {
              "validatorName": "minlength",
              "required": false,
              "minLength": 10,
              "message": "Minimum 10 Digits allowed",
            },
            {
              "validatorName": "maxlength",
              "required": false,
              "maxLength": 20,
              "message": "Maximum 10 Digits allowed",
            }
          ]
        },
        {
          "fieldIcons": "text_fields",
          "name": "number",
          "label": "Number",
          "value": "",
          "placeholder": "",
          "class": "",
          "disabled": false,
          "hideGridFields": false,
          "isShowIf": false,
          "showField": "",
          "showFieldItems": "",
          "hideFieldOnConditions": false,
          "type": "number",
          "isMandatory" : false,
          "validators": [
            {
              "validatorName": "required",
              "required": false,
              "message": "Number is Required",
            },
            {
              "validatorName": "minlength",
              "required": false,
              "minLength": 10,
              "message": "Minimum 10 Digits allowed",
            },
            {
              "validatorName": "maxlength",
              "required": false,
              "maxLength": 20,
              "message": "Maximum 10 Digits allowed",
            }
          ]
        },
        {
          "fieldIcons": "text_fields",
          "name": "email",
          "label": "Email",
          "value": "",
          "placeholder": "",
          "class": "",
          "disabled": false,
          "hideGridFields": false,
          "isShowIf": false,
          "showField": "",
          "showFieldItems": "",
          "hideFieldOnConditions": false,
          "type": "email",
          "isMandatory" : false,
          "validators": [
            {
              "validatorName": "email",
              "required": false,
              "message": "Email is Required",
            },
            {
              "validatorName": "pattern",
              "required": false,
              "pattern": "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",
              "message": "Invalid email format",
            }
          ]
        },
        {
          "fieldIcons": "text_fields",
          "name": "date",
          "label": "Date",
          "formate": "MM/DD/YYYY",
          "value": "",
          "placeholder": "",
          "class": "",
          "disabled": false,
          "hideGridFields": false,
          "isShowIf": false,
          "showField": "",
          "showFieldItems": "",
          "hideFieldOnConditions": false,
          "type": "date",
          "isMandatory" : false,
          "validators": [
            {
              "validatorName": "required",
              "required": false,
              "message": "Date is Required",
            }
          ]
        },
        {
          "fieldIcons": "text_fields",
          "name": "textarea",
          "label": "Textarea",
          "value": "",
          "placeholder": "",
          "class": "",
          "disabled": false,
          "hideGridFields": false,
          "isShowIf": false,
          "showField": "",
          "showFieldItems": "",
          "hideFieldOnConditions": false,
          "type": "textarea",
          "isMandatory" : false,
          "validators": [
            {
              "validatorName": "required",
              "required": false,
              "message": "Textarea is Required",
            },
            {
              "validatorName": "minlength",
              "required": false,
              "minLength": 10,
              "message": "Minimum 10 Digits allowed",
            },
            {
              "validatorName": "maxlength",
              "required": false,
              "maxLength": 20,
              "message": "Maximum 10 Digits allowed",
            }
          ]
        },
        {
          "fieldIcons": "text_fields",
          "name": "",
          "label": "Label",
          "value": "",
          "class": "col-md-12 bg-slate-600 text-white py-1 px-2 rounded -sm",
          "disabled": false,
          "hideGridFields": false,
          "isShowIf": false,
          "showField": "",
          "showFieldItems": "",
          "hideFieldOnConditions": false,
          "type": "label",
          "isMandatory" : false,
          "validators": [
            {
              "validatorName": "required",
              "required": false,
              "message": "Label is Required",
            }
          ]
        },
        {
          "fieldIcons": "text_fields",
          "name": "button",
          "label": "Button",
          "values": [],
          "class": "",
          "btnclass": "bg-slate-600 text-white py-1 px-2 rounded-sm mx-1",
          "disabled": false,
          "hideGridFields": false,
          "isShowIf": false,
          "showField": "",
          "showFieldItems": "",
          "hideFieldOnConditions": false,
          "type": "button",
          "isMandatory" : false,
          "validators": [
            {
              "validatorName": "required",
              "required": false,
              "message": "Button is Required",
            }
          ]
        },
        {
          "fieldIcons": "text_fields",
          "name": "checkbox",
          "label": "Checkbox",
          "values": [],
          "class": "",
          "disabled": false,
          "hideGridFields": false,
          "isShowIf": false,
          "showField": "",
          "showFieldItems": "",
          "hideFieldOnConditions": false,
          "type": "checkbox",
          "isMandatory" : false,
          "validators": [
            {
              "validatorName": "required",
              "required": false,
              "message": "Checkbox is Required",
            }
          ]
        },
        {
          "fieldIcons": "text_fields",
          "name": "radio_button",
          "label": "Radio Button",
          "values": [],
          "class": "",
          "disabled": false,
          "hideGridFields": false,
          "isShowIf": false,
          "showField": "",
          "showFieldItems": "",
          "hideFieldOnConditions": false,
          "type": "radio",
          "isMandatory" : false,
          "validators": [
            {
              "validatorName": "required",
              "required": false,
              "message": "Radio Button is Required",
            }
          ]
        },
        {
          "fieldIcons": "text_fields",
          "name": "file",
          "label": "File Upload",
          "values": [],
          "class": "",
          "disabled": false,
          "hideGridFields": false,
          "isShowIf": false,
          "showField": "",
          "showFieldItems": "",
          "hideFieldOnConditions": false,
          "type": "file",
          "isMandatory" : false,
          "validators": [
            {
              "validatorName": "required",
              "required": false,
              "message": "File is Required",
            }
          ]
        },
        {
          "fieldIcons": "text_fields",
          "name": "dropdown",
          "label": "Dropdown",
          "values": [],
          "class": "",
          "disabled": false,
          "hideGridFields": false,
          "isShowIf": false,
          "showField": "",
          "showFieldItems": "",
          "hideFieldOnConditions": false,
          "type": "dropdown",
          "isMandatory" : false,
          "validators": [
            {
              "validatorName": "required",
              "required": false,
              "message": "Dropdown is Required",
            }
          ]
        }

      ]
    };
  }
}
