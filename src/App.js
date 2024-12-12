import { Console } from '@woowacourse/mission-utils';
import Parser from './Parser.js';
import Product from './Model/Product.js';

class App {
  async run() {
    const parsedProduct = new Parser('public/products.md').parsedArray;
    const products = [];
    parsedProduct.forEach(([name, price, quantity, promotion]) => {
      products.push(new Product(name, price, quantity, promotion));
    });

    products.forEach((product) => console.log(product.toString()));
  }
}

export default App;
