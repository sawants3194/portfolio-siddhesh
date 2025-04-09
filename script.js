// Toggle responsive menu
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

menuIcon?.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Smooth scroll (optional but scroll-behavior already added in CSS)
const links = document.querySelectorAll("a[href^='#']");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      navLinks.classList.remove("show"); // auto-close menu on link click (mobile)
    }
  });
});
