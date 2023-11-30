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

const facilitiesSwiper = document.querySelector(".facilities__swiper");
const facilitieswrapper = document.querySelector(".wrapperfacilities");
const menuphotoswiper = document.querySelector(".menu__photoswiper");
const menuphotowrapper = document.querySelector(".menu__photowrapper");

function initRoomsSwiper() {
  var swiper;
  if (window.matchMedia("(max-width: 1000px)").matches) {
    swiper = new Swiper(".roomswiper", {
      keyboard: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else {
    swiper = new Swiper(".roomswiper", {
      slidesPerView: 1.5,
      centeredSlides: true,
      spaceBetween: 50,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}

initRoomsSwiper();

function initFacilitiesSwiper() {
  var swiper2;
  if (window.matchMedia("(max-width: 1000px)").matches) {
    facilitiesSwiper.classList.add("swiper");
    facilitieswrapper.classList.add("swiper-wrapper");
    swiper2 = new Swiper(".facilities__swiper", {
      pagination: {
        el: ".swiper-pagination",
      },
    });
  } else {
    facilitiesSwiper.classList.remove("swiper");
    facilitieswrapper.classList.remove("swiper-wrapper");
  }
}

initFacilitiesSwiper();

function initMenuSwiper() {
  var swiper3;
  if (window.matchMedia("(max-width: 1000px)").matches) {
    swiper3 = new Swiper("#menu__swiper", {
      navigation: {
        nextEl: "#menunextslide",
        prevEl: "#menuprevslide",
      },
    });
  } else {
    swiper3 = new Swiper("#menu__swiper", {
      slidesPerView: 2,
      spaceBetween: 10,
      navigation: {
        nextEl: "#menunextslide",
        prevEl: "#menuprevslide",
      },
    });
  }
}

initMenuSwiper();

function initMenuPhotoSwiper() {
  var swiper4;
  if (window.matchMedia("(max-width: 1000px)").matches) {
    menuphotoswiper.classList.add("swiper");
    menuphotowrapper.classList.add("swiper-wrapper");
    swiper4 = new Swiper("#menuphotoswiper", {
      loop:true,
      pagination: {
        el: "#menuphotopagination",
      },
    });
  } else{
    menuphotoswiper.classList.remove("swiper");
    menuphotowrapper.classList.remove("swiper-wrapper");
  }
}

initMenuPhotoSwiper();

window.addEventListener("resize", () => {
  initRoomsSwiper();
  initFacilitiesSwiper();
  initMenuSwiper();
  initMenuPhotoSwiper();
});
