import { Console } from '@woowacourse/mission-utils';
import Parser from './Parser.js';
import Product from './Model/Product.js';

class App {
  async run() {
    const parsedProduct = new Parser('public/products.md').parsedArray;

    const allProductList = [
      ...new Set(parsedProduct.map((product) => product[0])),
    ];
    const noPromoProductList = parsedProduct
      .filter((product) => product[3] === 'null')
      .map((product) => product[0]);
    const differenceList = allProductList.filter(
      (x) => !noPromoProductList.includes(x),
    );

    // parsedProduct.map(product => )s
    // parsedProduct.filter();
    const products = [];
    parsedProduct.forEach(([name, price, quantity, promotion]) => {
      products.push(new Product(name, price, quantity, promotion));
      if (differenceList.includes(name)) {
        products.push(new Product(name, price, 0, 'null'));
      }
    });

    products.forEach((product) => console.log(product.toString()));
  }
}

export default App;
