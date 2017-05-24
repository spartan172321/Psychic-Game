// array of all possible letters
var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// var for array of user guesses
var guesses = []
// var for a random letter
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
	        	// display the number of wins
	        	document.getElementById("win").textContent = wins
	        	// reset the guesses left and the guesses so far
		    	document.getElementById("guess_left").textContent = 9
		        document.getElementById("guess_so_far").textContent = guesses
		        // generate a new random letter
	        	letter = alpha[Math.floor(Math.random()*26)]
	        	// alert the user of a win
	        	alert("you win")
	        }
	        // conditions for input not equal to the letter and makes sure that input is not a repeat
	        else if(input === alpha[alpha.indexOf(input)] && input !== guesses[guesses.indexOf(input)]){
	        	// push the letter user inputed into the array of guesses they made
	        	guesses.push(input);
	        	// update the number of guesses left
	        	document.getElementById("guess_left").textContent = 9 - guesses.length
	        	// show on the page the guesses made
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
	    	// generate a new random letter
	    	letter = alpha[Math.floor(Math.random()*26)]
	    	// clear out the previous guesses
	    	guesses = []
	    	// add to the loss counter
	    	losses++
	    	// reset the guesses left and the guesses so far
	    	document.getElementById("guess_left").textContent = 9
	        document.getElementById("guess_so_far").textContent = guesses
	        // display the number of losses
	        document.getElementById("loss").textContent = losses
	        alert("you loss")
	    }
      }