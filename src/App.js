import { Console } from '@woowacourse/mission-utils';
import fs from 'fs';

class App {
  async run() {
    const product = fs.readFileSync('public/promotions.md', 'utf8');
  }
}

export default App;
