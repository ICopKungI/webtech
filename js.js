function start(type, num) {
    document.getElementById("main").style.height = "100%";
    let requestURL = 'data.json';
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
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
        text += loop_write(myObj.contagion[num].cause);
        text += ('<img class="photo" src=\"' + myObj.contagion[num].img[0] + "\">\n");
        text += loop_write(myObj.contagion[num].symptom);
        text += ('<img class="photo" src=\"' + myObj.contagion[num].img[1] + "\">\n");
        text += loop_write(myObj.contagion[num].therapy);
        text += ('<img class="photo" src=\"' + myObj.contagion[num].img[2] + "\">\n");
        text += loop_write(myObj.contagion[num].protect);
    } else {
        text += ('<p class=\"head1\">' + myObj.n_contagion[num].disease[0] + '</p><br>\n');
        text += ('<p class=\"head2\">&emsp;&emsp;&emsp;' + myObj.n_contagion[num].disease[1] + '</p><br>\n');
        text += loop_write(myObj.n_contagion[num].cause);
        text += ('<img class="photo" src=\"' + myObj.n_contagion[num].img[0] + "\">\n");
        text += loop_write(myObj.n_contagion[num].symptom);
        text += ('<img class="photo" src=\"' + myObj.n_contagion[num].img[1] + "\">\n");
        text += loop_write(myObj.n_contagion[num].therapy);
        text += ('<img class="photo" src=\"' + myObj.n_contagion[num].img[2] + "\">\n");
        text += loop_write(myObj.n_contagion[num].protect);
    }
    main.innerHTML = text;
}

function loop_write(myObj) {
    let text = "";
    text += ('<br><p class=\"head2\"><b>&emsp;&emsp;&emsp;' + myObj[0] + '</b> ' + myObj[1] + '</p>\n');
    text += ('<ul>\n');
    for (let i = 2; i < myObj.length; i++) {
        text += ('<li>' + myObj[i] + '\n');
    }
    text += ('</ul><br>\n');
    return text
}
