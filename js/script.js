document.addEventListener('DOMContentLoaded', function () {
  // Services
  var swiper = new Swiper('.service-slider', {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // Client review
  var swiper = new Swiper('.review-slider', {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // Menu
  const currentPage = window.location.pathname.split("/").pop();

  const menuLinks = document.querySelectorAll(".main-menu a");

  menuLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
});