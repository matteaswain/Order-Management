import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Salesperson } from '../salesperson.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  message: string = "";

  constructor(private syssvc: SystemService, private router: Router) { }

  login(): void
  {this.syssvc.LoggedInUser = null;
    if(this.password === "password"){
      let sper = new Salesperson();
      this.syssvc.LoggedInUser = sper;
      console.debug(this.syssvc.LoggedInUser);
      this.router.navigateByUrl("/customer/list")
    }
    this.message = "Login failed!";
  }

  ngOnInit(): void {
  }

}
