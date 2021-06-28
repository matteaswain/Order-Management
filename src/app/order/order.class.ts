import { Customer } from "../customer/customer.class";
import { Salesperson } from "../salesperson/salesperson.class";

export class Order 
{
    id: number =0;
    description: string = "";
    status: string = "NEW";
    total: number = 0;

    customerId: number = 0;
    customer: Customer | null = null; 

    salespersonId: number = 0;
    salesperson: Salesperson | null = null; 

    // orderlines: OrderLines[] | null = null; 
}