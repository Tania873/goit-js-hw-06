const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const addIngredientsList = ingredients.map(ingredient => {
  const addIngredient = document.createElement('li');
  addIngredient.classList.add('item');
  addIngredient.textContent = ingredient;
  return addIngredient;
});

ingredientsList.append(...addIngredientsList);