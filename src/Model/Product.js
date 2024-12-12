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

  toString() {
    return `${this.#name} ${this.#price} ${this.#quantity} ${this.#promotion.name}`;
  }
}

export default Product;
