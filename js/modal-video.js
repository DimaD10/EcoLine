const popup = document.querySelector('.popup');
const popupHead = document.querySelector('.popup__head')
const popupWrapper = document.querySelector('.popup__window');
const playBtn = document.querySelector('.video-frame__play');
const closeBtn = document.querySelector('.popup__close');
const video = document.querySelector(".presentation-video");

playBtn.addEventListener('click', (e) => {
    popup.classList.add("opened");
    body.classList.add("hidden");
});

popup.addEventListener('click', (e) => {
    if (e.target !== popupWrapper && e.target !== popupHead) {
        popup.classList.remove("opened");
        body.classList.remove("hidden");
    }
});

closeBtn.addEventListener("click", (e) => {
    popup.classList.remove("opened");
    body.classList.remove("hidden");
});

document.addEventListener('keydown', function(event) {
    if (popup.classList.contains('opened')) {
        if (event.key == 'Escape') {
            popup.classList.remove("opened");
            body.classList.remove("hidden");
        }
    }
});