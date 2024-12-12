import Promotion from './Promotion.js';

class Product {
  #name;

  #price;

  #quantity;

  #promotion;

  constructor(name, price, quantity, promotion) {
    this.#name = name;
    this.#price = +price;
    this.#quantity = +quantity;
    this.#promotion = new Promotion(promotion);
  }

  get name() {
    return this.#name;
  }

  get quantity() {
    return this.#quantity;
  }

  toString() {
    let disPlayPromo = this.#promotion.name;
    let disPlayQuantity = `${this.#quantity}개`;
    if (this.#promotion.name === 'noPromo') {
      disPlayPromo = '';
    }
    if (this.#quantity === 0) {
      disPlayQuantity = '재고 없음';
    }
    return `- ${this.#name} ${this.#price.toLocaleString()}원 ${disPlayQuantity} ${disPlayPromo}`;
  }
}

export default Product;
