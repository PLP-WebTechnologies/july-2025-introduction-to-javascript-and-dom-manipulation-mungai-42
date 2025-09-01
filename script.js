// ===========================
// Part 1: JavaScript Basics
// ===========================
let age = 20; // variable declaration
let isAdult = age >= 18; // conditional

if (isAdult) {
  document.getElementById("basicOutput").textContent = "✅ You are an adult.";
} else {
  document.getElementById("basicOutput").textContent = "❌ You are not an adult.";
}

// ===========================
// Part 2: Functions
// ===========================

// Function 1: calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Function 2: format a string
function formatName(name) {
  return name.trim().toUpperCase();
}

// Event-driven function
function showTotal() {
  let total = calculateTotal(10, 3); // Example: 10 * 3
  document.getElementById("functionOutput").textContent =
    "Total cost is: $" + total + " for " + formatName("   Alice   ");
}

// ===========================
// Part 3: Loops
// ===========================

let fruits = ["Apple", "Banana", "Cherry"];

// Example 1: for loop
for (let i = 0; i < fruits.length; i++) {
  let li = document.createElement("li");
  li.textContent = "Fruit: " + fruits[i];
  document.getElementById("loopList").appendChild(li);
}

// Example 2: while loop
let countdown = 3;
while (countdown > 0) {
  console.log("Countdown: " + countdown);
  countdown--;
}

// ===========================
// Part 4: DOM Manipulation
// ===========================

let toggleBtn = document.getElementById("toggleBtn");
let domMessage = document.getElementById("domMessage");

toggleBtn.addEventListener("click", function () {
  if (domMessage.style.display === "none") {
    domMessage.style.display = "block";
  } else {
    domMessage.style.display = "none";
  }
});

// Another DOM interaction: Change title color dynamically
document.getElementById("title").style.color = "purple";

// Another DOM interaction: Add a new paragraph dynamically
let newPara = document.createElement("p");
newPara.textContent = "🌟 This paragraph was added with JavaScript!";
document.body.appendChild(newPara);
