// var ul = document.querySelector("#ul");

// var button = document.querySelector("#remove");


// var li = document.createElement("li");
// li.classList.add("list-group-item");
// li.innerText = "Mushfiq";

// ul.replaceChild(li, ul.children[1])

// var li2 = document.createElement("li");
// li2.classList.add("list-group-item");
// li2.innerText = "Reshad";

// ul.appendChild(li);
// ul.insertBefore(li2, ul.children[1]);

// button.addEventListener("click", function() {
//     if (ul.childElementCount != "") {
//         ul.removeChild(ul.lastElementChild);
//     } else {
//         this.remove();
//     }
// })


//task

var ul = document.querySelector("#ul");
var add = document.querySelector("#add");
var count = 1;
add.addEventListener("click", function() {
    // create li element
    var li = document.createElement("li");
    li.classList.add("list-group-item");

    // create span element and add innerText
    var span = document.createElement("span");
    span.innerText = count;

    // create icon element
    var icon = document.createElement("i");
    icon.classList.add("fas", "fa-times");

    icon.addEventListener("click", function() {
        this.parentNode.remove();
    })

    //append span and icon to li
    li.appendChild(span);
    li.appendChild(icon);

    ul.appendChild(li);
    count++;
    console.log(input.value)
})

var input = document.querySelector("#count");