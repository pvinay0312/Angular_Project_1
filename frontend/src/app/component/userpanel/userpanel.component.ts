import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.css']
})
export class UserpanelComponent implements OnInit {

  userDisplayName: String | null = '';
  constructor() { }

  ngOnInit(): void {
    this.userDisplayName = localStorage.getItem('loggedUser');

  }

}
