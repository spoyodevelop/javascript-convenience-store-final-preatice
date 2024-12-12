function isNumber(parsedNumber) {
  return !Number.isNaN(parsedNumber);
}

export default function validateRetry(inputString) {
  if (inputString !== '1' && inputString !== '2') {
    throw new Error('[ERROR]: 1과 2만 입력가능합니다.');
  }
  if (inputString === '1') return true;
  return false;
}
