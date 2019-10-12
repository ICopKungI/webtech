function menu(x) {
    if (x == '1') {
        let menu = document.getElementById("menu21");
        let drop = document.querySelector("#dropdownicon1");
        if (menu.style.visibility == "visible") {
            menu.style.visibility = "hidden";
            drop.setAttribute("class", "");
        } else {
            menu.style.visibility = "visible"
            drop.setAttribute("class", "rotateimg180");
            document.getElementById("menu22").style.visibility = "hidden";
            document.querySelector("#dropdownicon2").setAttribute("class", "");
        }
    }
    if (x == '2') {
        let menu = document.getElementById("menu22");
        let drop = document.querySelector("#dropdownicon2");
        if (menu.style.visibility == "visible") {
            menu.style.visibility = "hidden";
            drop.setAttribute("class", "");
        } else {
            menu.style.visibility = "visible";
            drop.setAttribute("class", "rotateimg180");
            document.getElementById("menu21").style.visibility = "hidden";
            document.querySelector("#dropdownicon1").setAttribute("class", "");
        }
    }
    // if (x == '3') {
    //     let menu = document.getElementById("menu23");
    //     let drop = document.querySelector("#dropdownicon3");
    //     if (menu.style.visibility == "visible") {
    //         menu.style.visibility = "hidden";
    //         drop.setAttribute("class", "")
    //     } else {
    //         menu.style.visibility = "visible"
    //         drop.setAttribute("class", "rotateimg180")
    //     }
    // }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}