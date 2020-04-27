var numOfSquares=6;
var colors = getRadnomColor(numOfSquares);
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var modeButtons=document.getElementsByClassName("mode");


init();

function init() {

	buttonSetup();
	squaresSetup();
	
}

function buttonSetup() {
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("modeSelected");
			modeButtons[1].classList.remove("modeSelected");
			this.classList.add("modeSelected");	
			this.textContent === "EASY" ?	numOfSquares = 3 : numOfSquares = 6;
			resetpage(numOfSquares);
		}
		);
	
	}
	reset.addEventListener("click", function() {
		resetpage(numOfSquares);
	});
	
}

function squaresSetup() {
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor=colors[i];
		squares[i].addEventListener("click",function(){
			const clickedColor = this.style.backgroundColor;
			if (clickedColor===pickedColor ) {
				var answer = document.getElementById("answer");
				changeColors(clickedColor);
				h1.style.backgroundColor=clickedColor;
				answer.textContent="CORRECT"
				reset.textContent="PLAY AGAIN?"
			}
			else{
				var answer = document.getElementById("answer");
				squares[i].style.backgroundColor= "#232323" ; 
				answer.textContent="WRONG"
			}
			
		})	
	}
	
}

function changeColors(color) {
	for (let i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor=color;
	}
}
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function getRadnomColor(num) {
	var arrColor=[];
	for (let i = 0; i < num; i++) {
		arrColor.push(getRadnomRGB());	
	}
	return arrColor;
}

function getRadnomRGB() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	
	randomRgb = "rgb(" + r + ", " + g + ", " + b + ")" ;
	return randomRgb;
}
function resetpage(numOfSquares) {
	answer.textContent="";
	reset.textContent="NEW COLORS"
	colors=getRadnomColor(numOfSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	h1.style.backgroundColor="steelblue" ; 
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}
