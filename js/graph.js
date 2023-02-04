const startPos = document.querySelector('.graph')

const graphItems = document.querySelectorAll(".graph__value-show");
const graphValues = document.querySelectorAll(".progress-procent");
const graphCount = document.querySelectorAll(".graph__value");

function showGProgress() {
    for (let i = 0; i < graphItems.length; i++) {
        const elGraph = graphItems[i];
        const elVal = graphValues[i];
        const elCount = graphCount[i];
        
        elGraph.style.height = elVal.textContent;
        elCount.textContent = elVal.textContent;
    }
}
function hideGProgress() {
    graphItems.forEach(progress => {
        progress.style.height = `0%`;
    });
}

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            showGProgress();
        } else {
            hideGProgress();
        }
    });
  }
  
let props = {
    threshold: [0.9],
};
  
let observered = new IntersectionObserver(onEntry, props);
let graphs = document.querySelectorAll(".graph-part");
for (let elm of graphs) {
    observered.observe(elm);
}