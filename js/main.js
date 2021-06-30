$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 3, /*то еоличество, которых можно увидеть*/
        margin: 30,
        loop: true,
        responsive: {
            992: {
                items: 5
            },
            768: {
                items: 3
            },
            320: {
                items: 1
            }
        }
    })
});


const modalBtn = document.querySelector('.modal-btn')
const modalWrapper = document.querySelector('.modal-wrapper')
const modalClose = document.querySelector('.modal-close')

modalBtn.addEventListener('click', () => {
    modalWrapper.classList.add('show')
})

modalClose.addEventListener('click', () => {
    modalWrapper.classList.remove('show')
})
