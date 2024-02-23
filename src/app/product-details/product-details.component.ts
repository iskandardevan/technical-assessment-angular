import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../product.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


  @Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
  })
  export class ProductDetailsComponent implements OnInit {
    productName: string | undefined;
    price: number | undefined;
    description: string | undefined;
    category: string | undefined;
    image: string | undefined;


    edit: boolean = false;


    constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {}

    // get from service by id from url param
    product: Product | undefined;



    // oninit load product
    ngOnInit(): void {
      let id = Number(this.route.snapshot.paramMap.get('id'));
      this.product = this.productService.getProductById(id);
      this.productName = this.product?.name;
      this.price = this.product?.price;
      this.description = this.product?.description;
      this.category = this.product?.category;
      this.image = this.product?.image;

    }

    editValue(product: Product): void{
      this.router.navigate(['/admin/products', product.id]);
      console.log(product);


    }

    delValue(){
      this.productService.deleteProduct(this.product?.id!)
      this.router.navigate(['/admin/products']);
    }


  }
