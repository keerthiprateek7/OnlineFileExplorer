// Algorithm

// declare variables
   //paintingerasing or not
   // painting or erasing
   //get the canvas and context
   //get the canvas conatiner
   // mouse position

//onload load saved work from local storage

//set drawing parametrs(linewidth,linejoin,lincap)

//click inside container

//move the mouse while holding mouse key

//mouse up-> we are not painting erasing anumore

//if we leave the container we are not paintingerasing anymore

//click on the reset button

//click on erase button

// change color input

//change line width using slider



// code

$(function(){
	
//paintingerasing or not
var paint=false;

//painting or erasing
var paint_erase="paint" // initially when u load page

//canvas and context
var canvas=document.getElementById("paint");
var ctx = canvas.getContext("2d");

//get canvas container
var container=$("#container");

//mouse position
var mouse= {x:0, y:0};

//onload load saved work from local storage
if(localStorage.getItem("imgCanvas") != null){
	var img = new Image();
	img.onload=function(){
		ctx.drawImage(img, 0,0);
	}
	img.src=localStorage.getItem("imgCanvas");
};

//set drawing parametrs(linewidth,linejoin,lincap)
ctx.lineWidth=3;
ctx.lineCap="round";
ctx.lineJoin="round";

//click inside container
container.mousedown(function(e){
	paint=true;
	ctx.beginPath();
	mouse.x= e.pageX-this.offsetLeft;
	mouse.y= e.pageY-this.offsetTop;
	ctx.moveTo(mouse.x,mouse.y);
});

//move the mouse while holding mouse key
container.mousemove(function(e){
	mouse.x= e.pageX-this.offsetLeft;
	mouse.y= e.pageY-this.offsetTop;
	if(paint==true){
		if(paint_erase=="paint"){
			//get color input
			ctx.strokeStyle=$("#paintcolor").val();
		}
		else{
			//white color
			ctx.strokeStyle="white";
		}
		ctx.lineTo(mouse.x,mouse.y);
		ctx.stroke();
	}
});

//mouse up-> we are not painting erasing anymore
container.mouseup(function(){
	paint=false;
});

//if we leave the container we are not paintingerasing anymore
container.mouseleave(function(){
	paint=false;
});

//click on reset button
$("#reset").click(function(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	paint_erase="paint";
	$("#erase").removeClass("eraseMode");

});

//click on save button
$("#save").click(function(){
	if(typeof(localStorage) != null){
		localStorage.setItem("imgCanvas",canvas.toDataURL());
	}
	else{
		window.alert("your browser doesn't offer local storage");
	}
});



//click on erase button
$("#erase").click(function(){
	if(paint_erase=="paint"){
		paint_erase="erase";
	}
	else{
		paint_erase="paint";
	}
	$(this).toggleClass("eraseMode");
});

//change color input
$("#paintcolor").change(function(){
	$("#circle").css("background-color", $(this).val());
});

//change line width
$("#slider").slider({
		min:3,
		max:30,
		slide: function(event,ui){
			$("#circle").height(ui.value);
			$("#circle").width(ui.value);
			ctx.lineWidth=ui.value;
		}
	});
});



//properties of canvas

/*
	var canvas= document.getElementById("paint");
	var context= canvas.getContext('2d');

	// draw a line --> // declare new path
	context.beginPath();

    // position the context point i.e start point
	context.moveTo(50,50);

	// starting point to new position
	context.lineTo(200,200);

	context.lineTo(100,500);

	//line join styles(bevel,round,miter)
	context.lineJoin="bevel";

	//set line width
	context.lineWidth=40;

	//set line color
	context.strokeStyle='#42e565';

	// set cap to line (round, butt, square)
	context.lineCap="round";

	// to make line visible
	context.stroke();
*/