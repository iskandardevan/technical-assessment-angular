import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  public products: Product[] = [];

  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Smartphone',
        description: 'Latest smartphone with advanced features',
        price: 699.99,
        category: 'Electronics'
      },
      {
        id: 2,
        name: 'Laptop',
        description: 'Powerful laptop for work and entertainment',
        price: 1299.99,
        category: 'Electronics'
      },
      {
        id: 3,
        name: 'Smart TV',
        description: 'High-definition smart television with streaming capabilities',
        price: 899.99,
        category: 'Electronics'
      },
      {
        id: 4,
        name: 'Wireless Headphones',
        description: 'Comfortable wireless headphones with noise-cancellation',
        price: 199.99,
        category: 'Electronics'
      },
      {
        id: 5,
        name: 'Tablet',
        description: 'Versatile tablet for productivity and entertainment',
        price: 499.99,
        category: 'Electronics'
      },
      {
        id: 6,
        name: 'Smartwatch',
        description: 'Fitness tracker and smartwatch with heart rate monitoring',
        price: 299.99,
        category: 'Electronics'
      },
      {
        id: 7,
        name: 'Gaming Console',
        description: 'Next-gen gaming console for immersive gaming experiences',
        price: 499.99,
        category: 'Electronics'
      },
      {
        id: 8,
        name: 'Wireless Router',
        description: 'High-speed wireless router for seamless internet connectivity',
        price: 99.99,
        category: 'Electronics'
      },
      {
        id: 9,
        name: 'Digital Camera',
        description: 'Professional-grade digital camera for capturing stunning photos',
        price: 799.99,
        category: 'Electronics'
      },
      {
        id: 10,
        name: 'Smart Home Assistant',
        description: 'Voice-controlled smart home assistant for home automation',
        price: 149.99,
        category: 'Electronics'
      },
      {
        id: 20,
        name: "Smart Home Assistant",
        description: "Voice-controlled smart home assistant for home automation",
        price: 149.99,
        category: "Electronics"
      },
      {
        id: 11,
        name: "Organic Fruit Basket",
        description: "Assorted organic fruits for a healthy lifestyle",
        price: 29.99,
        category: "Grocery"
      },
      {
        id: 12,
        name: "Men's Leather Wallet",
        description: "Handcrafted genuine leather wallet for men",
        price: 49.99,
        category: "Fashion"
      },
      {
        id: 13,
        name: "Wooden Chess Set",
        description: "Classic wooden chess set for hours of strategic fun",
        price: 39.99,
        category: "Toys & Games"
      },
      {
        id: 14,
        name: "Stainless Steel Water Bottle",
        description: "Durable stainless steel water bottle for on-the-go hydration",
        price: 19.99,
        category: "Sports & Outdoors"
      },
      {
        id: 15,
        name: "Bluetooth Headphones",
        description: "Wireless Bluetooth headphones for immersive audio experience",
        price: 79.99,
        category: "Electronics"
      },
      {
        id: 16,
        name: "Cooking Utensil Set",
        description: "Complete set of cooking utensils for culinary enthusiasts",
        price: 59.99,
        category: "Kitchen & Dining"
      },
      {
        id: 17,
        name: "Garden Trowel and Fork Set",
        description: "Essential gardening tools for maintaining your garden",
        price: 14.99,
        category: "Home & Garden"
      },
      {
        id: 18,
        name: "Children's Coloring Book",
        description: "Fun and educational coloring book for kids",
        price: 9.99,
        category: "Books"
      },
      {
        id: 19,
        name: "Yoga Mat",
        description: "High-quality yoga mat for comfortable workouts",
        price: 24.99,
        category: "Sports & Outdoors"
      }
    ];
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(productId: number): Product | undefined {
    return this.products.find(product => product.id === productId);
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  updateProduct(productId: number, updatedProduct: Partial<Product>): void {
    const productIndex = this.products.findIndex(product => product.id === productId);
    if (productIndex !== -1) {
      // Perbarui properti produk yang sesuai dengan updatedProduct
      this.products[productIndex] = { ...this.products[productIndex], ...updatedProduct };
      console.log(`Product with ID ${productId} updated successfully.`);
    } else {
      console.log(`Product with ID ${productId} not found.`);
    }
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter(product => product.id !== productId);
  }

  getProductsByCategory(category: string): Product[] {
    return this.products.filter(product => product.category === category);
  }
}


export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
}
