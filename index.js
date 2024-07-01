

var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
  });

  let swiper2 = new Swiper(".mySwiper2", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
  });

