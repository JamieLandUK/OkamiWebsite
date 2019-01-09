var canvas, canvas2;
var mouse_pressed = false;
var prev_x, prev_y, ctx, ctx2;
var x, y;
var background;

var line_width;
var line_width_value = 1;
var brushImage = new Image();
var backgroundImage = new Image();

function init() {
	brushImage.src = "./images/brush.png";

	canvas = $("#drawinglayer");
	canvas2 = $("#backgroundlayer");
	ctx = canvas.get(0).getContext("2d");
	ctx2 = canvas2.get(0).getContext("2d");
	line_width = $('input[type=range]');

	line_width.on("change", (function (e) {
		console.log(line_width.val());
		line_width_value = e.value;
	}));

	$("#drawingbackgrounds input:radio").click(function() {
		if ($(this).val() === '1') {
			Clear(ctx2);
			backgroundImage.src = "./images/background1.png";
			ctx2.drawImage(backgroundImage, 0, 0, 319, 179);
		}
		else
		if ($(this).val() === '2') {
			Clear(ctx2);
			backgroundImage.src = "./images/background2.png";
			ctx2.drawImage(backgroundImage, 0, 0, 319, 179);
		}
		else
		if ($(this).val() === '3') {
			backgroundImage.src = "./images/background3.png";
			ctx2.drawImage(backgroundImage, 0, 0, 319, 179);
		}
	});

	canvas.on({
		mousedown: function (e) {
			mouse_pressed = true;
			x = e.clientX - (canvas.offsetLeft - window.pageXOffset);
			y = e.clientY - (canvas.offsetTop - window.pageYOffset);
			Draw(x, y, false);
			console.log('(' + x + ', ' + y + ')');
		},
		mousemove: function (e) {
			if (mouse_pressed) {
				x = e.clientX - (canvas.offsetLeft - window.pageXOffset);
				y = e.clientY - (canvas.offsetTop - window.pageYOffset);
				Draw(e.pageX, e.pageY, true);
				console.log('('+x+', ' + y + ')');
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


// x = e.pageX - this.offsetLeft;
// y = e.pageY - this.offsetTop;
// console.log('x=', x, ' y=', y);

function Draw(x, y, isDown) {
	if (isDown) {
		ctx.beginPath();
		ctx.moveTo(lastX, lastY);
		ctx.lineTo(x, y);
		ctx.lineJoin = "round";
		ctx.lineWidth = line_widthval;
		ctx.closePath();
		ctx.stroke();
		/*ctx.globalAlpha = 0.8;
		ctx.drawImage(brushImage, x, y, line_width_value, line_width_value);*/
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

function Clear(current) {
	current.setTransform(1, 0, 0, 1, 0, 0);
	current.clearRect(0, 0, current.canvas.width, current.canvas.height);
}







/*window.onscroll = function() {
	var topmenu = $(".topmenu");
	if (topmenu.length) {
		var sticky = topmenu.offset().top;
		stickyScroll(sticky);
	}
}

function stickyScroll(sticky) {
	if (window.pageYOffset >= sticky) {
		$("#topmenu").addClass("sticky");
	}
	else {
		$("#topmenu").removeClass("sticky");
	}
}*/




$(document).ready(function() {
	console.log("initialised");
	init();
});
