//Initializes variables needed for game
var wins = 0;
var losses = 0;
//Generates a random number between 19-120
var randomNumber = ((Math.floor(Math.random() *101)) +19);
var playerTotal = 0;
//Generates a random number between 1-12 for ruby, diamond, sapphire, and emerald
var rubyPoints = ((Math.floor(Math.random() *12) +1));
var diamondPoints = ((Math.floor(Math.random() *12) +1));
var sapphirePoints =((Math.floor(Math.random() *12) +1));
var emeraldPoints = ((Math.floor(Math.random() *12) +1));

window.onload = function(){

	//Assigns values to random number and gems
	document.getElementById("random-number").innerHTML = randomNumber;
	document.getElementById("img1").value = rubyPoints;
	document.getElementById("img2").value = diamondPoints;
	document.getElementById("img3").value = sapphirePoints;
	document.getElementById("img4").value = emeraldPoints;

	//A function to check whether the game has ended, win or lose
	function endGame(){
		if(playerTotal === randomNumber){
			wins++;
			randomNumber = ((Math.floor(Math.random() *101)) +19);
			playerTotal = 0;
			document.getElementById("wins").innerHTML = ("Wins: " + wins);						
			document.getElementById("random-number").innerHTML = randomNumber;			
			document.getElementById("total").innerHTML = playerTotal;
		}
		else if(playerTotal > randomNumber){
			losses++;
			randomNumber = ((Math.floor(Math.random() *101)) +19);
			playerTotal = 0;
			document.getElementById("losses").innerHTML = ("Losses: " + losses);						
			document.getElementById("random-number").innerHTML = randomNumber;			
			document.getElementById("total").innerHTML = playerTotal;
		}
	}

	/*
	Whenever a gem is clicked, the gems random value will be added to the players total. 
	Then, the function to check if the game has ended is called 
	*/
	img1.onclick = function(){
		playerTotal = (playerTotal + rubyPoints);
		document.getElementById("total").innerHTML = playerTotal;
		endGame();
	}
	img2.onclick = function(){
		playerTotal = (playerTotal + diamondPoints);
		document.getElementById("total").innerHTML = playerTotal;
		endGame();
	}
	img3.onclick = function(){
		playerTotal = (playerTotal + sapphirePoints);
		document.getElementById("total").innerHTML = playerTotal;
		endGame();
	}
	img4.onclick = function(){
		playerTotal = (playerTotal + emeraldPoints);
		document.getElementById("total").innerHTML = playerTotal;
		endGame();
	}
	
}


