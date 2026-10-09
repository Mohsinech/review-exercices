const services = [
  {
    name: "Web Development",
    description: "Building responsive and dynamic websites.",
  },
  {
    name: "Mobile App Development",
    description:
      "Creating user-friendly mobile applications for iOS and Android.",
  },
  {
    name: "UI/UX Design",
    description:
      "Designing intuitive and engaging user interfaces and experiences.",
  },
];

// JavaScript that creates one card per service and adds it to the page.
const servicesContainer = document.querySelector(".service-cards");

// create a card for each service and append it to the servicesContainer
services.forEach((service) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("h1");
  const description = document.createElement("p");

  title.textContent = service.name;
  description.textContent = service.description;

  card.appendChild(title);
  card.appendChild(description);

  servicesContainer.appendChild(card);
});

const button = document.querySelector("button");
const cards = document.querySelectorAll(".card");

console.log(cards);
console.log(button);

button.addEventListener("click", () => {
  cards.forEach((card) => {
    card.classList.toggle("active");
  });
});
