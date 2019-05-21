var titles = document.querySelectorAll(".title");


for (var i = 0; i < titles.length; i++) {
    titles[i].addEventListener("click", function() {
        if (this.nextElementSibling.style.maxHeight == "") {
            this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + "px";
            this.children[1].classList.replace("fa-plus", "fa-minus");
        } else {
            this.nextElementSibling.style.maxHeight = "";
            this.children[1].classList.replace("fa-minus", "fa-plus");
        }
        this.classList.toggle("active");
    })
}