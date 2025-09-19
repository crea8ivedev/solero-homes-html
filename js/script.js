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

// hide form success & error message
document.addEventListener('wpcf7submit', function () {
  const responseOutputs = document.querySelectorAll('.wpcf7-response-output');

  responseOutputs.forEach(function (responseOutput) {
    // Show message initially
    responseOutput.style.display = 'block';
    responseOutput.classList.remove('hide');

    // 5 seconds ke baad fade-out start karte hain
    setTimeout(function () {
      responseOutput.classList.add('hide'); // Start fade-out via CSS

      // 1 second (fade-out duration) ke baad display:none aur hide hatana
      setTimeout(function () {
        responseOutput.style.display = 'none';
        responseOutput.classList.remove('hide');
      }, 1000);
    }, 5000);
  });
}, false);