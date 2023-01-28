const stepList = document.querySelectorAll(".navigation__point");
const contentList = document.querySelectorAll(".sunpower__section-content");

window.addEventListener('load', (e) => {
    contentList.forEach(el => {
        el.classList.remove('sunpower__section_showed');
    });
    contentList[0].classList.add('sunpower__section_showed');
});
window.addEventListener('click', (e) => {
    if(!e.target.classList.contains("navigation__point_active") && e.target.classList.contains('navigation__point')) {
        stepList.forEach(el => {
            el.classList.remove("navigation__point_active");
        });
        e.target.classList.add("navigation__point_active");
        
        var points = [...document.querySelectorAll('.navigation__point')]
        var elPos = points.indexOf(e.target);
        contentList.forEach(el => {
            el.classList.remove('sunpower__section_showed');
        });
        contentList[elPos].classList.add('sunpower__section_showed');
    };
});
