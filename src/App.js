import { Console } from '@woowacourse/mission-utils';
import Parser from './parser.js';

class App {
  async run() {
    console.log(new Parser('public/products.md').parsedArray);
  }
}

export default App;
