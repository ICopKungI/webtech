function menu(x) {
    if (x == '1') {
        let menu = document.getElementById("menu21");
        let drop = document.querySelector("#dropdownicon1");
        if (menu.style.visibility == "visible") {
            menu.style.visibility = "hidden";
            drop.setAttribute("class", "")
        } else {
            menu.style.visibility = "visible"
            drop.setAttribute("class", "rotateimg180")
        }
    }
    if (x == '2') {
        let menu = document.getElementById("menu22");
        let drop = document.querySelector("#dropdownicon2");
        if (menu.style.visibility == "visible") {
            menu.style.visibility = "hidden";
            drop.setAttribute("class", "")
        } else {
            menu.style.visibility = "visible"
            drop.setAttribute("class", "rotateimg180")
        }
    }
    if (x == '3') {
        let menu = document.getElementById("menu23");
        let drop = document.querySelector("#dropdownicon3");
        if (menu.style.visibility == "visible") {
            menu.style.visibility = "hidden";
            drop.setAttribute("class", "")
        } else {
            menu.style.visibility = "visible"
            drop.setAttribute("class", "rotateimg180")
        }
    }
}