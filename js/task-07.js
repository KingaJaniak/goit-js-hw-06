const input = document.querySelector("#font-size-control");
const value = document.querySelector("#text");

input.addEventListener("input", (event) => {
  const fontSize = event.target.value + "px";
  value.style.fontSize = fontSize;
});