import { Component, OnInit } from '@angular/core';
import { Salesperson } from '../salesperson.class';
import { SalespersonService } from '../salesperson.service';

@Component({
  selector: 'app-salesperson-list',
  templateUrl: './salesperson-list.component.html',
  styleUrls: ['./salesperson-list.component.css']
})
export class SalespersonListComponent implements OnInit {
  
  tableWidth: string = "table table-striped" ;

  salespeople: Salesperson[] = [];
  sortColumn: string = "id";
  sortAsc: boolean = true;

  searchCriteria: string = "";

  sortFn(column:string): void
  {
    if(column == this.sortColumn)
    {
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortColumn = column;
    this.sortAsc = true;
  }

  constructor
  (
    private salessvc : SalespersonService
  ) { }

  ngOnInit(): void {
    this.salessvc.list().subscribe
    (
      res => {console.debug("Salespeople",res);
      this.salespeople = res; },
      err => {console.error(err);}
    );





  }

}
