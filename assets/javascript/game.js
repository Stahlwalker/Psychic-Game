

// var wins = 0;
// var losses = 0;
// var guessesLeft = 9;
// var guessSoFar = [];
// var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 


//       document.onkeyup = function(event) {
//         var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //taking in user guess
//         var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; //computer selects random letter
//         guessesSoFar.push(userGuess); //pushing user guess to guesses so far
//         if (userGuess == computerGuess) {
//             wins++;
//             alert('Way to go! You\'ve guesesed corrrectly. You Won!');
//             guessesLeft = 9; //reseting the guesses back to 9 so that the user can play again
//             guessesSoFar.length = 0; //this removes everything from the guesses so far array, so that the guesses from the previous round don't show
//         }
//         else if (guessesLeft == 0){
//             losses++;
//             alert('You didn\'t guess the correct letter. You lost. Let\'s try again.');
//             guessesLeft = 9;
//             guessesSoFar.length = 0;
//         }
//         else if (userGuess !== computerGuess){
//             guessesLeft--; //decrementing the guesses left
//         }  
//         // Taking the tallies and displaying them in HTML    
//         var html = "<h1>The Psychic Game</h1>" + 
//         "<p>Guess what letter I'm thinking of!</p>" +
//         "<p>Total Wins: " + 
//         wins + 
//         "</p>" +
//         "<p>Total Losses: " + 
//         losses + 
//         "</p>" +
//         "<p>Guesses Left: " + 
//         guessesLeft + 
//         "</p>" +
//         "<p>Your Guesses so far: " +
//         guessesSoFar +
//         "</p>"
//         ;
//         // Placing the html into the game ID
//         document.querySelector('#game').innerHTML = html;
//         }



// var randomIndex = Math.floor(Math.random() * 25);
// alphabet[randomIndex];
    
    
    var incorrectChoices = ['b', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'o', 'p', 'q', 'r', 't', 'v', 'w', 'x', 'y', 'z'];
    var correctLetters = ["l", "u", "c", "a", "s"];
    var userText = document.getElementById("user-text");
    var compText = document.getElementById ("comp-text");
    var winText = document.getElementById("win-count");
    var lossText = document.getElementById("loss-count");
    var guessesLeft = document.getElementById("guesses-left");
    var guessesSoFar = document.getElementById("yourGuessSofar");
    document.onkeyup = function(event) {
      user.Text.textContent = event.key;

      if(userText.textContent === incorrectChoices){
        lossText.textContent++;
      }
      else if(compText.textContent ===correctLetters){
        winText.textContent++;
      }
    }
      // document.write(event.key);

        // if (event.key ==="l" || event.key === "u" || event.key === "c" || event.key === "a" || event.key === "s"){
        //   userText.textContent = event.key;
        //   compText.textContent = correctLetters[Math.floor(Math.random() * 5)];
        
        
          
        
          

      


   