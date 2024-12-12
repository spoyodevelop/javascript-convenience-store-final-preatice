import { DateTimes } from '@woowacourse/mission-utils';
import InputView from './View/InputView.js';

function getNonPromoSellingQuantity(promoSellingQuantity, quantity) {
  if (quantity - promoSellingQuantity < 0) {
    return 0;
  }
  return quantity - promoSellingQuantity;
}
async function checkUserAgree(itemName) {
  const userAgree = await InputView.askUserAgree(
    `현재 ${itemName}은(는) 1개를 무료로 더 받을수 있습니다. 추가하시겠습니까? (Y/N)`,
  );
  return userAgree;
}
async function checkUserAgreeForBuyNonPromo(itemName, quantity) {
  const userAgree = await InputView.askUserAgree(
    `현재 ${itemName} ${quantity}개는 프로모션 할인이 적용되지않습니다. 그래도 구매하시겠습니까? (Y/N)`,
  );
  return userAgree;
}

async function expiredProductSeller(shoppingItem, products) {
  const { itemName, quantity } = shoppingItem;

  const filteredProduct = products.filter(
    (product) => product.name === itemName,
  );
  const promoProduct = filteredProduct.find(
    (product) => product.promotion !== 'noPromo',
  );
  const nonPromoProduct = filteredProduct.find(
    (product) => product.promotion === 'noPromo',
  );
  const promoQuantity = promoProduct?.quantity ?? 0;
  const nonPromoQuantity = nonPromoProduct.quantity ?? 0;

  const promoSellingQuantity = Math.min(quantity, promoQuantity);

  const nonPromoSellingQuantity = getNonPromoSellingQuantity(
    promoSellingQuantity,
    quantity,
  );

  if (promoSellingQuantity > 0) {
    promoProduct.sellProduct(promoSellingQuantity);
  }
  if (nonPromoSellingQuantity > 0) {
    nonPromoProduct.sellProduct(nonPromoSellingQuantity);
  }

  return {
    name: itemName,
    leftovers: 0,
    promoSellQuantity: 0,
    nonPromoSellingQuantity: promoSellingQuantity + nonPromoSellingQuantity,
    price: nonPromoProduct.price,
    freebie: 0,
  };
}
async function promoProductSeller(shoppingItem, products) {
  const { itemName, quantity } = shoppingItem;

  const filteredProduct = products.filter(
    (product) => product.name === itemName,
  );
  const promoProduct = filteredProduct.find(
    (product) => product.promotion !== 'noPromo',
  );
  const nonPromoProduct = filteredProduct.find(
    (product) => product.promotion === 'noPromo',
  );
  const promoQuantity = promoProduct?.quantity ?? 0;
  const nonPromoQuantity = nonPromoProduct.quantity ?? 0;

  let promoSellingQuantity = Math.min(quantity, promoQuantity);

  let nonPromoSellingQuantity = getNonPromoSellingQuantity(
    promoSellingQuantity,
    quantity,
  );

  if (
    promoProduct?.isFreeAvailable(promoSellingQuantity) &&
    promoQuantity > promoSellingQuantity + 1
  ) {
    if (await checkUserAgree(itemName)) promoSellingQuantity += 1;
  }
  let promoProductLeftovers = 0;

  if (promoSellingQuantity)
    promoProductLeftovers = promoSellingQuantity % promoProduct?.buyAmount;

  if (
    promoQuantity + nonPromoQuantity > promoProduct?.buyAmount &&
    nonPromoSellingQuantity + promoProductLeftovers >= promoProduct?.buyAmount
  ) {
    if (
      !(await checkUserAgreeForBuyNonPromo(
        itemName,
        nonPromoSellingQuantity + promoProductLeftovers,
      ))
    ) {
      nonPromoSellingQuantity = 0;
      promoSellingQuantity -= promoProductLeftovers;
      promoProductLeftovers = 0;
    }
  }
  const freebie = promoProduct?.getFreebie(promoSellingQuantity) ?? 0;

  if (promoSellingQuantity > 0) {
    promoProduct.sellProduct(promoSellingQuantity);
  }
  if (nonPromoSellingQuantity > 0) {
    nonPromoProduct.sellProduct(nonPromoSellingQuantity);
  }

  return {
    name: itemName,
    leftovers: promoProductLeftovers ?? 0,
    promoSellQuantity: promoSellingQuantity - promoProductLeftovers,
    nonPromoSellingQuantity,
    price: nonPromoProduct.price,
    freebie,
  };
}
export default async function productSeller(shoppingItem, products) {
  const { itemName, quantity } = shoppingItem;
  const filteredProduct = products.filter(
    (product) => product.name === itemName,
  );
  const promoProduct = filteredProduct.find(
    (product) => product.promotion !== 'noPromo',
  );
  let available = true;
  if (promoProduct) {
    available = promoProduct.isAvailableOffer(new DateTimes());
  }
  if (available) return promoProductSeller(shoppingItem, products);
  return expiredProductSeller(shoppingItem, products);
}
