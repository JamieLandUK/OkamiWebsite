var canvas;
var mouse_pressed = false;
var prev_x, prev_y;
var ctx;
var x, y;

var line_width;
var line_width_value = 1;

function init() {

	canvas = $("#canvas");
	ctx = canvas.get(0).getContext("2d");
	line_width = $('input[type=range]')

	line_width.on("change", (function () {
		line_width_value = line_width.val();
	}));

	canvas.on({
		mousedown: function (e) {
			mouse_pressed = true;
			var mousePosition = getMousePosition(canvas.get(0), e);
			console.log('(' + mousePosition.x + ', ' + mousePosition.y + ')');
			Draw(mousePosition.x, mousePosition.y, false);
		},
		mousemove: function (e) {
			if (mouse_pressed) {
				var mousePosition = getMousePosition(canvas.get(0), e);
				console.log('(' + mousePosition.x + ', ' + mousePosition.y + ')');
				Draw(mousePosition.x, mousePosition.y, true);
			}
		},
		mouseup: function (e) {
			mouse_pressed = false;
		},
		mouseleave: function (e) {
			mouse_pressed = false;
		}
	});
}


function getMousePosition(canvas, evt) {
	var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
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
		ctx.strokeStyle = '#000000';
		ctx.closePath();
		ctx.stroke();
		
	}
	prev_x = x;
	prev_y = y;
	
	/*
	ctx.beginPath();
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(x, y);
	ctx.lineJoin = "round";
	ctx.lineWidth = line_widthval;
	ctx.closePath();
	ctx.stroke();
	*/

	/*
	ctx.globalAlpha = 0.8;
	ctx.drawImage(brushImage, x, y, line_width_value, line_width_value);
	*/
}

function Clear() {
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}




$(document).ready(function() {
	console.log("initialised");
	init();
});
