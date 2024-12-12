import OutputView from './View/OutputView.js';
import InputView from './View/InputView.js';
import ProductMaker from './ProductMaker.js';
import ProductSeller from './ProductSeller.js';
import BillProcessor from './BillProcessor.js';

class App {
  async run() {
    const { products } = new ProductMaker();

    const shoppingCart = await InputView.getShoppingCart(products);
    const membership = await InputView.askUserAgree(
      '맴버쉽 할인을 받으시겠습니까? (Y/N)',
    );
    const bills = [];
    for (const shoppingItem of shoppingCart) {
      bills.push(await ProductSeller(shoppingItem, products));
    }

    const billProcessor = new BillProcessor();
    const eachOne = billProcessor.processEachOne(bills);
    const freebieBill = billProcessor.processFreebie(bills);
    const totalBill = billProcessor.processTotal(bills, membership);
  }
}

export default App;
