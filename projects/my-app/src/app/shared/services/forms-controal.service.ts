import { Injectable, OnInit } from '@angular/core';
import { CrudService } from './crud.service';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// import jsPDF from 'jspdf';
// import autoTable from 'jspdf-autotable';


@Injectable({
  providedIn: 'root'
})
export class FormsControalService implements OnInit {

  constructor(
    private _crudService: CrudService,
    private _route: ActivatedRoute,
    private _location: Location,
  ) { }

  ngOnInit(): void {

  }

  takeActionBtn(btnObj: any, formData: any, urlId: any, formValue: any) {
    switch (btnObj.useto) {
      case "addNewformbtn":
        formValue['pojo'] = formData['pojo'];
        this.setFormValue(formValue, formData)
        this._crudService.createFormsData(formValue).subscribe((data: any) => {
          if (data) {
            alert("Saved Data");
          }
        })
        break;
      case "gridbtn":
        let obj = {
          'pojo': formData['pojo']
        }
        formValue = { ...formValue, ...obj }
        this._crudService.updateGridData(urlId, formValue).subscribe((data: any) => {
          if (data) {
            alert("Saved Data");
          }
        })
        break;
      case "pdfdownload":
        // if (confirm("Do You Want to PDF Download ?")) {
        //   const doc = new jsPDF();
        //   doc.setFontSize(16);
        //   doc.text(`${formData.formName}`, 10, 10);
        //   doc.setFontSize(12);
        //   doc.text(
        //     'This is a comprehensive guide on generating PDFs with Angular.',
        //     10,
        //     20,
        //   );

        //   // Create a table using `jspdf-autotable`.
        //   const headers = [['Name', 'Email', 'Country']];
        //   const data = [
        //     ['David', 'david@example.com', 'Sweden'],
        //     ['Castille', 'castille@example.com', 'Spain'],
        //     // ...
        //   ];

        //   autoTable(doc, {
        //     head: headers,
        //     body: data,
        //     startY: 30, // Adjust the `startY` position as needed.
        //   });

        //   // Save the PDF.
        //   doc.save(`${formData.formName}.pdf`);
        // }
        break;
      default:
        break;
    }

  }

  setFormValue(formValue: any, formData: any) {
    let formControlValue = formData['formControls'];
    for (let index = 0; index < formControlValue.length; index++) {
      let formControlitems = formControlValue[index];
      let fieldName = formControlitems['name'];
      let fieldValue: any;
      switch (formControlitems['type']) {
        case 'label':
          fieldValue = formControlitems['label'];
          if (fieldValue) formValue[fieldName] = fieldValue;
          break;
        case 'button':
          // console.log(formControlitems)
          break;
        case 'dropdown':
          fieldValue = formControlitems['dropdownvalue'];
          if (fieldValue) formValue[fieldName] = fieldValue;
          break;
        case 'checkbox':
          let checkedValue = [];
          fieldValue = formControlitems['values'];
          for (let index = 0; index < fieldValue.length; index++) {
            if (fieldValue[index] && fieldValue[index]['isChecked']) {
              checkedValue.push(fieldValue[index]['value']);
            }
          }
          formValue[fieldName] = checkedValue;
          break
        case 'radio':
          // let radiovalue = [];
          // fieldValue = formControlitems['values'];
          // for (let index = 0; index < fieldValue.length; index++) {
          //   if (fieldValue[index] && fieldValue[index]['value'] === fieldValue[index]['isChecked']) {
          //     radiovalue.push(fieldValue[index]['value']);
          //   }
          // }
          // formValue[fieldName] = radiovalue;
          break
        default:
          formValue
          break;
      }

    }


  }



  isChangeVal(event: any, value: any, type: any) {
    let isCheckedData: any;
    switch (type) {
      case 'dropdown':
        value['dropdownvalue'] = event.target.value;
        break;
      case 'checkbox':
        value['isChecked'] = event.checked;
        isCheckedData.push(value);
        break;
      case 'radio':
        value = '';
        value = event.value;
        break;
      default:
        break;
    }

  }





  getCurrentModule(moduleName: any) {
    // let modules: any = localStorage.getItem('modules');
    // let modulesItem = JSON.parse(modules);
    // let Indx = this.findModuleIndx(modulesItem, moduleName);
    // return modulesItem[Indx];
  }
  getFormData(formName: any) {
    // let forms: any = localStorage.getItem('forms');
    // let formItem = JSON.parse(forms);
    // let Indx = this.findFormIndx(formItem, formName);
    // return formItem[Indx];
  }
  findModuleIndx(arrylist: any, findValue: any) {
    return arrylist.findIndex((element: any) => element['moduleName'] == findValue)
  }
  findFormIndx(arrylist: any, findValue: any) {
    return arrylist.findIndex((element: any) => element['formName'] == findValue)
  }

  getValidationError(control: any, formControl: any): any {
    let errorMsg = "";
    control.validators.forEach((element: any) => {
      if (formControl?.hasError(element?.validatorName)) {
        errorMsg = element.message;
      } else {
        if (element?.validatorName == "email") {
          errorMsg = element.message;
        }
      }
    });
    return errorMsg;
  }


  showIf(formData: any, currentFieldValue: any) {
    let formControl = formData?.formControls;
    let foundValue: boolean = false;
    let conditionalFields: any = [];
    formControl.forEach((element: any) => {
      if (element?.isShowIf) {
        foundValue = element?.showField == currentFieldValue;
        conditionalFields = element?.showFieldItems;
      }
      if (conditionalFields.includes(element['name'])) {
        if (foundValue) {
          element['hideFieldOnConditions'] = true;
        } else {
          element['hideFieldOnConditions'] = false;
        }
      }
    });
    return formData;
  }


backpage(){
  this._location.back();
}




}





