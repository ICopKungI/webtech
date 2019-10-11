let requestURL = 'data.json';
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
	if (request.readyState == 4 && request.status == 200) {
		var myJSON = JSON.parse(request.responseText);
		write(myJSON);
	}
};
request.open("GET", requestURL, true);
request.send();
function write(myObj) {
	for (let i = 0; i < myObj.contagion.length; i++) {
		document.write('<h1>' + myObj.contagion[i].disease + '</h1>');
		loop_write(myObj.contagion[i].cause);
		loop_write(myObj.contagion[i].symptom);
		loop_write(myObj.contagion[i].therapy);
		loop_write(myObj.contagion[i].protect);
		loop_write_img(myObj.contagion[i].img);
	}

	for (let i = 0; i < myObj.contagion.length; i++) {
		document.write('<h1>' + myObj.n_contagion[i].disease + '</h1>');
		loop_write(myObj.n_contagion[i].cause);
		loop_write(myObj.n_contagion[i].symptom);
		loop_write(myObj.n_contagion[i].therapy);
		loop_write(myObj.n_contagion[i].protect);
		loop_write_img(myObj.n_contagion[i].img);
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