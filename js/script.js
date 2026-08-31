document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".navbar .mobile-menu-toggle");

  const mobileMenuItems = document.querySelector(".navbar .mobile-menu-items");

  // Clicked Hamburger
  toggleBtn.addEventListener("click", function () {
    mobileMenuItems.classList.toggle("active");
  });
});
