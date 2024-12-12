import { Console } from '@woowacourse/mission-utils';

import OutputView from './View/OutputView.js';
import InputView from './View/InputView.js';
import ProductMaker from './ProductMaker.js';

class App {
  async run() {
    const { products } = new ProductMaker();
    OutputView.displayProducts(products);
    // const input = await InputView.getShoppingCart(products);
  }
}

export default App;
