$(window).scroll(function() {
    if ($(this).scrollTop() >= 150) {        // If page is scrolled more than 150px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 10);
    });
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
            color()
        }
    };
    request.open("GET", 'data.json', true);
    request.send();
}



//ส่วนเขียนเนื้อหาตรงกลางตามประเภทที่ได้รับค่ามา
function write(myObj, type, num) {
    let text = "<div class=\"container\">";
    let main = document.getElementById("main");
    main.innerHTML = "";
    if (type == 1) {//โรคติดต่อ
        text += img(myObj.contagion[num].disease, myObj.contagion[num].img);
        text += header();
        text += "<div class=\"tab-content\">\n";
        text += loop_write(myObj.contagion[num].cause, "cause");
        text += loop_write(myObj.contagion[num].symptom, "symptom");
        text += loop_write(myObj.contagion[num].therapy, "therapy");
        text += loop_write(myObj.contagion[num].protect, "protect");
        text += "</div>\n"
    } else if (type == 0) {//โรคไม่ติดต่อ
        text += img(myObj.n_contagion[num].disease, myObj.n_contagion[num].img);
        text += ('<p class=\"head2\">&emsp;&emsp;&emsp;' + myObj.n_contagion[num].disease[1] + '</p><br>\n');
        text += header();
        text += "<div class=\"tab-content\">\n";
        text += loop_write(myObj.n_contagion[num].cause, "cause");
        text += loop_write(myObj.n_contagion[num].symptom, "symptom");
        text += loop_write(myObj.n_contagion[num].therapy, "therapy");
        text += loop_write(myObj.n_contagion[num].protect, "protect");
        text += "</div>\n"
    } else {//คณะผู้จัดทำหรืออ้างอิง
        if (num == "producer") {
            text += other(myObj.other.producer, 0);
        } else {
            text += other(myObj.other.references, 1);
        }
    }
    text += "</div>"
    main.innerHTML = text;
}

//เขียนแถบหัวข้อ
function header() {
    let text = "<nav class=\"navbar navbar-expand-sm navbar-expand-md navbar-expand-lg navbar-expand-xl\">\n";
    text += "<div class=\"container\">\n<div class=\"navbar-collapse\">";
    text += "<ul class=\"nav nav-tabs navbar-nav nav-fill w-100\" role=\"tablist\" id=\"cc\">\n";
    text += "<li class=\"nav-item\">\n<a class=\"nav-link active\" data-toggle=\"tab\" href=\"#cause\">\nสาเหตุุของโรค</a>\n</li>\n";
    text += "<li class=\"nav-item\">\n<a class=\"nav-link\" data-toggle=\"tab\" href=\"#symptom\">\nอาการของโรค</a>\n</li>\n";
    text += "<li class=\"nav-item\">\n<a class=\"nav-link\" data-toggle=\"tab\" href=\"#therapy\">\nวิธีรักษาโรค</a>\n</li>\n";
    text += "<li class=\"nav-item\">\n<a class=\"nav-link\" data-toggle=\"tab\" href=\"#protect\">\nวิธีป้องกันโรค</a>\n</li>\n";
    text += "</ul>\n</div>\n</div>\n</nav>\n";
    return text;
}


//เขียนหัวข้อเรื่องแล้วทำหน้สไลด์รูปภาพด้วย bootstrap
function img(myObj1, myObj2) {
    let text = "";
    text += "<p class=\"head1\">" + myObj1[0] + "</p><br>\n";
    text += "<center><div id=\"part\" class=\"carousel slide\" data-ride=\"carousel\">\n";

    text += "<ul class=\"carousel-indicators\">\n";
    for (let i = 0; i < myObj2.length; i++) {
        text += "<li data-target=\"#part\" data-slide-to=\"" + i + "\"";
        if (i == 0) {
            text += "class=\"active\" ";
        }
        text += "></li>\n";
    }
    text += "</ul>\n";

    text += "<div class=\"carousel-inner\">\n";
    for (let i = 0; i < myObj2.length; i++) {
        text += "<div class=\"carousel-item";
        if (i == 0) {
            text += " active";
        }
        text += "\">\n";
        text += "<img src=\"" + myObj2[i] + "\" class=\"photo\">\n</div>\n";
    }
    text += "</div>\n";
    text += "<a class=\"carousel-control-prev\" href=\"#part\" data-slide=\"prev\">\n<span class=\"carousel-control-prev-icon\">\n</span>\n</a>\n";
    text += "<a class=\"carousel-control-next\" href=\"#part\" data-slide=\"next\">\n<span class=\"carousel-control-next-icon\">\n</span>\n</a>\n";

    text += "</div>\n";
    text += "</div><br></center>\n";
    return text
}

//เขียนเนื้อหา
function loop_write(myObj, id) {
    let text = ("<div id=\"" + id + "\" class=\"container tab-pane ");
    if (id == "cause") {
        text += "active\">";
    }else{
        text += "fade\">";
    }
    text += ('<br><p class=\"head2\"><b>&emsp;&emsp;&emsp;' + myObj[0] + '</b> ' + myObj[1] + '</p>\n');
    for (let i = 2; i < myObj.length; i++) {
        text += ('<p>&emsp;- ' + myObj[i] + '</p><br>\n');
    }
    text += ('</div><br>\n');
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
            text += "<a  href=\"https://" + myObj.content[i] + "\"  target=\"_blank\" class=\"other\">" + myObj.content[i] + "</a></div>\n";
        } else {
            text += "<p class=\"other_p\">" + myObj.content[i] + "</p></div>\n";
        }
        text += '</div><br>\n';
    }
    text += '</div>\n';
    return text;

}