import { Angular_table } from './../../../../Models/Angular_table';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceActionService } from '../shared/service-action.service';
import moment from 'moment';

@Component({
  selector: 'app-search-action',
  templateUrl: './search-action.component.html',
  styleUrls: ['./search-action.component.css'],
})
export class SearchActionComponent implements OnInit {
  constructor(private sevice: ServiceActionService) {}
  ngOnInit(): void {
  }
  
  @Input() year: string;
  @Output() mySelect = new EventEmitter<any>();
  getYear: any;
  
  listOfYear: any[] = [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030 , 
  2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050,
  2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2070];
  createYear: moment.Moment = moment();
  YearFormat: string = this.createYear.format('YYYY');
  currentYear: number = Number(this.YearFormat);

  selectChangeYear = (year: any) => {
    this.mySelect.emit(year.target.value);
    console.log('child', this.mySelect);
  };


  // getDataYear = () => {
  //   this.sevice.GetYear().subscribe((res) => {
  //     this.getYear = res;
  //     // add year now to array
  //     this.getYear.push(Number(this.yearNow));
  //     this.getYear.map((item) => {
  //       if (item === Number(this.yearNow)) {
  //         // remove year now from array
  //         return this.getYear.splice(this.getYear.indexOf(item), 1);
  //       } else {
  //         return '';
  //       }
  //     });
  //     console.log('data', this.getYear);
  //   });
  // };
}
