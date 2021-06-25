import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer.class';

const baseurl: string = "http://localhost:5000/api"

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http: HttpClient
  ) { }

 //method name () : return type {}
 
 list(): Observable<Customer[]>
 {
   return this.http.get(`${baseurl}/customers`) as Observable<Customer[]>
 }

 get(id:number): Observable<Customer>
 {
  return this.http.get(`${baseurl}/customers/${id}`) as Observable<Customer>

 }

 create(customer:Customer): Observable<Customer>
 {
   return this.http.post(`${baseurl}/customers`,customer) as Observable<Customer>
 }

edit(customer:Customer): Observable<Customer>
{
  return this.http.put(`${baseurl}/customers/${customer.id}`,customer) as Observable<Customer>
}

delete(id:number): Observable<Customer>
{
  return this.http.delete(`${baseurl}/customers/${id}`) as Observable<Customer>
}



}
