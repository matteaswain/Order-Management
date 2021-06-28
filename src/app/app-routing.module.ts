import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';

import { E404Component } from './misc/e404/e404.component';
import { SalespersonCreateComponent } from './salesperson/salesperson-create/salesperson-create.component';
import { SalespersonDetailComponent } from './salesperson/salesperson-detail/salesperson-detail.component';
import { SalespersonEditComponent } from './salesperson/salesperson-edit/salesperson-edit.component';
import { SalespersonListComponent } from './salesperson/salesperson-list/salesperson-list.component';
import { LoginComponent } from './salesperson/login/login.component';

import { OrderCreateComponent } from './order/order-create/order-create.component';

const routes: Routes = 
[
  {path: '', redirectTo:'/login', pathMatch: 'full'},

  {path: 'customer/list', component: CustomerListComponent},
  {path: 'customer/detail/:id', component: CustomerDetailComponent},
  {path: 'customer/create', component: CustomerCreateComponent},
  {path: 'customer/edit/:id', component: CustomerEditComponent},

  {path: 'salesperson/list', component: SalespersonListComponent},
  {path: 'salesperson/detail/:id', component: SalespersonDetailComponent},
  {path: 'salesperson/create', component: SalespersonCreateComponent},
  {path: 'salesperson/edit/:id', component: SalespersonEditComponent},


  {path: 'order/create', component:OrderCreateComponent},
  
  {path: 'login', component: LoginComponent},



  {path: '**', component: E404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
