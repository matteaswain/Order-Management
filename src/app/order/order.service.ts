import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order.class';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseurl: string = "http://localhost:5000/api/orders";

  constructor(private http: HttpClient) { }


  create(order: Order): Observable<Order>{
    return this.http.post(`${this.baseurl}`,order) as Observable<Order>;
  }
}
