/* Product requirements, Alghorithm and Pseudo code starts here */
/*
Objective: To create a "writers" focused web app for Hangman game. 

*** Product Requirements: ***

1- Have your words ready. (David Kelley, Heidi Mason, Philip Kotler, Steve Blank) 
2- Then you have to have guess those names, word by word. 
3- You can make 10 mistake, then you will lose.
4- Your attempts should be counted. And displayed as in "How many attempts you have left?"
5- If you enter the same word as a guess, you will not loose "one  trial" but you will be notified that you have done that guess already. 
6- Once you win, the picture of the person comes with a music. 
7- Your current total wins should be kept as a log and displayed. 
The screen will have the following:
 a) "You have to press any key to get started !"
 b) "Total Wins"
 c) "_ _ _ _ _ _ _ _  / Current word"
 d) "Number of guess remaining"
 e) "Letters already guessed."

*** Flow / Algorithm ***

1 SET the 4 objects (variables, ready)
2 DISPLAY the screen ready.
3 GET and START with any key pressed.
4 START from the first object. 
5 DISPLAY the word that is to be guessed with dashes. 
6 GET the key stroke.  
7 IF person guessed that single word, THEN display it in the correct position. 
8 IF the word is not correct, say it and display the guess under letters already guessed THEN {
9 Decrease the number of attempts left by one. 
}
-10 IF the person guesses all the words before the attempts remainning EQUALS "0" THEN increase win by 1. 
11 DISPLAY the person image and play the music.
12 IF the person can not guess all the words before all attempts, THEN WRITE "Crumble and cry" 
13 Move to the next word automatically. 

*** PSEUDO CODE ***

- Algorithm 1 / SET the 4 objects (variables, ready)

		** Notes for Algo 1 starts ** 
				* I have to write a "constructor function", to construct the below objects. 
				    
				Variable thinker = {
				    name: 
					surname:
					image:
					music: https://youtu.be/wZ38QQLN7uE
					embeddedVideo: <iframe width="560" height="315" src="https://www.youtube.com/embed/wZ38QQLN7uE" frameborder="0" allowfullscreen></iframe>
				}
				NEW (This is a funny operator, I could call it operator "God" cause when it declares "be" it just does) to be used by the constructer.  

		** Notes for Algo 1 ends ** 

FUNCTION myConstructorFunction(name,surname,image) {
	this.name = name;
	this.surname = surname;
	this.image = image;
	this.music: https://youtu.be/wZ38QQLN7uE;
	this.video: <iframe width="560" height="315" src="https://www.youtube.com/embed/wZ38QQLN7uE" frameborder="0" allowfullscreen></iframe>;
	this.lengthOfName = function () {
	

	}
}
*/
/* 
 ***Javscript for Algo 1 and pseodo 1 starts here (Dude, Psuedo code is cool but you gotta start real coding at some point!!! *** 
 */

$( document ).ready(function() {

    $(document).keydown(function(){
        
   
function myConstructorFunction(name, surname) {
    this.name = name;
    this.surname = surname;
    var x = document.createElement("IMG");
    x.setAttribute("src", "assets/images/"+this.name+".jpg"); 
    x.setAttribute("width", "170");
    x.setAttribute("height", "150"); 
    x.setAttribute("alt", "name");
    document.body.appendChild(x);
   }
var davidKelley = new myConstructorFunction("David", "Kelley");
var heidiMason = new myConstructorFunction("Heidi", "Mason");
var steveBlank = new myConstructorFunction("Steve", "Blank");
var philipKotler = new myConstructorFunction("Philip", "Kotler");

var davidArray = [davidKelley.name,davidKelley.surname];
var heidiArray = [heidiMason.name, heidiMason.surname];
var steveArray = [steveBlank.name, steveBlank.surname];
var philipArray = [philipKotler.name, philipKotler.surname]; 

var davidArrayString = davidKelley.name + davidKelley.surname;
var davidArrayPopped = davidArrayString.split("");

var heidiArrayString = heidiMason.name + heidiMason.surname;
var heidiArrayPopped = heidiArrayString.split("");

var steveArrayString = steveBlank.name + steveBlank.surname;
var steveArrayPopped = steveArrayString.split("");

var philipArrayString = philipKotler.name + philipKotler.surname;
var philipArrayPopped = philipArrayString.split("");


for (var i = 0; i < davidArrayString.length; i++) {
	

var x = event.keyCode;
var y = String.fromCharCode(x);
var n = davidArrayString.includes(y);
   
var howManyGuess = 0;  

if (n) { var howManyGuess = howManyGuess +1};
console.log(howManyGuess);

}

 });
});

/*
		    LOOP (counterOfMistake < 11 && youWon !==1 && youLost !==1) {
		    
			    IF (checkWord (INPUT KEY)) { 
			     	DISPLAY "good guess!"
			     	DISPLAY "the charcters that is known"
			     	knownCharacter === checkWord().numberOfKnownCharacterOfCheck + knownCharacter ;
			     	
			     	IF (knownCharacter === wordLength) {
				    youWon === 1;
				    DISPLAY You Won!!!! 
			     	
			     	}

			    }	
		    
			    ELSE {
			     	counterOfMistake === counterOfMistake ++;

			    }
		    
			    IF counterOfMistake > 9; {
				DISPLAY "You lost" 

				youLost === 1 ;
			     

			    }
		    
		     
			     ELSE {
			     DISPLAY "Bad guess"
			    
			    }
		     
		    }
*/


    












/*

<*<*<*<*<*<*<*< There is something wrong here *<*<*<>>*>*>*>*>*>*>*>
  
myConstructorFunction(David, Kelley);
myConstructorFunction(Heidi, Mason);
myConstructorFunction(Steve, Blank);
myConstructorFunction(Philip, Kotler);


var lifesLeft = 3;
var numberOfTrials = 10;

- Alghorithm2 / DISPLAY the screen ready.


*/
/* *** Product requirements, Alghorithm and Pseudo code ends here  *** */

/* *** Javascript Rock & Roll !!! *** */

