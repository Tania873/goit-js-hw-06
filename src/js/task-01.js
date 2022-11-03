const categoriesItemEl = document.querySelectorAll('.item');
const numberOfCategories = categoriesItemEl.length;
console.log(`Number of categories: ${numberOfCategories}`);

const categoriesList = categoriesItemEl.forEach(el => {
        console.log(`Category: ${el.firstElementChild.textContent}`);
        console.log(`Elements: ${el.lastElementChild.children.length}`);
    })