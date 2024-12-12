function getNonPromoSellingQuantity(promoSellingQuantity, quantity) {
  if (quantity - promoSellingQuantity < 0) {
    return 0;
  }
  return quantity - promoSellingQuantity;
}
export default function ProductSeller(shoppingItem, products) {
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
  const nonPromoQuantity = nonPromoProduct.quantity;

  const promoSellingQuantity = Math.min(quantity, promoQuantity);

  const nonPromoSellingQuantity = getNonPromoSellingQuantity(
    promoSellingQuantity,
    quantity,
  );
  console.log(promoProduct.getRemainder(quantity));
  const freebie = promoProduct.getFreebie(promoSellingQuantity);
}
