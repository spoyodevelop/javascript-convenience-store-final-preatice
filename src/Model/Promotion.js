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

  get buyAmount() {
    return this.#buy + 1;
  }

  isFreeAvailable(quantity) {
    return (quantity + 1) % (this.#buy + 1) === 0;
  }

  getFreebie(quantity) {
    return Math.floor(quantity / (this.#buy + 1));
  }

  get name() {
    return this.#name;
  }
}

export default Promotion;
