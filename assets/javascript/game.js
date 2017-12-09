var alphabet = "abcdefghijklmnopqrstuvwxyz";
var userText = document.getElementById("user-text");
var winText = document.getElementById("win-count");
var lossText = document.getElementById("loss-count");
var drawsText = document.getElementById("guesses-left");
var drawsText = document.getElementById("yourguessSofar");

document.onkeyup = function(event) {
  if (event.key ==="l" || event.key === "u" || event.key === "c" || event.key === "a" || event.key === "s"){
    userText.textContent = event.key;
    compText.textContent = choices[Math.floor(Math.random() * alphabet.length)];


    if (userText.textContent !== compText.textContent){
      console.log("hahahahooooooo");
      console.log("ahahaha");
      if (userText.textContent === "r"){
        if(compText.textContent === "p"){
          lossText.textContent++;
        }
        else if(compText.textContent ==="s"){
          winText.textContent++;
        }
      }

      else if (userText.textContent === "p"){
        if(compText.textContent === "s"){
          lossText.textContent++;
        }
        else if(compText.textContent === "r"){
          winText.textContent++;
        }
      }

      else if (userText.textContent === "s"){
        if(compText.textContent === "r"){
          lossText.textContent++;
        }
        else if(compText.textContent === "p"){
          winText.textContent++;
        }
      }
