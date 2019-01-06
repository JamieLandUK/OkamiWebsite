$(document).ready(function() {
	init();
});

function init() {
	console.log("initialised");

	$(".scroller a").preventDefault();
}

function hover_d(element) {
	var i = 2;
	while (true) {
		if (i > 3) {
			i = 1;
		}
		element.setAttribute('src', '../images/downarrow-' + i + '.png');
		i++;
	}
}

function unhover_d(element) {
	element.setAttribute('src', '../images/downarrow-1.png');
}

function hover_u(element) {
	var i = 2;
	while (true) {
		if (i > 3) {
			i = 1;
		}
		element.setAttribute('src', '../images/uparrow-' + i + '.png');
		i++;
	}
}

function unhover_u(element) {
	element.setAttribute('src', '../images/uparrow-1.png');
}