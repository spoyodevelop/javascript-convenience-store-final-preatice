import { Console } from '@woowacourse/mission-utils';

export default async function validateUserAgree(message) {
  while (true) {
    const input = await Console.readLineAsync(message);
    const parsedString = input.trim().toUpperCase();
    if (parsedString !== 'Y' && parsedString !== 'N') {
      Console.print('[ERROR]: Y 와 N 만 입력 가능합니다.');
    }
    if (parsedString === 'Y') return true;
    if (parsedString === 'N') return false;
  }
}
