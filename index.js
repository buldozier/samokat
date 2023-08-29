// Swiper

const swiper = document.querySelector(".swiper")

new Swiper(swiper, {
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev"
    },
})

// Button

const clubBtn = document.querySelector(".part-of-club-btn button")
const plusImg = document.querySelector(".plus__img")
let maxOffset = clubBtn.getBoundingClientRect().bottom


document.addEventListener("scroll", () => {
    console.log(clubBtn.getBoundingClientRect().bottom, maxOffset)
    if(clubBtn.getBoundingClientRect().bottom < maxOffset) {
        clubBtn.textContent = "Хочу абонемент"
    } else {
        maxOffset = clubBtn.getBoundingClientRect().bottom
        clubBtn.textContent = "Стать частью клуба"
    }
})
