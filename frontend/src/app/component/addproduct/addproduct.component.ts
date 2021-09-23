import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  addProductForm = new FormGroup({
    name: new FormControl("", Validators.required),
    price: new FormControl("", Validators.required),
    quantity: new FormControl("", Validators.required),
    image: new FormControl("", Validators.required),
  })


  constructor(private fb: FormBuilder, private productsService: ProductService) { }
  msg = '';
  ngOnInit(): void {

  }

  addProduct() {
    let product = this.addProductForm.value;
    this.productsService.addProduct(product).
      subscribe((result) => {
        alert(result.message)
      }, (err) => console.log(err))
    //localStorage.setItem('product', addProduct.email);
    //this.router.navigate(['login'], { queryParams: { id: userInfo.email } });   // appended name through path
    this.msg = "Product is not added";
    //this.product.reset();


  }
}
