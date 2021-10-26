import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  product = [{
    name: "",
    price: "",
    quantity: "",
    image: ""
  }
  ];
  userDisplayName: String | null = '';
  constructor(private allProduct: ProductService) { }

  ngOnInit(): void {
    this.allProduct.getProduct(this.userDisplayName).subscribe((result) => {
      this.product = result
    })
  }
}


