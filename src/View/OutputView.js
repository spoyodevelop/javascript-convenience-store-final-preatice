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
  displayWinningMessage() {
    this.printMessage('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  },
};

export default OutputView;
