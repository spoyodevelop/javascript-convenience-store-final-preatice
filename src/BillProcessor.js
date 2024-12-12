class BillProcessor {
  processEachOne(bills) {
    return bills.map(
      ({
        name,
        price,
        leftovers,
        promoSellQuantity,
        nonPromoSellingQuantity,
      }) => ({
        name,
        quantity: leftovers + promoSellQuantity + nonPromoSellingQuantity,
        price:
          price * (leftovers + promoSellQuantity + nonPromoSellingQuantity),
      }),
    );
  }
  processAll()
}
export default BillProcessor;
