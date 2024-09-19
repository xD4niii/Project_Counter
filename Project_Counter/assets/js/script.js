
let counter = 0;

let title = document.createElement("h1");
title.innerHTML = "Simple Counter";
title.className = "title";
document.body.appendChild(title);

let countBox = document.createElement("div");
countBox.innerHTML = counter;
countBox.className = "Box";
document.body.appendChild(countBox);
