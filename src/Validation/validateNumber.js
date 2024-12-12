// function isValidFormat(item) {
//   return ITEM_REGEX.test(item);
// }

function isNumber(parsedNumber) {
  return !Number.isNaN(parsedNumber);
}
function isNumberDupliciate(numbers) {
  const parsedNumber = [];
  for (const number of numbers) {
    parsedNumber.push(Number(number));
  }
  const nonduplicateNumber = new Set(parsedNumber);
  return numbers.length !== nonduplicateNumber.size;
}

export default function validateNumber(inputString) {
  const parsedNumber = Number(inputString);
  const parsedNumbers = [];
  for (const number of inputString) {
    parsedNumbers.push(Number(number));
  }
  if (parsedNumber < 100 || parsedNumber > 1000) {
    throw new Error('[ERROR]: 유효한 범위의 숫자를 입력해주세요');
  }
  if (!isNumber(parsedNumber)) {
    throw new Error('[ERROR]: 숫자가 아닙니다.');
  }

  if (inputString.length > 3) {
    throw new Error('[ERROR]: 숫자가 3을 넘습니다.');
  }
  if (isNumberDupliciate(inputString)) {
    throw new Error('[ERROR]: 숫자가 중복됩니다.');
  }

  return parsedNumbers;
}
