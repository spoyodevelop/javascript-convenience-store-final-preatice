import Parser from '../Parser.js';

const parsedPromotion = new Parser('public/promotions.md').parsedArray;

class Promotion {
  #name;

  #buy;

  #get;

  #startDate;

  #endDate;

  constructor(promotion) {
    const foundPromotion = parsedPromotion.find(
      (promo) => promo[0] === promotion,
    );
    if (!foundPromotion) {
      this.#name = 'noPromo';
    } else {
      const [name, buy, get, startDate, endDate] = foundPromotion;
      this.#name = name;
      this.#buy = +buy;
      this.#get = +get;
      this.#startDate = new Date(startDate);
      this.#endDate = new Date(endDate);
    }
  }

  get name() {
    return this.#name;
  }
}

export default Promotion;
