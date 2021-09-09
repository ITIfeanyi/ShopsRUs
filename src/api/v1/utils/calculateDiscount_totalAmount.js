function calculateTotalAmountAndDiscount(bill, rateForDiscount) {
  //get the total amount before discount
  let totalAmountBeforeDiscount = 0;
  let discountValue = 0;

  bill.map((totalAmount) => {
    //get the total cost
    totalAmountBeforeDiscount += totalAmount.amount;
  });

  bill
    .filter((x) => {
      //to filter any groceries off
      if (x.item === "groceries") return false;
      return true;
    })
    .map((subBill) => {
      //get the discount value
      discountValue += subBill.amount;
    });
  discountValue *= rateForDiscount;

  return { totalAmountBeforeDiscount, discountValue };
}

module.exports = {
  calculateTotalAmountAndDiscount,
};
