// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function setdiv(){
    var x = document.getElementById('nav');
    var style = window.getComputedStyle(x, null).getPropertyValue('height');
    var height = parseFloat(style);
    var div = document.querySelector('#main');
    div.style.top = (height+35)+'px';
    div.style.marginBottom = (height+75)+'px';
}

//ส่วน json

function start(type, num) {
    document.getElementById("main").style.height = "100%";
    let requestURL = 'data.json';
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            var myJSON = JSON.parse(request.responseText);
            write(myJSON, type, num);
        }
    };
    request.open("GET", requestURL, true);
    request.send();
}

function write(myObj, type, num) {
    let text = "";
    let main = document.getElementById("main");
    main.innerHTML = "";
    if (type == 1) {
        text += ("<p class=\"head1\">" + myObj.contagion[num].disease[0] + "</p><br>\n");
        text += loop_write(myObj.contagion[num].cause, myObj.contagion[num].img, 0);
        text += loop_write(myObj.contagion[num].symptom, myObj.contagion[num].img, 1);
        text += loop_write(myObj.contagion[num].therapy, myObj.contagion[num].img, 2);
        text += loop_write(myObj.contagion[num].protect, [], 3);
    } else {
        text += ('<p class=\"head1\">' + myObj.n_contagion[num].disease[0] + '</p><br>\n');
        text += ('<p class=\"head2\">&emsp;&emsp;&emsp;' + myObj.n_contagion[num].disease[1] + '</p><br>\n');
        text += loop_write(myObj.n_contagion[num].cause, myObj.n_contagion[num].img, 0);
        text += loop_write(myObj.n_contagion[num].symptom, myObj.n_contagion[num].img, 1);
        text += loop_write(myObj.n_contagion[num].therapy, myObj.n_contagion[num].img, 2);
        text += loop_write(myObj.n_contagion[num].protect, [], 3);
    }
    main.innerHTML = text;
    setdiv();
}

function loop_write(myObj1, myObj2, num) {
    let text = "";
    text += ('<br><p class=\"head2\"><b>&emsp;&emsp;&emsp;' + myObj1[0] + '</b> ' + myObj1[1] + '</p>\n');
    text += ('<ul>\n');
    for (let i = 2; i < myObj1.length; i++) {
        text += ('<li>' + myObj1[i] + '\n');
    }
    text += ('</ul><br>\n');
    if (num != 3) {
        text += ('<img class=\"photo img-thumbnail\" src=\"' + myObj2[num] + "\">\n");
    }
    return text
}