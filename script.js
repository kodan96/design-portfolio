import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
const swiper = new Swiper('.swiper', {
    slidesPerView: getSlidesPerView(), 

    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Attach event listener to window resize event
window.addEventListener('resize', function() {
    // Update slidesPerView property of Swiper instance
    swiper.params.slidesPerView = getSlidesPerView();
    // Update Swiper
    swiper.update();
});

// Function to determine slidesPerView based on window width
function getSlidesPerView() {
    if (window.innerWidth < 768) {
        return 1;
    } else if (window.innerWidth < 1024) {
        return 2;
    } else if (window.innerWidth < 1200) {
        return 3;
    } else {
        return 3; // Default value or adjust as needed
    }
}
