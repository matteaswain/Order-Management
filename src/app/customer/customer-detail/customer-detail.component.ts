import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../customer.class';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  cust !: Customer;
  constructor(
    private custsvc : CustomerService,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const id = Number(routeParams.get('id'))
    this.custsvc.get(id).subscribe(
      res => {console.debug(res);
      this.cust = res;},
      
      err => {console.error(err);}

    );
  }

}
