import { Console } from '@woowacourse/mission-utils';

import OutputView from './View/OutputView.js';
import InputView from './View/InputView.js';
import ProductMaker from './ProductMaker.js';
import ProductSeller from './ProductSeller.js';
import BillProcessor from './BillProcessor.js';

class App {
  async run() {
    const { products } = new ProductMaker();
    OutputView.displayProducts(products);
    const shoppingCart = await InputView.getShoppingCart(products);
    const bills = [];
    for (const shoppingItem of shoppingCart) {
      bills.push(await ProductSeller(shoppingItem, products));
    }
    const eachOne = new BillProcessor().processEachOne(bills);
    console.log(eachOne);
  }
}

export default App;
