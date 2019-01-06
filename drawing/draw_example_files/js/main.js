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
	
	canvas.addEventListener("click", (function (e) {
		x = e.pageX - this.offsetLeft;
		y = e.pageY - this.offsetTop;
		console.log('x=', x, ' y=', y);
	}));

	canvas.addEventListener("mousedown", (function (e) {
		mousePressed = true;
		if (crayon) {
			Draw(x, y, true, true);
		}
		else {
			Draw(x, y, true, false);
		}
	}));
	
	// update the line_width stroke width from input on change
	//remember you have already got the element but need get the value.
	//line_widthval = line_width.value;
   
	
	// get line_colour value from html colour input on change
    

	
	//mouse down listener with ananymouse function to capture the event data
	// event data can be the mouse x and y to pass to your draw function
	// you also need to set the boolean to true to allow drawing with mousePressed = true;

    

    //mouse move
	// call draw function
	// check if mouse pressed        
	canvas.addEventListener("mousemove", (function (e) {
		if (mousePressed) {
			Draw(x, y, false, false);
		}
	}));
	
	//mouse mouseup
	// stop drawing with  with mousePressed = false;
	canvas.addEventListener("mouseup", (function (e) {
		mousePressed = false;
	}));
	
	//mouseleave
    canvas.addEventListener("mouseleave", (function(e) {
        mousePressed = false;
    }));
}

//draw function
function Draw(x, y, isDown, isCrayon) {

    if (isDown) {
        if (isCrayon) {

		}
		else {
			ctx.beginPath();
			ctx.moveTo(lastX, lastY);
			ctx.lineTo(x, y);
			ctx.strokeStyle = linecolour;
			ctx.lineWidth = line_widthval;
			ctx.stroke();
			ctx.closePath();
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