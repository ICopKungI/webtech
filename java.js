// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



//กำหนดความห่างของกล่องindexตรงกลางกับfooter และ menubar
function setdiv_index() {
    document.getElementById("index").style.height = "100%";
    var x = document.getElementById('nav');
    var style = window.getComputedStyle(x, null).getPropertyValue('height');
    var height = parseFloat(style);
    var div = document.querySelector('#index');
    div.style.top = (height + 35) + 'px';
    div.style.marginBottom = (height + 75) + 'px';
}



//กำหนดความห่างของกล่องmainตรงกลางกับfooter และ menubar
function setdiv() {
    color();
    var x = document.getElementById('nav');
    var style = window.getComputedStyle(x, null).getPropertyValue('height');
    var height = parseFloat(style);
    var div = document.querySelector('#main');
    div.style.top = (height + 35) + 'px';
    div.style.marginBottom = (height + 75) + 'px';
}



//สุ่มสี
function color() {
    x = Math.floor(Math.random() * 5) + 1;
    let div_color = document.getElementById("color");
    div_color.innerHTML = "";
    div_color.innerHTML = "<link rel=\"stylesheet\" href=\"css/color" + x + ".css\">";
}



//ดึงข้อมูลจาก json และเปลี่ยน id ตรงกล่องตรงกลางถ้ากดดูหน้าอื่นที่ไม่ใช่หน้าแรก
function start(type, num) {
    try {
        document.getElementById("main").style.height = "100%";
    } catch (err) {
        document.getElementById("index").id = "main";
        document.getElementById("main").style.height = "100%";
    }
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            var myJSON = JSON.parse(request.responseText);
            write(myJSON, type, num);
        }
    };
    request.open("GET", 'data.json', true);
    request.send();
}



//ส่วนเขียนเนื้อหาตรงกลางตามประเภทที่ได้รับค่ามา
function write(myObj, type, num) {
    let text = "";
    let main = document.getElementById("main");
    main.innerHTML = "";
    if (type == 1) {//โรคติดต่อ
        text += img(myObj.contagion[num].disease, myObj.contagion[num].img);
        text += loop_write(myObj.contagion[num].cause);
        text += loop_write(myObj.contagion[num].symptom);
        text += loop_write(myObj.contagion[num].therapy);
        text += loop_write(myObj.contagion[num].protect);
    } else if (type == 0) {//โรคไม่ติดต่อ
        text += img(myObj.n_contagion[num].disease, myObj.n_contagion[num].img);
        text += ('<p class=\"head2\">&emsp;&emsp;&emsp;' + myObj.n_contagion[num].disease[1] + '</p><br>\n');
        text += loop_write(myObj.n_contagion[num].cause);
        text += loop_write(myObj.n_contagion[num].symptom);
        text += loop_write(myObj.n_contagion[num].therapy);
        text += loop_write(myObj.n_contagion[num].protect);
    } else {//คณะผู้จัดทำหรืออ้างอิง
        if (num == "producer") {
            text += other(myObj.other.producer, 0);
        } else {
            text += other(myObj.other.references, 1);
        }
    }
    main.innerHTML = text;
    setdiv();
}



//เขียนหัวข้อเรื่องแล้วทำหน้สไลด์รูปภาพด้วย bootstrap
function img(myObj1, myObj2) {
    let text = "";
    text += "<div class=\"container\">\n";
    text += "<p class=\"head1\">" + myObj1[0] + "</p><br>\n";
    text += "<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n";

    text += "<ol class=\"carousel-indicators\">\n";
    for (let i = 0; i < myObj2.length; i++) {
        text += "<li data-target=\"#myCarousel\" data-slide-to=\"" + i + "\"";
        if (i == 0) {
            text += "class=\"active\" ";
        }
        text += "></li>\n";
    }
    text += "</ol>\n";

    text += "<div class=\"carousel-inner\">\n";
    for (let i = 0; i < myObj2.length; i++) {
        text += "<div class=\"item";
        if (i == 0) {
            text += " active";
        }
        text += "\">\n";
        text += "<img src=\"" + myObj2[i] + "\" class=\"photo\">\n</div>";
    }
    text += "</div>\n";
    text += "<a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n<span class=\"glyphicon glyphicon-chevron-left\"></span>\n<span class=\"sr-only\">Previous</span>\n</a>\n<a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n<span class=\"glyphicon glyphicon-chevron-right\"></span>\n<span class=\"sr-only\">Next</span>\n</a>\n";

    text += "</div>\n";
    text += "</div><br>\n";
    return text
}



//เขียนเนื้อหา
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



//เขียนหน้าคณะผู้จัดทำหรืออ้างอิง
function other(myObj, check) {
    let text = "";
    let main = document.getElementById("main");
    main.innerHTML = "";
    text += "<div class=\"container\">\n<p class=\"head1\">" + myObj.topic + "</p><br>\n";

    for (let i = 0; i < myObj.content.length; i++) {
        text += "<br><div class=\"row text-center\">\n";
        text += "<div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\"><center><img src=\"" + myObj.img[i] + "\" class=\"photo_other\"></center></div>\n";
        text += "<div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">";
        if (check) {
            text += "<a  href=\"https://" + myObj.content[i] + "\"  target=\"_blank\" class=\"other\">" +  myObj.content[i] + "</a></div>\n";
        }else{
            text += "<p class=\"other_p\">" +  myObj.content[i] + "</p></div>\n";
        }
        text += '</div><br>\n';
    }
    text += '</div>\n';
    return text;
    
}