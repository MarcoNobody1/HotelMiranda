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

function initRoomDetailsSwiper() {
  var swiper;
  if (window.matchMedia("(max-width: 1000px)").matches) {
    swiper = new Swiper("#roomsrelated__swiper", {
      navigation: {
        nextEl: "#roomsrelated-nextslide",
        prevEl: "#roomsrelated-prevslide",
      },
    });
  } else {
    swiper = new Swiper("#roomsrelated__swiper", {
      slidesPerView: 2,
      spaceBetween: 10,
      keyboard: true,
      navigation: {
        nextEl: "#roomsrelated-nextslide",
        prevEl: "#roomsrelated-prevslide",
      },
    });
  }
}

initRoomDetailsSwiper();

window.addEventListener("resize", () => {
  initRoomDetailsSwiper();
});

const goToRoomDetails = () => {

  window.location.href = 'RoomDetails.html';
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("roomsdetails__form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    Swal.fire({
      title: "Unsent Verification",
      text: "In the future, this will be used to check available dates in this specific room!",
      icon: "info",
      confirmButtonText: "Ok",
    });
  });
});
