import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.css']
})
export class UserpanelComponent implements OnInit {

  product: any;
  userDisplayName: String | null = '';
  constructor(private allProduct: ProductService) { }

  ngOnInit(): void {
    this.userDisplayName = localStorage.getItem('loggedUser');
    this.allProduct.getProduct(this.userDisplayName).subscribe((result) => {

    })
  }

}
