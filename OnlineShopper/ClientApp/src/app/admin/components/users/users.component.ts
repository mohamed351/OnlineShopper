import { PagerViewModel } from './../../model/pager';
import { UsersService } from './../../services/users.service';
import { UserSelect } from './../../model/users';
import { Component, OnInit ,ViewChild} from '@angular/core';
import { DatatableDataSource } from './user.datasource';
import { MatTable, MatSort, MatPaginator } from '@angular/material';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public tableSize: number = 0;
  
  constructor(private UsersService:UsersService) {

    
  }
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<UserSelect>;
  dataSource: DatatableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [ 'firstName','lastName','phone','userName','id'];

  ngOnInit() {
  
      
  }
  Testing(data: any) {
    let view: PagerViewModel = {
      pageSize: data.pageSize,
      start:data.pageIndex
    }
    this.UsersService.GetUsers(view).subscribe(a => {
      this.dataSource = new DatatableDataSource();
      this.dataSource.data = a.data;
      this.dataSource.sort = this.sort;
      this.tableSize = a.totalCount;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    });
  }


  ngAfterViewInit() {
    let view: PagerViewModel = {
      pageSize: this.paginator.pageSize,
      start:this.paginator.pageIndex
    }
    this.UsersService.GetUsers(view).subscribe(a => {
      console.log(a.totalCount);
      this.dataSource = new DatatableDataSource();
      this.dataSource.data = a.data;
      this.tableSize = a.totalCount;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    });
    
  }

}
