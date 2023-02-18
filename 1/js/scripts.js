const getRatingItems = () => Array.prototype.slice.call(document.querySelectorAll(".rating__item"));

getRatingItems().forEach(item => item.addEventListener('click', () => {
    let elements = getRatingItems();

    for (let [index, element] of elements.entries()) {
        if (index < item.dataset.itemValue) {
            element.classList.add("rating__item--not_marked");
            element.classList.remove("rating__item--marked");
        } else {
            element.classList.add("rating__item--marked");
            element.classList.remove("rating__item--not_marked");
        }
    }
}));