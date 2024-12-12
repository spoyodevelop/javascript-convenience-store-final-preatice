import fs from 'fs';

class Parser {
  #parsedArray;

  constructor(path) {
    const product = fs.readFileSync(path, 'utf8');
    this.#parsedArray = product
      .split('\n')
      .filter((line) => line !== '')
      .slice(1)
      .map((line) => line.split(','));
  }

  get parsedArray() {
    return this.#parsedArray;
  }
}

export default Parser;
