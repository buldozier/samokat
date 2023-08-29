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

document.addEventListener("scroll", () => {
    console.log(window.pageYOffset)
    if(window.pageYOffset >= 2215) {
        clubBtn.textContent = "Хочу абонемент"
    } else {
        clubBtn.textContent = "Стать частью клуба"
    }
})
