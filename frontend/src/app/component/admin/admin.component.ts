import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  signInRef = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  })
  msg: String = "";
  constructor(public adminService: AdminService, public router: Router) { }

  ngOnInit(): void {
  }

  checkAdmin() {
    let userInfo = this.signInRef.value;
    this.adminService.adminSignIn(userInfo);
    if (userInfo.email == "admin@email.com" && userInfo.password == "123") {
      localStorage.setItem('loggedUser', userInfo.email);
      this.router.navigate(['adminPanel'], { queryParams: { id: userInfo.email } });   // appended name through path
    } else {
      this.msg = "InValid username or password";
    }
    this.signInRef.reset();
  }

}


