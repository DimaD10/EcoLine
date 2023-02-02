const depList = document.querySelectorAll(".tabs__tab");

window.addEventListener('click', (e) => {
    if(!e.target.classList.contains("tabs__tab_active") && e.target.classList.contains('tabs__tab')) {
        depList.forEach(el => {
            el.classList.remove("tabs__tab_active");
        });
        e.target.classList.add("tabs__tab_active");
    };
});


