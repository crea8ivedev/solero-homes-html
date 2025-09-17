// Header sticky
window.addEventListener('scroll', function () {
  var header = document.querySelector('.header');
  if (window.scrollY > 100) { // Adjust value as needed
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  // Services
  var swiper = new Swiper('.service-slider', {
    loop: true,
    slidesPerView: 1,
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // Client review
  var swiper = new Swiper('.review-slider', {
    loop: true,
    slidesPerView: 1,
    autoplay: true,
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

  // Video play & pause
  const video = document.getElementById("video");
  const circlePlayButton = document.getElementById("circle-play-b");

  function togglePlay() {
    if (video.paused || video.ended) {
      video.play();
    } else {
      video.pause();
    }
  }

  circlePlayButton.addEventListener("click", togglePlay);
  video.addEventListener("playing", function () {
    circlePlayButton.style.opacity = 0;
  });
  video.addEventListener("pause", function () {
    circlePlayButton.style.opacity = 1;
  });
});