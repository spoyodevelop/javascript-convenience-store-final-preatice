import OutputView from './View/OutputView.js';
import InputView from './View/InputView.js';
import ProductMaker from './ProductMaker.js';
import ProductSeller from './ProductSeller.js';
import BillProcessor from './BillProcessor.js';

class App {
  async run() {
    const { products } = new ProductMaker();

    while (true) {
      OutputView.displayProducts(products);
      const shoppingCart = await InputView.getShoppingCart(products);

      const bills = [];
      for (const shoppingItem of shoppingCart) {
        bills.push(await ProductSeller(shoppingItem, products));
      }
      const membership = await InputView.askUserAgree(
        '맴버쉽 할인을 받으시겠습니까? (Y/N)',
      );
      const billProcessor = new BillProcessor();
      const eachOne = billProcessor.processEachOne(bills);
      const freebieBill = billProcessor.processFreebie(bills);
      const totalBill = billProcessor.processTotal(bills, membership);
      OutputView.displayEachOneBill(eachOne);
      OutputView.displayFreebie(freebieBill);
      OutputView.displayTotal(totalBill);
      const retry = await InputView.askUserAgree(
        '감사합니다. 구매하고 싶은 다른 상품이 있나요?(Y/N)',
      );
      if (!retry) {
        break;
      }
    }
  }
}

export default App;
