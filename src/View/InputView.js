import { Console } from '@woowacourse/mission-utils';
import validateNumber from '../Validation/validateNumber.js';
import validateRetry from '../Validation/validateRetry.js';

const InputView = {
  async getValidNumber() {
    const input = await Console.readLineAsync('숫자를 입력해주세요 : ');
    const number = validateNumber(input);

    return number;
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
