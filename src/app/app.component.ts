import { Angular_table } from './Models/Angular_table';
import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ServiceActionService } from './view/component/components-action/shared/service-action.service';
import { Month } from './Models/Month';
import { data } from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public service: ServiceActionService) {}
  month: Month[] = [
    { month: 'January', value: 1, capacity: 0 },
    { month: 'February', value: 2, capacity: 0 },
    { month: 'March', value: 3, capacity: 0 },
    { month: 'April', value: 4, capacity: 0 },
    { month: 'May', value: 5, capacity: 0 },
    { month: 'June', value: 6, capacity: 0 },
    { month: 'July', value: 7, capacity: 0 },
    { month: 'August', value: 8, capacity: 0 },
    { month: 'September', value: 9, capacity: 0 },
    { month: 'October', value: 10, capacity: 0 },
    { month: 'November', value: 11, capacity: 0 },
    { month: 'December', value: 12, capacity: 0 },
  ];
  nameMonth: any[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  year: string = '';
  text: string = '';
  newArray: any[] = [];

  ngOnInit(): void {
    this.getSelectChangeYear(new Date().getFullYear().toString());
  }

  SaveData() {
    this.convertObjectToArray(this.month).forEach((element: Month) => {
      this.newArray.push({
        year: this.year,
        value: element.value,
        capacity: element.capacity,
      });
    });
    this.service.RequestData(this.newArray).subscribe((res) => {
      console.log('DATA save', res);
      this.newArray = [];
    });
    console.log('newArray', this.newArray);
  }

  ExportExcel() {}
  refreshDataTable() {
    return (this.month = [
      { month: 'January', value: 1, capacity: 0 },
      { month: 'February', value: 2, capacity: 0 },
      { month: 'March', value: 3, capacity: 0 },
      { month: 'April', value: 4, capacity: 0 },
      { month: 'May', value: 5, capacity: 0 },
      { month: 'June', value: 6, capacity: 0 },
      { month: 'July', value: 7, capacity: 0 },
      { month: 'August', value: 8, capacity: 0 },
      { month: 'September', value: 9, capacity: 0 },
      { month: 'October', value: 10, capacity: 0 },
      { month: 'November', value: 11, capacity: 0 },
      { month: 'December', value: 12, capacity: 0 },
    ]);
  }

  getSelectChangeYear(text: string) {
    this.year = text;
    console.log('parent', this.year);
    this.service.GetFilterYear(text).subscribe(
      (res) => {
        console.log('DATA', res);
        if (res != null) {
          this.month = res as any;
          this.month = this.month.map((item, idx) => {
            return {
              month: this.nameMonth[idx],
              value: Number(item.month),
              capacity: item.capacity,
            };
          });
          console.log('DATA', this.month);
        } else {
          this.refreshDataTable();
        }
      },
      (err) => {
        console.log(err);
        this.refreshDataTable();
      }
    );
  }

  // showFilterYear(year: string) {
  //   if (year !== null) {
  //     this.service.GetFilterYear(year).subscribe((res) => {
  //       console.log('DATA', res);
  //     });
  //   }
  // }

  convertObjectToArray(obj: any) {
    let arr = [];
    for (let key in obj) {
      arr.push(obj[key]);
    }
    return arr;
  }
}
