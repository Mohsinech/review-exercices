// 6.1 Change the page. Use querySelector to select your main heading and change its text with textContent.

// const text = document.querySelector("#title");
// console.log(text);

// text.textContent = "Welcome to My Website!";

// 6.2 Click toggle. Add a button.
// When it is clicked,
// toggle a class that changes the
// background color of one section.
const button = document.querySelector(".hero button");

button.addEventListener("click", () => {
  button.classList.toggle("active");
});
