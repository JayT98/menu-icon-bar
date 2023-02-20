// Handle icon bar
const menus = document.getElementsByTagName("a");
for (var i = 0; i < menus.length; i++) {
    menus[i].addEventListener("click", function () {
        for (var i = 0; i < menus.length; i++) {
            menus[i].classList.remove("active");
        }

        this.classList.toggle("active");
    });
}

// Handle scroll top button
let myButton = document.getElementById("myBtn");

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

