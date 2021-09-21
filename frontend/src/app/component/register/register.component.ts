import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signUpRef = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl(),
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    DOB: new FormControl(),
    phone: new FormControl(),
    address: new FormControl(),
  })

  constructor(public creatAccount: AdminService, public router: Router) { }
  msg = "";

  ngOnInit(): void {
  }

  accountCreate() {
    let userInfo = this.signUpRef.value;

    // this.creatAccount.userSignUp(userInfo).
    //   subscribe(result => this.msg = result, err => console.log(err))

    // this.signUpRef.reset();
    this.creatAccount.userSignUp(userInfo)
    localStorage.setItem('loggedUser', userInfo.fname);
    this.router.navigate(['adminPanel'], { queryParams: { id: userInfo.fname } });   // appended name through path
    // } else {
    this.msg = "InValid username or password";
    //}
    this.signUpRef.reset();
  }
}


