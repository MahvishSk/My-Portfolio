// Dark Mode Toggle
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

// Fade-in on scroll
const sections = document.querySelectorAll("section");

const reveal = () => {
  const point = window.innerHeight * 0.85;

  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < point) sec.classList.add("show");
  });
};

window.addEventListener("scroll", reveal);
reveal();
