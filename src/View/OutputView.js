import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printMessage(message) {
    Console.print(message);
  },
  displayWelcomeMessage() {
    this.printMessage('숫자 야구 게임을 시작합니다.');
  },
  displayProducts(products) {
    this.printMessage('안녕하세요. W편의점입니다.');
    this.printMessage('현재 보유하고 있는 상품입니다.\n');

    products.forEach((product) => this.printMessage(product.toString()));
  },
  displayEachOneBill(eachBill) {
    this.printMessage('==============W 편의점================');
    this.printMessage('상품명     수량     금액');
    eachBill.forEach(({ name, quantity, price }) => {
      this.printMessage(
        `${name}     ${quantity}      ${price.toLocaleString()}`,
      );
    });
  },

  displayFreebie(freebieBill) {
    this.printMessage('=============증 정===============');
    freebieBill.forEach(({ freebie, name }) => {
      this.printMessage(`${name}     ${freebie}`);
    });
  },

  displayTotal({
    totalBeforeDiscount,
    totalQuantity,
    promoDiscount,
    membershipDiscount,
    total,
  }) {
    this.printMessage('====================================');
    this.printMessage(
      `총구매액            ${totalQuantity}     ${totalBeforeDiscount.toLocaleString()}`,
    );
    this.printMessage(
      `행사할인                       -${promoDiscount.toLocaleString()}`,
    );
    this.printMessage(
      `맴버쉽할인                     -${membershipDiscount.toLocaleString()}`,
    );
    this.printMessage(
      `내실돈                            ${total.toLocaleString()}`,
    );
  },
};

export default OutputView;
