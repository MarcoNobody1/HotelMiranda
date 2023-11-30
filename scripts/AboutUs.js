const menuBurguer = document.getElementById("menuBurguer");
const menuCross = document.getElementById("menuCross");
const nav = document.getElementById("nav");
const header = document.querySelector(".header");

menuBurguer.addEventListener("click", () => {
  menuBurguer.classList.add("header__menuiconburguer--closed");
  menuCross.classList.remove("header__menuiconcross--closed");
  nav.classList.remove("header__menucontent--hidden");
  nav.classList.add("fade");
});

menuCross.addEventListener("click", () => {
  menuBurguer.classList.remove("header__menuiconburguer--closed");
  menuCross.classList.add("header__menuiconcross--closed");
  nav.classList.add("header__menucontent--hidden");
  nav.classList.remove("fade");
});

window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;
  if (currentScrollPos >= 160 && window.innerWidth > 999) {
    header.classList.add("header--hidden");
  } else {
    header.classList.remove("header--hidden");
  }
});

window.addEventListener("mousemove", (event) => {
  const currentScrollPos = window.pageYOffset;
  if (event.clientY < 35 && currentScrollPos > 150 && window.innerWidth > 999) {
    header.classList.add("header--float");
  } else if (event.clientY > 210 && window.innerWidth > 999) {
    header.classList.remove("header--float");
  }
});

const facilitiesAboutUsSwiper = document.querySelector(
  "#aboutusfacilities__swiper"
);
const facilitiesAboutUsWrapper = document.querySelector(
  "#aboutusfacilities__swiperwrapper"
);

function initAboutusPaginationSwiper() {
  var swiper;
  if (window.matchMedia("(max-width: 999px)").matches) {
    facilitiesAboutUsSwiper.classList.add("swiper");
    facilitiesAboutUsWrapper.classList.add("swiper-wrapper");
    swiper = new Swiper("#aboutusfacilities__swiper", {
      keyboard: true,
      pagination: {
        el: "#aboutusfacilities__pagination",
      },
    });
  } else {
    facilitiesAboutUsSwiper.classList.remove("swiper");
    facilitiesAboutUsWrapper.classList.remove("swiper-wrapper");
  }
}

const photosAboutUsSwiper = document.querySelector("#aboutusphotoswiper");
const photosAboutUsWrapper = document.querySelector(
  "#aboutusphotoswiperwrapper"
);
const photoSlides = document.querySelectorAll(".swiper-slide");

function initAboutPhotoSwiper() {
  var swiper2;

  if (window.matchMedia("(max-width: 999px)").matches) {
    photosAboutUsSwiper.classList.add("swiper");
    photosAboutUsWrapper.classList.add("swiper-wrapper");
    for (let i = 0; i < photoSlides.length; i++) {
      photoSlides[i].classList.add("swiper-slide");
    }
    swiper2 = new Swiper("#aboutusphotoswiper", {
      keyboard: true,
      pagination: {
        el: "#aboutuscounter__photopagination",
      },
    });
  } else {
    photosAboutUsSwiper.classList.remove("swiper");
    photosAboutUsWrapper.classList.remove("swiper-wrapper");
    for (let i = 0; i < photoSlides.length; i++) {
      photoSlides[i].classList.remove("swiper-slide");
    }
  }
}

initAboutusPaginationSwiper();
initAboutPhotoSwiper();

window.addEventListener("resize", () => {
  initAboutusPaginationSwiper();
  initAboutPhotoSwiper();
});
