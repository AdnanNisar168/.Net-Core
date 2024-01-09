import { Component, Inject, LOCALE_ID } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-gender-list',
  templateUrl: './gender-list.component.html',
  styleUrls: ['./gender-list.component.css']
})
export class GenderListComponent {

  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private commonService: CommonService, @Inject(LOCALE_ID) private locale: string) {
    //super();

    this.formGroup = this.fb.group({
        SearchCode: [''],
        SearchName: [''],
        HeadTypeID:[]
    });
    // this.context = { componentParent: this };
}

  ngOnInit(){
    var gender = this.commonService
  }
}
