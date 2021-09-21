import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {
  userDisplayName: String | null = '';
  constructor() { }

  ngOnInit(): void {
    this.userDisplayName = localStorage.getItem('loggedUser');
  }

}
