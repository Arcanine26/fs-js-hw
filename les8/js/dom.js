window.onload = () => {
    const list = document.getElementById("list"),
    selectFirst = document.getElementById("firstElementChild"),
    selectLast = document.getElementById("lastElementChild"),
    selectNext = document.getElementById("nextSibling"),
    selectPrevious = document.getElementById("previousSibling"),
    addToEnd = document.getElementById("addToEnd"),
    removeFromBegin = document.getElementById("removeFromBegin"),
    removeFromEnd = document.getElementById("removeFromEnd"),
    removeFromMid = document.getElementById("removeFromMid"),
    addToBegin = document.getElementById("addToBegin");

    let selectEl = null;

    selectFirst.onclick = function () {
        if(selectEl !== null) {
            selectEl.classList.remove("select")
        }
        list.firstElementChild.classList.add("select");
        selectEl = list.firstElementChild;
    }

    selectLast.onclick = function () {
        if(selectEl !== null) {
            selectEl.classList.remove("select")
        }
        list.lastElementChild.classList.add("select");
        selectEl = list.lastElementChild;
    }
    
    selectNext.onclick = function () {
        if(selectEl !== null) {
            selectEl.classList.remove("select")
        }
        let nextElement;
        if(selectEl !== null) {
            nextElement = selectEl.nextElementSibling;
        } else {
            nextElement = list.firstElementChild;
        }
        if (nextElement !== null) {
            nextElement.classList.add("select");
            selectEl = nextElement;
        } else {
            selectEl = list.firstElementChild;
            selectEl.classList.add("select");
        }
    }

    selectPrevious.onclick = function () {
        if(selectEl !== null) {
            selectEl.classList.remove("select")
        } 
        let previousElement;
        if (selectEl !== null) {
            previousElement = selectEl.previousElementSibling;
        } else {
            previousElement = list.lastElementChild;
        }
        if (previousElement !== null) {
            previousElement.classList.add("select");
            selectEl = previousElement;
        } else {
            selectEl = list.lastElementChild;
            selectEl.classList.add("select");
        }
    }

    addToEnd.onclick = function () {
        const li = document.createElement("li");
        li.textContent = "List Item";
        list.append(li);
    }

    removeFromBegin.onclick = function () {
        list.firstElementChild.remove()
    }
    
    removeFromEnd.onclick = function () {
        list.lastElementChild.remove()
    }

    removeFromMid.onclick = function () {
        list.children[Math.floor(list.children.length/2)].remove()
    }

    addToBegin.onclick = function () {
        const li = document.createElement("li");
        li.textContent = "List Item";
        list.prepend(li);
    }
}