const d = new Date();

let currentHours = d.getHours();

console.log(currentHours);

let greet;

if (currentHours < 12) {
  greet = "Hello Good Morning!";
} else if (currentHours < 16) {
  greet = "Hello Good Afternoon!";
} else if (currentHours < 19) {
  greet = "Hello Good Evening!";
} else {
  greet = "Hello Good Night!";
}

document.querySelector(".greeting").textContent = greet;