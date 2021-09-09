function calculate$100OnBill(bill, rateForDiscount) {
  let totalAmountBeforeDiscount = 0;
  let discountValue = 0;

  bill.map((x) => {
    //get the total cost
    totalAmountBeforeDiscount += x.amount;
    if (x.amount >= 100) {
      discountValue += Math.floor(x.amount / 100);
    }
  });

  discountValue *= rateForDiscount;

  return { totalAmountBeforeDiscount, discountValue };
}

module.exports = {
  calculate$100OnBill,
};
