let counterValue = 0;
function updateValue (){
    value.textContent = counterValue;};
    const value = document.querySelector("#value");
value.addEventListener("click", () => {
    counterValue = 0;
    updateValue();
});

const decrementBtn = document.querySelector('[data-action="decrement"]');
decrementBtn.addEventListener("click", () => {
    counterValue -= 1;
    updateValue();
});

const incrementBtn = document.querySelector('[data-action="increment"]');
incrementBtn.addEventListener("click", () => {
    counterValue += 1;
    updateValue();
});
