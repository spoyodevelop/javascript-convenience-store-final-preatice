import { Console } from '@woowacourse/mission-utils';

import validateShoppingCart from '../Validation/validateShoppingCart.js';
import validateUserAgree from '../Validation/validateUserAgree.js';

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
  async askUserAgree(message) {
    const userAgree = validateUserAgree(message);
    return userAgree;
  },
};

export default InputView;
