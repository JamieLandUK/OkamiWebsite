//define vars
var mousePressed = false;
var lastX, lastY, ctx;
var x, y;

var linecolour = "#000000";
var line_widthval = 1
var line_width;
var texture;
var canvas;

var crayonTextureImage = new Image();
var crayon = false;

function Init() {
	crayonTextureImage.src = "./assets/crayon-texture.png";
	canvas = document.getElementById("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	ctx = canvas.getContext("2d");
	texture = document.getElementById("texture");
	line_width = document.getElementById("line_width");
	//get all elements and and assignt to global variables i.e get the check box names texture

	// mouse events for changes in input fields
    texture.addEventListener("change", (function(e) {
        if (texture.checked == false) {
			crayon = false;
           	console.log('checked is false');
        } else {
			crayon = true;
			console.log('checked is true');
        }
	}));

	line_width.addEventListener("change", (function (e) {
		console.log(line_width.value);
		line_widthval = line_width.value;
	}));

	canvas.addEventListener("mousedown", (function (e) {
		mousePressed = true;
		x = e.pageX - this.offsetLeft;
		y = e.pageY - this.offsetTop;
		console.log('x=', x, ' y=', y);
		Draw(x, y, true);
	}));
	
    //mouse move
	// call draw function
	// check if mouse pressed        
	canvas.addEventListener("mousemove", (function (e) {
		if (mousePressed) {
			x = e.pageX - this.offsetLeft;
			y = e.pageY - this.offsetTop;
			console.log('x=', x, ' y=', y);
			Draw(x, y, true);
		}
	}));
	
	//mouse mouseup
	// stop drawing with  with mousePressed = false;
	canvas.addEventListener("mouseup", (function (e) {
		mousePressed = false;
		x = e.pageX - this.offsetLeft;
		y = e.pageY - this.offsetTop;
		console.log('x=', x, ' y=', y);
		Draw(x, y, false);
	}));
	
	//mouseleave
    canvas.addEventListener("mouseleave", (function(e) {
        mousePressed = false;
    }));
}

//draw function
function Draw(x, y, isPressed) {

    if (isPressed) {
        if (crayon) {
			
		}
		else {
			ctx.beginPath();
			ctx.moveTo(lastX, lastY);
			ctx.lineTo(x, y);
			ctx.lineJoin = "round";
			ctx.lineWidth = line_widthval;
			ctx.closePath();
			ctx.stroke();
		}
	}
	//must update lastx and y to use for move to and line to
    lastX = x;
    lastY = y;
}

function clearArea() {
	// Use the identity matrix while clearing the canvas
	ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

window.onload = function()
{
	console.log('loaded');
	Init();
}