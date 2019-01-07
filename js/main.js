var canvas;
var mouse_pressed = false;
var prev_x, prev_y, ctx;
var x, y;

var line_width
var line_width_value = 1;
var brushImage = new Image();

function init() {
	brushImage.src = "not yet";

	canvas = $("#drawingmain canvas")[0];
	ctx = canvas.getContext("2d");
	line_width = $("#drawing_width");

	$("#line_width").bind("change", (function (e) {
		console.log(e.value);
		line_width_value = e.value;
	}));

	$("#drawingmain canvas").bind({
		mousedown: (function (e) {
			canvas.addEventListener("mousedown", (function (e) {
				mouse_pressed = true;
				Draw(x, y, true);
			}));
		}),
		mousemove: (function (e) {
			if (mouse_pressed) {
				Draw(e.pageX, e.pageY, true);
			}
		}),
		mouseup: (function (e) {
			mouse_pressed = false;
		}),
		mouseleave: (function (e) {
			mouse_pressed = false;
		})
	});
}

// x = e.pageX - this.offsetLeft;
// y = e.pageY - this.offsetTop;
// console.log('x=', x, ' y=', y);

function Draw(x, y, isDown) {
	if (isDown) {
		ctx.beginPath();
		ctx.moveTo(prev_x, prev_y);
		ctx.lineTo(x, y);
		ctx.lineJoin = "round";
		ctx.lineWidth = line_width_value;
		ctx.closePath();
		ctx.stroke();
	}
	/*
	ctx.beginPath();
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(x, y);
	ctx.lineJoin = "round";
	ctx.lineWidth = line_widthval;
	ctx.closePath();
	ctx.stroke();
	*/
	prev_x = x;
	prev_y = y;
}

function Clear() {
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
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

// $(".scroller a").preventDefault();

$(document).ready(function() {
	console.log("initialised");
	init();
});
