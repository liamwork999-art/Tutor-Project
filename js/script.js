// Toggle mobile menu

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".navbar .mobile-menu-toggle");

  const mobileMenuItems = document.querySelector(".navbar .mobile-menu-items");

  // Clicked Hamburger
  toggleBtn.addEventListener("click", function () {
    mobileMenuItems.classList.toggle("active");
  });
});

// Change nav bar scroll

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 0) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});
