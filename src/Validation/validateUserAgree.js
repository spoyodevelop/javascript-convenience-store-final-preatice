export default function validateUserAgree(inputString) {
  const parsedString = inputString.trim().toUpperCase();
  if (parsedString !== 'Y' && parsedString !== 'N') {
    throw new Error('[ERROR]: Y 와 N 만 입력 가능합니다.');
  }
  if (parsedString === 'Y') return true;
  return false;
}
