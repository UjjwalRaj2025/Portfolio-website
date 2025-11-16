// Fade-in animation on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section, .about");
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
});
