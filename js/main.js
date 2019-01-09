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
	background = $('input:radio[name=backgrounds]');

	line_width.on("change", (function (e) {
		console.log(line_width.val());
		line_width_value = e.value;
	}));

	/*background.on("change", (function (e) {
		ctx2.setTransform(1, 0, 0, 1, 0, 0);
		ctx2.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		console.log("activated");
		if ($("#bgchoice1").prop("checked", true)) {
			backgroundImage.src = "./images/background1.png";
		}
		else if ($("#bgchoice2").prop("checked", true)) {
			backgroundImage.src = "./images/background2.png";
		}
		else if ($("#bgchoice3").prop("checked", true)) {
			backgroundImage.src = "./images/background3.png";
		}
		ctx2.drawImage(backgroundImage, 0, 0, 319, 179);
	}));*/

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
		mousedown: (function (e) {
			mouse_pressed = true;
			x = e.pageX - this.offsetLeft;
			y = e.pageY - this.offsetTop;
			Draw(x, y, true);
			console.log('(' + x + ', ' + y + ')');
		}),
		mousemove: (function (e) {
			if (mouse_pressed) {
				x = e.pageX - this.offsetLeft;
				y = e.pageY - this.offsetTop;
				Draw(e.pageX, e.pageY, true);
				console.log('('+x+', ' + y + ')');
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
		ctx.globalAlpha = 0.8;
		ctx.drawImage(brushImage, x, y, line_width_value, line_width_value);
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
