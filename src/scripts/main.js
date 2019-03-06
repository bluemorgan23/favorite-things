const formContainer = document.createElement("form");
const inputFieldsetItem = document.createElement("fieldset");
const inputFieldsetStore = document.createElement("fieldset");
const inputItem = document.createElement("input");
const inputStore = document.createElement("input");
const button = document.createElement("button");
button.type = "button";
const itemList = document.createElement("ol");

document.body.appendChild(formContainer);
document.body.appendChild(itemList);

inputFieldsetItem.textContent = "Enter an item you want: ";
inputFieldsetStore.textContent = "Where can you get it: ";

button.textContent = "Add to Wishlist";

inputFieldsetItem.appendChild(inputItem);
inputFieldsetStore.appendChild(inputStore);

formContainer.appendChild(inputFieldsetItem);
formContainer.appendChild(inputFieldsetStore);
formContainer.appendChild(button);

const itemBuilder = (item, location) => {
    return `<li>I can purchase ${item} at ${location}</li>`
}

const render = (item) => {
    itemList.innerHTML += item;
}



button.addEventListener("click", function () {
    render(itemBuilder(inputItem.value, inputStore.value));
})

