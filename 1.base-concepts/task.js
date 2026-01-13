"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;
  if (discriminant === 0) {
    arr.push(-b / (2 * a));
  } else if (discriminant > 0) {
    arr.push(
      (-b + Math.sqrt(discriminant)) / (2 * a),
      (-b - Math.sqrt(discriminant)) / (2 * a),
    );
  } else if (discriminant === 0) {
    arr = [];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyPercent = percent / 100 / 12;
  const creditBody = amount - contribution;
  if (contribution >= amount) {
    return 0;
  }
  const temp = Math.pow(1 + monthlyPercent, countMonths);
  const monthPayment = (creditBody * monthlyPercent * temp) / (temp - 1);
  return Number((monthPayment * countMonths).toFixed(2));
}
