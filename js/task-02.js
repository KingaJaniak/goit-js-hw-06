const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulList = document.querySelector("ul#ingredients");
ingredients.forEach(ingredient => {
  const liList = document.createElement("li");
  liList.textContent = ingredient;
  liList.classList.add("item");
  ulList.appendChild(liList);
});
console.log(ulList);
