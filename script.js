var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var todoList = document.querySelectorAll("li");

function addDelButton(parent) {
    var buttonElem = parent.appendChild(document.createElement("button"));
    buttonElem.innerHTML = "Delete";
    buttonElem.onclick = function() {
        this.parentElement.remove();
    };
}

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.addEventListener("click", function() {
        this.classList.toggle("done");
    });
    li.appendChild(document.createTextNode(input.value));
    addDelButton(li);
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();

    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

todoList.forEach(item => {
    item.addEventListener("click", function() {
        this.classList.toggle("done");
    });
    addDelButton(item)
});