import { Component } from '@angular/core';
import {TABLE_DATA} from './data/data.constants'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blu-smart-assignment';
  tableHeader: Array<string>;
  allData = TABLE_DATA;
  tableData:any;
  total=0;
  totalPages = 0;
  pageNo = 1;
  pageSize = 5;
  constructor() {
    this.tableHeader = ['Data and time of request', 'Activity type', 'Request Status', 'Requested By', 'Action'];
    this.total = this.allData.length;
  }

  ngOnInit() {
    this.filterData();
  }

  filterData() {
    this.tableData = this.allData.slice(0, this.pageSize);
    console.log('filterData',typeof this.tableData);
  }

  viewDetails(data: any) {
    console.log('', data, this.total);
  }

  onPageChange(page: any) {
    this.pageNo = page;
  }
}
