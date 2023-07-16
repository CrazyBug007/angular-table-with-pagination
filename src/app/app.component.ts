import { Component } from '@angular/core';
import { TABLE_DATA } from './data/data.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'blu-smart-assignment';
  tableHeader: Array<string>;
  allData = TABLE_DATA;
  tableData: any;
  totalRecords = 0;
  totalPages = 0;
  pageNo = 1;
  recordsPerPage = 5;
  _pages: Array<Number> = [];
  constructor() {
    this.tableHeader = [
      'Data and time of request',
      'Activity type',
      'Request Status',
      'Requested By',
      'Action',
    ];
    this.totalRecords = this.allData.length;
  }

  ngOnInit() {
    this.filterData();
    this.initPagination();
  }

  initPagination() {
    if (this.totalRecords > 0 && this.recordsPerPage > 0) {
      let limit = Math.ceil(this.totalRecords / this.recordsPerPage);
      for (let i = 1; i <= limit; i++) {
        this._pages.push(i);
      }
    }
    console.log(this._pages);
  }

  getAppendedZero(pos: number): string {
    let output = `${pos}`;
    if (pos < 10) {
      output = `0${pos}`;
    }
    return output;
  }

  filterData() {
    let start = (this.pageNo - 1) * this.recordsPerPage;
    let end =
      start + this.recordsPerPage > this.totalRecords
        ? this.totalRecords
        : start + this.recordsPerPage;
    console.log('filterData', start);
    this.tableData = this.allData.slice(start, end);
  }

  viewDetails(data: any) {
    console.log('', data, this.totalRecords);
  }

  onPageChange(page: any) {
    console.log(page);
    this.pageNo = page;
    this.filterData();
  }
}
