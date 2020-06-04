import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TextoService {

  constructor() { }
  public formGroup: FormGroup

  set nuevo_formgroup(formGroup_: FormGroup) {
    this.formGroup = formGroup_;
    console.log('texto.service')
    console.log(this.formGroup)
  }

  get nuevo_formgroup() {
    return this.formGroup;
  }
  
}
