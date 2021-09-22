import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent implements OnInit {

  signInRef = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  })

  constructor(public adminService: AdminService, public router: Router) { }
  msg: String = "";
  ngOnInit(): void {
  }

  // checkAdmin() {
  //   let userInfo = this.signInRef.value;
  //   this.adminService.adminSignIn(userInfo).
  //     subscribe(result => {
  //       if (userInfo.email == "admin@email.com" && userInfo.password == "123") {
  //         localStorage.setItem('loggedUser', userInfo.email);
  //         this.router.navigate(['adminPanel'], { queryParams: { id: userInfo.email } });   // appended name through path
  //       } else {
  //         this.msg = "InValid username or password";
  //       }
  //       this.signInRef.reset();
  //     }, err => console.log(err))
  // }

  checkUser() {
    let userInfo = this.signInRef.value;
    this.adminService.signin(userInfo).
      subscribe(result => {
        if (result == "Success") {
          console.log(result)
          localStorage.setItem('loggedUser', userInfo.email);
          this.router.navigate(['userPanel'], userInfo.email);   // appended name through path
        } else {
          this.msg = result;
        }
        //this.signInRef.reset();
      },
        err => console.log(err));
    this.signInRef.reset();
  }

}
