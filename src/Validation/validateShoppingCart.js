import OutputView from '../View/OutputView.js';

function parseMultipleItems(parseString) {
  return parseString.map((str) => str.slice(1, str.length - 1).split('-'));
}

function checkProductAvailable(name, products) {
  const allAvailableProducts = products.map((product) => product.name);
  if (!allAvailableProducts.includes(name)) return false;
  return true;
}
function checkAvailableQuantity(name, quantity, products) {
  const allAvailableQuantity = products
    .filter((product) => product.name === name)
    .map((product) => product.quantity)
    .reduce((partialSum, a) => partialSum + a, 0);

  return allAvailableQuantity > quantity;
}
export default function validateShoppingCart(inputString, products) {
  let parseString = inputString;
  let shoppingCart = [];
  const resultCart = [];
  if (!inputString.startsWith('[') || !inputString.includes(']')) {
    OutputView.printMessage('[ERROR]: 괄호식이 올바르지 않습니다.');
    return null;
  }
  if (!inputString.includes(',')) {
    shoppingCart.push(parseString.slice(1, parseString.length - 1).split('-'));
  }

  if (inputString.includes(',')) {
    parseString = parseString.split(',');
    shoppingCart = parseMultipleItems(parseString);
  }
  // eslint-disable-next-line
  for (const shoppingItem of shoppingCart) {
    const [itemName, quantity] = shoppingItem;
    if (Number.isNaN(Number(quantity)) || Number(quantity) < 0) {
      OutputView.printMessage(
        '[ERROR] 숫자가 올바르지 않습니다. 음수는 입력되지 않습니다.',
      );
      return null;
    }

    if (!checkProductAvailable(itemName, products)) {
      OutputView.printMessage(
        '[ERROR] 존재하지 않는 아이템을 입력했습니다. 다시 입력해 주세요.',
      );
      return null;
    }
    if (!checkAvailableQuantity(itemName, +quantity, products)) {
      OutputView.printMessage(
        '[ERROR] 재고 수량을 초과하여 구매할 수 없습니다. 다시 입력해 주세요.',
      );
      return null;
    }
    resultCart.push({ itemName, quantity: +quantity });
  }

  return resultCart;
}
