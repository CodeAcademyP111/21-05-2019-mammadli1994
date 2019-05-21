var input = document.querySelector("#input")

var button = document.querySelector("#button")

var ul = document.querySelector("#ul")


button.addEventListener("click", function () {


    if (ul.childElementCount != 0) {
        (ul.innerHTML="")
    }

    for (var i = 1; i <= input.value; i++) {

    
        var li = document.createElement("li");

       
        li.classList.add("list-group-item");
        li.innerText = i;

        
        ul.appendChild(li);



     

    }
    
})
