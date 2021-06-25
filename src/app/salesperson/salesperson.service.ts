import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Salesperson } from './salesperson.class';
import { Observable } from 'rxjs';

const baseurl : string = "http://localhost:5000/api"

@Injectable({
  providedIn: 'root'
})
export class SalespersonService {

  constructor(private http : HttpClient) { }

  
 //method name () : return type {}
 
 list(): Observable<Salesperson[]>
 {
   return this.http.get(`${baseurl}/salespersons`) as Observable<Salesperson[]>
 }

 get(id:number): Observable<Salesperson>
 {
  return this.http.get(`${baseurl}/salespersons/${id}`) as Observable<Salesperson>

 }

 create(customer:Salesperson): Observable<Salesperson>
 {
   return this.http.post(`${baseurl}/salespersons`,customer) as Observable<Salesperson>
 }

edit(customer:Salesperson): Observable<Salesperson>
{
  return this.http.put(`${baseurl}/salespersons/${customer.id}`,customer) as Observable<Salesperson>
}

delete(id:number): Observable<Salesperson>
{
  return this.http.delete(`${baseurl}/salespersons/${id}`) as Observable<Salesperson>
}






}
