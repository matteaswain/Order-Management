import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/customer/customer.class';
import { CustomerService } from 'src/app/customer/customer.service';
import { SystemService } from 'src/app/misc/system.service';
import { Order } from '../order.class';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {

  order: Order = new Order();
  customers: Customer[] = [];

  constructor
  (
    private syssvc: SystemService,
    private ordersvc: OrderService,
    private custsvc: CustomerService,
    private router: Router
  ) { }

  save(): void {
    this.order.customerId = +this.order.customerId;
    console.debug("B4:", this.order);
    this.ordersvc.create(this.order).subscribe(
      res => {console.debug("Create successful!");},
      err => {console.error(err); }
    );
  }

  ngOnInit(): void {
    //this.order.salespersonId= this.syssvc.LoggedInUser == null ? 0 : this.syssvc.LoggedInUser?.id;
    this.order.salespersonId = 1;
    this.custsvc.list().subscribe(
      res => {console.debug(res); this.customers = res;},
      err => {console.error(err);}
    );
  }

}
