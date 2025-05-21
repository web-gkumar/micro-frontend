import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { FormOptionsComponent } from '../form-options/form-options.component';
import { FormsControalService } from '../../../shared/services/forms-controal.service';
import { FormDataService } from '../../../shared/services/form-fields';
import { IValidator } from '../../../shared/interface/form-interface';
import { CrudService } from '../../../shared/services/crud.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { filter, map, of } from 'rxjs';



@Component({
    selector: 'app-form-fields',
    imports: [MatDialogModule, CommonModule, ReactiveFormsModule, FormsModule, MatIconModule, MatButtonModule, MatDatepickerModule, CdkDropListGroup, CdkDropList, CdkDrag],
    templateUrl: './form-fields.component.html',
    styleUrl: './form-fields.component.scss'
})
export class FormFieldsComponent implements OnInit {


  dynamicForm!: FormGroup;
  components: any;
  componentFields: any = [];
  formData: any = [];
  addbuttonClass = "";
  currentGridData:any;

  constructor(
    private _router: Router,
    private _fb: FormBuilder,
    private _dialog: MatDialog,
    private _route: ActivatedRoute,
    private _crudService: CrudService,
    private _formFields: FormDataService,
    private _formsControalService: FormsControalService,
  ) {
    this.components = this._formFields.getFormConfig().formControls;
    this.dynamicForm = this._fb.group({});
  }


  ngOnInit(): void {
    this._route.params.subscribe((res: any) => {
      if(res['addNew']){
        this.addbuttonClass = "addNewForm"
        this._crudService.getAllCollection("forms",  {'collectionName': 'app_forms'}).pipe(
          map((response: any) => response['data'].filter((item: any) => item['formName'] === res['formName']))
        ).subscribe((data:any) => {
          this.formData = data[0];
          this.formData['isFormCreations'] = false;
          this.formCreation(res);
        })
      }

      if (res['id']) {
        this.addbuttonClass = "updateGrid"
        let currentForm = localStorage.getItem("forms");
        let parsedData = currentForm ? JSON.parse(currentForm) : null;
        of(parsedData).pipe(
          map((response:any) => response.filter((data: any) => data.formName === res['formName']))
        ).subscribe((res) => {
              this.formData = res[0];
              this.formData['isFormCreations'] = false;
              this.formCreation(res);
        })

        let gridData = localStorage.getItem("gridData");
        let parsedgridData = gridData ? JSON.parse(gridData) : null;
        of(parsedgridData).pipe(
          map((response:any) => response.filter((data: any) => data._id === res['id']))
        ).subscribe((res) => {
              this.currentGridData = res[0];
              this.dynamicForm.patchValue(res[0]);
        })

      }
    })


  }

  formCreation(res: any) {
    let formcontrols = this.formData?.formControls;
    let formGroup: Record<string, any> = {};
    if (formcontrols && formcontrols.length > 0) {
      formcontrols.forEach((control: any) => {
        let controlValidators: Validators[] = [];
        if (control?.validators && control.isMandatory) {
          control.validators.forEach((val: IValidator) => {
            if (val.validatorName === 'required') controlValidators.push(Validators.required);
            if (val.validatorName === 'email') controlValidators.push(Validators.required, Validators.email);
            if (val.validatorName === 'minlength') controlValidators.push(Validators.minLength(val.minLength as number));
            if (val.validatorName === 'maxlength') controlValidators.push(Validators.maxLength(val.maxLength as number));
            if (val.validatorName === 'pattern') controlValidators.push(Validators.pattern(val.pattern as string));
          });
        }
        const controlConfig = {
          value: control.value,
          disabled: control.disabled
        };
        formGroup[control.name] = [controlConfig || '', controlValidators];
      });
      this.dynamicForm = this._fb.group(formGroup);
    }
  }

  getErrorMessage(control: any): any {
    const formControl = this.dynamicForm.get(control.name);
    return this._formsControalService.getValidationError(control, formControl);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }


  filedsSettings(data: any, indx: any) {
    this._dialog.open(FormOptionsComponent, {
      width: '1200px',
      maxWidth: '100vw',
      height: '500px',
      data: [data],
    }).afterClosed().subscribe((response: any) => {
      this.formData.formControls[indx] = response[0]
    });
  }

  removeFields(indx: any) {
    this.formData["formControls"].splice(indx, 1);
  }


  isChangeVal(event: any, value: any, type: any) {
    this._formsControalService.isChangeVal(event, value, type);
    this.showIfFields(this.formData, event.target.value);
  }

  updateForm() {
    this._crudService.update(this.formData._id, this.formData, "forms").subscribe((data: any) => {
      if (data) {
        alert("Form Updated");
      }
    })
  }

  actionBtn(buttonObj: any) {
    if (this.dynamicForm.invalid) {
      this.dynamicForm.markAllAsTouched();
      return;
    } else {
      this._formsControalService.takeActionBtn(buttonObj, this.formData, this.currentGridData? this.currentGridData._id: '', this.dynamicForm.value);
      this.dynamicForm.reset();
    }

  }

  showIfFields(formData: any, currentValue: any) {
    this._formsControalService.showIf(formData, currentValue);
    return formData;
  }

  back() {
    this.dynamicForm.reset()
    this._formsControalService.backpage();
  }


}
