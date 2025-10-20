 // Simple fade-in animation on scroll
  document.addEventListener("scroll", () => {
    document.querySelectorAll("[data-aos]").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("aos-animate");
      }
    });
  });

  // Optional toast message on form submission
  document.querySelector(".contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    M.toast({ html: "Message sent successfully!", classes: "teal" });
    e.target.reset();
  });


  // Smooth Scroll & Visibility Script 
  const scrollBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
