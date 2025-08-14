const body = document.body;
const modeToggle = document.getElementById("mode-toggle");

// Check saved mode from localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  modeToggle.textContent = "☀ Light Mode";
}

// Toggle on button click
modeToggle.addEventListener("click", function () {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    this.textContent = "☀ Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    this.textContent = "🌙 Dark Mode";
  }
});
