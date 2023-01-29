const startPos = document.querySelector('.graph')

const graphItems = document.querySelectorAll(".graph__value-box");


function showGProgress() {
    graphItems.forEach(progress => {
        const progressBar = progress.querySelector(".graph__value-show");
        const value = progressBar.dataset.graph;
        progressBar.style.height = `${value}%`;
    });
}
function hideGProgress() {
    graphItems.forEach(progress => {
        const progressBar = progress.querySelector(".graph__value-show");
        progressBar.style.height = `0%`;
    });
}

window.addEventListener('scroll', () => {
    const sectionPos = startPos.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if(sectionPos + 100 < screenPos) {
        showGProgress();
    } else {
        hideGProgress();
    }
})