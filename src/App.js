import { Console } from '@woowacourse/mission-utils';
import Parser from './Parser.js';
import Product from './Model/Product.js';
import OutputView from './View/OutputView.js';
import InputView from './View/InputView.js';

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

    const products = [];
    parsedProduct.forEach(([name, price, quantity, promotion]) => {
      products.push(new Product(name, price, quantity, promotion));
      if (differenceList.includes(name)) {
        products.push(new Product(name, price, 0, 'null'));
      }
    });

    // OutputView.displayProducts(products);
    const input = await InputView.getShoppingCart(products);
    console.log(input);
  }
}

export default App;
