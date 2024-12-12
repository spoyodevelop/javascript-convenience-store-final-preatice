import { Console } from '@woowacourse/mission-utils';

import OutputView from './View/OutputView.js';
import InputView from './View/InputView.js';
import ProductMaker from './ProductMaker.js';
import ProductSeller from './ProductSeller.js';

class App {
  async run() {
    const { products } = new ProductMaker();
    OutputView.displayProducts(products);
    const shoppingCart = await InputView.getShoppingCart(products);

    shoppingCart.forEach((shoppingItem) =>
      ProductSeller(shoppingItem, products),
    );
  }
}

export default App;
