function start(type, num) {
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
    let ans = "";
    let main = document.getElementById("main");
    main.innerHTML = "";
    if (type == 1) {
        ans += ("<h1>" + myObj.contagion[num].disease + "</h1>\n");
        ans += loop_write(myObj.contagion[num].cause);
        ans += loop_write(myObj.contagion[num].symptom);
        ans += loop_write(myObj.contagion[num].therapy);
        ans += loop_write(myObj.contagion[num].protect);
        ans += loop_write_img(myObj.contagion[num].img);
    } else {
        ans += ('<h1>' + myObj.n_contagion[num].disease + '</h1>\n');
        ans += loop_write(myObj.n_contagion[num].cause);
        ans += loop_write(myObj.n_contagion[num].symptom);
        ans += loop_write(myObj.n_contagion[num].therapy);
        ans += loop_write(myObj.n_contagion[num].protect);
        ans += loop_write_img(myObj.n_contagion[num].img);
    }
    main.innerHTML = ans;
}

function loop_write(myObj) {
    let ans = "";
    ans += ('<h4>' + myObj[0] + '</h4>\n');
    ans += ('<ul>\n');
    for (let i = 1; i < myObj.length; i++) {
        ans += ('<li>' + myObj[i] + '\n');
    }
    ans +=  ('</ul>\n');
    return ans
}

function loop_write_img(myObj) {
    let ans = "";
    for (let i = 0; i < myObj.length; i++) {
        ans += ('<img src=\"' + myObj[i] + "\" width=\"300px\" height=\"300px\">\n");
    }
    return ans;
}