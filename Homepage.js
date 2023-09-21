const menuBurguer = document.getElementById("menuBurguer");
const menuCross = document.getElementById("menuCross");
const nav = document.getElementById("nav");
const header = document.querySelector(".header");
const facilitiesSwiper = document.querySelector(".facilities__swiper");
const facilitieswrapper = document.querySelector(".wrapperfacilities");

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

function initRoomsSwiper() {
  if (window.matchMedia("(max-width: 1000px)").matches) {
    var swiper = new Swiper(".roomswiper", {
      keyboard:true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else {
    var swiper = new Swiper(".roomswiper", {
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
  if (window.matchMedia("(max-width: 1000px)").matches) {
    facilitiesSwiper.classList.add("swiper");
    var swiper2 = new Swiper(".facilities__swiper", {
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
  if (window.matchMedia("(max-width: 1000px)").matches) {
  var swiper3 = new Swiper("#menu__swiper", {
    navigation: {
      nextEl: "#menunextslide",
      prevEl: "#menuprevslide",
    },
  });
} else {
  var swiper3 = new Swiper("#menu__swiper", {
    slidesPerView:2,
    spaceBetween:10,
    navigation: {
      nextEl: "#menunextslide",
      prevEl: "#menuprevslide",
    },
  });
}
}

initMenuSwiper()

window.addEventListener("resize", () => {
  initRoomsSwiper();
  initFacilitiesSwiper();
  initMenuSwiper();
});