function createElement(tagName, className, innerHTML, dataAction) {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    if (innerHTML !== undefined) element.innerHTML = innerHTML;
    if (dataAction) element.setAttribute("data-action", dataAction);
    return element;
}

let counter = 0;

let container = createElement("div");

let title = createElement("h1", "title", "Simple Counter");
container.appendChild(title);

let countBox = createElement("div", "box", counter);
container.appendChild(countBox);

let buttonsContainer = createElement("div", "buttons");

let decrementBtn = createElement("div", "min_btn", "-", "decrement");
let resetBtn = createElement("div", "res_btn", "reset", "reset");
let incrementBtn = createElement("div", "plus_btn", "+", "increment");

buttonsContainer.appendChild(decrementBtn);
buttonsContainer.appendChild(resetBtn);
buttonsContainer.appendChild(incrementBtn);

container.appendChild(buttonsContainer);

document.body.appendChild(container);

countBox.innerHTML = counter;

buttonsContainer.addEventListener("click", (event) => {
    const action = event.target.getAttribute("data-action");
    
    if (action === "increment") {
        counter++;
    } else if (action === "decrement") {
        counter--;
    } else if (action === "reset") {
        counter = 0;
    }
    
    countBox.innerHTML = counter;
});