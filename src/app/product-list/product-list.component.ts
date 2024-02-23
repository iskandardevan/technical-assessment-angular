import { Component } from '@angular/core';
import { Product, ProductService } from '../product.service';
import { Employee, EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products: Product[] = [];
  employees: Employee[] = [];
  isLoading!: boolean;
  pagedEmployees: any[] = [];
  currentPage: number = 1;
  itemsPerPage = 10; 

  constructor(private productService: ProductService, private employeeService: EmployeeService, private router: Router) {}

  // get from service
  getProducts(): void {
    this.products = this.productService.getProducts();
  }

  // get employee
  getEmployees(): void {
    this.employees = this.employeeService.getEmployees();
  }

  // oninit load product
  ngOnInit(): void {
    this.getProducts();
    this.getEmployees();
    this.setPage(1);
  }
  

  // Fungsi untuk menetapkan halaman yang aktif
  setPage(page: number) {
    this.currentPage = page;
    const startIndex = (page - 1) * this.itemsPerPage;
    this.pagedEmployees = this.employees.slice(startIndex, startIndex + this.itemsPerPage);
    console.log('ini setPage', page);
    console.log('ini pagedEmployees', this.pagedEmployees);
  }

  // Fungsi to sort by basic salary
  sortByBasicSalary(): void {
    this.employees.sort((a, b) => b.basicSalary - a.basicSalary);
    this.setPage(1);
  }
   
  // Function to navigate to the next page
  nextPage(): void {
    this.setPage(this.currentPage + 1);
  }
 
  // Function to navigate to the previous page
  previousPage(): void {
    this.setPage(this.currentPage - 1);
  }
  selectProduct(product: Product): void {
    this.router.navigate(['/admin/products', product.id]);
    console.log(product);
  }

  getAllProducts(): void {

    const textCategory = document.getElementById('category');
    if (textCategory) {
      textCategory.innerHTML = `All
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
        <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659"/>
      </svg>`;
    }
    this.products = this.productService.getProducts();
  }

  // fungsi filter by category
  filterByCategory(category: string): void {
    this.products = this.productService.getProductsByCategory(category);
    // get element by id category for text category
    const textCategory = document.getElementById('category');
    if (textCategory) {
      textCategory.innerHTML = `${category}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
        <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659"/>
      </svg>`;
    }
  }
  convertDateFormat(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  convertTime(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }

}
