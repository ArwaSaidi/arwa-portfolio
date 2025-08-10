// Reveal hidden sections on Learn More
const btn = document.getElementById("show-sections");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelectorAll(".hidden-section").forEach(section => {
    section.style.display = "block";
  });

  // Scroll to About section
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

// Optional: Smooth scroll for all internal links
const smoothLinks = document.querySelectorAll('a[href^="#"]');
smoothLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
