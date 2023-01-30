
let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');
    let hiddenBlock = document.querySelector(".calculator__bottom");

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
        hiddenBlock.classList.toggle("hide");
    }

    function selectChoose() {
        let text = this.innerHTML,
            select = this.closest('.select'),
            currentText = select.querySelector('.current-box');
        currentText.innerHTML = text;
        select.classList.remove('is-active');
        hiddenBlock.classList.remove("hide");
    }

    document.addEventListener("click", (e) => {
        if (!e.target.classList.contains("select") && !e.target.classList.contains("select__header")) {
            selectParent = document.querySelectorAll('.select');
            selectParent.forEach(el => {
                el.classList.remove("is-active");
            });
            hiddenBlock.classList.remove("hide");
        }
    });
};
select();

