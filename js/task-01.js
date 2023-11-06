"use strict";
const catList = document.querySelector("ul#categories");
if (catList){
    const catItems = catList.querySelectorAll("li.item");
    const catNumbers = catItems.length;
    console.log(`Number of categories: ${catNumbers}`);
};
if(catList){
    const catItems = catList.querySelectorAll("li.item");
    catItems.forEach((item) =>{
        const catTitle = item.querySelector("h2").textContent;
        const catItems = item.querySelectorAll("li");
        const numberOfItemsInCat = catItems.length;
        console.log(`Category: ${catTitle}
Elements: ${numberOfItemsInCat}`);
    });
};
