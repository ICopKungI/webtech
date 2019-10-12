function start(type, num) {
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
	if (type == 1) {
		document.write('<h1>' + myObj.contagion[num].disease + '</h1>');
		loop_write(myObj.contagion[num].cause);
		loop_write(myObj.contagion[num].symptom);
		loop_write(myObj.contagion[num].therapy);
		loop_write(myObj.contagion[num].protect);
		loop_write_img(myObj.contagion[num].img);
	}else {
		document.write('<h1>' + myObj.n_contagion[num].disease + '</h1>');
		loop_write(myObj.n_contagion[num].cause);
		loop_write(myObj.n_contagion[num].symptom);
		loop_write(myObj.n_contagion[num].therapy);
		loop_write(myObj.n_contagion[num].protect);
		loop_write_img(myObj.n_contagion[num].img);
	}
}

function loop_write(myObj) {
	document.write('<h4>' + myObj[0] + '</h4>');
	document.write('<ul>');
	for (let i = 1; i < myObj.length; i++) {
		document.write('<li>' + myObj[i]);
	}
	document.write('</ul>');
}

function loop_write_img(myObj) {
	for (let i = 0; i < myObj.length; i++) {
		document.write('<img src=\"' + myObj[i] + "\" width=\"300px\" height=\"300px\">");
	}
}