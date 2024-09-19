
let counter = 0;

let title = document.createElement("h1");
title.innerHTML = "Simple Counter";
title.className = "title";
document.body.appendChild(title);

let countBox = document.createElement("div");
countBox.innerHTML = counter;
countBox.className = "Box";
document.body.appendChild(countBox);

let minBtn = document.createElement("button");
minBtn.innerHTML = "-";
minBtn.className = "min_btn"
minBtn.addEventListener("click", () =>{
    counter --;
    countBox.innerHTML = counter;
})
document.body.appendChild(minBtn);

let plusBtn = document.createElement("button");
plusBtn.innerHTML = "+";
plusBtn.className = "plus_btn"
plusBtn.addEventListener("click", () =>{
    counter ++;
    countBox.innerHTML = counter;
})
document.body.appendChild(plusBtn);