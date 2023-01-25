const stepList = document.querySelectorAll(".navigation-bar__point");
const contentList = document.querySelectorAll(".about-content__section");

window.addEventListener('load', (e) => {
    contentList.forEach(el => {
        el.classList.remove('about-content__section_showed');
    });
    contentList[0].classList.add('about-content__section_showed');
});
window.addEventListener('click', (e) => {
    if(!e.target.classList.contains("navigation-bar__point_active") && e.target.classList.contains('navigation-bar__point')) {
        stepList.forEach(el => {
            el.classList.remove("navigation-bar__point_active");
        });
        e.target.classList.add("navigation-bar__point_active");
        
        var points = [...document.querySelectorAll('.navigation-bar__point')]
        var elPos = points.indexOf(e.target);
        console.log(elPos);
        hideContent(elPos);
    };
});

function hideContent(index) {
    contentList.forEach(el => {
        el.classList.remove('about-content__section_showed');
    });
    contentList[index].classList.add('about-content__section_showed');
}