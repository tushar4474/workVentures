import { Injectable } from '@angular/core';

import { Product } from 'src/app/models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'PAN base', 'PAN BASE PIZZA \n Delicious tasty and kool!',20),
    new Product(2, 'CLASSIC BASE', 'CLASSIC BASE PIZZA \n. The product is really kool!',30),
    new Product(3, 'HAND TOSSED CRUST PIZZA', 'HAND TOSSED CRUST PIZZA \n. The product is really kool!', 80),
    new Product(4, 'NORMAL PIZZA', 'NORMAL PIZZA \n. The product is really kool!', 70),
    new Product(5, 'CHEESE BURST PIZZA', 'CHEESE BURST PIZZA \n. The product is really kool!', 100),
    new Product(6, 'PANEER TOPPING PIZZA', 'PANEER TOPPING PIZZA \n. The product is really kool!', 50),
    new Product(7, 'CORN TOPPING PIZZA ', 'CORN TOPPING PIZZA \n.The product is really kool!', 20),
    new Product(8, 'CAPSICUM TOPPING PIZZA', 'CAPSICUM TOPPING PIZZA \n.. The product is really kool!', 30),
  ]

  constructor() { }

  getProducts(): Product[] {
    //TODO: Populate products from an API and return an Observable
    return this.products
  }
}
