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
    email: new FormControl("admin@email.com", Validators.required),
    password: new FormControl("123", Validators.required)
  })
  msg: String = "";
  constructor(public adminService: AdminService, public router: Router) { }

  ngOnInit(): void {
  }

  checkAdmin() {
    let userInfo = this.signInRef.value;
    this.adminService.adminSignIn(userInfo).
      subscribe(result => {
        if (result == "Success") {
          console.log(result)
          this.router.navigate(['adminPanel'], { queryParams: { id: userInfo.email } });

        } else {
          this.msg = result;
        }
      }
        , err => console.log(err))
  }

}


