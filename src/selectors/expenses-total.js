export default (expenses) => {
  if (expenses.length >= 1) {
    const amounts = [];
    expenses.forEach((expense) => {
      amounts.push(expense.amount);
    });
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return amounts.reduce(reducer);
  } else if (expenses.length === 0) {
    return 0;
  }
};
