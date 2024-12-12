import { Console } from '@woowacourse/mission-utils';

import validateRetry from '../Validation/validateRetry.js';
import validateShoppingCart from '../Validation/validateShoppingCart.js';

const InputView = {
  async getShoppingCart(products) {
    while (true) {
      const input = await Console.readLineAsync(
        '구매하실 상품명과 수량을 입력해 주세요. (예: [사이다-2],[감자칩-1])',
      );
      const shoppingCart = validateShoppingCart(input, products);
      if (shoppingCart) return shoppingCart;
    }
  },
  async getValidRetry() {
    const input = await Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
    );
    const retry = validateRetry(input);

    return retry;
  },
};

export default InputView;
