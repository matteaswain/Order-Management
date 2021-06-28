import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from './customer.class';

@Pipe({
  name: 'searchCustomer'
})
export class SearchCustomerPipe implements PipeTransform {

  transform(customers: Customer[], searchCriteria: string): Customer[] {
    if(customers == null || searchCriteria.length === 0){
      return customers;
    }
    let search = searchCriteria.toLowerCase();
    let selectedCustomers: Customer[] = [];
    for(let c of customers)
    {
      if(c.id.toString().includes(search)
        || c.code.toLowerCase().includes(search)
        || c.name.toLowerCase().includes(search)
        || c.isNational.toString().toLowerCase().includes(search)
        || c.sales !== null && c.sales.toString().toLowerCase().includes(search)
        || c.created !== null && c.created.toString().toLowerCase().includes(search)
        )
      {
        selectedCustomers.push(c);
      }

    }
    return selectedCustomers;
  }

}
