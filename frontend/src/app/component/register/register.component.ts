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
  message = "";
  msg = "";

  ngOnInit(): void {
  }

  accountCreate() {
    let userInfo = this.signUpRef.value;
    this.creatAccount.userSignUp(userInfo).
      subscribe((result) => {
        alert(result.message)
      }, (err) => console.log(err))
    localStorage.setItem('loggedUser', userInfo.email);
    this.router.navigate(['login'], { queryParams: { id: userInfo.email } });   // appended name through path
    this.msg = "InValid username or password";
    this.signUpRef.reset();
  }
}


