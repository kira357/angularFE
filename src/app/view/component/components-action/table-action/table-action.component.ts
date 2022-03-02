import { map } from 'rxjs/operators';
import { Angular_table } from './../../../../Models/Angular_table';
import {
  Component,
  OnInit,
  ElementRef,
  Renderer2,
  Input,
  OnChanges,
} from '@angular/core';
import pq from 'pqgridf';
import 'pqgridf/localize/pq-localize-en.js';
import { Month } from '@app/Models/Month';

@Component({
  selector: 'pgrip-table-action',
  templateUrl: './table-action.component.html',
  styleUrls: ['./table-action.component.css'],
})
export class TableActionComponent implements OnInit, OnChanges {
  grid: pq.gridT.instance;
  constructor(public el: ElementRef, public renderer: Renderer2) {}
  @Input() month: Month[];
  data: any[] = [];

  columns1 = [
    {
      title: 'Month',
      width: 50,
      dataType: 'string',
      dataIndx: 'month',
      editable: false,
      align: 'center',
    },
    {
      title: 'Capacity',
      width: 50,
      dataType: 'integer',
      dataIndx: 'capacity',
      align: 'center',
    },
    {
      title: 'Discontinued',
      width: 100,
      dataType: 'bool',
      align: 'center',
      dataIndx: 'Discontinued',
      editor: false,
      type: 'checkbox',
      validations: [{ type: 'nonEmpty', msg: 'Required' }],
    },
  ];
  options = {
    showTop: false,
    height: 600,
    numberCell: {
      show: false,
    },
    scrollModel: {
      autoFit: true,
    },
    columnTemplate: { width: 100 },
    colModel: this.columns1,
    dataModel: {
      data: this.data,
    },
    bootstrap: {
      on: true,
    },
  };

  ngOnInit() {}

  ngOnChanges() {
    this.data = this.month;
    if (!this.grid) {
      this.grid = pq.grid(this.el.nativeElement.children[0], this.options);
    }
    if (this.grid) {
      this.grid.options.dataModel.data = this.data;
      this.grid.refreshDataAndView();
    }
  }
}
