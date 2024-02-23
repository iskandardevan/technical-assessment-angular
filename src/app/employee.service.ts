import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  public employees: Employee[] = [];
 
  constructor() {
    this.employees = [];

    const firstNames = ["John", "Jane", "Michael", "Emily", "David", "Sarah", "Christopher", "Jessica", "Daniel", "Amanda"];
    const lastNames = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor"];
    const groups = ["Engineering", "Marketing", "Finance", "Operations", "Human Resources"];
    const statuses = ["active", "inactive", "on leave"];
    
    const numberOfEmployees = 100; // Ubah sesuai kebutuhan Anda

    for (let i = 0; i < numberOfEmployees; i++) {
        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        const username = firstName.toLowerCase() + lastName.toLowerCase() + Math.floor(Math.random() * 1000);
        const email = `${username}@company.com`;
        const birthDate = new Date(1950 + Math.floor(Math.random() * 50), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
        const basicSalary = Math.floor(Math.random() * 50000) + 30000; // Random salary between 30000 and 79999
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        const group = groups[Math.floor(Math.random() * groups.length)];
        const description = new Date

        const employee = {
            username: username,
            firstName: firstName,
            lastName: lastName,
            email: email,
            birthDate: birthDate,
            basicSalary: basicSalary,
            status: status,
            group: group,
            description: description
        };

        this.employees.push(employee);
    }
}


  getEmployees(): Employee[] {
    return this.employees;
  }

  // getEmployeeById(productId: number): Employee | undefined {
  //   return this.employees.find(product => product.id === productId);
  // }

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  // updateEmployee(productId: number, updatedEmployee: Partial<Employee>): void {
  //   const productIndex = this.employees.findIndex(product => product.id === productId);
  //   if (productIndex !== -1) {
  //     // Perbarui properti produk yang sesuai dengan updatedEmployee
  //     this.employees[productIndex] = { ...this.employees[productIndex], ...updatedEmployee };
  //     console.log(`Employee with ID ${productId} updated successfully.`);
  //   } else {
  //     console.log(`Employee with ID ${productId} not found.`);
  //   }
  // }

  // deleteEmployee(productId: number): void {
  //   this.employees = this.employees.filter(product => product.id !== productId);
  // }

  // getEmployeesByCategory(category: string): Employee[] {
  //   return this.employees.filter(product => product.category === category);
  // }
}


export interface Employee {
  username: string,
  firstName: string,
  lastName: string,
  email: string,
  birthDate: Date,
  basicSalary: number,
  status: string,
  group: string,
  description: Date
} 

