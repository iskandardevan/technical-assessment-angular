import  swal  from 'sweetalert2';
import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  name: string = '';
  description: string = '';
  price: number = 0;
  category: string = '';
  image: string = '';
  edit: boolean = true;

  constructor( private productService: ProductService, private router: Router) {

    // if (localStorage.getItem('product')) {
    //   this.name = JSON.parse(localStorage.getItem('product')!).name
    //   this.description = JSON.parse(localStorage.getItem('product')!).description
    //   this.price = JSON.parse(localStorage.getItem('product')!).price
    //   this.category = JSON.parse(localStorage.getItem('product')!).category
    //   this.image = JSON.parse(localStorage.getItem('product')!).image
    // }
   }

  addValue(value: string, value2: string, value3: string, value4: string, value5: any) {
    this.name = value
    this.description = value2
    this.price = Number(value3)
    this.category = value4
    this.image = value5
    this.productService.addProduct({
      id: this.productService.products.length + 1,
      name: this.name,
      description: this.description,
      price: this.price,
      category: this.category,
      // image: this.image ? this.image : null
      image: this.image
    });
    swal.fire('Success', 'Product added successfully', 'success');
    this.router.navigate(['/admin/products']);

  }

  updateValue(value: string, value2: string, value3: string, value4: string, value5: any){
    this.name = value
    this.description = value2
    this.price = Number(value3)
    this.category = value4
    this.image = value5
    console.log(this.productService.products[0].id, 'ini id')
    this.productService.updateProduct(this.productService.products[0].id, {
      id: this.productService.products[0].id,
      name: this.name,
      description: this.description,
      price: this.price,
      category: this.category,
      // image: this.image ? this.image : null
      image: this.image
    })
    swal.fire('Success', 'Product updated successfully', 'success');
    this.router.navigate(['/admin/products']);
  }
}
