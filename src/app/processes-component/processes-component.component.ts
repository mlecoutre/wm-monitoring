import { Component, OnInit } from '@angular/core';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { ProcessesService } from '../services/processes.service';
import * as modelp from './processes-model';

@Component({
  selector: 'app-processes-component',
  templateUrl: './processes-component.component.html',
  styleUrls: ['./processes-component.component.css']
})
export class ProcessesComponentComponent implements OnInit {

  instances: modelp.Process[];
  errorMessage: string;

  public constructor(private processesService: ProcessesService) {
    this.instances = null;
    this.length = 0;
  }

  public ngOnInit(): void {
    //  this.platformsService.getPlatforms().subscribe(ro => this.platforms = ro, error => this.errorMessage = <any>error);
    //@TODO linked to the user selection.
    var pr = new modelp.ProcessRequest('50', '2017-01-04T23:00:31.128Z', '2017-01-02T13:12:31.140Z', '2017-01-05T22:59:31.128Z', '2017-01-05T13:12:31.140Z', 'ALISE', 'MD320', 'PE63', 'ESB_OPE');

    this.processesService.getProcesses(pr).subscribe(
      p => {
        this.instances = p;
        this.data = p;
        this.length = this.instances.length;
        this.onChangeTable(this.config);
      }, error => this.errorMessage = <any>error
    );
  }

  /**
   * MANAGE TABLE
   */
  public rows: Array<any> = [];
  public columns: Array<any> = [
    { title: 'PE', className: ['office-header', 'text-success'], name: 'pe_', sort: 'asc' },
    { title: 'Flow', name: 'flux_', sort: '' },
    { title: 'Status', className: 'text-warning', name: 'status_' },
    { title: 'functionalIDName', name: 'functionalIDName' },
    { title: 'functionalIDValue', name: 'functionalIDValue' },
    { title: 'lastDatetime', name: 'lastDatetime' },
    { title: 'traceCount', name: 'traceCount' }
  ];
  public page: number = 1;
  public itemsPerPage: number = 10;
  public maxSize: number = 5;
  public numPages: number = 1;
  public length: number = 0;

  public config: any = {
    paging: true,
    sorting: { columns: this.columns },
    filtering: { filterString: '' },
    className: ['mdl-data-table', 'mdl-js-data-table', 'mdl-shadow--2dp']
  };

  /**
   * HERE IS THE INPUTS OF THE TABLE
   */
  private data: Array<any> = this.instances;
  //TableData;




  public changePage(page: any, data: Array<any> = this.data): Array<any> {
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  public changeSort(data: any, config: any): any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName: string = void 0;
    let sort: string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous: any, current: any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public changeFilter(data: any, config: any): any {
    let filteredData: Array<any> = data;
    this.columns.forEach((column: any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item: any) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item: any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    let tempArray: Array<any> = [];
    filteredData.forEach((item: any) => {
      let flag = false;
      this.columns.forEach((column: any) => {
        if (item[column.name].toString().match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }

  public onChangeTable(config: any, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }): any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    let filteredData = this.changeFilter(this.data, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  public onCellClick(data: any): any {
    console.log(data);
  }

}
