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

const clubBtnContainer = document.querySelector(".part-of-club-btn")
const clubBtn = document.querySelector(".part-of-club-btn button")
const main = document.querySelector('main')
let maxOffset = clubBtn.getBoundingClientRect().bottom


document.addEventListener("scroll", () => {
    console.log(window.scrollY + window.innerHeight)
    if(window.scrollY + window.innerHeight >= 3059) {
        clubBtn.textContent = "Хочу абонемент"
        clubBtnContainer.classList.add("part-of-club-btn-static")
        main.classList.remove("margin-bottom")
    } else {
        maxOffset = clubBtn.getBoundingClientRect().bottom
        clubBtn.textContent = "Стать частью клуба"
        clubBtnContainer.classList.remove("part-of-club-btn-static")
        main.classList.add("margin-bottom")
    }
})
