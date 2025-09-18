// Header sticky
let isSticky = false;
let shrinkTimeout;

window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');

  if (window.scrollY > 100) {
    if (!isSticky) {
      isSticky = true;
      header.classList.add('sticky');

      shrinkTimeout = setTimeout(() => {
        header.classList.add('shrink-logo');
      }, 1000);
    }
  } else {
    isSticky = false;
    header.classList.remove('sticky', 'shrink-logo');
    clearTimeout(shrinkTimeout);
  }
});

document.addEventListener('DOMContentLoaded', function () {
  // Services
  var swiper = new Swiper('.service-slider', {
    loop: true,
    slidesPerView: 1,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // Client review
  var swiper = new Swiper('.review-slider', {
    loop: true,
    slidesPerView: 1,
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
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