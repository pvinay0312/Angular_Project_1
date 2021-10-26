import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

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
  }

  update() {
    this.allProduct.updateProduct(this.userDisplayName).subscribe((result) => {
      this.product = result
      console.log(this.allProduct)
    })
  }
}
