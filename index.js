// Swiper

const swiper = document.querySelector(".swiper")

new Swiper(swiper, {
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev"
    },
})