$(document).ready(function () {
  var swiper = new Swiper(".editing-foto-content", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });

  var swiper = new Swiper(".editing-foto-container", {
    slidesPerView: 1,
    spaceBetween: 1,
    // init: false,

    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
    navigation: {
      nextEl: ".arrow-foto-next",
      prevEl: ".arrow-foto-prev",
    },
  });
  var swiper = new Swiper(".editing-video-container", {
    slidesPerView: 1,
    spaceBetween: 1,
    // init: false,

    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
    navigation: {
      nextEl: ".arrow-video-next",
      prevEl: ".arrow-video-prev",
    },
  });

  $(".nav-item").click(() => {
    $(".navbar-toogle").addClass("collapsed");
    $(".navbar-collapse").removeClass("show");
  });

  var scrollObject = {};
  window.addEventListener("scroll", function getScrollPosition() {
    scrollObject = {
      x: window.pageXOffset,
      y: window.pageYOffset,
    };
    const benefits = $("#benefits").offset().top;
    // If you want to check distance
    if (scrollObject.y > benefits - 100) {
      // add class
      $(".navbar").addClass(["sticky-top", "shadow-sm"]);
    } else {
      // remove class
      $(".navbar").removeClass(["sticky-top", "shadow-sm"]);
    }
  });

  $(".btn-pesan").click(() => {
    const nama = $("#nama").val();
    const jenisLayanan = $("#layanan").val();
    const deskripsi = $("deskripsi").val();
    const text = `Nama: ${nama}%0aJenis Layanan: ${jenisLayanan}%0aDeskripsi: ${deskripsi}`;

    const url = `https://api.whatsapp.com/send?phone=6282217974659text=${text}`;
    window.open(url, "_blank");
  });
  $(".preloader").remove();
});
