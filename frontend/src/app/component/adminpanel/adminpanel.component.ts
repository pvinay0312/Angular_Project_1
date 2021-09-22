import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {
  userDisplayName: String | null = '';
  constructor(public router: Router) { }

  ngOnInit(): void {
    this.userDisplayName = localStorage.getItem('loggedUser');
  }
  addProduct() {
    this.router.navigate(["/add"]);
  }

  deleteProduct() {
    this.router.navigate(["/delete"]);
  }

  updateProduct() {
    this.router.navigate(["/update"]);
  }

  viewProduct() {
    this.router.navigate(["/view"]);
  }

  logout() {
    this.router.navigate(["/adminSignIn"]);
  }

}
