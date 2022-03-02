import { Month } from './../../../../Models/Month';
import { Injectable } from '@angular/core';
import { Angular_table } from '@app/Models/Angular_table';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceActionService {
  formData: Angular_table;
  readonly root = 'http://localhost:5000/api/ANGULAR';
  constructor(private http: HttpClient) {}

  RequestData(newArray: any) {
    return this.http.post(`${this.root}/Angularcreate`, newArray);
  }

  GetAllData() {
    return this.http.get(`${this.root}/Angulargetall`);
  }

  GetYear() {
    return this.http.get<any>(`${this.root}/Angulargetyear`);
  }
  GetFilterYear(year: string) {
    return this.http.get(`${this.root}/Angularfilteryear`, {
      params: { year: year },
    });
  }
}
