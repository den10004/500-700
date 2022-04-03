const button = document.querySelector(".header__button");
const modal = document.querySelector(".modal");
const closed = document.querySelector(".modal__close");

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

button.addEventListener("click", openModal);
closed.addEventListener("click", closeModal);

var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 150,
  navigation: {
    nextEl: ".swiper-button-nex",
    prevEl: ".swiper-button-pre",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    1024: {
      slidesPerView: 1.5,
    }
  }
});

var swiper1 = new Swiper(".newsSlider", {
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.5,
    },

    425: {
        slidesPerView: 1.5,
    },
    768: {
        slidesPerView: 2,
    },
    1300: {
      slidesPerView: 3,
    }
  }
});
