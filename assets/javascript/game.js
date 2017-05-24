// array of all possible letters
var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// var for array of user guesses
var guesses = []
// var for correct letter
var letter = alpha[Math.floor(Math.random()*26)]
// var for user input
var input
// number of wins
var wins = 0
// number of losses
var losses = 0

// listen for user input
document.onkeyup = function(event) {
        input = event.key;
        // check if there are still guesses left
        if(guesses.length < 9){
	        // check if input equals the randomly generated letter

	        if(input === letter){
	        	// if win add to the win counter
	        	wins++;
	        	// clear out the guesses made
	        	guesses = []
	        	document.getElementById("win").textContent = wins
		    	document.getElementById("guess_left").textContent = 9
		        document.getElementById("guess_so_far").textContent = guesses
		        // generate a new random letter
	        	letter = alpha[Math.floor(Math.random()*26)]
	        	alert("you win")
	        }
	        // conditions for input not equal to the letter and makes sure that input is not a repeat
	        else if(input === alpha[alpha.indexOf(input)] && input !== guesses[guesses.indexOf(input)]){
	        	guesses.push(input);
	        	document.getElementById("guess_left").textContent = 9 - guesses.length
	        	document.getElementById("guess_so_far").textContent = guesses
	        }
	        // makes sure that input is not a repeat
	        else if(input === guesses[guesses.indexOf(input)]){
	        	alert("you already tried that letter")
	        }
	        // makes sure that input is a letter
	        else{
	        	alert("please input a letter of the alphabet")
	        }
	    }
	    // alert the user of the loss and add to the loss counter
	    else if(guesses.length == 9){
	    	letter = alpha[Math.floor(Math.random()*26)]
	    	guesses = []
	    	losses++
	    	document.getElementById("guess_left").textContent = 9
	        document.getElementById("guess_so_far").textContent = guesses
	        document.getElementById("loss").textContent = losses
	        alert("you loss")
	    }
      }