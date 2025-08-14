const body = document.body;
const modeToggle = document.getElementById("mode-toggle");
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  modeToggle.textContent = "☀ Light Mode";
}
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

