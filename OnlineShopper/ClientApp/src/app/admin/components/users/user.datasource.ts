import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PagerViewModel, PagerResult } from './../../model/pager';
import { UsersService } from './../../services/users.service';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import {  UserSelect } from '../../model/users';
import { Injectable, ReflectiveInjector } from '@angular/core';

// TODO: Replace this with your own data model type

export class AlfaDataTable{
  public data: UserSelect[];
  public totalCount: number;
}


const EXAMPLE_DATA: UserSelect[] = [];



export class DatatableDataSource extends DataSource<UserSelect> {
  public data: UserSelect[] = [];
  public paginator: MatPaginator;
  public sort: MatSort;
  public totalCount: number = 0;
  constructor() {
    super();
   
 
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<UserSelect[]> {
    
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
      
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }
  

  disconnect() {}

 
    private getPagedData=(data: UserSelect[])=> {
      
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data;
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
    private getSortedData(data: UserSelect[]) {
        console.log(data);
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'firstName': return compare(a.firstName, b.firstName, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
