// 4.1

const ProductName = "Hoodie";
const ProductPrice = 49.99;

const ProductQte = 5;

const totalPrice = ProductPrice * ProductQte;

console.log(
  `Total price for ${ProductQte} ${ProductName}(s) is: $${totalPrice.toFixed(2)}`,
);

// 4.2
console.log(5 === "5");
console.log(10 > 3 && 2 > 5);
console.log(typeof "42");
console.log(Number("42") + 8);

// 4.3
const price = "25";
const fee = 10;
console.log(Number(price) + fee); // we want 35
