import Parser from './Parser.js';

import Product from './Model/Product.js';

class ProductMaker {
  #products;

  constructor() {
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
    const products = [];
    parsedProduct.forEach(([name, price, quantity, promotion]) => {
      products.push(new Product(name, price, quantity, promotion));
      if (differenceList.includes(name)) {
        products.push(new Product(name, price, 0, 'null'));
      }
    });

    this.#products = products;
  }

  get products() {
    return this.#products;
  }
}
export default ProductMaker;
