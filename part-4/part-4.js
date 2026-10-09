// 5.1  Write an if / else if / else *
// that prints a message based on a
// ticket price: under 18 pays 5, 18 to 60 pays 10,
// over 60 pays 7.

const age = 25;

if (age < 18) {
  console.log("You pay $5 for the ticket.");
} else if (age >= 18 && age <= 60) {
  console.log("You pay $10 for the ticket.");
} else {
  console.log("You pay $7 for the ticket.");
}

//**5.2 Function.** Write a function `calculateTotal(price, quantity)` that returns the total. Call it 3 times with different numbers and print each result.

function calculateTotal(price, quantity) {
  return price * quantity;
}
console.log(calculateTotal(10, 2));
console.log(calculateTotal(20, 3));
console.log(calculateTotal(40, 4));

//5.3 Array and object.** Create an array of 3 services, each an object with `name` and `price`. Then:

// - print the name of the second service
// - add a fourth service with `.push()`
// - print how many services there are with `.length`

const services = [
  { name: "Cooking", price: 100 },
  { name: "Teaching", price: 200 },
  { name: "Driving", price: 150 },
];

// print the name of the second service
console.log(services[1].name);

// add a fourth service with .push()

services.push({ name: "Shopping", price: 50 });

// print how many services there are with .length
console.log(services.length);

// 5.4 Put it together.
// Write a function checkSlot(slot)
// that uses an array of booked times and
// .includes(). It returns "Available" or "Already booked".
// Test it with 2 slots.

const bookedTimes = ["10:00", "12:00", "15:00"];

function checkSlot(slot) {
  if (bookedTimes.includes(slot)) {
    return "Already booked";
  } else {
    return "Available";
  }
}

console.log(checkSlot("10:00"));
console.log(checkSlot("14:00"));
