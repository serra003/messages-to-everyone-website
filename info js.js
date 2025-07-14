// Counter Animation
let count = 0;
const target = 123;
const counter = document.getElementById("counter");

function countUp() {
  if (count < target) {
    count++;
    counter.textContent = count;
    setTimeout(countUp, 30);
  }
}

// Theme Toggle
function toggleTheme() {
  document.body.classList.toggle("light-mode");
  const theme = document.body.classList.contains("light-mode") ? "light" : "dark";
  localStorage.setItem("theme", theme);
}

window.onload = () => {
  // Apply saved theme from localStorage
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
  }

  // Start the animated counter
  countUp();

  // Attach toggle button logic
  const themeToggleBtn = document.getElementById("themeToggle");
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", toggleTheme);
  }
};
