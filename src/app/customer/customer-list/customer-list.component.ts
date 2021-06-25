import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.class';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];
  tableWidth: string = "table table-striped"

  constructor
  (
    private custsvc : CustomerService
  ) { }

  ngOnInit(): void {

    this.custsvc.list().subscribe
    (
      res => {console.debug("Customers",res);
      this.customers = res;
             },
      err => {console.error(err);}
    );


  }

}
