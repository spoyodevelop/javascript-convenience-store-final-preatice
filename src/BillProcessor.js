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

  processFreebie(bills) {
    return bills
      .filter(({ freebie }) => freebie > 0)
      .map(({ name, freebie }) => ({
        name,
        freebie,
      }));
  }
}
export default BillProcessor;
