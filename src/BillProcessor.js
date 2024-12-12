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

  processTotal(bills, membership) {
    let totalBeforeDiscount = 0;
    let total = 0;
    let promoDiscount = 0;
    let membershipDiscount = 0;
    let totalQuantity = 0;
    bills.forEach(
      ({
        leftovers,
        promoSellQuantity,
        nonPromoSellingQuantity,
        price,
        freebie,
      }) => {
        totalQuantity +=
          leftovers + promoSellQuantity + nonPromoSellingQuantity;
        totalBeforeDiscount +=
          price * (leftovers + promoSellQuantity + nonPromoSellingQuantity);
        promoDiscount += price * freebie;
        membershipDiscount +=
          price * (leftovers + nonPromoSellingQuantity) * 0.3;
      },
    );
    if (!membership) {
      membershipDiscount = 0;
    }
    membershipDiscount = Math.min(8000, membershipDiscount);
    total = totalBeforeDiscount - promoDiscount - membershipDiscount;

    return {
      totalBeforeDiscount,
      totalQuantity,
      promoDiscount,
      membershipDiscount,
      total,
    };
  }
}
export default BillProcessor;
