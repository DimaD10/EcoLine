const section = document.querySelector('.levels-list')

const progressItems = document.querySelectorAll(".level");


function showProgress() {
    progressItems.forEach(progress => {
        const value = progress.querySelector(".progress-procent");
        const progressBar = progress.querySelector(".progress-lvl");
        progressBar.style.width = value.textContent;
    });
    console.log(progressItems);
}
function hideProgress() {
    progressItems.forEach(progress => {
        const progressBar = progress.querySelector(".progress-lvl");
        progressBar.style.width = `0%`;
    });
}

window.addEventListener('scroll', () => {
    const sectionPos = section.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if(sectionPos + 100 < screenPos) {
        showProgress();
    } else {
        hideProgress();
    }
})