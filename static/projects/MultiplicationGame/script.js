var playing=false;
var score;
var action;
var timeremaining;
var correctanswer;

// if we click on start/reset
document.getElementById("startreset").onclick=function(){
	
	//if we are playing
	if(playing == true){
		
		// if we are playing reload the page
		location.reload();
	}
	else{// if we are not playing
		
		// change mode to playing
		playing=true
		
		// set score to zero
		score=0;
		document.getElementById("scorevalue").innerHTML=score;
		
		// show countdown box
		show("timeremaining");
        
        timeremaining=60;
        document.getElementById("timeremmainingvalue").innerHTML=timeremaining;

        //hide game over box
        hide("gameover")

        // change the button to reset
		document.getElementById("startreset").innerHTML="Reset Game";

        // reduce time by 1sec in loops
        startcountdown();

        // generate new question
        generateQA();

	}
}
  
// if we click on answer box
    // if we are playing
        // correct?
            //yes 
               // increase score
               // show correct box for 1 sec
            //no
               // show try again box for line


//clicking on answer box
    
for(i=1;i<5;i++){
	document.getElementById("box"+i).onclick=function(){
	// check if we are playing
	if(playing==true) {
		if(this.innerHTML == correctanswer){//correct answer
			// score increases by 1
			score++;
			document.getElementById("scorevalue").innerHTML=score;
			// hide wrong box and show correct box
			hide("wrong");
			show("correct");
			setTimeout(function(){
				hide("correct");
			},1000);

			// generate a new question

			generateQA();
		}

		else{ // wrong answer
			hide("correct");
			show("wrong");
			setTimeout(function(){
				hide("wrong");
			},1000);

		}
	}

}  
}  
// functions

// start counter
function startcountdown(){ // time left?
	action= setInterval(function(){
		timeremaining-=1;
		document.getElementById("timeremmainingvalue").innerHTML=timeremaining;
		if(timeremaining == 0) { // no- gameover
			stopCountdown();
			document.getElementById("gameover").style.display="block";
			document.getElementById("gameover").innerHTML="<p>Game Over!</p><p> Your Score is: " + score +"</p>";
			hide("timeremaining");
			hide("correct");
			hide("wrong");
			playing=false;
			document.getElementById("startreset").innerHTML="Start Game";	
		}
	},1000)
}

// stop counter

function stopCountdown(){
	clearInterval(action);
}

// hide the content

function hide(Id){
	document.getElementById(Id).style.display="none";
}

// to show content

function show(Id){
	document.getElementById(Id).style.display="block";
}

// to generate question and multiple answers

function generateQA(){
	var x=Math.round(Math.random()*9)+1;
	var y=Math.round(Math.random()*9)+1;
	correctanswer= x*y;
	document.getElementById("question").innerHTML=x + "x" + y;
	var correctposition=Math.round(Math.random()*3)+1;
	document.getElementById("box"+correctposition).innerHTML=correctanswer; //correct answer
	
	// fill other boxes with wrong answers

	var answers = [correctanswer]; //to check for duplicity
	for(i=1;i<5;i++){
		if(i != correctposition){
			var wrongAnswer;
			do{
				wrongAnswer=(Math.round(Math.random()*9)+1)*(Math.round(Math.random()*9)+1);
			}
			while(answers.indexOf(wrongAnswer)>-1)
			document.getElementById("box"+i).innerHTML=wrongAnswer;
		    answers.push(wrongAnswer);
		}
	}
}