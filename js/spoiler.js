window.addEventListener('click', (e) => {
    if(e.target.dataset.action === "show"){
        const spoiler = e.target.closest(".select");
        spoiler.classList.toggle("spoiler-parrent-active");
        const button = e.target.querySelector(".select__icon");
        button.classList.toggle("spoiler__button-active");
        const content = spoiler.querySelector('.select__body');
        content.classList.toggle('spoiler-opened');
    }
});